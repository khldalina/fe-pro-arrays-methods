import { goods } from './goods.js';

/**
 * @param {string} brand
 * @returns {*}
 */
const brandFilter = (brand) => {
  const filteredBrands = goods.filter((good) => {
    return good.brand === brand;
  });
  return filteredBrands
};

/**
 * @param {string} color
 * @returns {*}
 */
const colorFilter = (color) => {
  const filteredColors = goods.filter((good) => {
    return good.color === color;
  });
  return filteredColors
};

/**
 * @param {string} model
 * @returns {*}
 */
const modelFilter = (model) => {
  const filteredModels = goods.filter((good) => {
    return good.model === model;
  });
  return filteredModels
};

/**
 * @param {number} memory
 * @returns {*}
 */
const memoryFilter = (memory) => {
  const filteredMemory = goods.filter((good) => {
    return good.memory === memory;
  });
  return filteredMemory
};

/**
 * @param {number} price
 * @returns {*}
 */
const priceFilter = (price) => {
  const filteredPrice = goods.filter((good) => {
    return good.price === price;
  });
  return filteredPrice
};

/**
 * @param {string} country
 * @returns {*}
 */
const countryFilter = (country) => {
  const filteredCountry = goods.filter((good) => {
    return good.country === country;
  });
  return filteredCountry
};

/**
 * @param {string} os
 * @returns {*}
 */
const osFilter = (os) => {
  const filteredOs = goods.filter((good) => {
    return good.os === os;
  });
  return filteredOs
};

/**
 * @param {number} from
 * @param {number} to
 */
const rangeFilter = (from, to) => {
  const filteredRange = goods.filter((good) => {
    return good.price >= 6499 && good.price <= 48999;
  });
  return filteredRange
};


const minPriceReducer = (accum, current,) => {
  const minPrice = goods.reduce((accum, current) =>{
    return Math.min(accum, current);
  },+Infinity);
  return minPrice;
};

const maxPriceReducer = (accum, current,) => {
  const maxPrice = goods.reduce((accum, current) =>{
    return Math.max(accum, current);
  },-Infinity);
  return maxPrice;
};
const toMaxSorter = (max,min) => {
  const sorterMax = goods.sort((good) => {
    if (max.price > min.price) return -1;
    if (max.price < min.price) return 1;
    return 0;
  });
  return sorterMax;
};
const toMinSorter = (max,min) => {
  const sorterMin = goods.sort((good) => {
    if (max.price > min.price) return 1;
    if (max.price < min.price) return -1;
    return 0;
  });
  return sorterMin;
};
export const filters = {
  brandFilter,
  countryFilter,
  priceFilter,
  osFilter,
  colorFilter,
  memoryFilter,
  modelFilter,
  rangeFilter,
};

export const reducers = {
  minPriceReducer,
  maxPriceReducer,
};

export const sorters = {
  toMaxSorter,
  toMinSorter,
};
