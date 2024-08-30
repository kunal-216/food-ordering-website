# BiteBurst - Food Delivery Website

## Project Overview

**BiteBurst** is a sophisticated food delivery website designed to offer users a seamless experience for ordering food online. The platform features an intuitive user interface for browsing and ordering food, and a robust admin panel for managing food items, orders, and user interactions.

## Features

### User Features

- **User Registration and Login**
  - Secure user authentication with email and password.
  - User account creation and management.

- **Browse Food Items**
  - View a categorized list of food items.
  - Search and filter options to easily find desired items.

- **Order Management**
  - Add items to the cart and place orders.
  - Track order status and view order history.

- **Payment Integration**
  - Secure payment processing via Stripe.
  - Multiple payment options supported.

- **Profile Management**
  - Users can view and update their profile details.
  - Manage saved addresses and payment methods.

### Admin Panel Features

- **Admin Authentication**
  - Secure login for admin access.

- **Manage Food Items**
  - Add, update, or remove food items from the menu.
  - Upload images and set prices for each item.

- **Order Management**
  - View and manage all user orders.
  - Update order statuses and process refunds.

- **User Management**
  - Access and manage user profiles.
  - View order history and user activity.

## Pages

### Home Page

- **Description**: The landing page of the website where users can browse featured food items and access the main navigation menu.
- **Image**: ![Home Page](frontend/assets/HomePage.jpeg)

### Menu Page

- **Description**: A detailed page listing all available food items with options to filter and search.
- **Image**: ![Menu Page](frontend/assets/MenuPage.jpeg)

### Cart Page

- **Description**: A page where users can review their cart, make adjustments, and proceed to checkout.
- **Image**: ![Cart Page](frontend/assets/CartPage.jpeg)

### Checkout Page

- **Description**: The page where users enter payment details and finalize their orders.
- **Image**: ![Checkout Page](frontend/assets/CheckoutPage.jpeg)

### Admin Page

- **Description**: The main interface for admins to manage food items, orders, and user profiles.
- **Image**: ![Admin Page](frontend/assets/AdminPage.jpeg)

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

## Admin Panel Access

- Access the admin panel by navigating to `/admin` after logging in as an admin.

## Usage

- **For Users**: Navigate to the home page, browse food items, place orders, and manage your profile.
- **For Admins**: Log in to access the admin panel, where you can manage food items, orders, and user profiles.
