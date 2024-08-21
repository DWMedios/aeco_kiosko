import { Route, Routes } from "react-router-dom";
import Conditions from "../views/pages/conditions";
import LoadingOffline from "../views/pages/LoadingOffline";
import SplashScreen from "../views/pages/splashScreen";

// import Users from "../Pages/users";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<SplashScreen />} />
      <Route path="/LoadingOffline" element={<LoadingOffline />} />
      <Route path="/conditions" element={<Conditions />} />
    </Routes>
  );
};

export default AppRouter;
