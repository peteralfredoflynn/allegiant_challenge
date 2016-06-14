var React = require('react');
var Header = require('Header');
import CustomerQueryBar from 'CustomerQueryBar';


var Main = (props) => {
  return (
    <div>
      <Header/>
      <div className="container">
          {props.children}
      </div>
    </div>
  );
};

module.exports = Main;
