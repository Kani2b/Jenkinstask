const React = require('react');
const ReactDOM = require('react-dom');

const App = () => {
  return (
    React.createElement('div', null,
      React.createElement('h1', null, 'Netflix-like App'),
      React.createElement('p', null, 'Your content goes here.')
    )
  );
};

ReactDOM.render(React.createElement(App), document.getElementById('app'));
