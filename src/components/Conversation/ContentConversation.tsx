import { supabase } from '@/config/supabaseConfig';
import {
  getHistoryMessage,
  sendFileMessage,
} from '@/services/conversation/user';
import { isEmptyObject } from '@/utils/format';
import {
  ArrowLeftOutlined,
  PictureOutlined,
  SendOutlined,
} from '@ant-design/icons';
import { useDispatch, useSelector } from '@umijs/max';
import { Button, Input, Layout, message, Typography, Upload } from 'antd';
// import { UploadOutlined, SendOutlined, PictureOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import { Message } from 'types/user';

const { Header, Content } = Layout;
const { Text } = Typography;

interface propsData {
  isMobile: boolean;
}
const ChatWindow: React.FC<propsData> = ({ isMobile }) => {
  const dispatch = useDispatch();
  const [newMessage, setNewMessage] = useState('');
  const { userIsFocus } = useSelector((state: any) => state.conversation);
  const { authData } = useSelector((state: any) => state.auth);
  const [messageList, setMessageList] = useState<Message[]>([]);
  const handleSendMessage = () => {
    if (newMessage === '') {
      message.error('Please fill in text input');
      return;
    }
    dispatch({ type: 'conversation/sendMessage', payload: newMessage });
    setNewMessage('');
  };
  useEffect(() => {
    if (userIsFocus && userIsFocus.conversation_id !== '') {
      const channel = supabase
        .channel(userIsFocus.conversation_id)
        .on(
          'postgres_changes',
          { event: '*', schema: 'public', table: 'messages' },
          (payload) => {
            if (payload.new) {
              console.log('first', userIsFocus.conversation_id);
              if (
                userIsFocus.conversation_id !== '' &&
                userIsFocus.conversation_id === payload.new.conversation_id
              )
                setMessageList((prev: Message[]) => [
                  ...prev,
                  typeof payload.new === 'string'
                    ? JSON.parse(payload.new)
                    : payload.new,
                ]);
            }
          },
        );

      // Bắt đầu lắng nghe
      channel.subscribe((status) => {
        if (status === 'SUBSCRIBED') {
          console.log('Successfully subscribed to the channel');
        }
      });
    }
  }, [userIsFocus.conversation_id]);
  const loadHistory = async (conversation_id: string) => {
    const response: Message[] = await getHistoryMessage(conversation_id);
    setMessageList(response);
  };
  const handleSendImageMessage = (file: File) => {
    sendFileMessage(userIsFocus.conversation_id, authData.user.id, file);
  };
  useEffect(() => {
    console.log(userIsFocus, isEmptyObject(userIsFocus));
    if (!isEmptyObject(userIsFocus) && userIsFocus.conversation_id !== '') {
      loadHistory(userIsFocus.conversation_id);
    } else {
      setMessageList([]);
    }
  }, [userIsFocus]);
  return (
    <div
      style={{
        overflowY: 'hidden',
        height: '100vh',
      }}
    >
      {/* Header */}
      <Header
        style={{
          background: '#f5f5f5',
          padding: '16px 24px',
          borderBottom: '1px solid #e8e8e8',
          fontSize: 20,
          fontWeight: 700,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Button
          style={{ background: '#f5f5f5', border: 0, boxShadow: '0 0 0 0 0 0' }}
          onClick={() => {
            dispatch({ type: 'conversation/clearUserIsFocus' });
          }}
        >
          <ArrowLeftOutlined size={50} />
        </Button>
        <img
          src={userIsFocus.avatar}
          style={{
            height: 50,
            width: 50,
            borderRadius: 9999,
            objectFit: 'cover',
            display: 'block',
            margin: 10,
          }}
        />
        <Text strong style={{ fontSize: '18px' }}>
          {userIsFocus.name}
        </Text>
      </Header>

      <Content
        style={{
          flex: 1,
          padding: '24px',
          backgroundColor: '#f9f9f9',
          overflowY: 'auto',
          display: 'flex',
          flexDirection: 'column-reverse', // 👈 Đảo thứ tự hiển thị
          overflow: 'scroll',
          height: '78vh',
        }}
      >
        {[...messageList].reverse().map((msg, index) => {
          const isMe = msg.sender_id === String(authData.user.id);
          return (
            <div
              key={index}
              style={{
                alignSelf: isMe ? 'flex-end' : 'flex-start',
                background: isMe ? '#1677ff' : '#e4e6eb',
                color: isMe ? '#fff' : '#000',
                padding: '12px 18px',
                borderRadius: 20,
                maxWidth: '65%',
                marginTop: 10, // 👈 dùng marginTop thay vì marginBottom
                boxShadow: '0 2px 5px rgba(0, 0, 0, 0.08)',
                wordBreak: 'break-word',
              }}
            >
              {msg.type_message === 'text' ? (
                <Text style={{ fontSize: '15px' }}>{msg.message}</Text>
              ) : (
                <img src={msg.message} style={{ width: '100%' }} />
              )}
            </div>
          );
        })}
      </Content>

      {/* Message Input */}
      <div
        style={{
          display: 'flex',
          padding: '16px',
          background: '#fff',
          borderTop: '1px solid #e8e8e8',
        }}
      >
        <Upload
          accept="image/*"
          showUploadList={false}
          beforeUpload={(file) => handleSendImageMessage(file)}
        >
          <Button
            icon={<PictureOutlined />}
            style={{
              borderRadius: '50%',
              marginRight: 12,
              width: 40,
              height: 40,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          />
        </Upload>
        <Input
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Nhập tin nhắn..."
          style={{
            flex: 1,
            marginRight: 12,
            borderRadius: 24,
            padding: '8px 16px',
            fontSize: 16,
          }}
        />
        <Button
          type="primary"
          icon={<SendOutlined />}
          onClick={handleSendMessage}
          style={{
            borderRadius: 24,
            padding: '0 20px',
            height: 40,
          }}
        />
      </div>
    </div>
  );
};

export default ChatWindow;
