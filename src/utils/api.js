import superagent from 'superagent';
import { API_ROOT } from './configs';

const methods = ['get', 'post', 'put', 'patch', 'del'];

function formatUrl(path) {
  let adjustedPath = '';
  if (/^\/static\/*/.test(path)) {
    adjustedPath = path;
  } else {
    adjustedPath = path[0] !== '/' ? `${API_ROOT}/${path}` : API_ROOT + path;
  }
  return adjustedPath;
}

class _ApiClient {
  constructor(req) {
    methods.forEach(method =>
      this[method] = (path, { params, data, headers, resType } = {}) => new Promise((resolve, reject) => {
        const request = superagent[method](formatUrl(path));
        request.set('Accept', 'application/json');
        // update superagent, support 'blob' responseType, then we can use Apiclient download pictures or reports
        if (resType) {
          request.responseType(resType);
        }
        if (params) {
          request.query(params);
        }

        // custom header fields
        if (headers) {
          request.set(headers);
        }

        if (data) {
          request.send(data);
        }

        request.end((err, res) => {
          if (err) {
            if (resType === 'blob') {
              const reader = new FileReader();
              reader.onloadend = () => {
                const newRes = {
                  ...res,
                  body: JSON.parse(reader.result)
                };
                reject(newRes || err);
              };
              reader.readAsText(res.body);
            } else {
              reject(res || err);
            }
          } else if (res.body) {
            if (resType && resType === 'blob') {
              resolve(res);
            } else {
              resolve(res.body);
            }
          } else {
            resolve(res.xhr);
          }
        });
      }));
  }
}

const ApiClient = _ApiClient;

export default ApiClient;
