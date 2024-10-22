import { Route, Routes } from 'react-router-dom'

import CardPoints from '../views/cardPoints'
import Conditions from '../views/conditions'
import Donatives from '../views/donative'
import Example from '../views/example'
import FinalView from '../views/finalView'
import Help from '../views/help/Help'
import Home from '../views/home/index'
import Insert from '../views/insert'
import Language from '../views/language/Language'
import LoadingOffline from '../views/loadingOffline'
import OutOfService from '../views/outOfService'
import PredialPoints from '../views/predial'
import RecyclePoints from '../views/recyclePoints'
import Rewards from '../views/rewards'
import SplashScreen from '../views/splashScreen'
import TicketView from '../views/ticketView'
import VoucherView from '../views/voucher'
import Scanning from '../views/scanning'
import Accepted from '../views/accepted'
import Rejected from '../views/rejected'
import Unidentified from '../views/unidentified'
import AddBarcode from '../views/addBarcode'
import Discounts from '../views/discounts'

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
      <Route path="/discounts" element={<Discounts />} />
      <Route path="/donative" element={<Donatives />} />
      <Route path="/card_points" element={<CardPoints />} />
      <Route path="/recycle_points" element={<RecyclePoints />} />
      <Route path="/predial_points" element={<PredialPoints />} />
      <Route path="/out_of_service" element={<OutOfService />} />
      <Route path="/ticket" element={<TicketView />} />
      <Route path="/voucher" element={<VoucherView />} />
      <Route path="final_view" element={<FinalView />} />
      <Route path="/insert" element={<Insert />} />
      <Route path="/scanning" element={<Scanning />} />
      <Route path="/accepted" element={<Accepted />} />
      <Route path="/rejected" element={<Rejected />} />
      <Route path="/unidentified" element={<Unidentified />} />
      <Route path="/add_barcode" element={<AddBarcode />} />
    </Routes>
  )
}

export default AppRouter
