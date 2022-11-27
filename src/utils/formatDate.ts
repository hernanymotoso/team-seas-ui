import { format } from 'date-fns';

const formatDate = (time?: string | number | Date) => {
  if (!time) {
    // eslint-disable-next-line no-useless-return
    return;
  }

  return format(new Date(time), 'Pp');
};

export default formatDate;
