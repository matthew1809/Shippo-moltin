require('dotenv').config()
const MoltinGateway = require('@moltin/sdk').gateway;
const mock = require('./mock');

var exports = module.exports = {};

const Moltin = MoltinGateway({
  client_id: process.env.client_id
});

exports.getProducts = function() {
	return Moltin.Products.All();
}

exports.addToCart = function(cart_reference, product, quantity) {
	return Moltin.Cart(cart_reference).AddProduct(product, quantity);
}

exports.checkout = function(cart_reference, customer, shipping_address) {
	return Moltin.Cart(cart_reference).Checkout(customer, shipping_address);
};

exports.createOrder = async function () {
	var products = await exports.getProducts();
	var addToCart = await exports.addToCart(mock.cart_reference, products.data[0].id, 1);
	var checkout = await exports.checkout(mock.cart_reference, mock.customer, mock.shipping_address);
	return checkout;
};