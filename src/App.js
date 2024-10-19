import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import CategoryDetail from './CategoryDetail/CategoryDetail'; 
import Mealdetail from './Mealdetail/Mealdetail'; 

function App() {
  return (
    <Router>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:categoryName" element={<CategoryDetail />} />
        <Route path="/meal/:mealId" element={<Mealdetail />} /> 
      </Routes>
    </Router>
  );
}

export default App;
