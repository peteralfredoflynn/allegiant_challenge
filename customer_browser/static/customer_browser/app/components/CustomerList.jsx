var React = require('react');
import { bindActionCreators } from 'redux';
import { fetchCustomers, paginatePage } from '../actions/index.jsx';
import { connect } from 'react-redux';
var CustomerRow = require('CustomerRow');
import CustomerQueryBar from 'CustomerQueryBar';
var {Link, IndexLink} = require('react-router');

var CustomerList = React.createClass({
  ////////////////////////////////////////////////////////////////////////////
  // Fetch Initial Customer List when components mounts
  ////////////////////////////////////////////////////////////////////////////
  componentDidMount: function() {
    this.props.fetchCustomers();
  },
  ////////////////////////////////////////////////////////////////////////////
  // Next Page and Previous Page fetch functions
  ////////////////////////////////////////////////////////////////////////////
  nextPage: function() {
    var {next} = this.props.customers;
    if (next) {
      this.props.paginatePage(next);
    }
  },
  prevPage: function() {
    var {previous} = this.props.customers;
    if (previous) {
      this.props.paginatePage(previous);
    }
  },
  ////////////////////////////////////////////////////////////////////////////
  // RENDER
  ////////////////////////////////////////////////////////////////////////////
  render: function() {

    ////////////////////////////////////////////////////////////////////////////
    // Static function - creates array of 2-item arrays i.e [[1,2],[3,4],[5,6]]
    ////////////////////////////////////////////////////////////////////////////
    function partitionArray(input, spacing) {
      var output = [];
      for (var i = 0; i < input.length; i += spacing) {
        output[output.length] = input.slice(i, i+spacing);
      }
      return output;
    }
    ////////////////////////////////////////////////////////////////////////////
    // Check customers,next, and previous values
    ////////////////////////////////////////////////////////////////////////////
    var customers = this.props.customers.results;
    var {next} = this.props.customers;
    var {previous} = this.props.customers;

    ////////////////////////////////////////////////////////////////////////////
    // Render Functions for customer array, nextpage and prevpage icons
    ////////////////////////////////////////////////////////////////////////////
    var self = this;

    function renderCustomers() {
      if (customers && customers.length > 0) {
        var partitionedCustomers = partitionArray(customers, 2);
        return partitionedCustomers.map((customerCouple, i) => {
          return <CustomerRow customers={customerCouple} key={i}/>
        });
      }
    }
    function renderNextPageIcon() {
      if (next) {
        return <a href="#"><span onClick={self.nextPage} className="glyphicon glyphicon-chevron-right" aria-hidden="true">NEXT</span></a>;
      }
    }
    function renderPreviousPageIcon() {
      if (previous) {
        return <a href="#"><span onClick={self.prevPage} className="glyphicon glyphicon-chevron-left" aria-hidden="true">PREVIOUS</span></a>;
      }
    }

    return (
        <div>
          <div className="row">
            <CustomerQueryBar/>
          </div>
          {renderPreviousPageIcon()}
          {renderNextPageIcon()}
          <div className='row customer-list'>
            {renderCustomers()}
          </div>
        </div>
    );
  }
});

function mapStateToProps(state) {
  return {customers: state.customers.all};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCustomers, paginatePage }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomerList);
