import { useState } from 'react';

const Handler = () => {
    const [gridColorStyle, setGridColorStyle] = useState({
        backgroundColor: 'hsl(223, 31%, 20%)'
    });

    const [mainBackgroundStyle, setMainBackgroundStyle] = useState({
        backgroundColor: 'hsl(222, 26%, 31%)'
    });

    const [displayBackgroundStyle, setDisplayBackgroundStyle] = useState({
        backgroundColor: 'hsl(223, 31%, 20%)'
    });

    const [calcHeaderStyle, setCalcHeaderStyle] = useState({
        color: 'white'
    })

    const handleGridStyle = (theme) => {
        switch (theme) {
            case 50:
                setGridColorStyle({
                    backgroundColor: 'hsl(0, 5%, 81%)',
                })
                break;
            case 100:
                setGridColorStyle({
                    backgroundColor: 'hsl(268, 71%, 12%)',
                })
                break;
            default:
                setGridColorStyle({
                    backgroundColor: 'hsl(223, 31%, 20%)',
                })
        }
    };

    const handleMainStyle = (theme) => {
        switch (theme) {
            case 50:
                setMainBackgroundStyle({
                    backgroundColor: 'hsl(0, 0%, 90%)'
                })
                break;
            case 100:
                setMainBackgroundStyle({
                    backgroundColor: 'hsl(268, 75%, 9%)'
                })
                break;
            default:
                setMainBackgroundStyle({
                    backgroundColor: 'hsl(222, 26%, 31%)'
                })
        }
    }

    const handleDisplayStyle = (theme) => {
        switch (theme) {
            case 50:
                setDisplayBackgroundStyle({
                    backgroundColor: 'hsl(0, 5%, 81%)',
                    color: 'black'
                })
                break;
            case 100:
                setDisplayBackgroundStyle({
                    backgroundColor: 'hsl(268, 71%, 12%)',
                    color: 'hsl(52, 100%, 62%)'
                })
                break;
            default:
                setDisplayBackgroundStyle({
                    backgroundColor: 'hsl(223, 31%, 20%)',
                    color: 'white'
                })
        }
    }

    const handleCalcHeaderStyle = (theme) => {
        switch (theme) {
            case 50:
                setCalcHeaderStyle({
                    color: 'hsl(60, 10%, 19%)'
                })
                break;
            case 100:
                setCalcHeaderStyle({
                    color: 'hsl(52, 100%, 62%)'
                })
                break;
            default:
                setCalcHeaderStyle({
                    color: 'white'
                })
        }
    }

    return {
        //For InputGrid
        gridColorStyle,
        handleGridStyle,
        //For CalculatorApp
        mainBackgroundStyle,
        handleMainStyle,
        calcHeaderStyle,
        handleCalcHeaderStyle,
        //For DisplayResult
        displayBackgroundStyle,
        handleDisplayStyle
    };
};

export default Handler;