import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './style/styles.scss';
import AppRouter from './routers/appRouter';



ReactDOM.render(<AppRouter/>, document.getElementById('app'))