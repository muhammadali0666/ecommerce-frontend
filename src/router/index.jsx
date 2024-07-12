import {Routes, Route} from "react-router-dom"
import { Home } from "../pages/Home"
import SignIn from "../pages/Login"
import SignUp from "../pages/Register"
import { Men } from "../pages/Men"
import { Kids } from "../pages/Kids"
import { Women } from "../pages/Women"
import { Shopping } from "../pages/Shopping"
import { Saved } from "../pages/Saved"
import { Verify } from "../pages/Verify"

export const RouteWrapper = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<SignIn/>}/>
      <Route path="/register" element={<SignUp/>}/>
      <Route path="/men" element={<Men/>}/>
      <Route path="/kids" element={<Kids/>}/>
      <Route path="/women" element={<Women/>}/>
      <Route path="/shopping" element={<Shopping/>}/>
      <Route path="/saved" element={<Saved/>}/>
      <Route path="/verify" element={<Verify/>}/>
    </Routes>
  )
}
