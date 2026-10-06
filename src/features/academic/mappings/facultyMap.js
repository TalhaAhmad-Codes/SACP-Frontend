export const facultyResponseMap=(data)=>({
    id: data.id,
    user_id: data.id,
    department: data.department.id,
    first_name: data.first_name,
    last_name: data.last_name,
    role: data.role,
    access_code: data.access_code,
    doj: data.doj
})

export const facultyPageResponseMap=(data)=>({
    item: data.items.map(facultyResponseMap),
    total: data.totalCount,
})