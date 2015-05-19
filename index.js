var loaderUtils = require('loader-utils');

module.exports = function(source) {
	var query = loaderUtils.parseQuery(this.query);
	var props = query.props || {};

        //if class name was passed explicitly
	if(query.component) var clazz = query.component
	else var clazz = 'exports.__esModule ? exports.default : module.exports';

	var getClazz = 'var clazz = ' + clazz + ';';
	var checkClazz = 'if (!clazz || clazz.prototype.render === undefined) { throw new Error("no valid component specified"); }'
	var render = 'React.render(React.createElement(clazz, ' + JSON.stringify(props) + '), document.body);';

	var doRender = '{(function() {' + getClazz + checkClazz + render + '})();}';

	//if replace a react render is not set to false or if there is no react render, let's add it
	if(query.replace !== 'false' || !source.match(/\bReact.render\((.*)\)/,'')){
		source = source.replace(/\bReact.render\((.*)\)/,'');
		return source + doRender;
	}
	else {
		return source;
	}
};
