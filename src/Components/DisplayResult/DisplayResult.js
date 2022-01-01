import React, { useEffect } from 'react';  
import useHandler from '../../Handler';
import './DisplayResult.css';

const DisplayResult = (props) => {
    const { displayBackgroundStyle, handleDisplayStyle } = useHandler();

    useEffect(() => {
        handleDisplayStyle(props.theme);
    }, [props.theme, handleDisplayStyle]);

    return (
        <div className="displayResultDiv" style={displayBackgroundStyle}>
            {!props.displayResult && !props.displaySecond &&
                <h3>{props.numOne}</h3>
            }
            {props.displaySecond &&
                <h3>{props.numTwo}</h3>
            }
            {props.displayResult &&
                <h3>{props.result}</h3>
            }
        </div>
    )
}

export default DisplayResult;