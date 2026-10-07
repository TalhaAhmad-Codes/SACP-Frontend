export const courseAssignmentResponseMap = (data) => ({
  id: data.id,
  course_id: data.course_id,
  faculty_id: data.faculty_id,
  session_id: data.session.id,
  is_active: data.is_active,
});

export const courseAssignmentPagedResponseMap = (data) => ({
  item: data.items.map(courseAssignmentResponseMap),
  total: data.totalCount,
});
