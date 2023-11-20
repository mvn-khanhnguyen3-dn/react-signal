import { signal, batch } from '@preact/signals-react';

const nameRandom = signal("ada");
const age = signal(18);

const handleButtonClick = () => {
    batch(() => {
        nameRandom.value = (Math.random() + 1).toString(36).substring(7);
        age.value++;
    })
}

const BatchSignal = () => {
    console.log("Re rendered batch with signal");
    return (
        <div style={{ textAlign: "center" }}>
            <h3>{nameRandom} {age}</h3>
            <button className='btn-count' onClick={handleButtonClick}>Batch</button>
        </div>
    );
};

export default BatchSignal;
