import { Button, Input, Typography } from 'antd';
import { ChangeEvent, useRef, useState } from 'react';

const { Title } = Typography;

const LinkBoardWrite = () => {
  const fileRef = useRef<HTMLInputElement>(null);
  const [linkBoardImageFile, setLinkBoardImageFile] = useState<File>();

  return (
    <section>
      <div
        style={{
          borderBottom: '1px solid rgba(5, 5, 5, 0.06)',
          paddingBottom: '50px',
        }}
      >
        {' '}
        <Title style={{ paddingTop: '50px' }}>체질 정보 게시판</Title>
        <Title level={3}>새로운 글 작성</Title>
        <Input
          placeholder="글 제목"
          size="large"
          style={{ margin: '20px 0' }}
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
        <input
          type="file"
          ref={fileRef}
          style={{ width: 0, height: 0 }}
          onChange={(e) => {
            if (e.target.files) {
              setLinkBoardImageFile(e.target.files[0]);
              // s3 업로드 후 가져오기
            }
          }}
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
        <Button>작성</Button>
      </div>
    </section>
  );
};

export default LinkBoardWrite;
