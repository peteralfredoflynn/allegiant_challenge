# Customer Data Browser and API 

## Description
An API to Create, Update, Destroy, and List Customer Data as well as a 
browser to search customer data by name and see customer details. 

(Done as a code challenge for Allegiant Airlines)

Check it out live at https://customer-browser.herokuapp.com

### API GET Endpoints
##### https://customer-browser.herokuapp.com/api/customers
###### Lists all customers paginated 20 at a time
##### https://customer-browser.herokuapp.com/api/customers/23
###### Gives details for a customer with that id
##### https://customer-browser.herokuapp.com/api/customers/?name=bob
###### Lists customers where first_name or last_name matches the name query parameter
##### https://customer-browser.herokuapp.com/api/customers/?order=newest
###### Lists customers by most recently created
##### https://customer-browser.herokuapp.com/api/customers/?order=firstname
###### Lists customers alphabetically by first name
##### https://customer-browser.herokuapp.com/api/customers/?order=lastname
###### Lists customers alphabetically by last name

### API POST Endpoints
##### https://customer-browser.herokuapp.com/api/customers
###### Create a new customer: See live api for details on json format
##### https://customer-browser.herokuapp.com/api/customers/23
###### Update or delete a customer 


