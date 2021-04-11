import Home from './booking/Home'
import Register from './auth/Register'
import Login from './auth/Login'
import {BrowserRouter,Switch,Route} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/login" component={Login}></Route>
      <Route exact path="/register" component={Register}></Route>
       
      
    </Switch>
    </BrowserRouter>
     
   
  );
}

export default App;
