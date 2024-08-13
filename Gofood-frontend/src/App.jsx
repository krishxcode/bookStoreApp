import "./App.css";
import Home from "./home/Home";
import { Route, Routes } from "react-router-dom";
import Paid from "./paid/Paid";
import Signup from "./components/Signup";
function App() {
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Paid />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
