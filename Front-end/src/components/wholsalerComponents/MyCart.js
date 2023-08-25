import React, { useState } from 'react';

const MyCart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      productName: 'Wheat',
      description:"type1",
      availableQuantity: 1000,
      pricePerUnit: 5,
      quantity: 0,
      
    },
    {
      id: 2,
      productName: 'Rice',
      description:"type3",
      availableQuantity: 800,
      pricePerUnit: 4,
      quantity: 0,
      
    },
    // Add more products here...
  ]);

  const handleQuantityChange = (itemId, newQuantity) => {
    const updatedCart = cartItems.map((item) =>
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedCart);
  };

  const handleRemoveItem = (itemId) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.quantity * item.pricePerUnit, 0);
  };

  return (
    <div>
      <h2>My Cart</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Description</th>
            <th>Available Quantity</th>
            <th>Price per Unit</th>
             <th>Quantity</th>
            <th>Subtotal</th>
            <th>Action</th>
            
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td>{item.productName}</td>
              <td>{item.description}</td>
              <td>{item.availableQuantity}</td>
              <td>Rs{item.pricePerUnit}</td>
              <td>
                <input
                  type="number"
                  min="0"
                  max={item.availableQuantity}
                  value={item.quantity}
                  onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                />
              </td>
              <td>Rs{item.quantity * item.pricePerUnit}</td>
              <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleRemoveItem(item.id)}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="text-right">
        <h4>Total Price: Rs{calculateTotalPrice()}</h4>
        <button className="btn btn-primary">Proceed to Buy</button>
      </div>
    </div>
  );
};

export default MyCart;
