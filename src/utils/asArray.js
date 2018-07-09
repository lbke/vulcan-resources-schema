module.exports = value => {
  if (!value) return [];
  return Array.isArray(value) ? value : [value];
};
