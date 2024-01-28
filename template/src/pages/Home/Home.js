import { BottomBar } from "../../components/index"
import TopBar from "./TopBar";
import Body from "./Body";
import { useEffect } from "react";

const Home = (props) => {

const { setPath } = props;

useEffect(() => {

setPath("home");

}, [setPath])

return(
<>
<TopBar {...props} />
<Body {...props} />
<BottomBar {...props} />
</>
);

}

export default Home;