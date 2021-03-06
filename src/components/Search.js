/** @jsx jsx */
// eslint-disable-next-line
import React from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line
import { Button, Input, jsx } from 'theme-ui';
import { ReactComponent as SearchIcon } from '../svg/search.svg';

function Search(props) {
  const { value, onChange, onSubmit, children } = props;

  return (
    <form onSubmit={onSubmit} sx={{ display: 'flex', flexGrow: 1, mt: [3, 'auto'] }}>
      <SearchIcon sx={{ display: ['none', 'block'], fill: 'primary' }} />
      <Input value={value} onChange={onChange} sx={{ flexGrow: 1, mx: 2 }} />
      <Button type="submit" py={2}>
        <span sx={{ display: ['none', 'inline'] }}>{children}</span>
        <SearchIcon sx={{ display: [null, 'none'], fill: 'white' }} />
      </Button>
    </form>
  );
}

Search.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default React.memo(Search);
