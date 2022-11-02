import { View, SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import React from 'react';
import Color from '../../utils/Color';

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* ----- Status bar is used for change status bar background color and font color ----- */}
      <StatusBar barStyle={'light-content'} backgroundColor={Color.black} />
      <View style={styles.container}>{children}</View>
    </SafeAreaView>
  );
};

export default Container;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.black,
  },
});
