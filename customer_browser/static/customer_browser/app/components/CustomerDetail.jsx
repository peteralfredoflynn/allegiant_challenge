import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import { fetchCustomerDetail } from '../actions/index';
import { Link } from 'react-router';

class CustomerDetail extends Component {
    componentWillMount() {
        // get params id from url
        this.props.fetchCustomerDetail(this.props.params.id);
    }

    render() {
        const { customer } = this.props;
        if (!customer) {
            return <div>Loading...</div>;
        }
        return (
            <div>
                <Link to='/'><span className="glyphicon glyphicon-home" aria-hidden="true"></span></Link>
                <div className="page-header">
                    <h1>{customer.first_name} {customer.last_name}</h1>
                </div>
                <h4>id: {customer.id}</h4>
                <h4>email: {customer.email}</h4>
                <h4>ip: {customer.ip}</h4>
                <h4>latitude: {customer.latitude}</h4>
                <h4>longitude: {customer.longitude}</h4>
                <h4>created: {customer.created_at}</h4>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {customer: state.customers.customer};
}

export default connect(mapStateToProps, {fetchCustomerDetail})(CustomerDetail);
