import Footer from "./components/Footer";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router , Route , Switch } from 'react-router-dom';
import Collections from "./components/Collections";
import Chart from "./components/Chart";
import Home from "./Home";
import logo from "./components/images/logo.svg";
import closeimg from "./components/images/rightBack.svg"
import { useState } from "react";

function App() {

  // const [displayNav, setdisplayNav] = useState ({right:'-100vw'})
  const [bg,setBg ]= useState("");

  return (
    <Router>
      
      <div className={ bg + " " +"App transitio  top-0 bg-secondary-white  "}>
     
        <Header data />
        <NavBar  />
        <Switch>


          <Route exact path="/"  >
            <Home />  
          </Route>
          <Route exact path="/Geez"  >
            <Home />  
          </Route>


            <Route path="/collection" >
              <Collections show ={"all"} />
            </Route>
            <Route path="/boots" >
              <Collections show ={"boots"} />
            </Route>
            <Route path="/casual" >
              <Collections show ={"casual"} />
            </Route>
            <Route path="/chart" >
              <Chart />
            </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
