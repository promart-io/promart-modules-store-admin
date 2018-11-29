var query = require('db/v3/query');
var daoApi = require('db/v3/dao');
var dao = daoApi.create({
	'table': 'PROMART_ECOMM_REVIEWS',
	'properties': [
		{
			'name': 'Id',
			'column': 'ID',
			'type': 'INTEGER',
			'id': true,
		}, {
			'name': 'UserName',
			'column': 'USERNAME',
			'type': 'VARCHAR',
		}, {
			'name': 'CreatedAt',
			'column': 'CREATEDAT',
			'type': 'TIMESTAMP',
		}, {
			'name': 'Rating',
			'column': 'RATING',
			'type': 'INTEGER',
		}, {
			'name': 'ProductId',
			'column': 'PRODUCTID',
			'type': 'INTEGER',
		}, {
			'name': 'Comment',
			'column': 'COMMENT',
			'type': 'VARCHAR',
		}]
});
exports.list = function(settings) {
	return dao.list(settings);
};

exports.get = function(id) {
	return dao.find(id);
};

exports.create = function(entity) {
	return dao.insert(entity);
};

exports.update = function(entity) {
	return dao.update(entity);
};

exports.delete = function(id) {
	dao.remove(id);
};

exports.count = function() {
	return dao.count();
};

exports.customDataCount = function() {
	var resultSet = query.execute("SELECT COUNT(*) as COUNT FROM PROMART_ECOMM_REVIEWS");
	return resultSet !== null ? resultSet[0].COUNT : 0;
};