import { Component, Host, Event, h, EventEmitter, State } from '@stencil/core';

@Component({
  tag: 'chat-message',
  styleUrl: 'chat-message.css',
  shadow: true,
})
export class ChatMessage {
  @State() value: string;

  handleChange(event) {
    this.value = event.target.value;
  }

  handleClick() {
    this.messageEvent.emit(this.value)
    this.value = '';
  }

  @Event()
  messageEvent: EventEmitter;

  render() {
    return (
      <Host>
        <div class="chat-message">
          <input type="text" value={this.value} onInput={event => this.handleChange(event)} />
          <button onClick={() => this.handleClick()}>Send</button>
        </div>
      </Host>
    );
  }
}
