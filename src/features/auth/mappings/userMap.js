// Single user map
export const userResponseMap = (data) => ({
  id: data.id,
  name: data.username,
  email: data.email,
  role: data.userRole,
});

// Paged result user map
export const userPagedResponseMap = (data) => ({
  item: data.items.map(userResponseMap),
  total: data.totalCount,
});
