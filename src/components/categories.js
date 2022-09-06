import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadCategory, handleCategory } from '../store/actions';
import { Paper, Tabs, Tab } from '@material-ui/core';
import './category.scss';

function Categories() {
  const state = useSelector((state) => state);
  const dispatcher = useDispatch();
  const [value, setValue] = useState(null);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    dispatcher(loadCategory());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
          {state.categories.categoryList.map((elm) => {
            return (
              <Tab
                label={elm.name}
                onClick={() => {
                  dispatcher(handleCategory(elm.name));
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