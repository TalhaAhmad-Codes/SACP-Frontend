export const institutionResponseMap = (data) => ({
  id: data.id,
  name: data.name,
});

export const institutionPagedResponseMap = (data) => ({
  item: data.items.map(institutionResponseMap),
  total: data.totalCount,
});
