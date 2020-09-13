'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-ebe33a26.js');

const chatClientCss = ":host{display:block}";

const ChatClient = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.messageSendEvent = index.createEvent(this, "messageSendEvent", 7);
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
    return (index.h(index.Host, null, index.h("chat-conversation", { chatmessages: this.messages }), index.h("chat-message", null)));
  }
};
ChatClient.style = chatClientCss;

exports.chat_client = ChatClient;
