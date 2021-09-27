const createEle = (eleType, eleClass, eleId, eleTxt = null
  ) => {
    const newEle = document.createElement(eleType);
    newEle.className = eleClass;
    newEle.id = eleId;
    newEle.textContent = eleTxt;
    return newEle;
}

export default createEle;