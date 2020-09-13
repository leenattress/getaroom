import { EventEmitter } from '../../stencil-public-runtime';
export declare class ChatMessage {
  value: string;
  handleChange(event: any): void;
  handleClick(): void;
  messageEvent: EventEmitter;
  render(): any;
}
