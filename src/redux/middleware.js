import { navmiddleware } from '../navigators/AppNavigatorUtils';
import thunkMiddleware from 'redux-thunk';

const middleware = [
  navmiddleware,
  thunkMiddleware
]

export default middleware;
