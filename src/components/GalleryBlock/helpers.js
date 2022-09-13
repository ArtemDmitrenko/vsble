const cleanObject = (obj, garbageArray) => {
  if (Object.keys(obj).length !== 0) {
    return Object.fromEntries(
      Object.entries(obj).filter((el) => !garbageArray.includes(el[1]))
    );
  }
  return obj;
};

export { cleanObject };
