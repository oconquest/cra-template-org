import { Children, cloneElement, memo } from 'react';
import { Box, SwipeableDrawer } from '@mui/material';

const Drawer = memo ((props) => {

const { drawer, handleState } = props;

  return (
    <SwipeableDrawer
      variant="temporary"
      anchor="bottom"
      disableSwipeToOpen={true}
      open={drawer}
      onClose={() => {
        handleState({drawer:false});
      }}
      onOpen={() => {
        handleState({drawer:true});
      }}
      sx={{
        position:"relative",
        width:"100vw",
        height:"100vh",
        backgroundColor:"none",
      }}
    >
      <Box sx={{
          position:"relative",
          width:"100vw",
          minHeight:"0",
          maxHeight:"100vh",
          backgroundColor:"background.default",
          display:"flex",
          flexDirection:"column",
          overflowY:"auto",
          borderRadius:"1rem 1rem 0 0",
      }}>
        <Box
        sx={{
          position:"relative",
          margin:"1rem 0 0 0",
          alignSelf:"center",
          width:"3rem",
          height:"0.23rem",
          borderRadius:"2rem",
          backgroundColor:"custom.grey"
        }}
        />

      <Box
        sx={{
          position:"relative",
          width:"100vw",
          maxHeight:"calc(100% - 2.23rem)",
        }}
        >
            {Children.map(props.children, (child) =>
          cloneElement(child, { ...props })
        )}

        </Box>

      </Box>
    </SwipeableDrawer>
  );
});

export default Drawer;
