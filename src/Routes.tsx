import Home from "./assets/Pages/Home/Home";
import Login from "./assets/Pages/Login/Login";
import Search from "./assets/Pages/Search/Search";
import UserProfile from "./assets/Pages/UserProfile/UserProfile";



const routes = [
    {path : "/" , element : <Home/>},
    {path : "/search" , element : <Search/>},
    {path : "/user-profile" , element : <UserProfile/>},
    {path : "/login/phone" , element : <Login/>},

]


export default routes