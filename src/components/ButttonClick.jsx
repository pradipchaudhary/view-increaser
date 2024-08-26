const ButttonClick = () => {
    // hander without parameter
    const handlerButtonClick = () => {
        console.log("Button click...");
    };

    // button hander with argument
    const handlerClick3 = (value) => {
        return () => {
            console.log("Button 3 Click !", value);
        };
    };

    const bottomhander4 = (value) => {
        console.log("Button 4 click ..", value);
    };
    return (
        <div className="buttons">
            <button
                onClick={function () {
                    console.log("Button 1 click...");
                }}
            >
                Button 1
            </button>
            <br />
            <button onClick={handlerButtonClick}>Button 2</button>
            <br />
            <button onClick={handlerClick3("hello")}> Button 3 </button>
            <br />
            <button onClick={bottomhander4("button4")}>Button 4</button>
        </div>
    );
};

export default ButttonClick;
