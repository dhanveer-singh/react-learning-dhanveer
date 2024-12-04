import { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <div className='text-center'>
            <h1>Counter</h1>
            <div>{count}</div>
            <button onClick={() => setCount(prev => prev - 1)} disabled={count <= 0}>-</button>
            <button onClick={() => setCount(prev => prev + 1)}>+</button>
        </div>
    )
}

export default Counter