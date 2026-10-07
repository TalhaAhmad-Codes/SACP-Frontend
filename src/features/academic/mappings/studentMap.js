export const studentResponseMap = (data) => ({
  id: data.id,
  name: `${data.first_name} ${data.last_name}`,
  department_id: data.department_id,
  degree_id: data.degree_id,
  reg_no: data.registration_number,
  enrollment_date: data.enrollment_date,
  academic_status: data.academic_status,
  semester: data.semester,
});

export const studentPagedResponseMap = (data) => ({
  item: data.items.map(studentResponseMap),
  total: data.totalCount,
});
