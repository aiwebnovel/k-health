import { useToast } from '@chakra-ui/react';
import { Button, Input, Typography } from 'antd';
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { CloseCircleOutlined } from '@ant-design/icons';

const { Title } = Typography;

const LinkBoardWrite = () => {
  const fileRef = useRef<HTMLInputElement>(null);
  const params = useParams();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const toast = useToast();
  const [title, setTitle] = useState('');
  const [link, setLink] = useState('');
  const [linkBoardImageSrc, setLinkBoardImageSrc] = useState('');
  const [linkLoading, setLinkLoading] = useState(false);

  const mode = searchParams.get('id') ? '수정' : '작성';

  const uploadImage = async (e) => {
    if (e.target.files) {
      const formData = new FormData();

      formData.append('image', e.target.files[0]);

      const imageUploadResponse = await axios.post(
        `${import.meta.env.VITE_BACK_URL}/upload/image`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('login')}`,
          },
        },
      );
      setLinkBoardImageSrc(imageUploadResponse.data.image);
    }
  };

  const postLinkBoard = async () => {
    try {
      setLinkLoading(true);
      const config = {
        url: `${import.meta.env.VITE_BACK_URL}/link/${params.linkPath}${
          searchParams.get('id') ? `/${searchParams.get('id')}` : ''
        }`,
        method: searchParams.get('id') ? 'patch' : 'post',
        data: {
          title,
          link,
          image: linkBoardImageSrc,
        },
        headers: {
          Authorization: `Bearer ${localStorage.getItem('login')}`,
        },
      };

      await axios(config);

      setLinkLoading(false);

      toast({
        title: `글 작성 완료`,
        description: `글 작성이 완료되었습니다.`,
        status: 'success',
        duration: 3000,
        isClosable: true,
        position: 'bottom-right',
        containerStyle: {
          marginBottom: '20px',
          marginRight: '20px',
        },
      });

      navigate(`/link/${params.linkPath}`);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const getLinkBoard = async () => {
      if (searchParams.get('id')) {
        const getLinkBoardResponse = await axios.get(
          `${import.meta.env.VITE_BACK_URL}/link/${params.linkPath}
          /${searchParams.get('id')}`,
        );

        setTitle(getLinkBoardResponse.data.title);
        setLink(getLinkBoardResponse.data.link);
        setLinkBoardImageSrc(getLinkBoardResponse.data.image);
      }
    };

    getLinkBoard();
  }, []);

  return (
    <section>
      <div
        style={{
          borderBottom: '1px solid rgba(5, 5, 5, 0.06)',
          paddingBottom: '50px',
        }}
      >
        <Title style={{ paddingTop: '50px' }}>글 {mode}하기</Title>
        <Title level={3}>{mode ? '링크 글 수정' : '새로운 글 작성'}</Title>
        <Input
          placeholder="글 제목"
          size="large"
          style={{ margin: '20px 0' }}
          value={title}
          onChange={(e) => {
            setTitle(e.currentTarget.value);
          }}
        />
        <Input
          placeholder="글 링크"
          size="large"
          style={{ marginBottom: '20px' }}
          value={link}
          onChange={(e) => {
            setLink(e.currentTarget.value);
          }}
        />
        <Button
          onClick={() => {
            if (fileRef.current) {
              fileRef.current.click();
            }
          }}
        >
          이미지 첨부
        </Button>
        {linkBoardImageSrc && (
          <div style={{ position: 'relative' }}>
            <CloseCircleOutlined
              style={{
                position: 'absolute',
                top: '-25px',
                right: '0px',
                fontSize: '20px',
                cursor: 'pointer',
              }}
              onClick={() => {
                setLinkBoardImageSrc('');
              }}
            />
            <img
              style={{ marginTop: '20px' }}
              src={linkBoardImageSrc}
              alt="upload-image"
            />
          </div>
        )}

        <input
          type="file"
          ref={fileRef}
          style={{ width: 0, height: 0 }}
          onChange={uploadImage}
        />
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          padding: '20px 0',
          borderBottom: '1px solid rgba(5, 5, 5, 0.06)',
        }}
      >
        <Button loading={linkLoading} onClick={postLinkBoard}>
          작성
        </Button>
      </div>
    </section>
  );
};

export default LinkBoardWrite;
