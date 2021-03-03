# Swiggyi - Backend

<p>Swiggyi is the <b>online food ordering</b> and <b>delivery plateform</b>. In this I am creating the API's for Restaurant Partner, Customer, Order, and Delivery Partner.</p>

## API

### 1. Restaurant

<ol>
  <li>
    <code>getAllRestaurants</code>

    GET http://localhost:3001/api/restaurants 
  </li>

  <li>
    <code>getRestaurant</code><br>

    GET http://localhost:3001/api/restaurants/:id  
  </li>

  <li>
    <code>updateRestaurant</code>
    
    PUT http://localhost:3001/api/restaurants/:id 
  </li>

  <li>
    <code>deleteRestaurant</code>
    
    DELETE http://localhost:3001/api/restaurants/:id 
  </li>
</ol>


### Menu

<ol>
  <li>
    <code>getAllItems</code>

    GET http://localhost:3001/api/restaurants/:id/items
  </li>

  <li>
    <code>addItem</code><br>

    POST http://localhost:3001/api/restaurants/:id/items 
  </li>

  <li>
    <code>updateItem</code>

    PATCH http://localhost:3001/api/restaurants/:id/items
  </li>

  <li>
    <code>deleteItem</code><br>

    DELETE http://localhost:3001/api/restaurants/:id/items 
  </li>

</ol>


### Order

<ol>
  <li>
    <code>getAllOrders</code>

    GET http://localhost:3001/api/restaurants/:id/orders
  </li>

</ol>

### 2. Customer

<ol>
  <li>
    <code>getAllCustomers</code>

    GET http://localhost:3001/api/customers
  </li>

  <li>
    <code>addCutomer / Register</code><br>

    POST http://localhost:3001/api/customers
  </li>

  <li>
    <code>updateCustomer</code>

    PATCH http://localhost:3001/api/customers/:id
  </li>

  <li>
    <code>deleteItem</code><br>

    DELETE http://localhost:3001/api/customers/:id
  </li>

</ol>