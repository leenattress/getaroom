import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'chat-client',
  styleUrl: 'chat-client.css',
  shadow: true,
})
export class ChatClient {

  render() {
    return (
      <Host>
        <p>I am the chat component, ready to be coded. Please code me.</p>
      </Host>
    );
  }

}
