import React from 'react';
import Container from '../../components/container';
import Button from '../../components/button';
import styles from './DashboardScreen.style';
import { Text, View } from 'react-native';
import useState from 'react-usestateref';

const DashboardScreen = () => {
  const [, setFirstNumber, firstNumber] = useState('0');
  const [, setSelectedOperater, selectedOperater] = useState('');
  const [, setLastNumber, lastNumber] = useState('');
  const [, setLastSelectedVal, lastSelectedVal] = useState('');

  /**
   * This funcation is used for handle number values
   * @param value input value can be any interger number
   */
  const onPressNumber = (value: string) => {
    let val = '';
    if (lastSelectedVal.current !== '') {
      setLastSelectedVal('');
      setLastNumber(firstNumber.current);
      val = value;
    } else if (firstNumber.current === '0') {
      val = value;
      setFirstNumber(value);
    } else {
      val = `${firstNumber.current}${value}`;
    }
    setFirstNumber(val);
  };

  /**
   * This funcation is used for clear all inputs and selected operator
   */
  const onPressClear = () => {
    setFirstNumber('0');
    setSelectedOperater('');
    setLastNumber('');
    setLastSelectedVal('');
  };

  /**
   * This funcation is used for calculate the final answer
   */
  const onPressEqual = () => {
    const current = parseFloat(firstNumber.current);
    const previous = parseFloat(lastNumber.current);
    let finalAnswer = 0;

    if (selectedOperater.current === '/') {
      finalAnswer = previous / current;
    } else if (selectedOperater.current === 'x') {
      finalAnswer = previous * current;
    } else if (selectedOperater.current === '+') {
      finalAnswer = previous + current;
    } else if (selectedOperater.current === '-') {
      finalAnswer = previous - current;
    }
    setFirstNumber(finalAnswer.toString());
    setSelectedOperater('');
    setLastNumber('');
  };

  /**
   * This funcation is used for handle all operators ( + | - | * | / )
   * @param value input value can be any operator
   */
  const onPressOperater = (value: string) => {
    if (firstNumber.current === '0') {
      setFirstNumber('0');
      setSelectedOperater(value);
      setLastSelectedVal(value);
    } else {
      setLastNumber(firstNumber.current);
      setSelectedOperater(value);
      setLastSelectedVal(value);
    }
  };

  /**
   * This funcation is used for change postive value to negative and vice versa
   */
  const onPressPosToNeg = () => {
    setFirstNumber(`${parseFloat(firstNumber.current) * -1}`);
  };

  /**
   * This funcation is used for calculate the percentage of given input
   */
  const onPressPercentage = () => {
    if (firstNumber.current) {
      setFirstNumber(`${parseFloat(firstNumber.current) * 0.01}`);
    }
  };

  /**
   * This funcation handle all type of inputs and send data to respetive funcation
   * @param type input type can be  number | operator | equal | clear | changePosToNeg | percentage
   * @param value input value can be any interger number or operator
   */
  const onPressButton = (type: string, value: string) => {
    switch (type) {
      case 'number':
        onPressNumber(value);
        break;
      case 'operator':
        onPressOperater(value);
        break;
      case 'equal':
        onPressEqual();
        break;
      case 'clear':
        onPressClear();
        break;
      case 'changePosToNeg':
        onPressPosToNeg();
        break;
      case 'percentage':
        onPressPercentage();
        break;
    }
  };

  return (
    <Container>
      <View style={styles.container}>
        {/* ----- Display user entered values and final result ----- */}
        <View style={styles.topContainer}>
          <Text style={styles.numberText}>{firstNumber.current}</Text>
        </View>

        {/* ----- 1st row of buttons ----- */}
        <View style={styles.rowContainer}>
          <Button label="C" onPress={() => onPressButton('clear', '+')} />
          <Button
            label="+/-"
            onPress={() => onPressButton('changePosToNeg', '+/-')}
          />
          <Button label="%" onPress={() => onPressButton('percentage', '%')} />
          <Button
            label="÷"
            containerStyle={styles.orangeButton}
            onPress={() => onPressButton('operator', '÷')}
            isSelected={lastSelectedVal.current === '÷'}
          />
        </View>

        {/* ----- 2nd row of buttons ----- */}
        <View style={styles.rowContainer}>
          <Button label="7" onPress={() => onPressButton('number', '7')} />
          <Button label="8" onPress={() => onPressButton('number', '8')} />
          <Button label="9" onPress={() => onPressButton('number', '9')} />
          <Button
            label="x"
            containerStyle={styles.orangeButton}
            onPress={() => onPressButton('operator', 'x')}
            isSelected={lastSelectedVal.current === 'x'}
          />
        </View>

        {/* ----- 3rd row of buttons ----- */}
        <View style={styles.rowContainer}>
          <Button label="4" onPress={() => onPressButton('number', '4')} />
          <Button label="5" onPress={() => onPressButton('number', '5')} />
          <Button label="6" onPress={() => onPressButton('number', '6')} />
          <Button
            label="-"
            containerStyle={styles.orangeButton}
            onPress={() => onPressButton('operator', '-')}
            isSelected={lastSelectedVal.current === '-'}
          />
        </View>

        {/* ----- 4th row of buttons ----- */}
        <View style={styles.rowContainer}>
          <Button label="1" onPress={() => onPressButton('number', '1')} />
          <Button label="2" onPress={() => onPressButton('number', '2')} />
          <Button label="3" onPress={() => onPressButton('number', '3')} />
          <Button
            label="+"
            containerStyle={styles.orangeButton}
            onPress={() => onPressButton('operator', '+')}
            isSelected={lastSelectedVal.current === '+'}
          />
        </View>

        {/* ----- 5th row of buttons ----- */}
        <View style={styles.rowContainer}>
          <Button
            label="0"
            containerStyle={styles.zeroButton}
            onPress={() => onPressButton('number', '0')}
          />
          <Button label="." onPress={() => onPressButton('number', '.')} />
          <Button
            label="="
            containerStyle={styles.orangeButton}
            onPress={() => onPressButton('equal', '=')}
          />
        </View>
      </View>
    </Container>
  );
};

export default DashboardScreen;
