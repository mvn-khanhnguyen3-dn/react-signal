import { signal } from "@preact/signals-react";

const title = signal("");

const RenderWithSignalAndInput = () => {

    const handleInputChange = (e) => {
        title.value = e.target.value;
    };

    console.log("===Re Render With Signal And Input====");

    return (
        <div style={{ display: 'flex', flexDirection: "column" }}>
            <h2>Render With Signal And Input</h2>
            <p>Title: {title}</p>
            <input
                className="input-field"
                type="text"
                onChange={handleInputChange}
            />
        </div>
    );
};

export default RenderWithSignalAndInput;
