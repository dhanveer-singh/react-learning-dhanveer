import { useState } from "react";

const ProfileDetails = ({ userData }) => {
    const { name, age, location } = userData;
    const [count, setCount] = useState(0);
    return (
        <>
            <h1>User Details</h1>
            <div className="user-card">
                <p>Name: {name}</p>
                <p>Age: {age}</p>
                <p>Location: {location}</p>
            </div>

            <h1>Counter</h1>
            <div>{count}</div>
            <button onClick={() => setCount(prev => prev - 1)} disabled={count <= 0}>-</button>
            <button onClick={() => setCount(prev => prev + 1)}>+</button>
        </>
    )
}

export default ProfileDetails