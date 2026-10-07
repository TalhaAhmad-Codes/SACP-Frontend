export const courseEnrollmentResponseMap = (data) => ({
  id: data.id,
  course_id: data.course_id,
  session_id: data.session_id,
  student_id: data.student_id,
  status: data.status,
});

export const courseEnrollmentPagedResponseMap = (data) => ({
  item: data.items.map(courseEnrollmentResponseMap),
  total: data.totalCount,
});
