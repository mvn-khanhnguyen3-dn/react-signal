import { signal } from '@preact/signals-react';

export const count = signal(0);
const handleCount = () => {
    count.value++;
}
const CounterWithSignal = () => {
    return (
        <div style={{ textAlign: "center" }} >
            <h1>Counter With Signal</h1>
            <button onClick={handleCount}>Count: {count}</button>
        </div>
    );
}
export default CounterWithSignal;

