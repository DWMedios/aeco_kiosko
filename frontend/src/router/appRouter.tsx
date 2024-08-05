import { Route, Routes } from "react-router-dom";
import Loading from "../pages/loading";
import SplashScreen from "../pages/splashScreen";

// import Users from "../Pages/users";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<SplashScreen />} />
      <Route path="/loading" element={<Loading />} />
    </Routes>
  );
};

export default AppRouter;
