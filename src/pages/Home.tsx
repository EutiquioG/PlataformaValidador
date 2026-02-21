import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="home">
            <header className="navbar">
                <h1>🛍 MiTienda Online</h1>
                <Link to="/registro" className="btn">
                    Registrarse
                </Link>
            </header>

            <section className="hero">
                <h2>Bienvenido a la mejor tienda online</h2>
                <p>Compra productos increíbles al mejor precio.</p>
                <Link to="/registro" className="btn-primary">
                    Crear Cuenta
                </Link>
            </section>

            <section className="products">
                <div className="product-card">Producto 1</div>
                <div className="product-card">Producto 2</div>
                <div className="product-card">Producto 3</div>
            </section>
        </div>
    );
}

export default Home;