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
      </div>
    </Router>
  );
}

export default App;
