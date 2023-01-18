import {BrowserRouter, Routes, Route} from "react-router-dom";
import styles from "./App.module.css";

import Login from "./Components/Form/Login";
import Home from "./Components/Home";

function App() {
  return (
    <div className={styles.container}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home /> }/>
          <Route path="/login" element={<Login /> }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
