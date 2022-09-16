import Daylist from "./components/Daylist";
import Header from "./components/Header";
import Day from "./components/Day";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EmptyPage from "./components/EmptyPage";
import CreateWord from "./components/CreateWord";

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Routes >
        <Route exact path="/" element={<Daylist />} />
        <Route path="/day/:day" element={<Day />} />
        <Route path="/create_world" element={<CreateWord />} />
        <Route exact path="*" element={<EmptyPage />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;