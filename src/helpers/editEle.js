const editEle = (lbl, inpVal) => {
  lbl.innerHTML = '';
  lbl.style.innerHTML = `${inpVal.value}`;
  lbl.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      lbl.description = e.target.value;
    }}
  )
  return lbl;
};

export default editEle;