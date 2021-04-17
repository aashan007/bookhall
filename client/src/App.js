import {BrowserRouter,Switch,Route} from "react-router-dom";import Home from './booking/Home'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import PrivateRoute from './components/PrivateRoute'


//component

import Register from './auth/Register'
import Login from './auth/Login'
import Dashboard from './user/Dashboard'
import TopNav from './components/TopNav' 
import DashboardSeller from './user/DashboardSeller'
import NewHall from './hall/NewHall'
import EditHall from './hall/EditHall'
import ViewHall from './hall/ViewHall'

import SearchHall from "./hall/SearchHall";


function App() {
  return (
    <BrowserRouter>
    <TopNav/>
       <ToastContainer position="top-center"/>
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/login" component={Login}></Route>
      <Route exact path="/register" component={Register}></Route>
      <Route exact path="/hall/:hallId" component={ViewHall}></Route>
      <Route exact path="/search-result" component={SearchHall}></Route>
      <PrivateRoute exact path="/dashboard" component={Dashboard}/>
      <PrivateRoute exact path="/dashboard/seller" component={DashboardSeller}/>
      <PrivateRoute exact path="/halls/new" component={NewHall}/>
      <PrivateRoute exact path="/hall/edit/:hallId" component={EditHall}/>
       
      
    </Switch>
    </BrowserRouter>
     
   
  );
}

export default App;
