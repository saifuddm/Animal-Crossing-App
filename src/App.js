import React from 'react';
import './App.css';
import logo from './images/animalCrossingLogo.png'
import MainMenu from './components/MainMenu'

import SubMenu from './components/SubMenu'

import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";

// Feature Components
// For now FetchData is placeholder 
import FetchData from './components/FetchData';
import FetchDIY from './components/features/FetchDIY';
import Calender from './components/features/Calender';

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/"><MainMenu mainlogo={logo}/></Route>
        <Route exact path="/Map"><SubMenu mainlogo={logo} type="Map"/></Route>
        <Route exact path="/Inventory"><SubMenu mainlogo={logo} type="Inventory"/></Route>
        {/* <Route exact path="/Calender"><SubMenu mainlogo={logo} type="Calender"/></Route> */}
        <Route exact path="/Items"><SubMenu mainlogo={logo} type="Items"/></Route>

        <Route exact path="/Map/Own Map"><FetchData mainlogo={logo} type="Map" feature="Own Map"/></Route>
        <Route exact path="/Map/Custom Map"><FetchData mainlogo={logo} type="Map" feature="Custom Map"/></Route>
        <Route exact path="/Inventory/Inventory Catalog"><FetchData mainlogo={logo} type="Inventory" feature="Inventory Catalog"/></Route>
        
        {/* <Route exact path="/Calender/AC Calender"><Calender mainlogo={logo} type="Calender" feature="Calender"/></Route> */}
        <Route exact path="/Calender"><Calender mainlogo={logo} feature="Calender"/></Route>


        <Route exact path="/Items/Tools DIY"><FetchDIY mainlogo={logo} type="Items" feature="Tools"/></Route>
        <Route exact path="/Items/Miscellaneous DIY"><FetchDIY mainlogo={logo} type="Items" feature="Miscellaneous"/></Route>
        <Route exact path="/Items/Wall mounted DIY"><FetchDIY mainlogo={logo} type="Items" feature="Wall mounted"/></Route>
        <Route exact path="/Items/Wallpaper, rugs and flooring DIY"><FetchDIY mainlogo={logo} type="Items" feature="Wallpaper, rugs and flooring"/></Route>
        <Route exact path="/Items/Equipment DIY"><FetchDIY mainlogo={logo} type="Items" feature="Equipment"/></Route>
        <Route exact path="/Items/Housewares DIY"><FetchDIY mainlogo={logo} type="Items" feature="Housewares"/></Route>
      </div>
    </Router>
  );
}

export default App;
