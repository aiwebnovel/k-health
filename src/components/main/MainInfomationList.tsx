import { Link } from 'react-router-dom';
import { Button, List } from 'antd';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { LinkBoardTypes } from 'src/types';

const MainInfomationList = () => {
  const [mainLinkList, setMainLinkList] = useState<LinkBoardTypes[]>([]);

  useEffect(() => {
    const getLinkBoardList = async () => {
      const response = await axios.get(
        `${import.meta.env.VITE_BACK_URL}/link/information/list`,
      );

      setMainLinkList(response.data.slice(0, 3));
    };
    getLinkBoardList();
  }, []);

  return (
    <section style={{ padding: '40px 0' }}>
      <List
        size="large"
        header={
          <Link
            to="/link/information"
            style={{
              fontSize: '20px',
              textAlign: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'rgba(0, 0, 0, 0.88)',
            }}
          >
            <span style={{ marginRight: '10px' }}>유용한 사상체질 정보들</span>{' '}
            <Button>
              <Link to="/link/information">전체보기</Link>
            </Button>
          </Link>
        }
        bordered
        dataSource={mainLinkList}
        renderItem={(item) => (
          <a href={item.link} target="_blank" rel="noopener noreferrer">
            <List.Item>{item.title}</List.Item>
          </a>
        )}
      />
    </section>
  );
};

export default MainInfomationList;
