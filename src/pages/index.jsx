import * as React from "react";

const Container = () => {
    const [ counter, setCounter ] = React.useState(0);

    const clickHandler = () => {
        setCounter(currentCounter => currentCounter + 1);
        if(counter > 0) console.log("Line 8")
    };

    React.useEffect(() => {
        if(counter > 0) console.log("Line 12")
    }, [ counter ]);

    return (
        <div>
            <h1>Clicked: { counter }</h1>
            <button onClick={clickHandler}>Click</button>
        </div>
    );
};

export default Container;