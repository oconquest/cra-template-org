import { Route, Routes } from "react-router-dom";
import { Home, Login } from "../pages";

const AppRouting = (props) => {
  return (
    <Routes>
      <Route path="/" element={<Home {...props} />} />
      <Route path="/login" element={<Login {...props} />} />
    </Routes>
  );
};

export default AppRouting;
