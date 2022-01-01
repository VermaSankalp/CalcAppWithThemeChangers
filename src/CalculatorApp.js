import React, { useState, useEffect } from "react";
import InputGrid from "./Components/InputGrid/InputGrid";
import DisplayResult from "./Components/DisplayResult/DisplayResult";
import Slider from 'rc-slider';
import useHandler from "./Handler";
import 'rc-slider/assets/index.css';
import './CalculatorApp.css';

const marks = {
  1: '1',
  50: '2',
  100: '3'
};

const  CalculatorApp = () => {
  const [theme, setTheme] = useState(1);
  const [inputNum1, setInputNum1] = useState('');
  const [inputNum2, setInputNum2] = useState('');
  const [result, setResult] = useState(0);
  const [displaySecond, setDisplaySecond] = useState(false);
  const [displayResult, setDisplayResult] = useState(false);
  const { mainBackgroundStyle, handleMainStyle, calcHeaderStyle, handleCalcHeaderStyle } = useHandler();

  useEffect(() => {
    handleMainStyle(theme);
    handleCalcHeaderStyle(theme);
  }, [theme, handleCalcHeaderStyle, handleMainStyle]);

  const updateDisplaySecond = (bool) => {
    setDisplaySecond(bool);
  } 

  const numOneHandler = (strNumber) => {
    setInputNum1(strNumber);
  };

  const numTwoHandler = (strNumber) => {
    setInputNum2(strNumber);
  };

  const updateResult = (number) => {
    setResult(number);
    setInputNum1('');
    setInputNum2('');
    setDisplaySecond(false);
    setDisplayResult(true); 
  }

  const updateTheme = (value) => {
    // this.setState({
    //   ...this.state,
    //   theme: value
    // });
    setTheme(value);
  }

  // render() {
    return (
      <div className="mainCalcDiv" style={mainBackgroundStyle}>
        <div className="calcHeader" style={calcHeaderStyle}>
          <h1>calc</h1>
          <h5>THEME</h5>
          <Slider 
            className="mainSlider" 
            min={1} 
            marks={marks} 
            step={null} 
            defaultValue={1}  
            onChange={updateTheme}
          />
        </div>
        <DisplayResult 
          theme={theme}
          numOne={inputNum1}
          numTwo={inputNum2}
          displaySecond={displaySecond}
          displayResult={displayResult}
          result={result}
        />
        <InputGrid 
          numOne={inputNum1}
          changeNumOne={numOneHandler} 
          numTwo={inputNum2}
          changeNumTwo={numTwoHandler}
          updateResult={updateResult}
          displaySecond={displaySecond}
          displayResult={displayResult}
          updateDisplaySecond={updateDisplaySecond}
          updateDisplayResult={setDisplayResult}
          theme={theme}
        />
      </div>
    )
  // }
}

export default CalculatorApp;
