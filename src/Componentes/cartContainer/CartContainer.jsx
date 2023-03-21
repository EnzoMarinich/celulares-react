import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useState } from "react";
import { useCartContext } from "../../context/Cartcontext";
import CartList from "../cartList/CartList";
import { Link } from "react-router-dom";

const CartContainer = () => {
  const [dataForm, setDataForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const { cartList, vaciarCart, precioTotal } = useCartContext();

  const vaciar = () => {
    vaciarCart();
  };

  const addOrder = (e) => {
    e.preventDefault();

    const order = {};
    order.users = dataForm;
    order.total = precioTotal();
    order.items = cartList.map(({ id, name, price, cantidad }) => ({
      id,
      name,
      price,
      cantidad,
    }));

    const db = getFirestore();
    const queryCollection = collection(db, "orders");

    if (
      dataForm.name == "" ||
      dataForm.email.length < 6 ||
      dataForm.phone < 6
    ) {
      alert(
        "necesitas completar correctamente los datos para realizar la orden"
      );
    } else {
      addDoc(queryCollection, order)
        .then((resp) => console.log(resp))
        .catch((err) => console.log(err))
        .finally(vaciar())
        .finally(confirmar());
    }
  };

  const handleOnChange = (e) => {
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value,
    });
  };

  const confirmar = () => {
    alert(
      `Has confirmado tu orden! Estaremos comunicandonos a tu email para que puedas tener un seguimiento de tu compra, gracias!`
    );
  };

  return (
    <div className="container">
      {cartList.length == 0 ? (
        <Link to={"../"}>ir a comprar</Link>
      ) : (
        <>
          <div className="prodContainer">
            <CartList />
          </div>
          <div className="final">
            <h1>Total: ${precioTotal()}</h1>
            <button className="vaciar" onClick={vaciar}>vaciar carrito</button>
          </div>
          <div>
            <form onSubmit={addOrder}>
              <input
                type="text"
                name="name"
                value={dataForm.name}
                placeholder="ingrese su nombre"
                onChange={handleOnChange}
              />
              <input
                type="text"
                name="phone"
                value={dataForm.phone}
                placeholder="ingrese su phone"
                onChange={handleOnChange}
              />
              <input
                type="text"
                name="email"
                value={dataForm.email}
                placeholder="ingrese su email"
                onChange={handleOnChange}
              />
              <button>finalizar compra</button>
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default CartContainer;
