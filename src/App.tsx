import {BrowserRouter, Routes, Route} from "react-router-dom";
import styles from "./App.module.css";

import Login from "./Components/Form/Login";
import Register from "./Components/Form/Register";
import Home from "./Components/Home";

function App() {
  return (
    <div className={styles.container}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home /> }/>
          <Route path="/login" element={<Login /> }/>
          <Route path="/cadastro" element={<Register /> }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
