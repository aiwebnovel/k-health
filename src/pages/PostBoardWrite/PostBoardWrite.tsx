import { Button, Flex, Input } from 'antd';
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Typography } from 'antd';

const PostBoardWrite = () => {
  const [value, setValue] = useState('');
  const { Title } = Typography;
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
  return (
    <section style={{ padding: '50px 0' }}>
      <Flex align="center" justify="space-between">
        <Title>글 작성하기</Title>
        <Button type="primary">작성</Button>
      </Flex>

      <Input placeholder="글 제목" size="large" style={{ margin: '30px 0' }} />

      <ReactQuill
        theme="snow"
        value={value}
        modules={modules}
        formats={formats}
        onChange={setValue}
        style={{ height: '50dvh' }}
      />
    </section>
  );
};

export default PostBoardWrite;
