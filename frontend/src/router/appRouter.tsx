import { Route, Routes } from "react-router-dom";


import Points from "../views/cardPoints";
import Conditions from "../views/conditions";
import Donatives from "../views/donative";
import Example from "../views/example";
import Help from "../views/help/Help";
import Home from "../views/home/index";
import Language from "../views/language/Language";
import LoadingOffline from "../views/loadingOffline";
import PredialPoints from "../views/predial";
import RecyclePoints from "../views/recyclePoints";
import Rewards from "../views/rewards";
import SplashScreen from "../views/splashScreen";


// import Users from "../Pages/users";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<SplashScreen />} />
      <Route path="/LoadingOffline" element={<LoadingOffline />} />
      <Route path="/conditions" element={<Conditions />} />
      <Route path="/example" element={<Example />} />
      <Route path="/loadingOfline" element={<LoadingOffline />} />
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
