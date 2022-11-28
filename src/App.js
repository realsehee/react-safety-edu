// import { Router } from "react-router-dom";
import { HashRouter as Router, Outlet, Routes, Route } from "react-router-dom";
import './App.css';
import Footer from "./components/Footer";
import Nav from './components/Nav';
// import Banner from './components/Banner';
// import Row from './components/Row';
// import requests from './api/requests';
import DetailPage from "./pages/DetailPage";
import SearchPage from "./pages/SearchPage";
import MyPage from "./pages/SearchPage";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import QuizPage from "./pages/QuizPage/QuizPage";

const Layout = () => {
  return (
    <div>


      <Outlet />

      
    </div>
  );
};
function App() {
  return (
    <div className="App">
      <Router>
        <Routes> 
          <Route path="/" element={<Layout />} >
            <Route index element={<LoginPage />} />
            <Route path="MainPage" element={<MainPage />} />
            <Route path=":movieId" element={<DetailPage />} />
            <Route path="search" element={<SearchPage />} />
            <Route path="MyPage" element={<MyPage/>} />
            <Route path="QuizPage" element={<QuizPage/>} />
          </Route>
        </Routes>
      </Router>
    </div>
    
  );
}

export default App;