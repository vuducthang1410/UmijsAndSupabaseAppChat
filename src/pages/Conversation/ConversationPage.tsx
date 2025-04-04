import ChatWindow from '@/components/Conversation/ContentConversation';
import { isEmptyObject } from '@/utils/format';
import { UsergroupAddOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from '@umijs/max';
import {
  Avatar,
  Button,
  Col,
  Input,
  Layout,
  List,
  Row,
  Typography,
} from 'antd';
import { useEffect, useState } from 'react';
import { HistoryConversation, Profile } from 'types/user';
import './styles.css';

const { Header, Content } = Layout;
const { Text } = Typography;

const ConversationPage = () => {
  const dispatch = useDispatch();
  const { profileSearch, historyConversation, userIsFocus } = useSelector(
    (state: any) => state.conversation,
  );
  const { authData } = useSelector((state: any) => state.auth);
  const [contentSearch, setContentSearch] = useState('');
  const searchUserByName = () => {
    dispatch({
      type: 'conversation/searchUserByName',
      payload: contentSearch,
    });
  };

  const handleClickUser = (
    userId: string,
    avatar: string,
    name: string,
    is_online: boolean,
  ) => {
    dispatch({
      type: 'conversation/getInfoUser',
      payload: {
        selfId: authData.user.id,
        userId: userId,
        name: name,
        avatar: avatar,
        is_online: is_online,
      },
    });
  };
  useEffect(() => {
    if (!isEmptyObject(authData))
      dispatch({
        type: 'conversation/getListHistoryConversation',
        payload: authData.user.id,
      });
  }, [profileSearch, authData]);
  return (
    <Layout style={{ minHeight: '100vh', maxHeight: '100vh' }}>
      <Row gutter={16} style={{ height: '100%' }}>
        {/* Sidebar - Danh sách cuộc trò chuyện */}
        <Col
          span={6}
          style={{
            borderRight: '1px solid #f0f0f0',
            paddingLeft: '30px',
            paddingRight: '30px',
            paddingTop: 30,
            display: 'flex',
            flexDirection: 'column',
            height: '100vh',
            background: '#fff',
          }}
        >
          <Text
            strong
            style={{
              marginBottom: 10,
              fontSize: 18,
            }}
          >
            Danh sách cuộc trò chuyện
          </Text>

          {/* Ô tìm kiếm */}
          <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
            <Input
              placeholder="Tìm kiếm người dùng"
              value={contentSearch}
              onChange={(e) => setContentSearch(e.target.value)}
            />
            <Button
              type="default"
              onClick={searchUserByName}
              style={{ height: 30, width: 100 }}
            >
              Tìm kiếm
            </Button>
          </div>

          {/* Danh sách tìm kiếm hoặc lịch sử trò chuyện */}
          {profileSearch.length > 0 ? (
            <List
              itemLayout="horizontal"
              dataSource={profileSearch}
              renderItem={(item: Profile) => (
                <List.Item style={{ borderBottom: '1px solid #f0f0f0' }}>
                  <Button
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      padding: '10px',
                      borderRadius: 8,
                      transition: '0.3s',
                      background: '#fff',
                      marginBottom: 5,
                      border: '1px solid #ddd',
                      height: 50,
                    }}
                    onClick={() =>
                      handleClickUser(
                        item.id,
                        item.avatar,
                        item.name,
                        item.is_online,
                      )
                    }
                  >
                    <Avatar
                      src={item.avatar}
                      size={40}
                      style={{ marginRight: 10 }}
                    />
                    <Text style={{ textAlign: 'left', fontSize: 16 }}>
                      {item.name}
                    </Text>
                  </Button>
                </List.Item>
              )}
            />
          ) : historyConversation.length === 0 ? (
            <div
              style={{
                display: 'flex',
                flex: 1,
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                fontSize: 16,
                color: '#888',
              }}
            >
              <UsergroupAddOutlined style={{ fontSize: 48, marginBottom: 8 }} />
              Hãy kết nối với mọi người!
            </div>
          ) : (
            <List
              itemLayout="horizontal"
              dataSource={historyConversation}
              renderItem={(item: HistoryConversation) => (
                <List.Item style={{ borderBottom: '1px solid #f0f0f0' }}>
                  <Button
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyItems: 'left',
                      padding: '10px',
                      borderRadius: 8,
                      transition: '0.3s',
                      background: '#fff',
                      marginBottom: 5,
                      border: '1px solid #ddd',
                      height: 50,
                    }}
                    onClick={() => {
                      console.log(item);
                      handleClickUser(
                        item.id,
                        item.avatar,
                        item.name,
                        item.is_online,
                      );
                    }}
                  >
                    <Avatar
                      src={item.avatar}
                      size={40}
                      style={{ marginRight: 10 }}
                    />
                    <Text style={{ textAlign: 'left', fontSize: 16 }}>
                      {item.name}
                    </Text>
                  </Button>
                </List.Item>
              )}
            />
          )}
        </Col>
        {/* Chat Window */}
        <Col
          span={18}
          style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}
        >
          {userIsFocus.user_id !== '' && <ChatWindow />}
        </Col>
      </Row>
    </Layout>
  );
};

export default ConversationPage;
