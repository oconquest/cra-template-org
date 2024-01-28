import { Box, useTheme } from "@mui/material";
import { memo, useEffect, useState } from "react";

const TopBarTemplate = memo((props) => {

const { shadow, bg, point = -3.5, children, path} = props;
const [prevScrollPos, setPrevScrollPos] = useState(0);
const [pos, setPos] = useState(0);
const theme = useTheme();


  useEffect(() => 
  {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if(currentScrollPos < prevScrollPos && pos !== 0){

        setPos(0);
        
      }else if(currentScrollPos > prevScrollPos && pos !== point ){

        setPos(point);
      }

      setPrevScrollPos(currentScrollPos);

    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos, path]);

return(
<>
<Box
sx={{
position:"fixed",
flexShrink:"0",
width:"100%",
height:'auto',
top:`${pos}rem`,
left:"0",
display:'flex',
flexDirection:"column",
alignItems:"center",
zIndex:"1000",
backgroundColor:bg,
transition:"0.5s",
boxShadow:shadow,
}}
>

{children}

</Box>
</>
);

})

export default TopBarTemplate;