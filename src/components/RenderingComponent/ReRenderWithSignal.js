import { signal } from "@preact/signals-react";

const count = signal(0);

const ReRenderWithSignal = () => {

    const addToCount = () => {
        return count.value++;
    }

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
    return <p>A Counter App RenderWithSignal</p>;
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

export default ReRenderWithSignal
