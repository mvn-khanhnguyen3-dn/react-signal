import { signal, effect } from '@preact/signals-react';

const count = signal(0);
const count2 = signal(10);

effect(() => {
    document.title = `You clicked ${count} - ${count2.peek()} times`;
    console.log("ádasdasdas");
});

const hanndleClick = () => {
    count.value++;
}

const EffectSignal = () => {

    return (
        <div style={{ textAlign: 'center' }}>
            <h2>Effect With Signal</h2>
            <p>You clicked {count} times</p>
            <button className='btn-count' onClick={() => hanndleClick()}>
                Click me
            </button>
            <button className='btn-count' onClick={() => count2.value++}>
                Click me 2
            </button>
            {count2}
        </div>
    )
}

export default EffectSignal;
