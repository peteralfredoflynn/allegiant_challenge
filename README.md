# Customer Data Browser and API 

## Description
An API to Create, Update, Destroy, and List Customer Data as well as a 
front end web app to search customer data by name.

The front end is built in ReactJS and compiled into bundle.js before 
deployment. All jsx files are for reference only and are not actually 
required. Almost all front end files are found at customer_browser/static/customer_browser.

A single html Django template is still used in order to keep the project 
served together. index.html is located in cutomer_browser/templates/customer_browser._

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
