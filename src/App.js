import React from 'react';
import './App.css';
import Todo from './pages/Todo';
import Settings from './pages/Settings';
import Container from './components/Container';
import { Router } from "@reach/router"


function App() {
  return (
    <Container>
      <Router>
        <Todo path="/" />
        <Settings path="/settings" />
      </Router>
    </Container>
  );
}

export default App;
