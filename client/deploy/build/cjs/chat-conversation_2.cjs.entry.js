'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-ebe33a26.js');

const chatConversationCss = ":host{display:block}";

const ChatConversation = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, index.h("div", null, this.chatmessages.map((item, index$1) => (index.h("div", null, index$1, ": ", index.h("strong", null, item.name), " - ", item.content))))));
  }
};
ChatConversation.style = chatConversationCss;

const chatMessageCss = ":host{display:block}";

const ChatMessage = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.messageEvent = index.createEvent(this, "messageEvent", 7);
  }
  handleChange(event) {
    this.value = event.target.value;
  }
  handleClick() {
    this.messageEvent.emit(this.value);
    this.value = '';
  }
  render() {
    return (index.h(index.Host, null, index.h("div", { class: "chat-message" }, index.h("input", { type: "text", value: this.value, onInput: event => this.handleChange(event) }), index.h("button", { onClick: () => this.handleClick() }, "Send"))));
  }
};
ChatMessage.style = chatMessageCss;

exports.chat_conversation = ChatConversation;
exports.chat_message = ChatMessage;
