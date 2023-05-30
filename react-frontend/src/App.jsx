import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Test1 from "./components/Test1";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/usestate" element={<Test1/>}/>
    </Routes>
  );
};
export default App;
