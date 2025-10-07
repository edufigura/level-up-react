import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/cliente/navbar';
import Landing from './components/cliente/pages/landing';
import Dashboard from './components/admin/pages/Dashboard';
import Products from "./components/admin/pages/Products";
import Catalogo from './components/cliente/pages/Catalogo';
import Users from "./components/admin/pages/Users";
import Carrito from "./components/cliente/carrito/Carrito";
import Notificacion from "./components/cliente/carrito/Notificacion"; 
import { CartProvider, useCart } from "./components/cliente/carrito/CartContext";

import 'bootstrap/dist/css/bootstrap.min.css';

function AppLayout({ children }) {
  const { notification, hideNotification } = useCart();
  
  return (
    <>
      {children}
      <Notificacion 
        show={notification.show}
        onClose={hideNotification}
        product={notification.product}
        quantity={notification.quantity}
      />
    </>
  );
}

function App() {
  return (
    <CartProvider>
      <Router>
        <AppLayout>
          <Routes>
            {/* Acceso Público */}
            <Route path='/' element={
              <>
                <Navbar/>
                <Landing/>
              </>
            } />

            <Route path="/carrito" element={
              <>
                <Navbar/>
                <Carrito />
              </>
            } />

            {/* Ruta del catálogo */}
            <Route path="/catalogo" element={
              <>
                <Navbar/>
                <Catalogo />
              </>
            } />

            {/* Acceso de Admin */}
            <Route path="/admin" element={<Dashboard />} />
            <Route path="/admin/products" element={<Products />} />
            <Route path="/admin/users" element={<Users />} />
          </Routes>
        </AppLayout>
      </Router>
    </CartProvider>
  );
}

export default App;