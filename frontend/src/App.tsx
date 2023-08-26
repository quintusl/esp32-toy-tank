import * as React from 'react';
import {
  Link,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import { tankApi } from './api/tankApi'
import './App.css';
import { MovementControl } from './components/MovementControl';
import { CodeBlock } from './components/CodeBlock';


function Layout() {
  return (
    <div>
       <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/code">Code</Link>
            </li>
          </ul>
        </nav>
      <Outlet />
    </div>
  );
}

function App() {
  return (
      <div className="App">
        <ApiProvider api={tankApi}>
          <header className="App-header">
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<MovementControl />} />
                <Route path="code" element={<CodeBlock />} />
              </Route>
            </Routes>
            {/* <MovementControl /> */}
          </header>
        </ApiProvider>
      </div>
  );
}

export default App;
