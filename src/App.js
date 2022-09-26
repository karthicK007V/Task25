
import './sb-admin-2.min.css'

import Sidebar from './Sidebar';
import Topbar from './Topbar';
import Dashboard from './Dashboard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import User from './user';
import Footer from './Footer';
import Table from './Table';
import Chart from './Chart';


import Mainpage from './page/Mainpage';
import Butt from './Butt';
import Cards from './Cards';
import UtlCo from './utl-co';
import UtiBor from './uti-bor';
import UtAni from './ut-ani';
import UtiOth from './uti-oth';
import Login from './page/login';
import Resigter from './page/resigter';
import Forget from './page/Forget';
import Page404 from './page/page404';
import Blank from './page/blank';




function App() {
  return (

    <Router>

      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Topbar />

            <div class="container-fluid">
              <Routes>
                <Route path="/" element={<Dashboard />} />




              </Routes>

              <Routes>
                <Route path='/charts' element={<Chart />} />
                <Route path='/table' element={<Table />} />
                <Route  path="/button" element={<Butt/>}/>
                <Route path='/card' element={<Cards/>}/>
                <Route path='/color' element={<UtlCo/>}/>
                <Route path='/border' element={<UtiBor/>}/>
                <Route path="/anim" element={<UtAni/>}/>
                <Route path="/other" element={<UtiOth/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path='/reg' element={<Resigter/>}/>
                <Route path='/forget' element={<Forget/>}/>
                <Route path='/404' element={<Page404/>}/>
                <Route path='/blank' element={<Blank/>}/>
                <Route path='/page' element={<Mainpage/>}/>




              </Routes>


            </div>


          </div>
         








        </div>


      </div>
      <Footer />
    </Router>

  );
}

export default App;
