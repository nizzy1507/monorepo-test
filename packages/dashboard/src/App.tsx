import logo from './logo.svg';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';

import { Button } from '@todo-liszt/components';

function App() {
  return (
    <Switch>
      <Route path="/app/settings">
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>Settings Page</p>
            <Button>Shared Button</Button>
            <Link to="/app/lists">Go to settings</Link>
            <Link to="/app">Go to home</Link>
          </header>
        </div>
      </Route>
      <Route path="/app/lists">
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>Lists Page</p>
            <Button>Shared Button</Button>
            <Link to="/app/settings">Go to settings</Link>
            <Link to="/app">Go to home</Link>
          </header>
        </div>
      </Route>
      <Route path="/app">
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>Home page</p>
            <Button>Shared Button</Button>
            <a href="/">Go to landing page</a>
            <Link to="/app/settings">Go to settings</Link>
            <Link to="/app/lists">Go to lists</Link>
          </header>
        </div>
      </Route>
      <Route path="*">
        <h1>Not Found</h1>
      </Route>
    </Switch>
  );
}

export default App;
