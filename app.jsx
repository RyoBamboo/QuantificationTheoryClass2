var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');

var Hello = createReactClass({
    render: function() {
        return (
            <div className="container">Hello {this.props.name}</div>
        );
    }
})

ReactDOM.render(<Hello name="React" />, document.getElementById("app"));