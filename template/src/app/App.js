import { useEffect, useState } from "react";
import AppComponent from "./AppComponent";
import { useLocation, useNavigate } from "react-router-dom";
import { Navy, Midnight, Snow } from "../scripts/Themes";
import HandleAuth from "./HandleAuth";
import HandleBackButton from "./HandleBackButton";
import HandleScroll from "./HandleScroll";
import HandleTheme from "./HandleTheme";

const App = () => {

const navigate = useNavigate();
const location = useLocation();

const [ user, setUser ] = useState(null);
const [ mode, setMode ] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches? "dark" : "light");
const [ path, setPath ] = useState("home");
const [ sidebar, setSidebar ] = useState(false);
const [ drawer, setDrawer ] = useState(false);
const [ msg, setMsg ] = useState("This is a sample message");
const [ msgOpen, setMsgOpen ] = useState(false);
const [ msgType, setMsgType ] = useState("info");
const [ primaryLight, setPrimaryLight ] = useState("#006778");
const [ secondaryLight, setSecondaryLight ] = useState("#E5EFC1");
const [ primaryDark, setPrimaryDark ] = useState("#A5C9CA");
const [ secondaryDark, setSecondaryDark ] = useState("#000");
const [ lightTheme, setLightTheme ] = useState(Snow);
const [ darkTheme, setDarkTheme ] = useState(Midnight);
const [ font, setFont ] = useState("'Roboto', san-serif");
const [ info, setInfo ] = useState(false);
const [ drawerView, setDrawerView ] = useState("Post Action");

const states = {
...{
user, setUser, mode, setMode, path, setPath, sidebar, setSidebar, drawer, setDrawer,
msg, setMsg, msgOpen, setMsgOpen, msgType, setMsgType, primaryLight, setPrimaryLight,
secondaryLight, setSecondaryLight, primaryDark, setPrimaryDark, secondaryDark, setSecondaryDark,
lightTheme, setLightTheme, darkTheme, setDarkTheme, font, setFont, info, setInfo, drawerView, setDrawerView 
}
}

HandleAuth(useEffect, navigate, user, setUser);
HandleBackButton(useEffect, navigate, location, drawer, setDrawer);
HandleScroll(useEffect, location);
HandleTheme(useEffect, setMode);
    

return(
<AppComponent
{...states}
/>
);

}

export default App;