import { Route, Routes } from "react-router-dom";



import SplashScreen from '../views/pages/splashScreen';
import Loading from '../views/pages/loading';
import Language from '../views/pages/language/Language';
import Help from '../views/pages/help/Help';
import Home from '../views/pages/home/index';


// import Users from "../Pages/users";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<SplashScreen />} />
      <Route path="/loading" element={<Loading />} />
      <Route path="/home" element={<Home />} />
      <Route path="/language" element={<Language />} />
      <Route path="/help" element={<Help />} />
    </Routes>
  );
};

export default AppRouter;
