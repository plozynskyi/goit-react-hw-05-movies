import styled from '@emotion/styled';

const SearchFormBox = styled.form`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border: 2px solid coral;
  border-radius: 3px;
  overflow: hidden;
`;

const SearchFormButton = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
  background-image: url('https://cdn-icons-png.flaticon.com/512/954/954591.png');
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  :hover {
    opacity: 1;
  }
`;

const SearchFormInput = styled.input`
  display: inline-block;
  width: 100%;
  margin-left: 10px;
  font: inherit;
  font-size: 18px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  ::placeholder {
    font: inherit;
    font-size: 16px;
  }
`;

export { SearchFormBox, SearchFormButton, SearchFormInput };
