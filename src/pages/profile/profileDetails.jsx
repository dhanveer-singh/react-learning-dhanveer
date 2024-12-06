function ProfileDetails({ userData }) {
  return (
    <div className='max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow-lg p-6'>
      <div className='flex flex-col items-center'>
        <img
          className='w-24 h-24 rounded-full shadow-md'
          src={userData.image}
          alt={`${userData.name}'s profile`}
        />
        <h2 className='mt-4 text-2xl font-bold text-gray-800'>
          {userData.name}
        </h2>
        <p className='text-gray-500'>{userData.location}</p>
      </div>
      <div className='mt-6 border-t border-gray-200 pt-4'>
        <p className='text-sm text-gray-500'>Age:</p>
        <p className='text-lg font-semibold text-gray-800'>{userData.age}</p>
      </div>
      <div className='mt-4'>
        <button className='w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600'>
          View Profile
        </button>
      </div>
    </div>
  );
}

export default ProfileDetails;
