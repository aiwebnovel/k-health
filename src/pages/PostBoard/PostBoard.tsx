import { Button, Flex, List, Space } from 'antd';
// import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import {
  DeleteOutlined,
  FormOutlined,
  LikeOutlined,
  MessageOutlined,
  ScissorOutlined,
  StarOutlined,
} from '@ant-design/icons';
import React from 'react';

const PostBoard = () => {
  const data = Array.from({ length: 23 }).map((_, i) => ({
    href: 'https://ant.design',
    title: `ant design part ${i}`,
    // avatar: `https://api.dicebear.com/7.x/miniavs/svg?seed=${i}`,
    // description:
    //   'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    // content:
    //   'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
    time: '10. 17 18.07',
  }));

  const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );

  return (
    <section>
      <Flex
        justify="flex-end"
        style={{
          padding: '15px 0',
          borderBottom: '1px solid rgba(5, 5, 5, 0.06)',
        }}
      >
        <Button>
          <span>글쓰기</span>
          <FormOutlined />
        </Button>
      </Flex>
      <List
        itemLayout="vertical"
        size="large"
        dataSource={data}
        // footer={
        //   <div>
        //     <b>ant design</b> footer part
        //   </div>
        // }
        renderItem={(item) => (
          <Link to="/postBoard/1">
            <List.Item
              key={item.title}
              actions={[
                <IconText
                  icon={ScissorOutlined}
                  text="수정"
                  key="list-vertical-update-o"
                />,
                <IconText
                  icon={DeleteOutlined}
                  text="삭제"
                  key="list-vertical-delete-o"
                />,
              ]}
              extra={
                <img
                  width={272}
                  alt="logo"
                  src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                />
              }
            >
              <List.Item.Meta
                // avatar={<Avatar src={item.avatar} />}
                title={<Link to={item.href}>{item.title}</Link>}
                description={item.time}
              />
              {/* {item.content} */}
            </List.Item>
          </Link>
        )}
      />
    </section>
  );
};

export default PostBoard;
