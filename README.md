# Swiggyi - Backend

<p>Swiggyi is the <b>online food ordering</b> and <b>delivery plateform</b>. In this I am creating the API's for Restaurant Partner, Customer, Order, and Delivery Partner.</p>

## API

### Restaurant

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