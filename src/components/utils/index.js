export const getUniqueOptions = data => {
  const options = [];
  data.map(eachData => {
    if(!options.includes(eachData.publisher.toLowerCase())) {
      options.push(eachData.publisher.toLowerCase());
    }
  });
  return options;
}