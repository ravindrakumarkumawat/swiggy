# Swiggyi - Backend

<p>Swiggyi is an <b>online food ordering</b> and <b>delivery platform</b>. In this I am creating the API's for Restaurant Partner, Customer, Order, and Delivery Partner.</p>

## API

### 1. Restaurant

<ol>

  <li>
    <code>registerRestaurant</code>

    POST http://localhost:3001/api/restaurants/register 
  </li>

  <li>
    <code>loginRestaurant</code>

    POST http://localhost:3001/api/restaurants/login 
  </li>
  
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
    <code>registerCustomer</code>

    POST http://localhost:3001/api/customers/register 
  </li>

  <li>
    <code>loginCustomer</code>

    POST http://localhost:3001/api/customers/login 
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

### Order

<ol>
  <li>
    <code>getAllOrders</code>

    GET http://localhost:3001/api/customers/:id/orders
  </li>

  <li>
    <code>addOrder</code>

    POST http://localhost:3001/api/customers/:id/orders
  </li>

</ol>

### 3. Delivery Partner

<ol>
  <li>
    <code>getAllDeliveryPartners</code>

    GET http://localhost:3001/api/deliverypartners
  </li>

  <li>
    <code>registerDeliveryPartner</code>

    POST http://localhost:3001/api/deliverypartners/register 
  </li>

  <li>
    <code>loginDeliveryPartner</code>

    POST http://localhost:3001/api/deliverypartners/login 
  </li>

  <li>
    <code>updateDeliveryPartner </code>
    
    PUT http://localhost:3001/api/deliverypartners/:id 
  </li>

  <li>
    <code>deleteDeliveryPartner </code>
    
    DELETE http://localhost:3001/api/deliverypartners/:id 
  </li>
</ol>
