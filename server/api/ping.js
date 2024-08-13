export default defineEventHandler(async (event) => {
  const uri = `https://jsonplaceholder.typicode.com/todos/1`;
  const { data } = await $fetch(uri);

  return data;
});
