var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');

var App = createReactClass({
    render: function() {
        var matrix = new Matrix();
        var a = [
            [2, 3],
            [5, 8]
        ];
        var b = [
            [8, 0],
            [1, 8]
        ];
        console.log(matrix.multiple(a, b));
        return (
            <div className="app">
                Hello uooooo{this.props.name}
            </div>
        );
    }
});

ReactDOM.render(<App name="React" />, document.getElementById("app"));