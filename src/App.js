import {
  Routes,
  Route,
} from "react-router-dom";


import {NavBar} from "./components/NavBar";
import Subscribers from "./pages/Subscribers";
import Campaign from "./pages/Campaign";
import AddSubscriber from "./pages/AddSubscriber";
import SubscriberInfo from "./pages/UserInfo"


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
      <Route path={`/subscribers/:userId`} element={<SubscriberInfo/>}/>
        <Route path="/subscribers" element={<Subscribers/>}/>
        <Route path="/add-subscriber" element={<AddSubscriber/>}/>
        <Route path="/campaign" element={<Campaign/>}/>
      </Routes>
    </div>
  );
}

export default App;
