import {Routes, Route} from "react-router-dom"
import { Home } from "../pages/Home"

export const RouteWrapper = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
  )
}
