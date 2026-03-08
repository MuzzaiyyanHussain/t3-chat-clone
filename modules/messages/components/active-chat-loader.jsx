"use client"
import { useGetChatById } from '@/modules/chat/hooks/chat';
import { useChatStore } from '@/modules/store/chat-store'
import React, { useEffect } from 'react'

const ActiveChatLoader = ({ chatId }) => {
    const { setActiveChatId, setMessages, addChat, chats } = useChatStore();
    const { data } = useGetChatById();
    useEffect(() => {
        if (!chatId) return;
        setActiveChatId(chatId)
    }, [chatId, setActiveChatId]);

    useEffect(() => {
        if(!data || !data.succcess || !data.data) return;
         const chat = data.data;
    setMessages(chat.messages || []);
    if(!chats.some(c => c.id === chat.id)) {
        addChat(chat)
    }
    }, [data, setMessages, addChat, chats])

    return null;
}

export default ActiveChatLoader
