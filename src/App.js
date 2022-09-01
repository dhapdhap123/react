import Daylist from "./components/Daylist";
import Header from "./components/Header";
import Day from "./components/Day";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import EmptyPage from "./components/EmptyPage";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Daylist />}>
        </Route>
        <Route path="/day/:day" element={<Day />}>
        </Route>
        <Route path="*" element={<EmptyPage />}>
        </Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;