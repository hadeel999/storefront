import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories, getProduct } from '../store/actions';
import { Paper, Tabs, Tab } from '@material-ui/core';
import './category.scss';

function Categories() {
  const dispatcher = useDispatch();
  const state = useSelector((state) => state.categories);
  const [value, setValue] = useState(false);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  useEffect(() => {
    dispatcher(getCategories());
  }, [dispatcher]);

  const CategoryPick = () => {
    return (
      <div className="category">
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
    );
  };

  function handlePick(name, des) {
    setName(name);
    setDescription(des);
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Paper square>
        <Tabs
          value={value}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChange}
          aria-label="disabled tabs example"
        >
          {state.categoryList.map((elm) => {
            return (
              <Tab
                key={elm.name}
                label={elm.name}
                onClick={() => {
                  dispatcher(getProduct(elm.name));
                  handlePick(elm.name, elm.description);
                }}
              />
            );
          })}
        </Tabs>
      </Paper>
      {name && <CategoryPick />}
    </div>
  );
}

export default Categories;