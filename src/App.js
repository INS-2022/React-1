import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import Songs from "./pages/Songs";
import About from "./pages/About";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="App">
      <Router>
        <SideBar />
        <Routes>
          <Route path="/" Component={Home}/>
          <Route path="/about" Component={About}/>
          <Route path="/songs" Component={Songs}/>
          
        </Routes>
        {/* <Switch>
          <Route path="/error">
            <Error />
          </Route>
          <Route path="/:brand">
            <Brand />
          </Route>
          <Route path="/">Please select brand...</Route>
        </Switch> */}
      </Router>
    </div>
  );
}

export default App;
