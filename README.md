# S204 E-Commerce Frontend

A modern, responsive e-commerce frontend application built with React and Vite. This application provides a complete shopping experience with user authentication, product browsing, cart management, and order processing.

## 🚀 Features

- **User Authentication**: Secure login and signup functionality
- **Product Catalog**: Browse different categories (Computers, Mobiles, Laptops, Pendrives)
- **Shopping Cart**: Add/remove items with real-time updates
- **Order Management**: View order history and track purchases
- **Payment Processing**: Integrated payment flow
- **Responsive Design**: Mobile-friendly interface
- **Protected Routes**: Secure access to user-specific features

## 🛠️ Tech Stack

- **Frontend**: React 18.3.1
- **Build Tool**: Vite 6.0.5
- **Routing**: React Router DOM 7.1.5
- **HTTP Client**: Axios 1.8.4
- **Icons**: React Icons 5.5.0
- **Styling**: CSS3 with custom components
- **Linting**: ESLint with React plugins

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/its-pratyushpandey/s204-frontend.git
cd s204-frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🏗️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── HomePage.jsx     # Main layout component
│   ├── Login.jsx        # Authentication components
│   ├── Signup.jsx
│   ├── Cart.jsx         # Shopping cart
│   ├── Checkout.jsx     # Checkout process
│   ├── Payment.jsx      # Payment handling
│   ├── Orders.jsx       # Order history
│   ├── ProductPage.jsx  # Product details
│   └── [Categories]/    # Product category components
├── context/             # React Context providers
│   └── CartContext.jsx  # Shopping cart state management
├── services/            # API services
│   ├── authService.js   # Authentication API
│   ├── cartService.js   # Cart management API
│   └── productService.js # Product data API
└── assets/              # Static assets

```

## 🔧 Configuration

The application connects to a backend API. Update the API URL in the service files if needed:

```javascript
// src/services/authService.js
const API_URL = "your-backend-api-url";
```

## 🚀 Deployment

1. Build the project:
```bash
npm run build
```

2. Deploy the `dist` folder to your hosting platform

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 📧 Contact

Project Link: [https://github.com/its-pratyushpandey/s204-frontend](https://github.com/its-pratyushpandey/s204-frontend) 
