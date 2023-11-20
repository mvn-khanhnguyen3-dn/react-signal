import { signal } from '@preact/signals-react';

export const count = signal(0);

const increase = () => {
    count.value++;
}

const decrease = () => {
    count.value--;
}

const CounterWithSignal = () => {

    return (
        <div style={{ textAlign: "center" }}>
            <h2>Counter With Signal</h2>
            <div className='counter'>
                <button className='btn-count' onClick={increase}>+</button>
                {count}
                <button className='btn-count' onClick={decrease}>-</button>
            </div>
        </div>
    );
};
export default CounterWithSignal;

