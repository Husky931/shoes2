import { useEffect, useState } from "react"
import { World, Model, OrbitCamera, useAnimation, Camera } from "lingo3d-react"
import models from "../models"

interface ShowRoom {
  setModel: any
  setShowInfoBox: any
  setChecked: any
}

const ShowRoom: React.FC<ShowRoom> = ({ setModel, setShowInfoBox, setChecked }): JSX.Element => {
  const anim = useAnimation({ from: -40, to: -50, repeat: Infinity, repeatType: "reverse", duration: 700 })

  //initial elements scale
  const [scale1, setScale1] = useState(0.8)
  const [scale2, setScale2] = useState(0.7)

  // initial elements Y position
  let [yy, setYY] = useState(anim)

  //  set camera effects when hover over elements
  const [camZ, setCamZ] = useState(420)
  const [camY, setCamY] = useState(-30)
  const [camX, setCamX] = useState(0)

  // Mid shoes - hover effect setup
  let [rotationYMid, setRotationYMid] = useState(0)
  const [startRotatingMid, setStartRotatingMid] = useState(false)

  // Left shoes - hover effect setup
  let [rotationYLeft, setRotationYLeft] = useState(0)
  const [startRotatingLeft, setStartRotatingLeft] = useState(false)

  // Right shoes - hover effect setup
  let [rotationYRight, setRotationYRight] = useState(180)
  const [startRotatingRight, setStartRotatingRight] = useState(false)

  const zoomEffectHover1 = () => {
    setStartRotatingMid(true)
    setScale1(1.1)
    setCamZ(200)
    setCamY(0)
    setCamX(0)
    rotateObject()
  }
  const zoomEffectHoverClear1 = () => {
    setScale1(0.8)
    setCamZ(420)
    setCamY(-30)
    setStartRotatingMid(false)
    setRotationYMid(0)
  }

  const zoomEffectHover2 = () => {
    setStartRotatingLeft(true)
    setScale2(1.1)
    setCamZ(200)
    setCamY(0)
    setCamX(-350)
    rotateObjectLeft()
  }
  const zoomEffectHoverClear2 = () => {
    setScale2(0.8)
    setCamZ(420)
    setCamY(-30)
    setCamX(0)
    setStartRotatingLeft(false)
    setRotationYLeft(0)
  }

  const zoomEffectHover3 = () => {
    setStartRotatingRight(true)
    setScale2(1.1)
    setCamZ(200)
    setCamY(0)
    setCamX(350)
    rotateObjectRight()
  }
  const zoomEffectHoverClear3 = () => {
    setScale2(0.8)
    setCamZ(420)
    setCamY(-30)
    setCamX(0)
    setStartRotatingRight(false)
    setRotationYRight(180)
  }

  const rotateObject = () => {
    if (startRotatingMid) {
      setRotationYMid((rotationYMid += 0.007))
    }
  }

  const rotateObjectLeft = () => {
    if (startRotatingLeft) {
      setRotationYLeft((rotationYLeft += 0.007))
    }
  }

  const rotateObjectRight = () => {
    if (startRotatingRight) {
      setRotationYRight((rotationYRight += 0.007))
    }
  }

  useEffect(() => {
    rotateObject()
    rotateObjectLeft()
    rotateObjectRight()
  }, [rotationYMid, startRotatingMid, rotationYLeft, startRotatingLeft, rotationYRight, startRotatingRight])

  return (
    <World>
      <Model
        src="jordan1/scene.gltf"
        y={startRotatingMid ? 5 : anim}
        scale={scale1}
        innerRotationY={0}
        rotationY={rotationYMid}
        onMouseOver={() => {
          zoomEffectHover1()
          setShowInfoBox("block")
          setChecked(true)
          setModel(models[0])
        }}
        onMouseOut={() => {
          zoomEffectHoverClear1()
        }}
      />
      <Model
        src="shoes_left/scene.gltf"
        y={startRotatingLeft ? 5 : anim}
        x={-350}
        scale={scale2}
        innerRotationY={0}
        rotationY={rotationYLeft}
        onMouseOver={() => {
          zoomEffectHover2()
          setShowInfoBox("block")
          setChecked(true)
          setModel(models[1])
        }}
        onMouseOut={() => {
          zoomEffectHoverClear2()
        }}
      />
      <Model
        src="sport_shoes/scene.gltf"
        y={startRotatingRight ? 5 : anim}
        x={350}
        scale={scale2}
        innerRotationY={0}
        rotationY={rotationYRight}
        onMouseOver={() => {
          zoomEffectHover3()
          setShowInfoBox("block")
          setChecked(true)
          setModel(models[2])
        }}
        onMouseOut={() => {
          zoomEffectHoverClear3()
        }}
      />
      <Model src="box/scene.gltf" y={-175} z={-4} scale={1.5} innerRotationY={0} onMouseOver={() => {}} onMouseOut={() => {}} />
      <Model src="box/scene.gltf" y={-175} z={-4} x={350} scale={1.5} innerRotationY={0} onMouseOver={() => {}} onMouseOut={() => {}} />
      <Model src="box/scene.gltf" y={-175} z={-4} x={-350} scale={1.5} />
      <Model src="showroom/scene.gltf" scale={5} innerRotationY={0} onMouseOver={() => {}} />
      <Camera active z={camZ} y={camY} x={camX} />
      {/* <OrbitCamera active z={camZ} y={camY} x={camX} enableDamping /> */}
    </World>
  )
}

export default ShowRoom
