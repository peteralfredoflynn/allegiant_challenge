import axios from 'axios';

export function fetchCustomers() {
  const request = axios.get('/api/customers');
  return {
    type: 'FETCH_CUSTOMERS',
    payload: request
  };
}

export function fetchCustomerDetail(id) {
    const request = axios.get(`/api/customers/${id}`);

    return {
        type: 'FETCH_CUSTOMER',
        payload: request
    };
}

export function searchCustomers(query) {
  const request = axios.get(`/api/customers/?${query}`);

    return {
        type: 'FILTER_CUSTOMERS',
        payload: request
    }
}

export function paginatePage(url) {
    const request = axios.get(url);

    return {
        type: 'NEXT_PAGE',
        payload: request
    }
}
