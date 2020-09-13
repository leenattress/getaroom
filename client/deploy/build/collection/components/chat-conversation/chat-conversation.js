import { Component, Host, h, Prop } from '@stencil/core';
export class ChatConversation {
  render() {
    return (h(Host, null,
      h("div", null, this.chatmessages.map((item, index) => (h("div", null,
        index,
        ": ",
        h("strong", null, item.name),
        " - ",
        item.content))))));
  }
  static get is() { return "chat-conversation"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["chat-conversation.css"]
  }; }
  static get styleUrls() { return {
    "$": ["chat-conversation.css"]
  }; }
  static get properties() { return {
    "chatmessages": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "Message[]",
        "resolved": "Message[]",
        "references": {
          "Message": {
            "location": "import",
            "path": "../../interfaces/chat.interface"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      }
    }
  }; }
}
