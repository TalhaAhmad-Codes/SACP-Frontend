
## 1. Response mapping with pagination

Your backend returns:

```json
{
  "items": [
    {
      "id": "123",
      "fullname": "Talha Ahmad",
      "email": "talha@example.com",
      "role": "Admin"
    }
  ],
  "totalCount": 150
}
```

I'd create:

```text
features/
└── users/
    ├── api/
    │   └── userApi.js
    ├── mappings/
    │   └── userMapper.js
    ├── hooks/
    ├── components/
    └── pages/
```

### `userMapper.js`

```js
export const mapUserResponse = (data) => ({
    id: data.id,
    name: data.fullname,
    email: data.email,
    role: data.role,
});

export const mapPaginatedUsersResponse = (data) => ({
    items: data.items.map(mapUserResponse),
    totalCount: data.totalCount,
});
```

Now your API layer:

### `userApi.js`

```js
import api from "@shared/services/api";
import {
    mapUserResponse,
    mapPaginatedUsersResponse,
} from "../mappings/userMapper";

export const getUsers = async (params) => {
    const response = await api.get("/users", { params });

    return mapPaginatedUsersResponse(response.data);
};

export const getUserById = async (id) => {
    const response = await api.get(`/users/${id}`);

    return mapUserResponse(response.data);
};
```

The rest of your frontend never needs to know that the backend calls it `fullname`.

```js
const users = await getUsers({
    page: 1,
    pageSize: 20,
});

console.log(users.items[0].name);
console.log(users.totalCount);
```

---

# 2. What about filters?

This is where I'd make **request mapping** useful.

Suppose your frontend wants to work with:

```js
const filters = {
    page: 1,
    pageSize: 20,
    search: "Talha",
    role: "Admin",
    departmentId: "abc",
};
```

But your backend API expects:

```json
{
    "pageNumber": 1,
    "pageSize": 20,
    "searchTerm": "Talha",
    "roleId": "Admin",
    "department_id": "abc"
}
```

Don't let your React components know those backend names.

Create:

```js
export const mapUserFiltersToRequest = (filters) => ({
    pageNumber: filters.page,
    pageSize: filters.pageSize,
    searchTerm: filters.search,
    roleId: filters.role,
    department_id: filters.departmentId,
});
```

Then:

```js
export const getUsers = async (filters) => {
    const params = mapUserFiltersToRequest(filters);

    const response = await api.get("/users", { params });

    return mapPaginatedUsersResponse(response.data);
};
```

Now your frontend uses:

```js
await getUsers({
    page: 1,
    pageSize: 20,
    search: "Talha",
    role: "Admin",
});
```

It doesn't care what the backend calls those properties.

---

# 3. What about POST/PUT/PATCH?

**Yes — map those too.**

This is actually the other half of the pattern.

Suppose your React registration form works with:

```js
const user = {
    name: "Talha Ahmad",
    email: "talha@example.com",
    password: "123456",
    role: "Admin",
};
```

But the backend DTO is:

```json
{
    "fullname": "Talha Ahmad",
    "email": "talha@example.com",
    "password": "123456",
    "userRole": "Admin"
}
```

Create:

```js
export const mapCreateUserToRequest = (user) => ({
    fullname: user.name,
    email: user.email,
    password: user.password,
    userRole: user.role,
});
```

Then:

```js
export const createUser = async (user) => {
    const request = mapCreateUserToRequest(user);

    const response = await api.post("/users", request);

    return mapUserResponse(response.data);
};
```

So:

```text
React Form
    │
    │ Frontend model
    ▼
mapCreateUserToRequest()
    │
    │ Backend DTO shape
    ▼
.NET API
```

And response:

```text
.NET API
    │
    │ Backend DTO / JSON
    ▼
mapUserResponse()
    │
    │ Frontend model
    ▼
React UI
```

---

# 4. Update operations

Same idea.

```js
export const mapUpdateUserToRequest = (user) => ({
    fullname: user.name,
    email: user.email,
    userRole: user.role,
});
```

Then:

```js
export const updateUser = async (id, user) => {
    const request = mapUpdateUserToRequest(user);

    const response = await api.put(`/users/${id}`, request);

    return mapUserResponse(response.data);
};
```

---

# 5. I'd organize the mapper like this

For SACP, I wouldn't create separate files for every tiny mapper initially.

For example:

```text
users/
├── api/
│   └── userApi.js
│
├── mappings/
│   └── userMapper.js
│
├── components/
├── hooks/
├── pages/
└── ...
```

And:

```js
// userMapper.js

// -------------------------
// Responses
// -------------------------

export const mapUserResponse = (data) => ({
    id: data.id,
    name: data.fullname,
    email: data.email,
    role: data.role,
});

export const mapPaginatedUsersResponse = (data) => ({
    items: data.items.map(mapUserResponse),
    totalCount: data.totalCount,
});


// -------------------------
// Requests
// -------------------------

export const mapUserFiltersToRequest = (filters) => ({
    pageNumber: filters.page,
    pageSize: filters.pageSize,
    searchTerm: filters.search,
    roleId: filters.role,
});

export const mapCreateUserToRequest = (user) => ({
    fullname: user.name,
    email: user.email,
    password: user.password,
    userRole: user.role,
});

export const mapUpdateUserToRequest = (user) => ({
    fullname: user.name,
    email: user.email,
    userRole: user.role,
});
```

---

## 6. The important rule

Think of your mapper layer as the **anti-corruption boundary** between your frontend and backend:

```text
                 BACKEND
                    │
              API Contract
                    │
                    ▼
          ┌──────────────────┐
          │     MAPPERS      │
          │                  │
          │ Response → Model │
          │ Model → Request  │
          │ Filters → Query  │
          └────────┬─────────┘
                   │
                   ▼
             FRONTEND MODEL
                   │
                   ▼
              React Components
```

Therefore, **yes, map both directions**.

| Operation            | Mapping?            | Example                          |
| -------------------- | ------------------- | -------------------------------- |
| GET response         | ✅                   | `fullname → name`                |
| Paginated GET        | ✅                   | `items → mapped items`           |
| Filters/query params | ✅                   | `page → pageNumber`              |
| POST body            | ✅                   | `name → fullname`                |
| PUT body             | ✅                   | `name → fullname`                |
| PATCH body           | ✅                   | frontend fields → backend fields |
| DELETE               | Usually unnecessary | Often only needs `id`            |
| File upload          | Sometimes           | Depends on API contract          |

And there's an important benefit: if tomorrow your backend changes:

```text
fullname → name
```

you update:

```js
mapUserResponse()
mapCreateUserToRequest()
mapUpdateUserToRequest()
```

**not 50 React components.**
