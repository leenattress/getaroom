'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-ebe33a26.js');

/*
 Stencil Client Patch Esm v2.0.3 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return index.bootstrapLazy([["chat-conversation_2.cjs",[[1,"chat-conversation",{"chatmessages":[16]}],[1,"chat-message",{"value":[32]}]]],["chat-client.cjs",[[1,"chat-client",{"socketServer":[1,"socket-server"],"username":[1],"channel":[1],"messages":[32],"init":[64]},[[0,"messageEvent","messageSendHandler"]]]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
