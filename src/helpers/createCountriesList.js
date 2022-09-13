const byField = (field) => {
  return (a, b) => (a[field] > b[field] ? 1 : -1);
};

const createCountriesList = (countriesArr) => {
  const keys = ["id", "englishName"];
  const filteredArr = countriesArr.map((n) =>
    Object.fromEntries(keys.map((k) => [k, n[k]]))
  );
  const sortedArr = filteredArr.sort(byField("englishName"));
  const resultArr = [
    ...sortedArr.filter(
      ({ englishName }) => englishName !== "...other territories"
    ),
    sortedArr[0],
  ];
  return resultArr.map((el) => ({
    value: el.id,
    label: el.englishName,
  }));
};

export default createCountriesList;
