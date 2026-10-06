export departmentResponseMap=(data)=>({
    id: data.id,
    name:data.name,
    institution_id: data.institution_id,
    code: data.code,
    description: data.description
})

export departmentPageResponseMap=(data)=>{
    item: data.items.map(departmentMapResponse),
    total: data.totalCount
}