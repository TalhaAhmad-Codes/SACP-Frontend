export const sessionResponseMap=(data)=>({
    id: data.id,
    name: data.id,
    start_date: data.start_date,
    end_date: data.end_date,
    is_expired: data.is_expired
})

export const sessionPageResponseMap=(data)=>({
    item: data.items.map(sessionResponseMap),
    total: data.totalCount
})