import React, { Fragment } from 'react';
import { func } from 'prop-types';

const noop = () => {};

const TryCatch = props => {
  const render = () => {
    try {
      return props.render();
    } catch (err) {
      return props.onCatch(err);
    }
  };
  return <Fragment children={render()} />;
};

TryCatch.propTypes = {
  onCatch: func.isRequired,
  render: func.isRequired,
};

TryCatch.defaultProps = {
  onCatch: noop,
  render: noop,
};

export default TryCatch;
