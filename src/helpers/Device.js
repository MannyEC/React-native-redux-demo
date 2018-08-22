import { PixelRatio } from 'react-native';
import Dimensions from 'Dimensions';

export const dp2px = dp => PixelRatio.getPixelSizeForLayoutSize(dp);
export const px2dp = px => PixelRatio.roundToNearestPixel(px);

const designSize = { width: 375, height: 647 };
const windowSize = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
};

const screenSize = {
  width: dp2px(windowSize.width),
  height: dp2px(windowSize.height),
};

const ratio = PixelRatio.get();

const Device = {
  ratio,
  pixel: 1 / PixelRatio.get(),
  size: {
    window: windowSize,
    design: designSize,
    screen: screenSize,
  }
};

export default Device;
