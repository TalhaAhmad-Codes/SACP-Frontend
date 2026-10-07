export const examLogResponseMap = (data) => ({
  id: data.id,
  exam_id: data.exam_id,
  faculty_id: data.faculty_id,
  action: data.action,
  description: data.description,
});

export const examLogPagedResponseMap = (data) => ({
  item: data.items.map(examLogResponseMap),
  total: data.totalCount,
});
