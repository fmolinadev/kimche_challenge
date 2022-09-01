export const goBack = (e) => {
  window.history.go(-1);
};

export const cleanDecoration = { textDecoration: 'none', color: 'inherit' };

export const filterByContinent = (ref) => {
  const groups = ref.reduce((groups, item) => {
    const group = groups[item.continent.name] || [];
    group.push(item);
    groups[item.continent.name] = group;
    return groups;
  }, {});
  return Object.entries(groups);
};

export const filterByLanguage = (ref) => {
  const groups = ref.reduce((groups, item) => {
    item.languages.map((len) => {
      const group = groups[len.name] || [];
      group.push(item);
      groups[len.name] = group;
    });
    return groups;
  }, {});
  return Object.entries(groups);
};
