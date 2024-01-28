import { AppRoutes } from "../scripts/index";
import { Box, ButtonBase, Icon, Typography, useTheme } from "@mui/material";
import { memo } from "react";
import { useNavigate } from "react-router-dom";

const BottomBar = memo ((props) => {

const navigate = useNavigate();
const theme = useTheme();

const { path, setPath } = props;

return(
<Box
sx={{
position:"fixed",
width:"calc(100vw - 0rem)",
height:"3.5rem",
bottom:"0",
left:"0",
backgroundColor:"background.paper",
borderRadius:"0rem",
display:"flex",
flexDirection:"row",
zIndex:"1000",
boxShadow:`0 -10px 10px -10px ${theme.palette.custom.shadow}`,
}}
>

{AppRoutes.map((item) =>


<ButtonBase
key={item.text}
onClick={() => {
setPath(item.text);
navigate(item.path);
}}
sx={{
position:"relative",
width:`calc(100vw / ${AppRoutes.length})`,
height:"100%",
color:"custom.main",
color:item.text.toLowerCase() === path.toLowerCase()? "custom.main" : "custom.grey",
}}
>

<Icon
className={item.text.toLowerCase() === path.toLowerCase()? "material-symbols-sharp" : "material-symbols-outlined"}
sx={{    
padding:"0.5rem 1rem 0.5rem 1rem",
color:"inherit",
fontSize:"1.5rem",
backgroundColor:item.text.toLowerCase() === path.toLowerCase()? "background.default" : "none",
borderRadius:"2rem",
}}
>
{item.icon}
</Icon>

</ButtonBase>

)}

</Box>
);

})

export default BottomBar;