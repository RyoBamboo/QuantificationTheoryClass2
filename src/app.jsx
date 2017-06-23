var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');

var App = createReactClass({
    render: function() {
        return (
            <div className="app">
                Hello uooooo{this.props.name}
            </div>
        );
    }
});

ReactDOM.render(<App name="React" />, document.getElementById("app"));