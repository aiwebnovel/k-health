import { Button, Flex, Input } from 'antd';
import { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Typography } from 'antd';
import axios from 'axios';
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from 'react-router-dom';
import { useToast } from '@chakra-ui/react';
// import UseMessage from '../../hooks/UseMessage';

const PostBoardWrite = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [postLoading, setPostLoading] = useState(false);
  const toast = useToast();

  const navigate = useNavigate();
  const params = useParams();
  const [searchParams] = useSearchParams();

  const { Title } = Typography;

  const mode = searchParams.get('id') ? '수정' : '작성';
  console.log(searchParams.get('id'));
  const createNewPost = async () => {
    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('content', content);

      setPostLoading(true);
      const config = {
        url: `${import.meta.env.VITE_BACK_URL}/post/${params.postPath}${
          searchParams.get('id')
            ? `/${encodeURIComponent(searchParams.get('id')!)}`
            : ''
        }`,
        method: searchParams.get('id') ? 'patch' : 'post',
        data: formData,
        headers: {
          Authorization: `Bearer ${localStorage.getItem('login')}`,
        },
      };
      const response = await axios(config);
      setPostLoading(false);

      toast({
        title: `글 ${mode} 완료`,
        description: `글 ${mode}이 완료되었습니다.`,
        status: 'success',
        duration: 3000,
        isClosable: true,
        position: 'bottom-right',
        containerStyle: {
          marginBottom: '20px',
          marginRight: '20px',
        },
      });

      navigate(`/post/${response.data.postPath}/${response.data.id}`);
    } catch (error) {
      console.error(error);
    }
  };

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' },
      ],
      ['link', 'image'],
      ['clean'],
    ],
  };

  const formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
  ];

  useEffect(() => {
    const getCurrentPost = async () => {
      if (searchParams.get('id')) {
        const response = await axios.get(
          `${import.meta.env.VITE_BACK_URL}/post/${searchParams.get('id')}`,
        );
        console.log(response.data.title, response.data.content);
        setTitle(response.data.title);
        const getContentResponse = await axios.get(response.data.content);
        setContent(getContentResponse.data);
      }
    };
    getCurrentPost();
  }, []);

  return (
    <section style={{ padding: '50px 0' }}>
      <Flex align="center" justify="space-between">
        <Title>{`글 ${mode}하기`}</Title>
        <Button type="primary" onClick={createNewPost} loading={postLoading}>
          {mode}
        </Button>
      </Flex>

      <Input
        placeholder="글 제목"
        size="large"
        style={{ margin: '30px 0' }}
        value={title}
        onChange={(e) => {
          setTitle(e.currentTarget.value);
        }}
      />

      <ReactQuill
        theme="snow"
        value={content}
        modules={modules}
        formats={formats}
        onChange={setContent}
        style={{ height: '50dvh' }}
      />
    </section>
  );
};

export default PostBoardWrite;
