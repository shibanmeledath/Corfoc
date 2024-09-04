import { Routes, Route } from "react-router-dom";
import HomeLayout from "./layouts/HomeLayout";
import Main from "./components/homeComponents/Main";
import PageNotFound from "./components/PageNotFound";
import Register from "./components/Register";
import Login from "./components/Login";
import LoginLayout from "./layouts/LoginLayout";
import MainLogined from "./components/logedComponents/MainLogined";
function App() {
  return (
    <section className="bg-hero-gradient bg-cover">
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Main />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
        <Route path="registeration" element={<Register />} />
        <Route path="login" element={<Login />} />
        
        <Route path="logined" element={<LoginLayout />}> 
        <Route index element={<MainLogined/>} />
        </Route>
      </Routes>
    </section>
  );
}

export default App;
