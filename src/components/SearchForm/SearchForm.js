import { Wrapper, Input, Icon, Button } from './SearchForm.styled';

export const SearchForm = ({ value, onChange }) => {
  return (
    <Wrapper>
      <Icon />
      <Input
        type="text"
        autoComplete="off"
        placeholder="Search movie"
        value={value}
        onChange={e => onChange(e.target.value)}
      />
      <Icon />
      <Button type="submit">Search</Button>
    </Wrapper>
  );
};
