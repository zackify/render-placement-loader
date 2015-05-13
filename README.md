##React Render Placement Loader

This will add React.render(<Component />,document.body) to your jsx for you.
It will also replace React.render(class,document.getElementById('blah')) with document.body if it exists. 
You can turn that off by adding `?replace=false`.

Usage:

    {
        test: /\.jsx$/,
        loader: 'render-placement-loader'
    }

Currently works with only ES6 classes