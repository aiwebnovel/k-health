import { Button, Flex, List, Modal, Space } from 'antd';
import {
  DeleteOutlined,
  FormOutlined,
  ScissorOutlined,
} from '@ant-design/icons';
import { Link, useLocation, useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { myProfileStore } from '../../store/index';
import { LinkBoardTypes } from 'src/types';

const LinkBoard = () => {
  const { myProfile } = myProfileStore((state) => state);
  const params = useParams();
  const location = useLocation();
  const [linkList, setLinkList] = useState<LinkBoardTypes[]>([]);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [targetId, setTargetId] = useState<number | null>(null);

  const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );

  const showDeleteModal = (id) => () => {
    setTargetId(id);
    setIsDeleteModalOpen(true);
  };

  const handleDeleteModalOk = async () => {
    await axios.delete(
      `${import.meta.env.VITE_BACK_URL}/link/${params.linkPath}/${targetId}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('login')}`,
        },
      },
    );

    const updatedLinkList = linkList.filter((el) => el.id !== targetId);

    setLinkList(updatedLinkList);

    setIsDeleteModalOpen(false);
  };

  const handleDeleteModalCancel = () => {
    setIsDeleteModalOpen(false);
  };

  useEffect(() => {
    const getLinkList = async () => {
      const getLinkBoardListResonse = await axios.get(
        `${import.meta.env.VITE_BACK_URL}/link/${params.linkPath}/list`,
      );
      setLinkList(getLinkBoardListResonse.data);
    };
    getLinkList();
  }, []);

  return (
    <section>
      <Flex
        justify="flex-end"
        style={{
          padding: '15px 0',
        }}
      >
        {myProfile && (
          <Link to={`/link/${params.linkPath}/write`}>
            <Button>
              <span>글쓰기</span>
              <FormOutlined />
            </Button>
          </Link>
        )}
      </Flex>
      <List
        itemLayout="vertical"
        size="large"
        dataSource={linkList}
        renderItem={(item) => (
          <List.Item
            key={item.title}
            actions={[
              <>
                {myProfile && (
                  <>
                    <Link to={`/link/${params.linkPath}/write?id=${item.id}`}>
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
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <img
                    style={{ width: '100px' }}
                    width={272}
                    alt="logo"
                    src={item.image}
                  />
                </a>
              )
            }
          >
            <List.Item.Meta
              title={
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  {item.title}
                </a>
              }
              description={item.createdAt}
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

export default LinkBoard;
