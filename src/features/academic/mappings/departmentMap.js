export const departmentResponseMap=(data)=>({
    id: data.id,
    name:data.name,
    institution_id: data.institution_id,
    code: data.code,
    description: data.description
})

export const  departmentPageResponseMap=(data)=>({
    item: data.items.map(departmentResponseMap),
    total: data.totalCount
})