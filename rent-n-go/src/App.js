import React, {useState} from 'react';
import SignUp from './components/Registration/RegForm';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,Link
} from "react-router-dom";
import SignIn from './components/Login/Login';
import Home from './components/Home/HomePage';
import AdminHome from './components/AdminPage/AdminHome'
import DeliveryReg from './components/AdminPage/Employee/DeliveryReg';
import UserList from './components/AdminPage/Employee/UserList';
import LogOut from './components/Logout/Logout';
import ShopList from './components/AdminPage/Stockshops/StockshopsList';
import ShopReg from './components/AdminPage/Stockshops/StockshopsReg';
import CategoryList from './components/AdminPage/Stockshops/Category';
import AddCat from './components/AdminPage/Stockshops/AddCategory';
import Dashboard from './components/AdminPage/Dashboard/Dashboard';
import StockshopsHome from './components/Stockshops/StockshopsHome';
import AddProduct from './components/Stockshops/AddProduct';
import ShowListList from './components/Stockshops/ShowListList';
import UpdateProduct from './components/Stockshops/UpdateProducts';
import UpdateProfile from './components/Stockshops/UpdateProfile';
import OrderDetails from './components/Stockshops/OrderDetails';
import CustomerHome from './components/Customer/CustomerHome';
import UpdateUser from './components/Customer/UpdateUser';
import OrderDetailsUser from './components/Customer/OrderDetailsUser';
import ShowShopList from './components/Customer/ShowShopList';
import ShowList from './components/Customer/ShowList';
import ShowCart from './components/Customer/AddToCart';
import DeliveryBoyHome from './components/DeliveryBoy/DeliveryBoyHome';
import UpdateEmployee from './components/DeliveryBoy/UpdateEmployee';
import OrderDetailsEmployee from './components/DeliveryBoy/OrderDetailsEmployee';
import Footer from './components/Common/Footer';



function App() {
  const [Role, setRole]= useState();
  const UserDetails = window.localStorage.getItem("userDetails");

return (
    <Router>
    <div className="App">
    
          <Switch>
          <Route path="/" component={Home} exact></Route>
            <Route path="/home" component={Home}></Route>
            <Route path="/register" component={SignUp}></Route>
            <Route path="/admin/register" component={DeliveryReg}></Route>
            <Route path="/login"  component={SignIn}></Route>
            <Route path="/adminHome" component={AdminHome}></Route>
            <Route path ={`/admin/userList`} component={UserList}></Route>
            <Route path="/admin/shopList" component={ShopList}></Route>
            <Route path="/admin/shopRegister" component={ShopReg}></Route>
            <Route path={`/Logout`} component={LogOut}></Route>
            <Route path="/admin/categoryList"><CategoryList/></Route>
            <Route path="/admin/category" component={AddCat}/>
            <Route path="/admin" component={Dashboard} exact><Dashboard/></Route>
            <Route path="/stockshops" component={StockshopsHome} exact />
            <Route path="/addProduct" component={AddProduct} exact />
            <Route path="/showListList" component={ShowListList} exact />
            <Route path="/stockshops/updateProducts" component={UpdateProduct} exact />
            <Route path="/stockshops/updateProfile" component={UpdateProfile} exact />
            <Route path="/stockshops/orderDetails" component={OrderDetails} exact />
            <Route path="/customer" component={CustomerHome} exact />
            <Route path="/customer/updateUser" component={UpdateUser} exact />
            <Route path="/customer/orderDetailsUser" component={OrderDetailsUser} exact/>
            <Route path="/customer/showShopList" component={ShowShopList} exact/>
            <Route path="/customer/showList" component={ShowList} exact/>
            <Route path="/customer/showCart" component={ShowCart}/>
            <Route path="/deliveryboy" component={DeliveryBoyHome} exact/>
            <Route path="/deliveryboy/updateEmployee" component={UpdateEmployee} exact/>
            <Route path="/deliveryboy/orderDetailsEmployee" component={OrderDetailsEmployee} exact/>
              
  
          </Switch> 
          <Footer/>   
   </div>
   {/* <Footer/> */}
  </Router>
  )  
}

export default App