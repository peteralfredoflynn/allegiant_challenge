var React = require('react');
var {Link, IndexLink} = require('react-router');

var Header = (props) => {
  return (
    <div className="bs-header">
      <div className="container">
        <div></div>
          <img id="logo" src="http://res.cloudinary.com/skill-match/image/upload/v1465688638/allegiant-logo-large-white_nejfdf.png"/>
          <h1>Customer Browser</h1>
          <p>Browse Customers</p>
      </div>
    </div>
  )
};

module.exports = Header;
