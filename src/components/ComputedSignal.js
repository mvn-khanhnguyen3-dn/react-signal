import { signal, computed } from '@preact/signals-react';

const count = signal(0);
const double = count.value * 2;
// const double = computed(() => count.value * 2);

const ComputedSignal = () => {
    return (
        <div style={{ textAlign: "center" }}>
            <h2>Double: {double}</h2>
            <button className='btn-count' onClick={() => count.value++}>Count: {count}</button>
        </div>
    )
}

export default ComputedSignal;
