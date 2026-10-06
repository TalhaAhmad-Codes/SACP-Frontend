export const academicEventResponseMap=(data)=>({
    id: data.id,
    institution_id: data.institution_id,
    course_id: data.course_id,
    session_id: data.session_id,
    source_id: data.source_id,
    type: data.type,
    title: data.title,
    description: data.description
})

export const academicEventPageResponseMap=(data)=>({
    item: data.items.map(academicEventResponseMap),
    total: data.totalCount
})