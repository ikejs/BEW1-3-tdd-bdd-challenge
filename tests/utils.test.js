const mocha = require("mocha");
const chai = require("chai");
const utils = require("../utils");
const expect = chai.expect;

// ========================================================
// NOTE: https://mochajs.org/#arrow-functions
// Passing arrow functions (“lambdas”) to Mocha is discouraged.
// Lambdas lexically bind this and cannot access the Mocha context.
// ========================================================

it("should say hello", function() {
  const hello = utils.sayHello();
  expect(hello).to.be.a("string");
  expect(hello).to.equal("Hello");
  expect(hello).with.lengthOf(5);
});

// ========================================================
// Level 1 Challenges
// ========================================================

it("should return the area of a 5 by 6 rectangle", function() {
  const area = utils.area(5, 6);
  expect(area).to.be.a("number");
  expect(area).to.equal(30);
});

it("should return the perimeter of a 5 by 6 rectangle", function() {
  const perimeter = utils.perimeter(5, 6);
  expect(perimeter).to.be.a("number");
  expect(perimeter).to.equal(22)
  
});

it("should return the are of a circle of radius 5", function() {
  const area = utils.circleArea(5);
  expect(area).to.be.a("number");
  expect(area).to.equal(78.53981633974483);
});

// ========================================================
// Level 2 Challenges
// ========================================================
// NOTE: The following unimplemented test cases are examples
// of "Pending Tests" in Chai. Someone should write these
// tests eventually.
// ========================================================

it("Should create a new (object) Item with name and price", function() {
  const item = utils.createItem("apple", 0.99, 1);
  expect(item).to.be.an("object");
  expect(item).to.have.property("name", "apple");
  expect(item).to.have.property("price", 0.99);
  expect(item).to.have.property("quantity", 1);
});

it("Should return an array containing all items in cart", function() {
  const cart = utils.showCart();
  expect(cart).to.be.an("array");
});

it("Should add a new item to the shopping cart", function() {
  const addToCart = utils.addToCart({ name: "orange", price: 1.20, quantity: 2 });
  expect(addToCart).to.be.an("array");
});

it("Should return the number of items in the cart", function() {
  const totalCartItems = utils.totalCartItems();
  expect(totalCartItems).to.be.a("number");
  expect(totalCartItems).to.equal(2);
});

it("Should remove items from cart", function() {
  const removeItemFromCart = utils.removeItemFromCart({ name: "orange" });
  expect(removeItemFromCart).to.be.an("array");
});

// ========================================================
// Stretch Challenges
// ========================================================

it("Should update the count of items in the cart");

it("Should validate that an empty cart has 0 items");

it("Should return the total cost of all items in the cart");
