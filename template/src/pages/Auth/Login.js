import { Avatar, Box, Button } from "@mui/material";
import { memo, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleIcon } from "../../assets";
import { GoogleLogin } from "../../scripts";
import AuthStyles from "./Styles";

const Login = memo((props) => {

const { setMsgOpen, setMsgType, setMsg, setUser, setPath } = props;
const { 
button, button_start_icon, container
} = AuthStyles;

const navigate = useNavigate();

useEffect(() => {

setPath("login");

}, [setPath]);

return(
<Box
id="login-container"
sx={container}
>


<Button
variant="contained"
color="primary"
onClick={() => {
GoogleLogin(setMsgOpen, setMsgType, setUser, setMsg, navigate);
}}

startIcon={
<Avatar
src={GoogleIcon}
sx={button_start_icon}
/>
}

sx={button}
>
Log in with Google
</Button>


</Box>
);

})

export default Login;