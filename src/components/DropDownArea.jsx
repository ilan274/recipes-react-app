import React from 'react';
import PropTypes from 'prop-types';

const DropDownArea = ({ area }) => (
  <option
    data-testid={`${area}-option`}
    value={area}
  >
    {area}
  </option>
);

DropDownArea.propTypes = {
  area: PropTypes.string.isRequired,
};

export default DropDownArea;
