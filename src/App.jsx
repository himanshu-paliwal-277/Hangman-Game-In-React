import { Route, Routes } from "react-router-dom"
import PlayGame from "./Pages/PlayGame/PlayGame"
import StartGame from "./Pages/StartGame/StartGame"
import Home from "./Pages/Home/Home"

function App() {

  return (
    <Routes>
        <Route path="/play" element={<PlayGame />} />
        <Route path="/start" element={<StartGame />} />
        <Route path="*" element={<Home />} />
    </Routes>
  )
}

export default App
