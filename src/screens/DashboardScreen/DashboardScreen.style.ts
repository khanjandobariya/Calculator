import { StyleSheet } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import Color from '../../utils/Color';
import Fonts from '../../utils/Fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: scale(25),
  },
  topContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: verticalScale(15),
  },
  orangeButton: {
    backgroundColor: Color.orangeF0,
  },
  zeroButton: {
    width: scale(140),
  },
  numberText: {
    color: Color.white,
    fontSize: moderateScale(60),
    marginHorizontal: scale(12),
    fontFamily: Fonts.medium,
  },
});

export default styles;
