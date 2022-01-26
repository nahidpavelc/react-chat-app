import { EyeInvisibleFilled } from '@ant-design/icons';
import React from 'react';

const TheirMessage = ({ lastMessage, message }) => {
    const isFirstMessageByUser = !lastMessage || lastMessage.sender.user !== message.sender.username;

    return (
        <div className='message-row'>
            {isFirstMessageByUser && (
                <div
                    className='message-avatar'
                    style={{ backgroundImage: `url(${message?.sender?.avatar})` }}
                />
            )}

            {message?.attachment?.length > 0
                ? (
                    <img
                        src={message.attachment[0].file}
                        alt="message-attachment"
                        className="message-image"
                        style={{ marginLeft: isFirstMessageByUser ? '4px' : '48px' }}
                    />
                ) : (
                    <div className='message' style={{ float: 'left', backgroundColor: '#CABCDC', marginLeft: isFirstMessageByUser ? '4px' : '48px' }}>
                        {message.text}
                    </div>
                )
            }

        </div >
    );
};

export default TheirMessage;