import React from "react";

function Tables() {
  return (
    <div>
      <h2>Difference Between Functional and Class Components</h2>

      <table>
        <tr>
          <th>Functional Components</th>
          <th>Class Components</th>
        </tr>
        <tr>
          <td>
            A functional component is just a plain JavaScript function that
            accepts props as an argument and returns a React element.
          </td>
          <td>
            A class component requires you to extend from React. Component and
            create a render function which returns a React element.
          </td>
        </tr>
        <tr>
          <td>There is no render method used in functional components.</td>
          <td>It must have the render() method returning HTML</td>
        </tr>
        <tr>
          <td>
            Also known as Stateless components as they simply accept data and
            display them in some form , that is they are mainly responsible for
            rendering UI.
          </td>
          <td>
            Also known as Stateful components because they implement logic and
            state.
          </td>
        </tr>
        <tr>
          <td>
            React lifecycle methods (for example, componentDidMount) cannot be
            used in functional components.
          </td>
          <td>
            React lifecycle methods can be used inside class components (for
            example, componentDidMount).
          </td>
        </tr>
      </table>
    </div>
  );
}
export default Tables;
