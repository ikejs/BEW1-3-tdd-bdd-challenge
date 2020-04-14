// ========================================================
// Level 1 Challenges
// ========================================================

const sayHello = () => {
  return "Hello"
}

const area = (w, h) => {
  return w * h
}

const perimeter = (w, h) => {
  return w + w + h + h
}

const circleArea = r => {
  return Math.PI * r * r
}

// ========================================================
// Level 2 Challenges
// ========================================================
// NOTE: You will need to implement methods below (not yet
// defined) in order to make the tests pass.
// ========================================================

cart = [];

const createItem = (name, price, quantity) => {
  return { name, price, quantity }
}

const addToCart = (item) => {
  cart.push(item);
  return cart;
}

const showCart = () => {
  return cart;
}

const totalCartItems = () => {
  let quantity = 0
  for(i=0; i < cart.length; i+=1) {
    quantity += cart[i].quantity;
  }
  return quantity;
}

const removeItemFromCart = (itemToRemove) => {
  for (i=0; i < cart.length; i += 1) {
    if (cart[i].name === itemToRemove.name) {
      cart.slice(i, 1);
    }
  }
  return cart;
}


module.exports = { 
  sayHello, area, perimeter, circleArea,
  createItem, addToCart, showCart, totalCartItems, removeItemFromCart
}
