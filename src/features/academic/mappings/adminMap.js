export const adminResponseMap = (data) => ({
  id: data.id,
  institution_id: data.institution_id,
  user_id: data.user_id,
  name: `${data.first_name} ${data.last_name}`,
});

export const adminPagedResponseMap = (data) => ({
  item: data.items.map(adminResponseMap),
  total: data.totalCount,
});
