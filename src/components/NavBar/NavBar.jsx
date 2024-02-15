import CartWidget from "../CartWidget/CartWidget";

const Navbar = () => {
  return (
    <>
      <nav>
        <CartWidget />
        <h3>Ecommerce</h3>
        <div>
          <button>Camisetas</button>
          <button>Pantalones</button>
          <button>Buzos</button>
          <button>Accesorios</button>
        </div>
      </nav>
    </>
  );
};

export default Navbar