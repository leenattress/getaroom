import { Component, Host, h, Prop } from '@stencil/core';
import { Message } from '../../interfaces/chat.interface';

@Component({
  tag: 'chat-conversation',
  styleUrl: 'chat-conversation.css',
  shadow: true,
})
export class ChatConversation {
  @Prop() chatmessages: Message[];

  render() {
    return (
      <Host>
        <div>
          {this.chatmessages.map((item: any, index: number) => (
            <div>
              {index}: <strong>{item.name}</strong> - {item.content}
            </div>
          ))}
        </div>
      </Host>
    );
  }
}
