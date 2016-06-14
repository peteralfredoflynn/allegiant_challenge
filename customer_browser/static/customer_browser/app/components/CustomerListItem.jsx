var React = require('react');
import { Link } from 'react-router';

var CustomerListItem = (props) => {

  return (
    <Link className="panel-link" to={'customers/' + props.customer.id}>
      <div className="col-lg-6">
        <div className="panel panel-default text-center">
          <div className="panel-body">
            <h2>{props.customer.first_name} {props.customer.last_name}</h2>
            <h4>{props.customer.email}</h4>
          </div>
        </div>
      </div>
    </Link>
  )
};

module.exports = CustomerListItem;
