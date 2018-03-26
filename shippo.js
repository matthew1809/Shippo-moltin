require('dotenv').config()
const shippo = require('shippo')(process.env.shippo_api_key);
const mock = require('./mock');

var exports = module.exports = {};

exports.create_shipment = function() {
		
		shippo.shipment.create({
	    "address_from": mock.addressFrom,
	    "address_to": mock.addressTo,
	    "parcel": mock.parcel,
	    "async": false
	}, function(err, shipment){
	    if(err) {
	    	return err;
	    } else {
			rates = shipment.rates_list[0];
			return rates;
		};
	});
}

// Purchase the desired rate.
exports.create_transaction = function() {
		
	shippo.transaction.create({
	    "rate": rate.object_id,
	    "label_file_type": "PDF",
	    "async": false
	}, function(err, transaction) {
	    if(err) {
	    	return err;
	    } else {
			return transaction;
		};
	});
};