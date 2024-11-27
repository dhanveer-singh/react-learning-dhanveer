
const ProfileDetails = ({ userData }) => {
    const { name, age, location } = userData;
    return (
        <>
            <h1>User Details</h1>
            <div className="user-card">
                <p>Name: {name}</p>
                <p>Age: {age}</p>
                <p>Location: {location}</p>
            </div>
        </>
    )
}

export default ProfileDetails