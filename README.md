# BiteBurst - Food Delivery Website

## Project Overview

**BiteBurst** is a sophisticated food delivery website designed to offer users a seamless experience for ordering food online. The platform features an intuitive user interface for browsing and ordering food, and a robust admin panel for managing food items, orders, and user interactions.

## Features

### User Features

- **User Registration and Login**
  - Secure user authentication with email and password.
  - User account creation and management.

- **Image**: ![SignUp Component](frontend/src/assets/Signup.jpeg)
![Login Component](frontend/src/assets/Login.jpeg)

- **Browse Food Items**
  - View a categorized list of food items.
  - Search and filter options to easily find desired items.
- **Image**: ![Browse Menu Component](frontend/src/assets/CategoriseMenu.jpeg)

- **Order Management**
  - Add items to the cart and place orders.
  - Track order status and view order history.
- **Image**: ![My Order Page](frontend/src/assets/MyOrdersPage.jpeg)

- **Payment Integration**
  - Secure payment processing via Stripe.
  - Multiple payment options supported.
  - **Image**: ![Payment Page](frontend/src/assets/PaymentPage.jpeg)


### Admin Panel Features

- **Add Food Items**
  - Add food items in the menu.
  - Upload images and set prices for each item.
![Admin Page](frontend/src/assets/AdminAddFoodPage.jpeg)

- **Manage Food Items**
  - Update, or remove food items from the menu.
  - Upload images and set prices for each item.
![Admin Page](frontend/src/assets/AdminFoodListPage.jpeg)

- **Order Management**
  - View and manage all user orders.
  - Update order statuses and process refunds.
![Admin Page](frontend/src/assets/AdminOrderPage.jpeg)


## Pages

### Home Page

- **Description**: The landing page of the website where users can browse featured food items and access the main navigation menu.
- **Image**: ![Home Page](frontend/src/assets/HomePage.jpeg)

### Menu Page

- **Description**: A detailed page listing all available food items with options to filter and search.
- **Image**: ![Menu Page](frontend/src/assets/MenuPage.jpeg)

### Cart Page

- **Description**: A page where users can review their cart, make adjustments, and proceed to checkout.
- **Image**: ![Cart Page](frontend/src/assets/CartPage.jpeg)

### Checkout Page

- **Description**: The page where users enter payment details and finalize their orders.
- **Image**: ![Checkout Page](frontend/src/assets/OrderPage.jpeg)

### Admin Page

- **Description**: The main interface for admins to manage food items, orders, and user profiles.
- **Image**: ![Admin Page](frontend/src/assets/AdminAddFoodPage.jpeg)

## Tech Stack

- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Payment Gateway**: Stripe

## Installation Instructions

Follow these steps to set up the project locally:

1. **Clone the Repository**:
   ```bash
   git clone [repository-url]
   ```

2. **Navigate to the Project Directory**:
   ```bash
   cd BiteBurst
   ```

3. **Frontend Setup**:
   - Navigate to the frontend directory:
     ```bash
     cd frontend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Build the CSS files using:
     ```bash
     npm run build:css
     ```
   - Start the frontend development server:
     ```bash
     npm start
     ```

4. **Backend Setup**:
   - Navigate to the backend directory:
     ```bash
     cd backend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Start the backend server using:
     ```bash
     nodemon server.js
     ```

5. **Database Setup**:
   - Ensure MongoDB is installed and running.
   - Configure the MongoDB connection in the backend configuration files.

## Usage

- **For Users**: Navigate to the home page, browse food items, place orders, and manage your profile.
- **For Admins**: Log in to access the admin panel, where you can manage food items, orders, and user profiles.
