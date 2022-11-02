import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import React from 'react';
import Color from '../../utils/Color';
import { moderateScale, scale } from 'react-native-size-matters';
import Fonts from '../../utils/Fonts';

interface ButtonProps {
  label: string;
  containerStyle?: ViewStyle;
  labelStyle?: TextStyle;
  isSelected?: boolean;
  onPress: (event: GestureResponderEvent) => void;
}

const Button: React.FC<ButtonProps> = ({
  label,
  containerStyle,
  labelStyle,
  isSelected,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        containerStyle,
        isSelected && styles.selectedStyle,
      ]}
      onPress={onPress}>
      <Text
        style={[
          styles.labelText,
          labelStyle,
          isSelected && styles.selectedLabelStyle,
        ]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    width: scale(60),
    height: scale(60),
    borderRadius: 500,
    backgroundColor: Color.grey9B,
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelText: {
    color: Color.white,
    fontSize: moderateScale(30),
    fontFamily: Fonts.medium,
  },
  selectedStyle: {
    backgroundColor: Color.white,
  },
  selectedLabelStyle: {
    color: Color.orangeF0,
  },
});
