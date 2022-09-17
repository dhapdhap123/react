import Daylist from "./components/Daylist";
import Header from "./components/Header";
import Day from "./components/Day";
import CreateWord from "./components/CreateWord";
import CreateDay from "./components/CreateDay";
import EmptyPage from "./components/EmptyPage";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";




function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Routes >
        <Route exact path="/" element={<Daylist />} />
        <Route path="/day/:day" element={<Day />} />
        <Route path="/create_word" element={<CreateWord />} />
        <Route path="/create_day" element={<CreateDay />} />
        <Route path="*" element={<EmptyPage />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;