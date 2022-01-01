import React, { useState, useEffect } from 'react';
import useHandler from '../../Handler';
import './InputGrid.css';

let buttonList = ['7', '8', '9', 'DEL', '4', '5', 
                '6', '+', '1', '2', '3', '-', '.',
                 '0', '/', 'x', 'RESET', '='];

// let buttonIndex = 0;
// let oldTheme = 1;
// let gridColorStyle = {
//     backgroundColor: 'hsl(223, 31%, 20%)',
// };

let buttonStyle = {
    backgroundColor: 'hsl(30, 25%, 89%)',
    boxShadow: '0px 3px hsl(28, 16%, 65%)'
};

const InputGrid = (props) => {
    const [arthmeticSign, setArthmeticSign] = useState('');
    const { gridColorStyle, handleGridStyle } = useHandler();

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         arthmeticSign: '',
    //         updateSecond: false
    //     };
    //     this.handleClick = this.handleClick.bind(this);
    //     this.arthmeticHandler = this.arthmeticHandler.bind(this);
    // }

    useEffect(() => {
        handleGridStyle(props.theme);
        // handleButtonStyle(itemRef.current, props.theme);
        // handleButtonStyle(buttonIndex, props.theme);
        // console.log("buttonIndex: " + buttonIndex);
    }, [props.theme, handleGridStyle]);

    const arthmeticHandler = (sign) => {
        switch (sign) {
            case '+':
                props.updateResult(
                    (parseFloat(props.numOne) + parseFloat(props.numTwo)).toFixed(1)
                )
                break;
            case '-':
                props.updateResult(
                    (parseFloat(props.numOne) - parseFloat(props.numTwo)).toFixed(1)
                )
                break;
            case 'x':
                props.updateResult(
                    (parseFloat(props.numOne) * parseFloat(props.numTwo)).toFixed(1)
                )
                break;
            case '/':
                props.updateResult(
                    (parseFloat(props.numOne) / parseFloat(props.numTwo)).toFixed(1)
                )
                break;
            default:
                console.error("Invalid operator")
        }
    }

    const handleClick = (index) => {
        switch (index) {
            case 7: //Add
            case 11: //Subtract
            case 14: //Divide
            case 15: //Multiply
                setArthmeticSign(buttonList[index]);
                props.updateDisplaySecond(true);
                break;

            case 3: //DELETE
                let updatedStringOne = props.numOne.substring(0, props.numOne.length - 1);
                let updatedStringTwo = props.numTwo.substring(0, props.numTwo.length - 1);
                props.displaySecond ? 
                    props.changeNumTwo(updatedStringTwo) 
                    : props.changeNumOne(updatedStringOne);
                break;

            case 16: //RESET
                props.changeNumOne('');
                props.changeNumTwo('');
                props.updateDisplaySecond(false);
                props.updateResult(0);
                break;

            case 17: //Equals
                // <Handler sign={this.state.arthmeticSign} 
                //     numOne={this.props.numOne} 
                //     numTwo={this.props.numTwo}
                //     updateResult={this.props.updateResult}
                //     />
                arthmeticHandler(arthmeticSign);
                // this.props.changeNumOne('');
                // this.props.changeNumTwo('');
                break;

            default: //Numbers
                props.updateDisplayResult(false);
                props.displaySecond ?
                    props.changeNumTwo(props.numTwo.concat(buttonList[index]))
                    : props.changeNumOne(props.numOne.concat(buttonList[index]));
        }
    }

    const handleButtonStyle = (index) => {
        switch (props.theme) {
            case 50:
                if (index === 3 || index === 16) {
                    buttonStyle = {
                        backgroundColor: 'hsl(185, 42%, 37%)',
                        boxShadow: '0px 3px hsl(185, 58%, 25%)',
                        color: 'white'
                    }
                } else if (index === 17) {
                    buttonStyle = {
                        backgroundColor: 'hsl(25, 98%, 40%)',
                        boxShadow: '0px 3px hsl(25, 99%, 27%)',
                        color: 'white'
                    }
                } else {
                    buttonStyle = {
                        backgroundColor: 'hsl(45, 7%, 89%)',
                        boxShadow: '0px 3px hsl(35, 11%, 61%)',
                        color: 'hsl(60, 10%, 19%)'
                    }
                }
                break;
            case 100:
                if (index === 3 || index === 16) {
                    buttonStyle = {
                        backgroundColor: 'hsl(281, 89%, 26%)',
                        boxShadow: '0px 3px hsl(285, 91%, 52%)',
                        color: 'white'
                    }
                } else if (index === 17) {
                    buttonStyle = {
                        backgroundColor: 'hsl(176, 100%, 44%)',
                        boxShadow: '0px 3px hsl(177, 92%, 70%)',
                        color: 'hsl(198, 20%, 13%)'
                    }
                } else {
                    buttonStyle = {
                        backgroundColor: 'hsl(268, 47%, 21%)',
                        boxShadow: '0px 3px hsl(290, 70%, 36%)',
                        color: 'hsl(52, 100%, 62%)'
                    }
                }
                break;
            default:
                if (index === 3 || index === 16) {
                    buttonStyle = {
                        backgroundColor: 'hsl(225, 21%, 49%)',
                        boxShadow: '0px 3px hsl(224, 28%, 35%)'
                    }
                } else if (index === 17) {
                    buttonStyle = {
                        backgroundColor: 'hsl(6, 63%, 50%)',
                        boxShadow: '0px 3px hsl(6, 70%, 34%)'
                    }
                } else {
                    buttonStyle = {
                        backgroundColor: 'hsl(30, 25%, 89%)',
                        boxShadow: '0px 3px hsl(28, 16%, 65%)'
                    }
                }
        }
    }

    // render() {
        // switch (this.props.theme) {
        //     case 50:
        //         gridColorStyle = {
        //             backgroundColor: 'hsl(0, 5%, 81%)',
        //         }
        //         break;
        //     case 100:
        //         gridColorStyle = {
        //             backgroundColor: 'hsl(268, 71%, 12%)',
        //         }
        //         break;
        //     default:
        //         gridColorStyle = {
        //             backgroundColor: 'hsl(223, 31%, 20%)',
        //         }
        // }

        return (
            <div className="inputGridDiv" style={gridColorStyle}>
                { buttonList.map((value, index) => {
                        handleButtonStyle(index, props.theme);
                        return (
                            <button 
                                className={'buttonStyle button'+index}
                                onClick={() => handleClick(index)}
                                style={buttonStyle}
                            >
                                {value}
                            </button>
                        )
                    })
                }
            </div>
        );
    // }
}

export default InputGrid;