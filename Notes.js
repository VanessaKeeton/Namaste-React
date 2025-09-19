const heading = React.createElement(
  "h1",
  { className: "heading1" },
  "Hello world from React! This is cool."
);

const jsxHeading = (
  <h1 id="heading1" tabIndex="5">
    Namaste React using JSX
  </h1>
);

const Title = () => <h1>Hello World!</h1>;
const number = 2000;

console.log(heading);
console.log(jsxHeading);

// react component
// Class Based Component - OLD WAY
// Functional Component - NEW WAY 

// execute any js by putting it in {} (curly braces) inside of jsx
// jsx has code to prevent cross site script injections

const HeadingComponent = () => (
  <div id="container">
    {jsxHeading}
    <Title />
    Hello Dev.
    {number}
  </div>
);
