import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import ExpenseDashboardPage from '../components/expense_dashboard_page';
import AddExpensePage from '../components/add_expense_page';
import EditExpensePage from '../components/edit_expense_page';
import HelpPage from '../components/help_page';
import NotFoundPage from '../components/not_found_page';
import Header from '../components/header';
import LoginPage from '../components/login_page';

export const history = createHistory();
const AppRouter = () => (
  <Router history={history}>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={LoginPage} exact={true} />
        <Route path="/dashboard" component={ExpenseDashboardPage} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit/:id" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
