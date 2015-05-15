var loaderUtils = require('loader-utils');

module.exports = function(source) {
	var query = loaderUtils.parseQuery(this.query);
	var props = query.props || {};

	var clazz = 'exports.__esModule ? exports.default : module.exports';
	var render = 'React.render(React.createElement(' + clazz + ', ' + JSON.stringify(props) + '), document.body)';

	//if replace a react render is not set to false or if there is no react render, let's add it
	if(query.replace !== 'false' || !source.match(/\bReact.render\((.*)\)/,'')){
		source = source.replace(/\bReact.render\((.*)\)/,'');
		return source + render;
	}
	else {
		return source;
	}
};
