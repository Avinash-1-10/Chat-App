import { Stack } from '@mui/material';
import React, { FC } from 'react';
import ChatItem from '../shared/ChatItem';
interface Props {
  w?: string;
  chats: {
    avatar: string;
    name: string;
    _id: string;
    groupChat: boolean;
    sameSender: boolean;
    isOnline: boolean;
    members: string[];
    newMessagesAlert: {
      chatId: string;
      count: number;
    }[];
  }[];
  chatId: string;
  onlineUsers: string[];
  handleDeleteChat: (chatId: string) => void;
}

const ChatList: FC<Props> = ({
  w = '100%',
  chats,
  chatId,
  onlineUsers,
  handleDeleteChat,
}) => {
  console.log(chats);
  return (
    <Stack width={w}>
      {chats.map((chat, index) => {
        const { avatar, _id, name, groupChat, members, newMessagesAlert } = chat;
        const newMessageAlert = newMessagesAlert?.find((alert) => alert.chatId === _id);
        const isOnline = members?.some((member) => onlineUsers?.includes(member));
        return (
          <ChatItem
            key={_id}
            avatar={avatar}
            name={name}
            _id={_id}
            groupChat={groupChat}
            sameSender={chatId === _id}
            isOnline={isOnline}
            newMessageAlert={newMessageAlert}
            index={index}
            handleDeleteChatOpen={() => handleDeleteChat(_id)}
          />
        );
      })}
    </Stack>
  );
};

export default ChatList;


