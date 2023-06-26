import PropTypes from 'prop-types';
import { Wrapper, Input, Icon, Button } from './SearchForm.styled';
import 'react-toastify/dist/ReactToastify.min.css';

const SearchForm = ({ value, onChange, onSubmit }) => {
  return (
    <Wrapper onSubmit={onSubmit}>
      <Icon />
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
