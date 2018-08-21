import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import ExpenseDashboardPage from '../components/expense_dashboard_page';
import AddExpensePage from '../components/add_expense_page';
import EditExpensePage from '../components/edit_expense_page';
import HelpPage from '../components/help_page';
import NotFoundPage from '../components/not_found_page';
import Header from '../components/header';
import LoginPage from '../components/login_page';


const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={LoginPage} exact={true} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit/:id" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route path="/dash" component={ExpenseDashboardPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
