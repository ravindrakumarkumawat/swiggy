import React, { useState, useEffect } from "react"
import "./App.css"
import Navbar from "./components/Customer/Navbar"
import Dropdown from "./components/Customer/Dropdown"
import { Switch, Route, Redirect } from "react-router-dom"
import Home from "./pages/Home"
import RestaurantNavbar from "./components/RestaurantPartner/Navbar"
import Sidebar from "./components/RestaurantPartner/Sidebar"
import Order from "./components/RestaurantPartner/Order"

function App() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false)
      }
    }

    window.addEventListener("resize", hideMenu)

    return () => {
      window.removeEventListener("resize", hideMenu)
    }
  })
  return (
    <>
      {/*<Navbar toggle={toggle}/>
      <Dropdown isOpen={isOpen} toggle={toggle}/>
      <Switch>
        <Route exact path="/"><Redirect to="/restaurants" /></Route>
        <Route path="/restaurants"><Home /></Route>
        <Route path="/search"><h1>Search</h1></Route>
        <Route path="/offers/restaurant"><h1>Offers</h1></Route>
        <Route path="/support"><h1>Help</h1></Route>
        <Route path="/my-account"><h1>My Account</h1></Route>
        <Route path="/checkout"><h1>Checkout</h1></Route>
  </Switch>*/}

      <RestaurantNavbar />
      <div className="flex">
        <Sidebar />
        <Switch>
          <Route exact path="/restaurant-partner">
            <div>Home nnnnn</div>
          </Route>
          <Route path="/restaurant-partner/orders">
            <Order />
          </Route>
          <Route path="/restaurant-partner/menus">
            <div>Menu</div>
          </Route>
          <Route path="/restaurant-partner/reviews">
            <div>Review</div>
          </Route>
          <Route path="/restaurant-partner/settings">
            <div>Settings</div>
          </Route>
          <Route path="/restaurant-partner/payments">
            <div>Payments</div>
          </Route>
          <Route path="/restaurant-partner/accounts">
            <div>Accounts</div>
          </Route>
          <Route path="/restaurant-partner/support">
            <div>Help</div>
          </Route>
        </Switch>
      </div>
    </>
  )
}

export default App
