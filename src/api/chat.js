import { getMessage } from "./messages";
import { getConversation } from "./conversations";

export function sendMessage(userId, conversationId) {

}

export async function getMessages(userId, conversationId) {
  const conversation = getConversation(userId, conversationId);

  let messages = [];

  if (conversation && conversation.messages) {
    for (var message in conversation.messages) {
      messages.push(getMessage(message.id));
    }
  }

  return messages;
}
