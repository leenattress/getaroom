/* GetaroomClient custom elements bundle */

import { Components, JSX } from "../types/components";

interface ChatClient extends Components.ChatClient, HTMLElement {}
export const ChatClient: {
  prototype: ChatClient;
  new (): ChatClient;
};

interface ChatConversation extends Components.ChatConversation, HTMLElement {}
export const ChatConversation: {
  prototype: ChatConversation;
  new (): ChatConversation;
};

interface ChatMessage extends Components.ChatMessage, HTMLElement {}
export const ChatMessage: {
  prototype: ChatMessage;
  new (): ChatMessage;
};

/**
 * Utility to define all custom elements within this package using the tag name provided in the component's source. 
 * When defining each custom element, it will also check it's safe to define by:
 *
 * 1. Ensuring the "customElements" registry is available in the global context (window).
 * 2. The component tag name is not already defined.
 *
 * Use the standard [customElements.define()](https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry/define) 
 * method instead to define custom elements individually, or to provide a different tag name.
 */
export declare const defineCustomElements: (opts?: any) => void;

/**
 * Used to manually set the base path where assets can be found.
 * If the script is used as "module", it's recommended to use "import.meta.url",
 * such as "setAssetPath(import.meta.url)". Other options include
 * "setAssetPath(document.currentScript.src)", or using a bundler's replace plugin to
 * dynamically set the path at build time, such as "setAssetPath(process.env.ASSET_PATH)".
 * But do note that this configuration depends on how your script is bundled, or lack of
 * bunding, and where your assets can be loaded from. Additionally custom bundling
 * will have to ensure the static assets are copied to its build directory.
 */
export declare const setAssetPath: (path: string) => void;

export { Components, JSX };

export * from '../types';
