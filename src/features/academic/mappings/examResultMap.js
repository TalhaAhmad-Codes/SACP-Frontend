export const examResultResponseMap=(data)=>({
    id: data.id,
    student_id: data.student_id,
    exam_id: data.exam_id,
    obtained_marks: data.obtained_marks,
    grade: data.grade,
    gpa: data.gpa,
    status: data.status
})

export const examResultPageResponseMap=(data)=>({
    item: data.items.map(examResultResponseMap),
    total: data.totalCount
})