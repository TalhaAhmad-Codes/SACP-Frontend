export const degreeResponseMap=(data)=>({
    id: data.id,
    title: data.title,
    code: data.code,
    department_id: data.department_id
})

export const degreePageResponseMap=(data)=>({
    item: data.items.map(degreeResponseMap),
      total: data.totalCount
})