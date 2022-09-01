import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { loadCategory, handleCategory } from '../store/products';
import { Button, Menu, MenuItem } from '@material-ui/core';

function Categories(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    props.loadCategory();
  },[]);

  const CategoryPick = (props) => {
    return (
      <div>
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
    );
  };

  function handlePick(name, des) {
    setName(name);
    setDescription(des);
  }

  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Category
      </Button>
      {name && <CategoryPick />}
      <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
        {props.categories.categoryList.map((elm) => {
          return (
            <MenuItem
              onClick={() => {
                props.handleCategory(elm.name);
                handleClose();
                handlePick(elm.name, elm.description);
              }}
              key={elm.name}
            >
              {elm.name}
            </MenuItem>
          );
        })}
      </Menu>
    </div>
  );
}

const stateToProps = (state) => {
  return state;
};
const dispatchToProps = { loadCategory, handleCategory };
export default connect(stateToProps, dispatchToProps)(Categories);