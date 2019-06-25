export async function getConversation(userId, conversationId) {
  let response = await fetch("http://localhost:3132/api/v1/clients/" + userId + "/conversations/" + conversationId);
  return await response.json();
}
