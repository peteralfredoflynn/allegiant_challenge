var React = require('react');
var {Link} = require('react-router');
import { searchCustomers} from '../actions/index.jsx';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

var CustomerQueryBar = React.createClass({
  onFormSubmit: function(e) {
    e.preventDefault();
    var name = this.refs.name.value;
    if (name.length > 0) {
        this.refs.name.value = '';
        this.props.searchCustomers(`name=${name}`);
    }
  },
  onValueChange: function(e) {
    var name = this.refs.name.value;
    if (name.length > 0) {
      this.props.searchCustomers(`name=${name}`);
    }
  },
  onButtonClick: function(e) {
    e.preventDefault();
    this.props.searchCustomers(`order=firstname`);
  },
  onLastNameClick: function(e) {
    e.preventDefault();
    this.props.searchCustomers('order=lastname');
  },
  onNewestClick: function(e) {
    e.preventDefault();
    this.props.searchCustomers('order=newest');
  },
  render: function() {
    return (
        <div className="row">
            <div className="col-md-6 col-s-12 nopadding">
              <form onSubmit={this.onFormSubmit} className="form-inline">
                  <div className="input-group">
                      <input id="search-bar" onChange={this.onValueChange} type="search" placeholder="Search by name" ref="name"
                       className="form-control"/>
                     <span><input type="submit" className="btn btn-primary"/></span>
                  </div>
              </form>
            </div>
            <div className="col-md-6 col-s-12 nopadding">
                <ul className="nav nav-pills">
                    <li role="presentation"><a onClick={this.onButtonClick} href="#">First Name</a></li>
                    <li role="presentation"><a onClick={this.onLastNameClick}href="#">Last Name</a></li>
                    <li role="presentation"><a onClick={this.onNewestClick}href="#">Recently added</a></li>
                </ul>
            </div>
       </div>
    );
  }
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ searchCustomers }, dispatch);
}

export default connect(null, mapDispatchToProps)(CustomerQueryBar);
