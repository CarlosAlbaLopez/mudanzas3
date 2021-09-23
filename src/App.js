import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Form from "./components/Form";
import Footer from "./components/Footer";
import { Login } from "./components/private/Login";
import Admin from "./components/private/Admin";

import { useLocalStorage } from "./hooks/useLocalStorage";
import Expenses from "./components/private/Expenses";
import Crm from "./components/private/Crm";
import Calendar from "./components/private/Calendar";
import Stats from "./components/private/Stats";
import Carousel from "./components/Carousel";

export const AuthContext = React.createContext();
const AuthProvider = (props) => {
  const [token, setToken] = useLocalStorage("accessToken", "");

  return (
    <AuthContext.Provider value={[token, setToken]}>
      {props.children}
    </AuthContext.Provider>
  );
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <div></div>
        <Switch>
          <Route exact path="/">
            <Header />
            <Carousel />
            <Main />
            <Form />
            <Footer />
          </Route>
          <Route exact path="/login">
            <Header />
            <Login />
          </Route>
          <Route exact path="/admin">
            <Header />
            <Admin />
          </Route>
          <Route exact path="/expenses">
            <Header />
            <Expenses />
          </Route>
          <Route exact path="/crm">
            <Header />
            <Crm />
          </Route>
          <Route exact path="/calendar">
            <Header />
            <Calendar />
          </Route>
          <Route exact path="/stats">
            <Header />
            <Stats />
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
