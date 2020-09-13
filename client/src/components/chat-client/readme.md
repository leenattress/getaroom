# chat-client



<!-- Auto Generated Below -->


## Properties

| Property       | Attribute       | Description | Type     | Default     |
| -------------- | --------------- | ----------- | -------- | ----------- |
| `channel`      | `channel`       |             | `string` | `'General'` |
| `socketServer` | `socket-server` |             | `string` | `undefined` |
| `username`     | `username`      |             | `string` | `'johndoe'` |


## Events

| Event              | Description | Type               |
| ------------------ | ----------- | ------------------ |
| `messageSendEvent` |             | `CustomEvent<any>` |


## Dependencies

### Depends on

- [chat-conversation](../chat-conversation)
- [chat-message](../chat-message)

### Graph
```mermaid
graph TD;
  chat-client --> chat-conversation
  chat-client --> chat-message
  style chat-client fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
