'use strict';
const response = require('response')
const pddModel = require('./models/pdd')
// const tbModel = require('./models/tb')

exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event)
	var resp = {}
	//简单路由判断
	switch (event.path) {
		case '/pdd':
			console.log('getting pdd',event)
			break;
		case '/tb':
			console.log('getting tb',event)
			break;
		default:

	}
	//返回数据给客户端
	return response.success()
};
