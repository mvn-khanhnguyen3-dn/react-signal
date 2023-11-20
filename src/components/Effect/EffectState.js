import { useEffect, useState } from 'react'

const EffectState = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `You clicked ${count} times`;
    }, [count]);

    return (
        <div style={{ textAlign: 'center' }}>
            <h2>Effect With State</h2>
            <p>You clicked {count} times</p>
            <button className='btn-count' onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    )
}

export default EffectState
