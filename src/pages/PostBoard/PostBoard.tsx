import { Button, Flex, List, Modal, Space } from 'antd';
// import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import {
  DeleteOutlined,
  FormOutlined,
  ScissorOutlined,
} from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useToast } from '@chakra-ui/react';
import { myProfileStore } from '../../store/index';
import { PostBoardTypes } from 'src/types';
import dayjs from 'dayjs';

const PostBoard = () => {
  const { myProfile } = myProfileStore((state) => state);
  const params = useParams();
  const [postList, setPostList] = useState<PostBoardTypes[]>([]);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [targetId, setTargetId] = useState('');
  const toast = useToast();

  const showDeleteModal = (id) => () => {
    setTargetId(id);
    setIsDeleteModalOpen(true);
  };

  const handleDeleteModalOk = async () => {
    try {
      await axios.delete(
        `${import.meta.env.VITE_BACK_URL}/${params.postPath}/${targetId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('login')}`,
          },
        },
      );
      const updatedPostList = postList.filter(
        (el) => el.id !== parseInt(targetId),
      );
      setPostList(updatedPostList);
      setIsDeleteModalOpen(false);

      toast({
        title: `글 삭제 완료`,
        description: `글 삭제가 완료되었습니다.`,
        status: 'success',
        duration: 3000,
        isClosable: true,
        position: 'bottom-right',
        containerStyle: {
          marginBottom: '20px',
          marginRight: '20px',
        },
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteModalCancel = () => {
    setIsDeleteModalOpen(false);
  };
  const navigate = useNavigate();

  const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );

  useEffect(() => {
    const getPost = async () => {
      const response = await axios.get(
        `${import.meta.env.VITE_BACK_URL}/post/${params.postPath}/list`,
      );

      setPostList(response.data);
    };
    getPost();
  }, []);

  const handleImageError = (e) => {
    e.target.onerror = null; // 무한 루프 방지
    e.target.src = '/images/no-image.jpg';
  };

  return (
    <section>
      <Flex
        justify="flex-end"
        style={{
          padding: '15px 0',
          borderTop: '1px solid rgba(5, 5, 5, 0.06)',
        }}
      >
        {myProfile && (
          <Button
            onClick={() => {
              navigate(`/post/${params.postPath}/write`);
            }}
          >
            <span>글쓰기</span>
            <FormOutlined />
          </Button>
        )}
      </Flex>
      <List
        itemLayout="vertical"
        size="large"
        dataSource={postList}
        renderItem={(item) => (
          <List.Item
            key={item.title}
            actions={[
              <>
                {myProfile && (
                  <>
                    <Link to={`/post/${params.postPath}/write?id=${item.id}`}>
                      <IconText
                        icon={ScissorOutlined}
                        text="수정"
                        key="list-vertical-update-o"
                      />
                    </Link>
                    <button
                      style={{ marginLeft: '10px' }}
                      onClick={showDeleteModal(item.id)}
                    >
                      <IconText
                        icon={DeleteOutlined}
                        text="삭제"
                        key="list-vertical-delete-o"
                      />
                    </button>
                  </>
                )}
              </>,
            ]}
            extra={
              item.image && (
                <Link to={`/post/${params.postPath}/${item.id}`}>
                  <img
                    width={'100px'}
                    alt="logo"
                    src={item.image}
                    onError={handleImageError}
                  />
                </Link>
              )
            }
          >
            <List.Item.Meta
              // avatar={<Avatar src={item.avatar} />}
              title={
                <Link to={`/post/${params.postPath}/${item.id}`}>
                  {item.title}
                </Link>
              }
              description={dayjs(item.createdAt).format('YYYY-MM-DD')}
            />
          </List.Item>
        )}
      />
      <Modal
        title="게시글 삭제"
        open={isDeleteModalOpen}
        onOk={handleDeleteModalOk}
        onCancel={handleDeleteModalCancel}
      >
        <p>삭제 하시겠습니까?</p>
      </Modal>
    </section>
  );
};

export default PostBoard;
