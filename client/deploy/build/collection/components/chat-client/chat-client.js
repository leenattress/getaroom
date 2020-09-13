import { Component, Host, h, Listen, Event, Prop, State, Method } from '@stencil/core';
export class ChatClient {
  constructor() {
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
    return (h(Host, null,
      h("chat-conversation", { chatmessages: this.messages }),
      h("chat-message", null)));
  }
  static get is() { return "chat-client"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["chat-client.css"]
  }; }
  static get styleUrls() { return {
    "$": ["chat-client.css"]
  }; }
  static get properties() { return {
    "socketServer": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "socket-server",
      "reflect": false
    },
    "username": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "username",
      "reflect": false
    },
    "channel": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "channel",
      "reflect": false
    }
  }; }
  static get states() { return {
    "messages": {}
  }; }
  static get events() { return [{
      "method": "messageSendEvent",
      "name": "messageSendEvent",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
  static get methods() { return {
    "init": {
      "complexType": {
        "signature": "(config: ChatConfig) => Promise<void>",
        "parameters": [{
            "tags": [],
            "text": ""
          }],
        "references": {
          "Promise": {
            "location": "global"
          },
          "ChatConfig": {
            "location": "import",
            "path": "../../interfaces/chat.interface"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "",
        "tags": []
      }
    }
  }; }
  static get listeners() { return [{
      "name": "messageEvent",
      "method": "messageSendHandler",
      "target": undefined,
      "capture": false,
      "passive": false
    }]; }
}
