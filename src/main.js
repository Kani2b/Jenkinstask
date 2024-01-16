const React = require('react');
const ReactDOM = require('react-dom');

const App = () => {
  // Intentional bug: Accessing a property of an undefined object
  const buggyValue = undefinedObject.undefinedProperty; // This will throw an error

  return (
    React.createElement('div', null,
      React.createElement('h1', null, 'Netflix-like App'),
      React.createElement('p', null, 'Your content goes here.')
    )
  );
};

ReactDOM.render(React.createElement(App), document.getElementById('app'));
