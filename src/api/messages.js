export async function getMessage(id) {
  let response = await fetch("http://localhost:3132/api/v1/messages/" + id);
  return await response.json();
}
