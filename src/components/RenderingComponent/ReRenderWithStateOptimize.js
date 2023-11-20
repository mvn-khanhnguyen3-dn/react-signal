import { useState, memo } from "react";


const ReRenderWithStateOptimize = () => {
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

const ChildOne = memo(() => {

    console.log("***ChildOne Render***");

    return <p>A Counter App RenderWithStateOptimize</p>;
})

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
export default ReRenderWithStateOptimize;




