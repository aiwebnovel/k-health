import { List } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

const LinkBoard = () => {
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
  return (
    <section>
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 10,
        }}
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
              // actions={[
              //   <IconText
              //     icon={StarOutlined}
              //     text="156"
              //     key="list-vertical-star-o"
              //   />,
              //   <IconText
              //     icon={LikeOutlined}
              //     text="156"
              //     key="list-vertical-like-o"
              //   />,
              //   <IconText
              //     icon={MessageOutlined}
              //     text="2"
              //     key="list-vertical-message"
              //   />,
              // ]}
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
              {item.content}
            </List.Item>
          </Link>
        )}
      />
    </section>
  );
};

export default LinkBoard;
