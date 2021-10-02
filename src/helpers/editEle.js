const editEle = (inpField) => {
  inpField.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      const currDescription = e.target.value;
      inpField.placeholder = `${currDescription}`
    } 
  });
  return inpField.value;
};

export default editEle;