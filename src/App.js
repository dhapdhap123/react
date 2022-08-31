import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "C:/Users/dhapd/OneDrive/바탕 화면/reactprac/src/routes/Detail.js";
import Hello from "./routes/Hello";

function App() {
  return <Router>
    <Routes>
      <Route path="/hello" element={<Hello />} />
      <Route path="/movie/:id" element={<Detail />} />
      <Route path="/" element={<Home />} />
    </Routes>
  </Router>
}



export default App;