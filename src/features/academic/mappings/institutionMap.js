export const institutionResponseMap=(data)=>({
   id: data.id,
   name: data.name,
})

export const institutionPageResponseMap=(data)=>{
  item: data.items.map(userResponseMap),
  total: data.totalCount
}