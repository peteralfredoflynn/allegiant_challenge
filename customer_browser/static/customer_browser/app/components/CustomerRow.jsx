var React = require('react');
var CustomerListItem = require('CustomerListItem');

var CustomerRow = (props) => {

  function renderCustomers() {
    return props.customers.map((customer) => {
      return <CustomerListItem customer={customer} key={customer.id}/>
    });
  }

  return (
    <div className="row">
      {renderCustomers()}
    </div>
  );
}

module.exports = CustomerRow;