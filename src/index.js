import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

 // Contexts
 import { MenuProvider } from './contexts/menu.context';
 import { HomeworkProvider } from './contexts/homework.context';

// Pages  
import AddHomework from './pages/AddHomework';
import Login from './pages/Login';
import ViewHomework from './pages/ViewHomework';


import Header from './components/Header';
import OCMenu from './components/OffCanvasMenu';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Router>
  <MenuProvider>
  <HomeworkProvider>
    <Header />
    <OCMenu />
    <Routes>
          <Route index element={<App />} />          
          <Route path="login" element={<Login />} />
          <Route path="addhomework" element={<AddHomework />} />
          <Route path="viewhomework" element={<ViewHomework />} />          
        </Routes>
    </HomeworkProvider>
    </MenuProvider>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
