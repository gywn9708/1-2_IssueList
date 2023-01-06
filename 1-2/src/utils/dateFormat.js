const dateFormat = (date) => {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const dateValue = new Date(date).toLocaleDateString("ko", options);
  return dateValue;
};

export default dateFormat;
