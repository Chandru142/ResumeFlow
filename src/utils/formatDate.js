const formatDate = (dateStr) => {
  if (!dateStr) return '';

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const yyyymm = dateStr.match(/^(\d{4})-(\d{2})$/);
  if (yyyymm) {
    const monthIndex = parseInt(yyyymm[2]) - 1;
    if (monthIndex >= 0 && monthIndex < 12) {
      return `${months[monthIndex]} ${yyyymm[1]}`;
    }
  }

  const monYYYY = dateStr.match(/^([A-Za-z]{3})[:]?\s*(\d{4})$/);
  if (monYYYY) {
    return `${monYYYY[1]} ${monYYYY[2]}`;
  }

  return dateStr;
};

export default formatDate;
