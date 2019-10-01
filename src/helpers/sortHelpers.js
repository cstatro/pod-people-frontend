const R = require("ramda");

const getLength = obj => obj.length;
export const sortByFollowerTotal = R.sortBy(
  R.compose(
    getLength,
    R.prop("followers")
  )
);
