import React from 'react';

const ChatFeed = (props) => {
    const { chats, activeChat, userName, messages } = props;

    const chat = chats && chats[activeChat];

    const renderMessages = () => {
        const keys = Object.keys(messages);

        return keys.map((key, index) => {
            const message = message[key];

        })
    }

    renderMessages();

    return (
        <div>
            ChatFeed
        </div>
    );
};

export default ChatFeed;