import LandingPage from "./components/LandingPage"
import Details from "./components/Details"
import JoinCommunity from "./components/JoinCommunity"
import Navbar from "./components/Navbar"

import './App.css'; 

function App() {
  return (
    <>
    {/* <div id="fullpage">
      <div className="section">
        <LandingPage/>
      </div>
      <div className="section">
        <Details />        
      </div>
      <div className="section">
        <JoinCommunity />
      </div>
    </div> */}
        <Navbar/>
        <LandingPage/>
        <Details />        
        <JoinCommunity />
    </>
  );
}

export default App;
