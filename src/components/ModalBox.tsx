import { Typography, Card, CardActions, CardContent, CardMedia, Button, Fade } from "@mui/material"
import CancelIcon from "@mui/icons-material/Cancel"
import { JSXElementConstructor } from "react"

interface ModalBox {
  showInfoBox: any
  setShowInfoBox: any
  setChecked: any
  checked: any
  model: any
}

const ModalBox: React.FC<ModalBox> = ({ showInfoBox, setShowInfoBox, setChecked, checked, model }): JSX.Element => {
  return (
    <Fade in={checked}>
      <Card sx={{ maxWidth: 345, position: "absolute", top: "0%", right: "0%", display: showInfoBox, zIndex: 9999 }}>
        <CancelIcon
          sx={{ position: "absolute", right: "5px", top: "3px", cursor: "pointer" }}
          fontSize="large"
          onClick={() => {
            setShowInfoBox("none")
            setChecked(false)
          }}
        />
        <CardMedia component="img" height="140" image={model.image} alt="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{ margin: 0 }}>
            {model.name}
          </Typography>
          <Typography gutterBottom variant="h5" component="div" sx={{ margin: 0, marginBottom: "5px", color: "blue" }}>
            {model.price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {model.desc}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" variant="contained" sx={{ fontWeight: "bold" }}>
            Buy
          </Button>
          <Button size="small" sx={{ fontWeight: "bold" }}>
            Learn More
          </Button>
        </CardActions>
      </Card>
    </Fade>
  )
}

export default ModalBox
