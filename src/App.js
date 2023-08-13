import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import BlockList from './components/BlockList';
import CreateBlock from './components/CreateBlock';
import UpdateBlock from './components/UpdateBlock';
import DeleteBlock from './components/DeleteBlock';
import './index.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <header className="App-header">
          <h1 style={{ color: '#007bff', marginBottom: '20px' }}>BlockChain 1.0</h1>
        </header>
        <nav>
          <ul>
            <li><Link to="/">Block List</Link></li>
            <li><Link to="/create">Create Block</Link></li>
            <li><Link to="/update">Update Block</Link></li>
            <li><Link to="/delete">Delete Block</Link></li>
          </ul>
        </nav>

        <Switch>
          <Route path="/" exact component={BlockList} />
          <Route path="/create" component={CreateBlock} />
          <Route path="/update" component={UpdateBlock} />
          <Route path="/delete" component={DeleteBlock} />
          {/* Add a default route in case no valid routes match */}
          <Route path="*" component={() => <div>404 Not Found</div>} />
        </Switch>

        <div style={{ position: 'absolute', bottom: 0, right: 0, padding: '10px', color: '#fff' }}>
          Authored by TROJAN
        </div>
      </div>
    </Router>
  );
}

export default App;
