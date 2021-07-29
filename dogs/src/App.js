import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './components/Home';
import Login from './components/login/Login';
import { UserStorage } from './UserContext';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserStorage>
          <Header/>
          <main className="AppBody">
            <Switch>
              <Route path="/" element={<Home />} />
              <Route path="login/*" element={<Login />} />
            </Switch>
          </main>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
