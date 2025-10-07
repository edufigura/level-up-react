import { useState } from "react";
import { Container, Row, Col, Card, Button, Form, Badge } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faShoppingCart,
  faFire,
  faShieldAlt,
  faRocket,
  faHeadset,
  faTruck,  faUsers
} from "@fortawesome/free-solid-svg-icons";
import "../../../assets/styles/Landing.css";
import Footer from "../Footer"; 
import { useCart } from "../carrito/CartContext";

export default function Landing() {
  const { addToCart } = useCart();
  const [featuredProducts] = useState([
    {
      id: 1,
      name: "PlayStation 5",
      price: 549990,
      img: "./assets/productos/PS5-CARD.png",
      category: "electronica",
      description: "Consola PlayStation 5 version Slim con 1GB SSD"
    },
    {
      id: 2,
      name: "Silla Gamer Titan",
      price: 349990,
      img: "./assets/productos/sillas.png",
      category: "accesorios",
      description: "Silla gamer ergonómica con soporte lumbar"
    },
    {
      id: 3,
      name: "Estrella de la Muerte",
      price: 699990,
      img: "./assets/productos/STAR-WARS-CARD.png",
      category: "accesorios",
      description: "Coleccionable exclusivo Star Wars"
    }
  ]);

  const [features] = useState([
    {
      icon: faShieldAlt,
      title: "Garantía Extendida",
      description: "Todos nuestros productos incluyen garantía oficial del fabricante"
    },
    {
      icon: faRocket,
      title: "Envío Express",
      description: "Recibe tus productos en 24-48 horas en todo Chile"
    },
    {
      icon: faHeadset,
      title: "Soporte 24/7",
      description: "Nuestro equipo está disponible para ayudarte cuando lo necesites"
    }
  ]);

  const [stats] = useState([
    { number: "5000+", label: "Clientes Satisfechos" },
    { number: "200+", label: "Productos Premium" },
    { number: "24/7", label: "Soporte Técnico" },
    { number: "99%", label: "Tiempo Activo" }
  ]);

  const handleAddToCart = (product) => {
    const productForCart = {
      id: product.id,
      name: product.name,
      price: product.price,
      img: product.img,
      category: product.category
    };
    addToCart(productForCart);
  };

  const formatPrecioCLP = (precio) => {
    return new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency: 'CLP',
      minimumFractionDigits: 0
    }).format(precio);
  };

  return (
    <main className="landing-page">
      {/* Apartado principal (hero) */}
      <section className="hero-section">
        <Container>
          <Row className="align-items-center min-vh-100 py-5">
            <Col lg={6} className="hero-content">
              <Badge bg="primary" className="hero-badge mb-3">
                <FontAwesomeIcon icon={faFire} className="me-2" />
                Nuevos Productos!
              </Badge>
              <h1 className="hero-title">
                Eleva tu <span className="text-gradient">Juego</span> al Siguiente Nivel
              </h1>
              <p className="hero-subtitle">
                Descubre equipamiento de alto rendimiento, componentes premium y 
                accesorios seleccionados por expertos para gamers exigentes.
              </p>
              <div className="hero-actions">
                <Button className="gradient-btn me-3" size="lg">
                  Explorar Productos <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
                </Button>
                <Button variant="outline-light" size="lg">
                  Ver Ofertas
                </Button>
              </div>
              <div className="hero-stats mt-4">
                <div className="stat-item">
                  <strong>5000+</strong>
                  <span>Clientes Satisfechos</span>
                </div>
                <div className="stat-item">
                  <strong>200+</strong>
                  <span>Productos Premium</span>
                </div>
                <div className="stat-item">
                  <strong>24/7</strong>
                  <span>Soporte Técnico</span>
                </div>
              </div>
            </Col>
            <Col lg={6} className="hero-image">
              <div className="hero-img-container">
                <img 
                  src="./assets/productos/HERNAN.png" 
                  alt="Gaming Setup Premium" 
                  className="img-fluid"
                />
                <div className="hero-shape-1"></div>
                <div className="hero-shape-2"></div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* apartado de recomendacion*/}
      <section className="features-section">
        <Container>
          <div className="section-header">
            <h2 className="section-title">¿Por Qué Elegirnos?</h2>
            <p className="section-subtitle">
              Ofrecemos la mejor experiencia de compra para gamers exigentes
            </p>
          </div>
          <Row className="g-4">
            {features.map((feature, index) => (
              <Col key={index} md={4}>
                <div className="feature-card">
                  <div className="feature-icon">
                    <FontAwesomeIcon icon={feature.icon} />
                  </div>
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/*Productos destacadaos */}
      <section className="products-section">
        <Container>
          <div className="section-header">
            <h2 className="section-title">Productos Destacados</h2>
            <p className="section-subtitle">
              Los productos más populares de nuestra comunidad gamer
            </p>
          </div>
          <div className="product-grid">
            {featuredProducts.map((product) => (
              <div key={product.id} className="product-item">
                <img 
                  src={product.img} 
                  alt={product.name}
                  className="product-image"
                  onError={(e) => {
                    e.target.src = '';
                  }}
                />
                <div className="product-info">
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-description">{product.description}</p>
                  <div className="product-price">{formatPrecioCLP(product.price)}</div>
                  <Button 
                    className="gradient-btn w-100"
                    onClick={() => handleAddToCart(product)}
                  >
                    <FontAwesomeIcon icon={faShoppingCart} className="me-2" />
                    Agregar al Carrito
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <Button variant="outline-light" size="lg" href="/catalogo">
              Ver Catálogo Completo <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
            </Button>
          </div>
        </Container>
      </section>

      {/* Apartado de comunidad*/}
      <section className="features-section">
        <Container>
          <div className="section-header">
            <h2 className="section-title">Nuestra Comunidad</h2>
            <p className="section-subtitle">
              Únete a miles de gamers que confían en nosotros
            </p>
          </div>
          <Row className="g-4 text-center">
            {stats.map((stat, index) => (
              <Col key={index} md={3} sm={6}>
                <div className="feature-card">
                  <FontAwesomeIcon icon={faUsers} size="3x" className="mb-3 text-primary" />
                  <h3 className="text-gradient">{stat.number}</h3>
                  <p>{stat.label}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* apartsado de promocion */}
      <section className="cta-section">
        <Container>
          <div className="text-center">
            <h2 className="cta-title">¿Listo para Mejorar tu Setup?</h2>
            <p className="cta-subtitle">
              Descubre nuestra amplia selección de productos gaming y accesorios premium
            </p>
            <div className="cta-actions">
              <Button className="gradient-btn me-3" size="lg" href="/catalogo">
                <FontAwesomeIcon icon={faShoppingCart} className="me-2" />
                Comprar Ahora
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Apartado de Ofertas */}
      <section className="features-section">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h3 className="section-title mb-3">Oferta Exclusiva DuocUC</h3>
              <p className="section-subtitle">
                Como estudiante DuocUC, recibirás descuentos especiales y promociones 
                exclusivas en todos nuestros productos. ¡Regístrate con tu correo institucional!
              </p>
              <div className="mt-4">
                <FontAwesomeIcon icon={faTruck} className="me-2 text-primary" />
                <span>Envío gratis para estudiantes DuocUC</span>
              </div>
            </Col>
            <Col md={6}>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </main>
  );
}