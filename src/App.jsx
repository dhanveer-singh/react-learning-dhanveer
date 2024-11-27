import './App.css'
import ProfileDetails from './components/profileDetails'

function App() {
  const userData = {
      name: "Dhanveer Singh",
      age: 30,
      location: "Mohali"
    }
  return (
    <>
      <ProfileDetails userData={userData}/>
    </>
  )
}

export default App
