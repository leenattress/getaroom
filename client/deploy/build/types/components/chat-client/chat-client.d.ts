import { EventEmitter } from '../../stencil-public-runtime';
import { Message, ChatConfig } from '../../interfaces/chat.interface';
export declare class ChatClient {
  socketServer: string;
  username: string;
  channel: string;
  socket: WebSocket;
  messages: Message[];
  messageSendHandler(event: CustomEvent<any>): void;
  setupSockets(): void;
  init(config: ChatConfig): Promise<void>;
  componentDidLoad(): void;
  messageSendEvent: EventEmitter;
  render(): any;
}
