import React from 'react';

class Pokemon extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <li>
        { this.props.name }
        <button type="button" onClick={
          (event) => { this.props.handleClick(this.props.name) }
        }>Select</button>
      </li>
    );
  }
};

export default Pokemon;
