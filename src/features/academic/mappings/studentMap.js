export const studentResponseMap=(data)=>({
    id: data.id,
    first_name: data.first_name,
    last_name: data.last_name,
    department_id: data.department_id,
    degree_id: data.degree_id,
    registration_number: data.registration_number,
     enrollment_date: data.enrollment_date,
     Academic_status: data.Academic_status,
     semester: data.semester

})

export const studentPageResponseMap=(data)=>({
    item: data.items.map(studentResponseMap),
    total: data.totalCount
})