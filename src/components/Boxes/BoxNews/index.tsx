import React, {useState} from 'react';
import {Post} from '../../../models/models';
import NewsDetail from '../../NewsDetails';
import NewsPreview from '../../NewsPreview';

const BoxNews = ({item}: {item: Post}) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleTouch = () => {
    setOpen(!open);
  };

  return (
    <>
      {open && <NewsDetail item={item} handleTouch={handleTouch} />}
      {!open && <NewsPreview item={item} handleTouch={handleTouch} />}
    </>
  );
};

export default BoxNews;
