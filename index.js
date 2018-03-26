const moltin = require('./moltin');
const shippo = require('./shippo');

try {
	moltin.createOrder().then((order) => {
		console.log('order ' + order);
	}).catch((e) => {
		console.log('error ' + e);
	})
}
catch(e) {
	console.log(e);
};

