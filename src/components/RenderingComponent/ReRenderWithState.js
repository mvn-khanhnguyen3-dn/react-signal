import { useState } from "react";

const ReRenderWithState = () => {
    const [count, setCount] = useState(0);

    const addToCount = () => {
        setCount((count) => count + 1);
    };


    return (
        <Parent count={count} addToCount={addToCount} />
    );
}

const Parent = ({ count, addToCount }) => {

    console.log("----Parent Render----");

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <ChildOne />
            <ChildTwo count={count} addToCount={addToCount} />
        </div>
    );
}

const ChildOne = () => {

    console.log("***ChildOne Render***");

    return <p>A Counter App RenderWithState</p>;
}

const ChildTwo = ({ count, addToCount }) => {

    console.log("----ChildTwo Render----");

    return (
        <div style={{ textAlign: "center" }}>
            <span>{count}</span>
            <div>
                <button className="btn-count" onClick={addToCount}>+</button>
            </div>
        </div>
    );
}
export default ReRenderWithState;




