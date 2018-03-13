require('dotenv').config()
const MoltinGateway = require('@moltin/sdk').gateway;

const Moltin = MoltinGateway({
  client_id: process.env.client_id,
  client_secret: process.env.client_secret
});


var customer = {"name":"matt","email":"matt@moltin.com"};
var shipping_address = {"first_name":"Matt Foyle","last_name":"","line_1":"Carliol Square","line_2":"none","company_name":"Moltin","postcode":"DH12HD","county":"Newcastle","country":"UK"};
var billing_address = {"first_name":"Matt Foyle","last_name":"","line_1":"Carliol Square","line_2":"none","company_name":"Moltin","postcode":"DH12HD","county":"Newcastle","country":"UK"};

var cart_reference = 'test_cart'

async function createOrder () {
	var products = await Moltin.Products.All();
	var addToCart = await Moltin.Cart(cart_reference).AddProduct(products.data[0].id, 1);
	var checkout = await Moltin.Cart(cart_reference).Checkout(customer, shipping_address);
	return checkout;
};

try {
	createOrder().then((order) => {
		console.log(order);
	});
}
catch(e) {
	console.log(e);
}

