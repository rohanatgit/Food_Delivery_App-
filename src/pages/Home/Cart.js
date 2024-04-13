// import React, { useState } from "react";
// import { Container, Button } from "react-bootstrap";
// // import "../../styles/CartStyle.css";

// const burgers = [
//   { id: 1, name: "Classic Burger", price: 5.99 },
//   { id: 2, name: "Cheeseburger", price: 6.99 },
//   { id: 3, name: "Bacon Burger", price: 7.99 },
//   // Add more burger options as needed
// ];

// const AddToCartPage = () => {
//   const [cartItems, setCartItems] = useState([]);

//   const addToCart = (burger) => {
//     const existingItem = cartItems.find(item => item.id === burger.id);
//     if (existingItem) {
//       // If the burger is already in the cart, increase its quantity
//       setCartItems(cartItems.map(item => item.id === burger.id ? { ...item, quantity: item.quantity + 1 } : item));
//     } else {
//       // If the burger is not in the cart, add it with quantity 1
//       setCartItems([...cartItems, { ...burger, quantity: 1 }]);
//     }
//   };

//   const removeFromCart = (burgerId) => {
//     setCartItems(cartItems.filter(item => item.id !== burgerId));
//   };

//   const getTotalPrice = () => {
//     return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
//   };

//   return (
//     <Container className="cart-page">
//       <h1>Add to Cart</h1>
//       <div className="burger-list">
//         {burgers.map((burger) => (
//           <div key={burger.id} className="burger-item">
//             <h3>{burger.name}</h3>
//             <p>Price: ${burger.price.toFixed(2)}</p>
//             <Button onClick={() => addToCart(burger)}>Add to Cart</Button>
//           </div>
//         ))}
//       </div>
//       <div className="cart-items">
//         <h2>Cart Items</h2>
//         <ul>
//           {cartItems.map((item) => (
//             <li key={item.id}>
//               {item.name} - ${item.price.toFixed(2)} x {item.quantity}{" "}
//               <Button variant="danger" size="sm" onClick={() => removeFromCart(item.id)}>Remove</Button>
//             </li>
//           ))}
//         </ul>
//         <h3>Total: ${getTotalPrice()}</h3>
//       </div>
//     </Container>
//   );
// };

// export default AddToCartPage;

import React, { useState } from "react";
import { Container, Button, Row, Col, Card } from "react-bootstrap";

const burgers = [
  { id: 1, name: "Classic Burger", price: 5.99 },
  { id: 2, name: "Cheeseburger", price: 6.99 },
  { id: 3, name: "Bacon Burger", price: 7.99 },
  // Add more burger options as needed
];

const AddToCartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (burger) => {
    const existingItem = cartItems.find(item => item.id === burger.id);
    if (existingItem) {
      setCartItems(cartItems.map(item => item.id === burger.id ? { ...item, quantity: item.quantity + 1 } : item));
    } else {
      setCartItems([...cartItems, { ...burger, quantity: 1 }]);
    }
  };

  const removeFromCart = (burgerId) => {
    setCartItems(cartItems.filter(item => item.id !== burgerId));
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  };

  return (
    <Container style={{ padding: "20px" }}>
      <h1>Add to Cart</h1>
      <Row xs={1} md={2} lg={3}>
        {burgers.map((burger) => (
          <Col key={burger.id}>
            <Card style={{ marginBottom: "20px" }}>
              <Card.Body>
                <Card.Title style={{ fontSize: "20px" }}>{burger.name}</Card.Title>
                <Card.Text style={{ fontSize: "16px" }}>Price: ${burger.price.toFixed(2)}</Card.Text>
                <Button onClick={() => addToCart(burger)}>Add to Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <div style={{ marginTop: "20px" }}>
        <h2>Cart Items</h2>
        <ul style={{ listStyleType: "none", padding: "0" }}>
          {cartItems.map((item) => (
            <li key={item.id} style={{ marginBottom: "10px" }}>
              {item.name} - ${item.price.toFixed(2)} x {item.quantity}{" "}
              <Button variant="danger" size="sm" onClick={() => removeFromCart(item.id)}>Remove</Button>
            </li>
          ))}
        </ul>
        <h3>Total: ${getTotalPrice()}</h3>
      </div>
    </Container>
  );
};

export default AddToCartPage;
