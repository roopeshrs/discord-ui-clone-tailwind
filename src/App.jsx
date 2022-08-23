import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Download from './pages/Download';
import Nitro from './pages/Nitro';
import Discover from './pages/Discover';
import Safety from './pages/Safety';
import Support from './pages/Support';
import Blog from './pages/Blog';
import Careers from './pages/Careers';
import Error from './pages/Error';
import Layout from './pages/Layout';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import NewLineCommunity from './pages/NewLineCommunity';
import './App.css';

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />}/>
                <Route path="/download" element={<Download />}/>
                <Route path="/nitro" element={<Nitro />}/>
                <Route path="/discover" element={<Discover />}/>
                <Route path="/safety" element={<Safety />}/>
                <Route path="/support" element={<Support />}/>
                <Route path="/blog" element={<Blog />}/>
                <Route path="/careers" element={<Careers />}/>
                <Route path="*" element={<Error />}/>
            </Route>
            <Route path="/login" element={<Login />}/>
            <Route path="/register" element={<Register />}/>
            <Route path="/dashboard" element={<Dashboard />}/>
            <Route path="/server/newLine" element={<NewLineCommunity />}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
