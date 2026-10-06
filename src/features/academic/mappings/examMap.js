export const examResponseMap=(data)=>({
    id: data.id,
    course_id: data.course_id,
    session_id: data.session_id,
    title: data.title,
    type: data.type,
    status: data.status,
    date_of_conduct: data.date_of_conduct,
    max_marks: data.max_marks
})

export const examPageResponseMap=(data)=>({
    item:data.items.map(examResponseMap),
    total: data.totalCount
})