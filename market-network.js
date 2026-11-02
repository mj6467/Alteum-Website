// Homepage globe market list with a deliberately sparse set of illustrative routes.
// Add a market here with its currency, label and coordinates, then add one route below.
// This illustration does not configure payment availability elsewhere on the site.
window.ALTEUM_GLOBE_NETWORK = {
  markets: [
    { id: 'mexico', currency: 'MXN', label: 'MXN / MEXICO', longitude: -99, latitude: 19 },
    { id: 'colombia', currency: 'COP', label: 'COP / COLOMBIA', longitude: -74, latitude: 5 },
    { id: 'united-states', currency: 'USD', label: 'USD / USA', longitude: -80.19, latitude: 25.76, labelX: 12, labelY: -12 },
    { id: 'spain', currency: 'EUR', label: 'EUR / EUROPE', longitude: -3.7038, latitude: 40.4168, labelX: -115, labelY: -12 }
  ],
  additionalLocations: [],
  routes: [['mexico', 'united-states'], ['mexico', 'colombia'], ['mexico', 'spain'], ['united-states', 'colombia'], ['united-states', 'spain'], ['spain', 'colombia']]
};
