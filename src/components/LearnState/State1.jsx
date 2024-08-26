import { useState } from "react";

const State1 = () => {
    console.log("Use state connected...");
    const [count, setCount] = useState(10);

    return (
        <div>
            <h1> Count is : {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increase Count </button>
        </div>
    );
};

export default State1;

// Component will render if state variable changes
