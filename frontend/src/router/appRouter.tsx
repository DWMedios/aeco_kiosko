import { Route, Routes } from "react-router-dom";



import SplashScreen from '../views/pages/splashScreen';
import Loading from '../views/pages/loading';
import Language from '../views/pages/language/Language';
import Help from '../views/pages/help/Help';
import Home from '../views/pages/home/index';
import Rewards from '../views/pages/rewards';
import Donatives from '../views/pages/donative';
import Points from '../views/pages/cardPoints';
import RecyclePoints from '../views/pages/recyclePoints';
import PredialPoints from '../views/pages/predial';


// import Users from "../Pages/users";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<SplashScreen />} />
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
