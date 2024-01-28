import { Box, ButtonBase, Typography, useTheme } from "@mui/material";
import { useState, useRef } from "react";

const Tabs = () => {

const [pos, setPos] = useState(0);
const theme = useTheme();
const tabber = useRef(null);

const tabs = [

{
text:"All",
icon:"music_note",
},

{
text:"Afrobeat",
icon:"music_note",
},

{
text:"Hip Hop",
icon:"headset_mic",
},

{
text:"Pop",
icon:"library_music",
},

{
text:"Electronic",
icon:"library_music",
},

];

return(
<>

<Box
id="tab-container"
sx={{
position:"relative",
width:"100%",
height:"auto",
backgroundColor:"inherit",
display:"flex",
flexDirection:"column",
overflowX:"scroll",
}}
>

<Box
id="tab-container"
sx={{
position:"relative",
width:`${(tabs.length * 25)}%`,
height:"3rem",
backgroundColor:"inherit",
display:"flex",
// overflowX:"scroll",
// scrollSnapType:"x mandatory",
}}
>

{tabs.map((tab, index) =>
<ButtonBase
key={`tab ${index}`}
id={`tab ${index}`}
onClick={() => {
setPos(index);
}}
sx={{
position:"relative",
flexShrink:"0",
width:`25vw`,
height:"inherit",
display:"flex",
alignItems:"center",
justifyContent:"center",
color:index === pos? "custom.white" : "custom.lightWhite",
columnGap:"1rem",
// scrollSnapAlign:"start",
}}
>

<Typography
sx={{
position:"relative",
width:`auto`,
height:"auto",
whiteSpace:"nowrap",
overflow:"hidden",
textOverflow:"ellipsis",
color:"inherit",
textTransform:"capitalize",
fontSize:"1rem",
fontWeight:"bold",
}}
>

{tab.text}

</Typography>

</ButtonBase>
)}

</Box>

<Box
id="highlight-container"
sx={{
position:"relative",
width:`${(tabs.length * 25)}%`,
height:"0.25rem",
backgroundColor:"inherit",
display:"flex",
overflowX:"scroll",
}}
>


<Box
id="highlight"
sx={{
position:"relative",
width:`25vw`,
height:"100%",
top:"0",
left:`${(pos * 25)}vw`,
backgroundColor:"custom.white",
transition:"left 200ms linear"
}}
>
</Box>


</Box>

</Box>

</>
);

};


export default Tabs;