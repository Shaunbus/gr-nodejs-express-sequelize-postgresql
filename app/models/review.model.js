module.exports = (sequelize, Sequelize) => {
  const Review = sequelize.define("reviews", {
    name: {
      type: Sequelize.STRING,
    },
    rating: {
      type: Sequelize.FLOAT,
    },
    year: {
      type: Sequelize.STRING,
    },
    platform: {
      type: Sequelize.STRING,
    },
  });

  return Review;
};
