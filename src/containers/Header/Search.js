import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {changeSearchString, selectSearch} from "../../redux/slices/filtersSlice";
import {InputAdornment, OutlinedInput} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const Search = () => {
  const dispatch = useDispatch()

  const searchText = useSelector(selectSearch);

  const handleChange = (event) => {
    const {value} = event.target;
    dispatch(changeSearchString({search: value}))
  }

  return (
    <OutlinedInput
      id="search"
      type={'text'}
      value={searchText}
      endAdornment={
        <InputAdornment position="end">
          <SearchIcon />
        </InputAdornment>
      }
      onChange={handleChange}
      placeholder={'Search organization'}
    />
  );
};

export default Search;
