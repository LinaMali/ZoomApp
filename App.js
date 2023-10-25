// import DateTime from "./Components/DateTime";
import Home from "./Components/Home";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import  Navbar  from "./Components/Navbar";

function App(){
    return (
        <BrowserRouter>
        <Navbar/>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp/>}/>
        </Routes>
        </BrowserRouter>
    );
};
export default App;