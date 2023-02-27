import { useState } from 'react';

import {
  SearchFormBox,
  SearchFormButton,
  SearchFormInput,
} from './search-form.styled';

const SearchForm = ({ handleFormSubmit }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    handleFormSubmit(query);
  };

  return (
    <SearchFormBox onSubmit={handleSubmit}>
      <SearchFormInput
        value={query}
        onChange={event => setQuery(event.target.value)}
        // type="text"
        placeholder="Enter name of movie..."
      />
      <SearchFormButton type="submit"></SearchFormButton>
    </SearchFormBox>
  );
};

export default SearchForm;
