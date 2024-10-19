import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./Navbar/Navbar";
import Footer from './Footer/Footer'; 
import { BrowserRouter } from 'react-router-dom';
//  import CategoryDetail from './CategoryDetail/CategoryDetail';
// import MealDetail from './Mealdetail/Mealdetail';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <React.StrictMode>
   <Navbar />
  <Footer />
  {/* <MealDetail /> */}
   {/* <CategoryDetail /> */}
  </React.StrictMode></BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
