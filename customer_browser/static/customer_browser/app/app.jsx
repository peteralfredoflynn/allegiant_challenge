var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var Main = require('Main');
import CustomerList from './components/CustomerList.jsx';
import CustomerDetail from './components/CustomerDetail.jsx';

var store = require('configureStore').configure();

store.subscribe(() => {
    var state = store.getState();
    console.log('Initial State ', state);
});

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={Main}>
                <IndexRoute component={CustomerList}/>
                <Route path="/customers/:id" component={CustomerDetail} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
);
