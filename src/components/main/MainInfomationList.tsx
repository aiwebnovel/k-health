import { Link, useNavigate } from 'react-router-dom';
import { Button, List } from 'antd';

const MainInfomationList = () => {
  const data = [
    '사상.체질 유형 (mbti보다 더 정확하다 ㄷㄷ)소음인,태음인,소양인,태양인의 멸치탈출하는법)',
    '사상체질 다이어트 한약으로 가능하다면? 부작용은 없을까? - 동감한의원',
    '사상체질 다이어트 그 마지막 태양인 - 구의역한의원 동감',
  ];

  return (
    <section style={{ margin: '40px 0' }}>
      <List
        size="large"
        header={
          <Link
            to="/"
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
              <Link to="/linkBoard">전체보기</Link>
            </Button>
          </Link>
        }
        bordered
        dataSource={data}
        renderItem={(item) => <List.Item>{item}</List.Item>}
      />
    </section>
  );
};

export default MainInfomationList;
