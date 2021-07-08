const config = {
  baseUrl: 'https://truepool.io/v1',
  daysForChart: 60,
  startingDay: new Date(2021, 7-1, 2),
};

// TODO: Do something better
if (window.location.host !== 'truepool.io' && window.location.host !== 'www.truepool.io') {
  config.baseUrl = 'https://dev.truepool.io/v1'
}

export { config };
