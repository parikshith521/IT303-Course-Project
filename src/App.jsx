import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MajorAllocation } from './pages/major_allocation/MajorAllocation'
import { MinorAllocation } from './pages/minor_allocation/MinorAllocation'
import { Home } from './pages/home/Home.jsx'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/major-allocation' element={<MajorAllocation />} />
          <Route path='/minor-allocation' element={<MinorAllocation />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

