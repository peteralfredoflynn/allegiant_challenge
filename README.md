# Customer Data Browser and API 

## Description
An API to Create, Update, Destroy, and List Customer Data as well as a 
browser to search customer data by name and see customer details. 

(Done as a code challenge for Allegiant Airlines)

### API GET Endpoints
###### /api/customers
##### Lists all customers paginated 20 at a time
###### /api/customers/23
##### Gives details for a customer with that id
###### /api/customers/?name=bob
##### Lists customers where first_name or last_name matches the name query parameter
###### /api/customers/?order=newest
##### Lists customers by most recently created
###### /api/customers/?order=firstname
##### Lists customers alphabetically by first name
###### /api/customers/?order=lastname
##### Lists customers alphabetically by last name

### API POST Endpoints
###### /api/customers
##### Create a new customer: See live api for details on json format
###### /api/customers/id
##### Update or delete a customer 


Check it out live at https://customer-browser.herokuapp.com

See the API at https://customer-browser.herokuapp.com/api/customers