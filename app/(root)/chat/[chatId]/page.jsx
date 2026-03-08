import ActiveChatLoader from '@/modules/messages/components/active-chat-loader';
import MessageWithForm from '@/modules/messages/components/message-with-form';
import React from 'react'

const Page = async ({params}) => {
    const {chatId} = await params;
  return (
    <div>
        <ActiveChatLoader chatId={chatId} />
        <MessageWithForm chatId={chatId}/>
    </div>
  )
}

export default Page
