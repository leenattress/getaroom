import { attachShadow, createEvent, h, Host, proxyCustomElement } from '@stencil/core/internal/client';
export { setAssetPath } from '@stencil/core/internal/client';

const chatClientCss = ":host{display:block}";

const ChatClient = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    attachShadow(this);
    this.messageSendEvent = createEvent(this, "messageSendEvent", 7);
    this.messages = [];
  }
  messageSendHandler(event) {
    console.log('EVENT', { action: 'sendMessage', name: this.username, channelId: this.channel, content: event.detail });
    this.socket.send(JSON.stringify({ action: 'sendMessage', name: this.username, channelId: this.channel, content: event.detail }));
  }
  setupSockets() {
    this.socket = new WebSocket(this.socketServer);
    this.socket.onopen = event => {
      console.log(`Connection established`, event);
    };
    this.socket.onclose = event => {
      console.log(`Connection closed`, event);
    };
    this.socket.onmessage = event => {
      const message = JSON.parse(event.data);
      if (message.event === 'channel_message') {
        console.log(message.name + ' says: ' + message.content);
        this.messages.push({ name: message.name, content: message.content });
        this.messages = [...this.messages]; // trigger update
        console.log('MESSAGES', this.messages);
      }
      if (message.event === 'subscriber_sub') {
        console.log(message);
      }
      if (message.event === 'subscriber_unsub') {
        console.log(message);
      }
    };
  }
  async init(config) {
    const { username, server, channel } = config;
    this.username = username;
    this.socketServer = server;
    this.channel = channel;
    if (this.socketServer) {
      this.setupSockets();
    }
  }
  componentDidLoad() {
    if (this.socketServer) {
      this.setupSockets();
    }
  }
  render() {
    return (h(Host, null, h("chat-conversation", { chatmessages: this.messages }), h("chat-message", null)));
  }
  static get style() { return chatClientCss; }
};

const chatConversationCss = ":host{display:block}";

const ChatConversation = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    attachShadow(this);
  }
  render() {
    return (h(Host, null, h("div", null, this.chatmessages.map((item, index) => (h("div", null, index, ": ", h("strong", null, item.name), " - ", item.content))))));
  }
  static get style() { return chatConversationCss; }
};

const chatMessageCss = ":host{display:block}";

const ChatMessage = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    attachShadow(this);
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
  static get style() { return chatMessageCss; }
};

const ChatClient$1 = /*@__PURE__*/proxyCustomElement(ChatClient, [1,"chat-client",{"socketServer":[1,"socket-server"],"username":[1],"channel":[1],"messages":[32]},[[0,"messageEvent","messageSendHandler"]]]);
const ChatConversation$1 = /*@__PURE__*/proxyCustomElement(ChatConversation, [1,"chat-conversation",{"chatmessages":[16]}]);
const ChatMessage$1 = /*@__PURE__*/proxyCustomElement(ChatMessage, [1,"chat-message",{"value":[32]}]);
const defineCustomElements = (opts) => {
  if (typeof customElements !== 'undefined') {
    [
      ChatClient$1,
  ChatConversation$1,
  ChatMessage$1
    ].forEach(cmp => {
      if (!customElements.get(cmp.is)) {
        customElements.define(cmp.is, cmp, opts);
      }
    });
  }
};

export { ChatClient$1 as ChatClient, ChatConversation$1 as ChatConversation, ChatMessage$1 as ChatMessage, defineCustomElements };
