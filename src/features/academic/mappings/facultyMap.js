export const facultyResponseMap = (data) => ({
  id: data.id,
  user_id: data.id,
  department: data.department.id,
  name: `${data.first_name} ${data.last_name}`,
  role: data.role,
  access_code: data.access_code,
  doj: data.doj,
});

export const facultyPagedResponseMap = (data) => ({
  item: data.items.map(facultyResponseMap),
  total: data.totalCount,
});
