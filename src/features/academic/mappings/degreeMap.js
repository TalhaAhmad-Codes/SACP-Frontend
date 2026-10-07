export const degreeResponseMap = (data) => ({
  id: data.id,
  title: data.title,
  code: data.code,
  dept_id: data.department_id,
});

export const degreePagedResponseMap = (data) => ({
  item: data.items.map(degreeResponseMap),
  total: data.totalCount,
});
