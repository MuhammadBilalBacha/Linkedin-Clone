import "./App.css";
import Login from "./Components/Login/Login";
import { Route, Routes } from "react-router-dom";
import { Fragment, useEffect, useState } from "react";
import Home from "./Components/Home/Home";
import { useSelector } from "react-redux";
import UserProfile from "./Components/Home/Profile/UserProfile";

function App() {
  const state = useSelector((state) => state);
  const [login, setLogin] = useState(false);
  useEffect(() => {
    if (state.user !== null) {
      setLogin(true);
    }
  }, [state.user]);
  return (
    <Fragment>
      <Routes>
        {state.login && <Route path="/" element={<Login />} />}
        {login && <Route path="/home" element={<Home />} />}
        {login && (
          <Route
            path="/profile/:Id"
            element={<UserProfile logout={() => setLogin(false)} />}
          />
        )}
        <Route path="*" element={<Login />} />
      </Routes>
    </Fragment>
  );
}

export default App;
