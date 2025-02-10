# SalesSavvy Frontend Project Documentation

## 1. Project Overview
SalesSavvy's frontend is a web application that allows users to manage sales, track product inventory, and generate reports through an intuitive UI. It interacts with the backend via RESTful APIs.

## 2. Technology Stack
- **Framework**: React.js
- **State Management**: Redux Toolkit
- **UI Library**: Material-UI (MUI)
- **Routing**: React Router
- **Authentication**: JWT-based authentication
- **HTTP Client**: Axios
- **Build Tool**: Vite/Webpack
- **Version Control**: Git & GitHub
- **Deployment**: Vercel/Netlify

## 3. Project Structure
```
SalesSavvy-Frontend/
│── public/
│── src/
│   ├── components/     # Reusable UI components
│   ├── pages/          # Page components
│   ├── redux/          # Redux state management
│   ├── services/       # API calls (Axios)
│   ├── utils/          # Utility functions
│   ├── styles/         # Global styles
│   ├── App.js          # Main component
│   ├── index.js        # Entry point
│── package.json
│── README.md
```

## 4. API Integration
### Authentication
- **POST /api/auth/login** - Logs in a user and returns JWT
- **POST /api/auth/register** - Registers a new user
- **GET /api/users/profile** - Fetches user profile

### Product Management
- **GET /api/products** - Fetch all products
- **POST /api/products** - Add a new product
- **PUT /api/products/{id}** - Update product details
- **DELETE /api/products/{id}** - Remove a product

### Sales Management
- **POST /api/sales** - Record a sale
- **GET /api/sales** - Get sales history

### Payments (Razorpay Integration)
- **POST /api/payments/create-order** - Create a new order
- **POST /api/payments/verify** - Verify payment transaction

## 5. State Management
- **Redux Toolkit** is used for global state management.
- Slices: `authSlice.js`, `productSlice.js`, `salesSlice.js`.
- Data is fetched and stored in Redux store to optimize performance.

## 6. Security Measures
- JWT authentication is used for secure access.
- Token is stored in HTTP-only cookies to prevent XSS attacks.
- Secure API calls with authorization headers.

## 7. Error Handling
- Centralized error handling using Axios interceptors.
- Toast notifications for API errors and user actions.

## 8. Deployment
- Hosted on Vercel/Netlify.
- Environment variables managed through `.env` file.
- Continuous Deployment (CD) setup using GitHub Actions.

## 9. Future Enhancements
- Implement a Progressive Web App (PWA) version.
- Add multi-language support.
- Improve UI/UX with animations and better navigation.

## 10. Conclusion
SalesSavvy's frontend provides a seamless user experience with React.js and Redux for efficient state management. It ensures security and scalability for future growth.

---

**Author**: SalesSavvy Development Team  
**Version**: 1.0  
**Date**: February 2025

