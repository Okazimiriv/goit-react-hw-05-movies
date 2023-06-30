import PropTypes from 'prop-types';
import { Wrapper, Input, Icon, Button } from './SearchForm.styled';

const SearchForm = ({ value, onChange, onSubmit }) => {
  return (
    <Wrapper onSubmit={onSubmit}>
      <Input
        type="text"
        // autoComplete="off"
        placeholder="Search movie"
        onChange={onChange}
        value={value}
      />
      <Icon />
      <Button type="submit">Search</Button>
    </Wrapper>
  );
};

export default SearchForm;

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
