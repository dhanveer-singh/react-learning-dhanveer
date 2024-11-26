
const ProfileDetails = ({ userData }) => {
    return (
        <>
            <h1>User Details</h1>
            {userData.map((user, index) => (
                <div key={index} className="user-card">
                    <p>Name: {user.name}</p>
                    <p>Age: {user.age}</p>
                    <p>Location: {user.location}</p>
                </div>)
            )}
        </>
    )
}

export default ProfileDetails