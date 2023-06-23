import { Wrapper, Input, Icon, Button } from './SearchForm.styled';

const SearchForm = ({ value, onSubmit }) => {
  return (
    <Wrapper>
      <Icon />
      <Input
        type="text"
        // autoComplete="off"
        placeholder="Search movie"
        onSubmit={e => onSubmit(e.target.value)}
      />
      <Icon />
      <Button type="submit">Search</Button>
    </Wrapper>
  );
};

export default SearchForm;
