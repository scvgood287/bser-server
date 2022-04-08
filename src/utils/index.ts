import { Issued } from 'src/types/api/open-api';

export const getToday = (): Issued => {
  const date = new Date();

  const year = date.getFullYear();
  const month = `0${date.getMonth() + 1}`.slice(-2);
  const day = `0${date.getDate()}`.slice(-2);

  return `${year}_${month}_${day}`;
};

export { default as apiUtils } from './api';