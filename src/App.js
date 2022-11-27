// import { Router } from "react-router-dom";
import { HashRouter as Router, Outlet, Routes, Route } from "react-router-dom";
import './App.css';
import Footer from "./components/Footer";
import Nav from './components/Nav';
// import Banner from './components/Banner';
// import Row from './components/Row';
// import requests from './api/requests';
import DetailPage from "./pages/DetailPage";
import MainPage from "./pages/MainPage";
import SearchPage from "./pages/SearchPage";
import MyPage from "./pages/SearchPage";

const Layout = () => {
  return (
    <div>
      <Nav />

      <Outlet />

      <Footer></Footer>
    </div>
  );
};
function App() {
  return (
    <div className="App">
      <Router>
        <Routes> 
          <Route path="/" element={<Layout />} >
            <Route index element={<MainPage />} />
            <Route path=":movieId" element={<DetailPage />} />
            <Route path="search" element={<SearchPage />} />
            <Route path="MyPage" element={<MyPage/>} />
          </Route>
        </Routes>
      </Router>
    </div>
    
  );
}

export default App;