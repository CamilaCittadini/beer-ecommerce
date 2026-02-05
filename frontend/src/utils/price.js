export const formatPrice = (cents) => {
  if (typeof cents === 'number') {
    return new Intl.NumberFormat('us-EN', {
      style: 'currency',
      currency: 'USD',
    }).format(cents / 100);
  }
  return '';
};
