##React Render Placement Loader

	npm install render-placement-loader

This will add React.render(React.createElement(Component),document.body) to your jsx for you.
It will also replace React.render(class,document.getElementById('blah')) with document.body if it exists.


You can also pass an optional `props` object via the query.

**Usage:**

`component`: explicitly pass the name of the component you want rendered
`props`: props to pass the component
`replace`: `true` or `false` if `React.render` is found , it will be replaced by default

    {
        test: /\.jsx$/,
        loader: 'render-placement-loader',
        query: { 
        	props: { foo: 'bar' },
        	component: 'ComponentName'
        }
    }

Works with ES6 classes and `React.createClass` components.
