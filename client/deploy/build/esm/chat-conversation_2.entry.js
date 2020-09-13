import { r as registerInstance, h, H as Host, c as createEvent } from './index-8be08bda.js';

const chatConversationCss = ":host{display:block}";

const ChatConversation = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("div", null, this.chatmessages.map((item, index) => (h("div", null, index, ": ", h("strong", null, item.name), " - ", item.content))))));
  }
};
ChatConversation.style = chatConversationCss;

const chatMessageCss = ":host{display:block}";

const ChatMessage = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.messageEvent = createEvent(this, "messageEvent", 7);
  }
  handleChange(event) {
    this.value = event.target.value;
  }
  handleClick() {
    this.messageEvent.emit(this.value);
    this.value = '';
  }
  render() {
    return (h(Host, null, h("div", { class: "chat-message" }, h("input", { type: "text", value: this.value, onInput: event => this.handleChange(event) }), h("button", { onClick: () => this.handleClick() }, "Send"))));
  }
};
ChatMessage.style = chatMessageCss;

export { ChatConversation as chat_conversation, ChatMessage as chat_message };
