export const getStatusClass = (status: string) => {
  const classes = ['status'];

  if (status === 'Hungrig') {
    classes.push('hungry');
  } else if (status === 'Snart hungrig') {
    classes.push('warning');
  }

  return classes.join(' ');
};
