import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import BookList from './book/bookList';
import LoginForm from './react-hook-form/login';
import MainPage from './task-manager/mainpage';
import LoginWithFormik from './formik/login';
import MaterialUiLogin from './react-hook-form/material-ui-form';

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/booklist">BookList</Link>
            </li>
            <li>
              <Link to="/taskmanager">TaskList</Link>
            </li>
            <li>
              <Link to="/react-hook-form">React Hook Form</Link>
            </li>
            <li>
              <Link to="/materialui-react-hook-form">Material Ui React Hook Form</Link>
            </li>
            <li>
              <Link to="/fomik/login">Formik</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          {/* <Route exact path="/" component={App} /> */}
          <Route path="/booklist"><BookList /></Route>
          <Route path="/taskmanager"><MainPage /></Route>
          <Route path="/react-hook-form"><LoginForm /></Route>
          <Route path="/materialui-react-hook-form"><MaterialUiLogin /></Route>
          <Route path="/fomik/login" component={LoginWithFormik} />
        </Switch>
      </div>
    </BrowserRouter>

  );
}

function Home() {
  return <h2>Home</h2>;
}

export default App;
