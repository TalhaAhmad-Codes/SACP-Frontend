export const adminResponseMap = (data) => ({
    id: data.id,
    institution_id: data.institution_id,
    user_id: data.user_id,
    first_name: data.first_name,
    last_name: data.last_name
})


export const adminPageResponseMap = (data) => ({
    item: data.items.map(adminResponseMap),
    total: data.totalCount
})