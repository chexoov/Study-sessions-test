export default (httpJson) => ({
   jsonGet: () => httpJson.get("/posts"),
   jsonPost: (data) => httpJson.post("/posts", data),
   jsonDelete: (id) => httpJson.delete(`/posts/${id}`),
   jsonPatch: (id, data) => httpJson.patch(`/posts/${id}`, data),
});