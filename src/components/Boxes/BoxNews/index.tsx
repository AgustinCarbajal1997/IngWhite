import React, {useState} from 'react';
import {Post} from '../../../models/models';
import NewsDetail from './NewsDetail';
import NewsPreview from './NewsPreview';
const BoxNews = ({item}: {item: Post}) => {
  const [open, setOpen] = useState<boolean>(false);
  const handleTouch = () => {
    setOpen(!open);
  };

  return (
    <>
      {!open ? (
        <NewsPreview item={item} handleTouch={handleTouch} />
      ) : (
        <NewsDetail item={item} handleTouch={handleTouch} />
      )}
    </>
  );
};

export default BoxNews;
