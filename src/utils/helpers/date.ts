import moment from 'moment';

const getDate = (): string => {
  const d = moment();
  const date = d.format();
  return date;
};

export default getDate;
