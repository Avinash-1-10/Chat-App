import React, { FC, memo } from 'react';
import { Link } from '../styles/StyledComponent';
import { Box, Stack, Typography } from '@mui/material';

interface Props {
  avatar: [];
  name: string;
  _id: string;
  groupChat?: boolean;
  sameSender?: boolean;
  isOnline?: boolean;
  newMessageAlert?: {
    chatId: string;
    count: number;
  };
  index: number;
  handleDeleteChatOpen: (e: any, _id: string, groupChat: boolean) => void;
}

const ChatItem: FC<Props> = ({
  avatar,
  name,
  _id,
  groupChat = false,
  sameSender,
  isOnline,
  newMessageAlert = { count: 0 },
  index,
  handleDeleteChatOpen,
}) => {
  return (
    <Link
      to={`/chat/${_id}`}
      onContextMenu={(e) => handleDeleteChatOpen(e, _id, groupChat)}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          padding: '1rem',
          backgroundColor: sameSender ? 'lightgray' : 'unset',
          color: sameSender ? 'black' : 'unset',
          position: 'relative',
        }}
      >
        {/* Avatar card */}
        <Stack>
          <Typography>{name}</Typography>
          {newMessageAlert?.count > 0 && (
            <Typography>{newMessageAlert?.count} new messages</Typography>
          )}
        </Stack>

        {isOnline && (
          <Box
            sx={{
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              position: 'absolute',
              top: '50%',
              right: '1rem',
              transform: 'translateY(-50%)',
              bgcolor: 'green',
            }}
          />
        )}
      </div>
    </Link>
  );
};

export default memo(ChatItem);
