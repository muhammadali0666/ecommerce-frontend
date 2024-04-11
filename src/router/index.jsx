import {Routes, Route} from "react-router-dom"
import { Home } from "../pages/Home"
import SignIn from "../pages/Login"

export const RouteWrapper = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<SignIn/>}/>
    </Routes>
  )
}
