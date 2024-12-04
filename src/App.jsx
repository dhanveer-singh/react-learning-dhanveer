import './App.css'
import AddTodo from './components/addTodo'
import Counter from './components/counter'
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
      <Counter />
      <AddTodo />
    </>
  )
}

export default App
