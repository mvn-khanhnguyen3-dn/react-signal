import { signal } from "@preact/signals-react";

export const count = signal(0);

const CreateSignal = () => {
    return (
        <h2>
            Count: {count}
        </h2>
    );
}

export default CreateSignal;
