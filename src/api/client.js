export async function getClient(id) {
  let response = await fetch("http://localhost:3132/api/v1/clients/" + id);
  return await response.json();
}
