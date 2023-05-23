import './App.css';
import StateBasics from './components/StateBasics';
import Buttons from './components/Buttons';
import First from './components/First';
import { Route, Routes } from 'react-router-dom';
import Table1 from './components/Table1';
import Navbar from './components/Navbar';
import ApiGet from './components/ApiGet';

function App() {
  return (
    <div className="App">
      <Navbar>

      </Navbar>
     <Routes>
      <Route path='/' element={<StateBasics/>}/> 
      <Route path='/First' element={<First/>}/>
      <Route path='/Table' elemnt={<Table1/>}/>
      <Route path='/axios' element={<ApiGet/>}/>    
     </Routes>
       </div>
  );
}

export default App;