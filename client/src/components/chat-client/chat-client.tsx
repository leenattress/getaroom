import { Component, Host, h, Listen, EventEmitter, Event, Prop, State, Method } from '@stencil/core';
import { Message, ChatConfig } from '../../interfaces/chat.interface';

@Component({
  tag: 'chat-client',
  styleUrl: 'chat-client.css',
  shadow: true,
})
export class ChatClient {
  @Prop() socketServer: string;
  @Prop() username: string;
  @Prop() channel: string;
  socket: WebSocket;

  @State() messages: Message[] = [];

  @Listen('messageEvent')
  messageSendHandler(event: CustomEvent<any>) {
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

  @Method()
  async init(config: ChatConfig) {
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

  @Event()
  messageSendEvent: EventEmitter;

  render() {
    return (
      <Host>
        <chat-conversation chatmessages={this.messages}></chat-conversation>
        <chat-message></chat-message>
      </Host>
    );
  }
}
