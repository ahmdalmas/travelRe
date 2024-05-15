import moment from 'moment';

const isInAWeek = (date) => {
  const now = moment();
  const targetDate = moment(date, 'DD MMM, hh:mm A');
  return targetDate.diff(now, 'days') <= 7;
};

const isInAMonth = (date) => {
  const now = moment();
  const targetDate = moment(date, 'DD MMM, hh:mm A');
  return targetDate.diff(now, 'days') <= 30;
};