import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import BlockListView from './views/BlockListView';
import CreateBlockView from './views/CreateBlockView';
import UpdateBlockView from './views/UpdateBlockView';
import DeleteBlockView from './views/DeleteBlockView';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
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
          <Route path="/" exact component={BlockListView} />
          <Route path="/create" component={CreateBlockView} />
          <Route path="/update" component={UpdateBlockView} />
          <Route path="/delete" component={DeleteBlockView} />
          {/* Add a default route in case no valid routes match */}
          <Route path="*" component={() => <div>404 Not Found</div>} />
        </Switch>
      </div>
      <p className="authored-by">Authored by Trojan</p>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
