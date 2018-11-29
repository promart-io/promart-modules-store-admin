var query = require('db/v3/query');
var daoApi = require('db/v3/dao');
var dao = daoApi.create({
	'table': 'PROMART_ECOMM_SITE_INDEX',
	'properties': [
		{
			'name': 'Id',
			'column': 'ID',
			'type': 'INTEGER',
			'id': true,
		}, {
			'name': 'WelcomeMessage',
			'column': 'WELCOMEMESSAGE',
			'type': 'VARCHAR',
		}, {
			'name': 'PromotionsHeading',
			'column': 'PROMOTIONSHEADING',
			'type': 'VARCHAR',
		}, {
			'name': 'PromotionsPerLine',
			'column': 'PROMOTIONSPERLINE',
			'type': 'INTEGER',
		}, {
			'name': 'BrandName',
			'column': 'BRANDNAME',
			'type': 'VARCHAR',
		}, {
			'name': 'FooterLine',
			'column': 'FOOTERLINE',
			'type': 'VARCHAR',
		}, {
			'name': 'ClearanceHeading',
			'column': 'CLEARANCEHEADING',
			'type': 'VARCHAR',
		}, {
			'name': 'ClearancePerLine',
			'column': 'CLEARANCEPERLINE',
			'type': 'INTEGER',
		}, {
			'name': 'SpecialRequestText',
			'column': 'SPECIALREQUESTTEXT',
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
	var resultSet = query.execute("SELECT COUNT(*) as COUNT FROM PROMART_ECOMM_SITE_INDEX");
	if (resultSet !== null && resultSet[0] !== null) {
		if (resultSet[0].COUNT !== undefined && resultSet[0].COUNT !== null) {
			return resultSet[0].COUNT;
		} else if (resultSet[0].count !== undefined && resultSet[0].count !== null) {
			return resultSet[0].count;
		}
	}
	return 0;
};