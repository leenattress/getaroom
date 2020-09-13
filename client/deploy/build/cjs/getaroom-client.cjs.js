'use strict';

const index = require('./index-ebe33a26.js');

/*
 Stencil Client Patch Browser v2.0.3 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = (typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('getaroom-client.cjs.js', document.baseURI).href));
    const opts =  {};
    if ( importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return index.promiseResolve(opts);
};

patchBrowser().then(options => {
  return index.bootstrapLazy([["chat-conversation_2.cjs",[[1,"chat-conversation",{"chatmessages":[16]}],[1,"chat-message",{"value":[32]}]]],["chat-client.cjs",[[1,"chat-client",{"socketServer":[1,"socket-server"],"username":[1],"channel":[1],"messages":[32],"init":[64]},[[0,"messageEvent","messageSendHandler"]]]]]], options);
});
