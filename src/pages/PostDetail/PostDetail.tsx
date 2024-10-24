import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import DOMPurify from 'dompurify';
import { marked } from 'marked';
import { Button, Flex, Modal } from 'antd';
import { useToast } from '@chakra-ui/react';
import { myProfileStore } from '../../store/index';
import { ArrowLeftOutlined } from '@ant-design/icons';

const PostDetail = () => {
  const { myProfile } = myProfileStore((state) => state);
  const location = useLocation();
  const [post, setPost] = useState({ title: '', content: '' });
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const toast = useToast();
  const params = useParams();
  const navigate = useNavigate();

  const showDeleteModal = () => {
    setIsDeleteModalOpen(true);
  };

  const handleDeleteModalOk = async () => {
    try {
      await axios.delete(
        `${import.meta.env.VITE_BACK_URL}${location.pathname}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('login')}`,
          },
        },
      );

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

      navigate(`/post/${params.postPath}`);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteModalCancel = () => {
    setIsDeleteModalOpen(false);
  };

  useEffect(() => {
    const getPostDetail = async () => {
      const response = await axios.get(
        `${import.meta.env.VITE_BACK_URL}/post/${params.id}`,
      );

      const contentResponse = await axios.get(response.data.content);

      setPost({
        title: response.data.title,
        content: contentResponse.data,
      });
    };
    getPostDetail();
  }, []);

  return (
    <section
      style={{
        borderBottom: '1px solid rgba(5, 5, 5, 0.06)',
      }}
    >
      {
        <Flex style={{ paddingTop: '20px', justifyContent: 'space-between' }}>
          <Button
            onClick={() => {
              console.log(params);
              navigate(`/post/${params.postPath}`);
            }}
          >
            <ArrowLeftOutlined />
          </Button>
          {myProfile && (
            <div>
              <Link to={`/post/${params.postPath}/write?id=${params.id}`}>
                <Button style={{ marginRight: '10px' }}>수정</Button>
              </Link>
              <Button onClick={showDeleteModal}>삭제</Button>
            </div>
          )}
        </Flex>
      }

      <div
        style={{
          padding: '25px 0',
          borderBottom: '1px solid rgba(5, 5, 5, 0.06)',
        }}
      >
        <h1 style={{ fontSize: '30px', fontWeight: 'bold' }}>{post.title}</h1>
      </div>
      <div
        style={{ padding: '10px 0', minHeight: '50dvh' }}
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(marked(post.content).toString()),
        }}
      ></div>
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

export default PostDetail;
