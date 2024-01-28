import { Avatar, Badge, Box, Button, Icon, IconButton, Tooltip } from "@mui/material";
import { memo } from "react";
import { TopBarTemplate } from "../../templates/index";


const TopBar = memo((props) => {

const { user } = props;


return(
<TopBarTemplate
bg="background.default"
point={-3.5}
{...props}
>

<Box
sx={{
position:"relative",
width:"100%",
height:"3.5rem",
display:"flex",
alignItems:"center",
backgroundColor:"background.default",
}}
>

<Box
sx={{
position:"absolute",
width:"auto",
height:"height",
right:"1rem",
display:"flex",
}}
>

<Avatar
src={user?.photo? user.photo : ""}
sx={{
position:"relative",
width:"2.4rem",
height:"2.4rem",
}}
/>

</Box>

</Box>

</TopBarTemplate>
);

})

export default TopBar;