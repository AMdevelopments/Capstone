# Capstone
Italian Restaurant App

Description
An interactive and user-friendly Italian restaurant website application that allows customers to
browse the menu, make orders for either pickup or delivery, and keep track of their orders.
A simple web app that allows an easy and enjoyable user experience.


Installation
To install the necessary packages, open the terminal and run the following command:

npm install

Usage
To start the application, run the following command in your terminal:

npm start

The client side of the application runs on port 3000 and the server side runs on port 5000.

The project uses React.js for the client side and Express.js for the server side. It contains several pages, each serving different functionality:

The Home page ("/" route) displays the main sections of the application - the hero, action section, and specials section.
The Menu page ("/menu" route) fetches the menu items from the server and displays them. It also allows items to be added to the cart.
The Cart page ("/cart" route) allows users to view items in the cart, remove items from the cart, and confirm a purchase. Once a purchase is confirmed, an order is created on the server.
The Reservation page ("/reservation" route) enables user to make a reservation.
The About page ("/about" route) provides information about the restaurant.
The Order List page ("/order" route) shows a list of all orders.
The Order Details page ("/order/:id" route) shows the details of a specific order.
On the server side, the application provides the following endpoints:

GET /api/content: Returns static content for the application.
GET /api/menu: Returns menu items.
GET /api/specials: Returns special menu items.
POST /api/order: Accepts an order and adds it to the orders list.
GET /api/order: Returns a list of all orders.
GET /api/order/:id: Returns a specific order by its ID.
GET /api/order-status/:id: Returns the status of a specific order.
GET /api/latest-order/:id: Returns the latest order by a specific user.
Dependencies
This project uses the following dependencies:

react: ^17.0.2
react-dom: ^17.0.2
react-router-dom: ^6.0.0
react-scripts: 4.0.3
web-vitals: ^1.0.1
axios: ^0.21.1
express: ^4.17.1
cors: ^2.8.5
fs: ^0.0.1-security
path: ^0.12.7
Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

License
MIT
