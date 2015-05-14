var loaderUtils = require('loader-utils');

module.exports = function(source) {
	var query = loaderUtils.parseQuery(this.query);
	var props = query.props || {};

	//if it's an es6 class
	if(source.match(/\bclass\s(\w+)/)) var className = source.match(/\bclass\s(\w+)/)[1]
	//if it's an old school component
	else if(source.match(/var (.*) =/)) var className = source.match(/var (.*) =/)[1]

	var render = 'React.render(React.createElement(' + className + ', ' + JSON.stringify(props) + '), document.body)'

	//if replace a react render is not set to false or if there is no react render, let's add it
	if(query.replace !== 'false' || !source.match(/\bReact.render\((.*)\)/,'')){
		source = source.replace(/\bReact.render\((.*)\)/,'')
		return source + render
	}
	else {
		return source
	}
}
