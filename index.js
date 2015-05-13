var loaderUtils = require('loader-utils');

module.exports = function(source) {
	var className = source.match(/\bclass\s(\w+)/)[1]
	var render = 'React.render(<'+className+ ' />,document.body)'

	var query = loaderUtils.parseQuery(this.query);
	if(query.replace !== 'false' || !source.match(/\bReact.render\((.*)\)/,'')){
		source = source.replace(/\bReact.render\((.*)\)/,'')
		console.log(source+render)
		return source + render
	}
	else {
		console.log(source)
		return source
	}
}