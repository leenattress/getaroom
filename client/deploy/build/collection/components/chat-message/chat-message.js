import { Component, Host, Event, h, State } from '@stencil/core';
export class ChatMessage {
  handleChange(event) {
    this.value = event.target.value;
  }
  handleClick() {
    this.messageEvent.emit(this.value);
    this.value = '';
  }
  render() {
    return (h(Host, null,
      h("div", { class: "chat-message" },
        h("input", { type: "text", value: this.value, onInput: event => this.handleChange(event) }),
        h("button", { onClick: () => this.handleClick() }, "Send"))));
  }
  static get is() { return "chat-message"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["chat-message.css"]
  }; }
  static get styleUrls() { return {
    "$": ["chat-message.css"]
  }; }
  static get states() { return {
    "value": {}
  }; }
  static get events() { return [{
      "method": "messageEvent",
      "name": "messageEvent",
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
}
