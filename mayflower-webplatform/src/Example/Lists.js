import React from 'react';

const numbers = [1, 2, 3, 4, 5];
const dblnrs = numbers.map((number) =>
  <li key={number.toString()}>{number}</li>
);

class Lists extends React.Component {
    render() {
        return (
            <ul>
                {dblnrs}
            </ul>
        );
    }
}


export default Lists;