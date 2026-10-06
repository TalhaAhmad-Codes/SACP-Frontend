export const attendenceResponseMap=(data)=>({
    id: data.id,
    student_id: data.student_id,
    session_id: data.session_id,
    faculty_id: data.faculty_id,
    course_id: data.course_id,
    status: data.status,
    date: data.date
})

export const attendencePageResponseMap=(data)=>({
    item: data.items.map(attendenceResponseMap),
    total: data.totalCount
})