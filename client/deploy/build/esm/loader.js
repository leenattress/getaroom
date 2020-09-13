import { p as promiseResolve, b as bootstrapLazy } from './index-8be08bda.js';

/*
 Stencil Client Patch Esm v2.0.3 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return bootstrapLazy([["chat-conversation_2",[[1,"chat-conversation",{"chatmessages":[16]}],[1,"chat-message",{"value":[32]}]]],["chat-client",[[1,"chat-client",{"socketServer":[1,"socket-server"],"username":[1],"channel":[1],"messages":[32],"init":[64]},[[0,"messageEvent","messageSendHandler"]]]]]], options);
  });
};

export { defineCustomElements };
