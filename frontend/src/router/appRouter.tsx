import { Route, Routes } from "react-router-dom";
import Points from "../views/pages/cardPoints";
import Conditions from "../views/pages/conditions";
import Donatives from "../views/pages/donative";
import Help from "../views/pages/help/Help";
import Home from "../views/pages/home/index";
import Language from "../views/pages/language/Language";
import Loading from "../views/pages/loading";
import LoadingOffline from "../views/pages/LoadingOffline";
import PredialPoints from "../views/pages/predial";
import RecyclePoints from "../views/pages/recyclePoints";
import Rewards from "../views/pages/rewards";
import SplashScreen from "../views/pages/splashScreen";

// import Users from "../Pages/users";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<SplashScreen />} />
      <Route path="/LoadingOffline" element={<LoadingOffline />} />
      <Route path="/conditions" element={<Conditions />} />
      <Route path="/loading" element={<Loading />} />
      <Route path="/home" element={<Home />} />
      <Route path="/language" element={<Language />} />
      <Route path="/help" element={<Help />} />
      <Route path="/rewards" element={<Rewards />} />
      <Route path="/donative" element={<Donatives />} />
      <Route path="/card_points" element={<Points />} />
      <Route path="/recycle_points" element={<RecyclePoints />} />
      <Route path="/predial_points" element={<PredialPoints />} />
    </Routes>
  );
};

export default AppRouter;
