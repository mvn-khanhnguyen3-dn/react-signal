import { useState } from "react";

const RenderWithStateAndInput = () => {
    const [title, setTitle] = useState("");

    const handleInputChange = (e) => {
        setTitle(e.target.value);
    };

    console.log("===Re Render With State And Input====");

    return (
        <div style={{ display: 'flex', flexDirection: "column" }}>
            <h2>Render With State And Input</h2>
            <p>Title: {title}</p>
            <input
                className="input-field"
                type="text"
                onChange={handleInputChange}
            />
        </div>
    );
};

export default RenderWithStateAndInput;
