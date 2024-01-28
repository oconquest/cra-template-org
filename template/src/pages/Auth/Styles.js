import { createTheme, responsiveFontSizes } from "@mui/material";

const theme = createTheme();
const responsive = responsiveFontSizes(theme);

const AuthStyles = {

"container":{
position:"absolute",
width:"100vw",
minHeight:"calc(100vh - 1rem)",
top:"0",
left:"0",
paddingBottom:"1rem",
display:"flex",
flexDirection:"column",
alignItems:"center",
justifyContent:"end",
color:"custom.main",
backgroundColor:"background.default",
},



"button_start_icon":{
position:"absolute",
width:"1.5rem",
height:"1.5rem",
top:"0.7rem",
left:"1rem",
},

"button":{
position:"relative",
width:"calc(100% - 2rem)",
height:"2.7rem",
margin:"2rem 0 0 1rem",
borderRadius:"2rem",
textTransform:"capitalize",
}

};

export default AuthStyles;