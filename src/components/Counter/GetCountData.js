import React from 'react'

import { count } from './CounterWithSignal'

const GetCountData = () => {
    return (
        <>
            <h2 style={{ textAlign: 'center' }}>Get Data With Signal : {count}</h2>
        </>
    )
}

export default GetCountData;
