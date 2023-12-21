import { Route, Routes } from "react-router-dom"
// import UserEdit from "./pages/UserEdit"
import UserList from "./pages/UserList"
import UserEdit from "./pages/UserEdit"
// import User from "./pages/User"
// import Count from "./pages/Count"


function App() {
  return (
     <Routes>
      <Route path="/" element={<UserList />}/>
      {/* <Route path="/user/:id" element={<User />}/> */}
      <Route path="/user/:id/edit"  element={<UserEdit />}/>
    </Routes>    
  )
}

export default App
