import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import Login from './components/Login/Login';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import ErrorPage from './pages/ErrorPage';
import HeroPages from './pages/HeroPages';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Login}/>
        <Route exact path='/login' component={Login} />
        <ProtectedRoute exact path='/home' component={HomePage} />
        <ProtectedRoute exact path='/heropage' component={HeroPages} />
        <Route path="*" component={ErrorPage} />
      </Switch>
    </div>
  );
}

export default App;
