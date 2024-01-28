import { Alert, Box, Snackbar, ThemeProvider, createTheme } from "@mui/material";
import AppRouting from "./AppRouting";
import { memo } from "react";

const AppComponent = memo((props) => {

const { primaryLight, primaryDark, secondaryLight, secondaryDark, mode, msg, msgOpen, setMsgOpen, msgType, font, lightTheme, darkTheme } = props;

const MainTheme = createTheme({

typography:{
fontFamily: font,
},

palette:{

mode,

primary:{
main:mode === "light"? primaryLight : primaryDark,
},

secondary:{
main:mode === "light"? secondaryLight : secondaryDark,
},

...((mode === "light") ? lightTheme : darkTheme),

},

components:{

"MuiDrawer":{
"styleOverrides":{
"paper":{
backgroundColor:"background.default !important",
backgroundImage:"none",
background:"none",
},
}
}
}

})


return(
<ThemeProvider
theme={MainTheme}
>
<Box
sx={{
position:"absolute",
width:"100vw",
minHeight:"100vh",
top:"0",
left:"0",
backgroundColor:"background.default",
}}
>

<AppRouting
{...props}
/>

{msgOpen? 
<Snackbar
anchorOrigin={{
vertical:"bottom",
horizontal:"left",
}}
open={msgOpen}
onClose={() => {
setMsgOpen(false);
}}
autoHideDuration={6000}
sx={{
position:"fixed",
bottom:"4rem",
fontSize:"1.3rem",
}}
>
<Alert
variant="filled"
severity={msgType}
>
{msg}
</Alert>
</Snackbar>
:
null
}

</Box>
</ThemeProvider>
);

})

export default AppComponent;