'use strict';

import React from 'react';
import {render} from 'react-dom';
import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router';
import Home from './components/home.jsx';



const Layout = React.createClass({
    render: function() {
        return (
            <div>
               <Home />
            </div>
        );
    }
});

render(( <Layout />
), document.getElementById('app'));