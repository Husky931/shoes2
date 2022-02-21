import { useState } from "react"
import ShowRoom from "./components/ShowRoom"
import ModalBox from "./components/ModalBox"
import models from "./models"

function App() {
  const [showInfoBox, setShowInfoBox] = useState("none")
  const [checked, setChecked] = useState(false)
  const [model, setModel] = useState(models[0])

  return (
    <div>
      <ShowRoom setModel={setModel} setShowInfoBox={setShowInfoBox} setChecked={setChecked} />
      <ModalBox showInfoBox={showInfoBox} setShowInfoBox={setShowInfoBox} setChecked={setChecked} checked={checked} model={model} />
    </div>
  )
}

export default App
