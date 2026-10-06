export const examlogResponseMap=(data)=>({
    id: data.id,
    exam_id: data.exam_id,
    faculty_id: data.faculty_id,
    action: data.action,
    description: data.description
})

export const examlogPageResponseMap=(data)=>({
    item: data.items.map(examlogResponseMap),
    total: data.totalCount
})