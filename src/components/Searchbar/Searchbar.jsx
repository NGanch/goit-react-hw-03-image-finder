import React from 'react';
import { toast } from 'react-toastify';

import { FiSearch } from 'react-icons/fi';
import {
  Header,
  FormBtn,
  InputSearch,
  SearchFormStyled,
} from './SearchBar.styled';

export class Searchbar extends React.Component {
  state = {
    searchName: '',
  };

  // handleSearch = evt => {
  //   const {searchName} = evt.currentTarget;
  //   this.setState({
  //     searchName: value,
  //   });
  // }
  handleSearch = evt => {
    this.setState({ searchName: evt.currentTarget.value.toLowerCase() });
  };
  //---- Опрацювання форми -----

  handleSubmit = evt => {
    evt.preventDefault();
    if (this.state.searchName.trim() === '') {
      toast('🦄 Type a name of picture.', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });

      // alert('send name');
      return;
    }
    //Виклик функції  Submit
    this.props.onSubmit(this.state.searchName);
    this.setState({ searchName: '' });
    // console.log(this.state)
    // Очишення
    // this.reset();
  };
  // reset = () => {
  //   this.setState({searchName: ''});
  // }

  render() {
    const { searchName } = this.state;
    return (
      <Header>
        <SearchFormStyled onSubmit={this.handleSubmit}>
          <InputSearch
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={searchName}
            onChange={this.handleSearch}
          />
          <FormBtn type="submit">
            <FiSearch fontSize="1.5em" />
          </FormBtn>
        </SearchFormStyled>
      </Header>
    );
  }
}
