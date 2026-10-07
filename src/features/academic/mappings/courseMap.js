export const courseResponseMap = (data) => ({
  id: data.id,
  degree_id: data.degree_id,
  title: data.title,
  code: data.code,
  semester: data.semester,
  credit_hours: data.credit_hours,
});

export const coursePagedResponseMap = (data) => ({
  item: data.items.map(courseResponseMap),
  total: data.totalCount,
});
