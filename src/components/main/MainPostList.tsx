import { Button, Flex } from 'antd';
import { Link } from 'react-router-dom';
import shortid from 'shortid';

const MainPostList = () => {
  const postButtonList = [
    {
      id: shortid.generate(),
      title: '체질별 신체적 특성 이해하기',
      backgroundColor: '#A2EEBD',
      link: '',
    },
    {
      id: shortid.generate(),
      title: '체질별 성격적 특징 이해하기',
      backgroundColor: '#7CD3EA',
      link: '',
    },
    {
      id: shortid.generate(),
      title: '체칠별 건강사항 이해하기',
      backgroundColor: '#F6F7C5',
      link: '',
    },
    {
      id: shortid.generate(),
      title: '체질별 음식 이해하기',
      backgroundColor: '#F6D6D5',
      link: '',
    },
  ];

  return (
    <section>
      <Flex vertical={true}>
        {postButtonList.map((el) => {
          return (
            <button
              key={el.id}
              style={{
                marginBottom: '10px',
                textAlign: 'center',
                // color: 'var(--white-color-400)',
                padding: '8px',
                backgroundColor: el.backgroundColor,
                borderRadius: '8px',
                border: 'none',
                boxShadow:
                  '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <span style={{ marginRight: '10px', fontSize: '20px' }}>
                {el.title}
              </span>
              <Button style={{ borderRadius: '20px' }}>
                <Link to="/postBoard">바로가기</Link>
              </Button>
            </button>
          );
        })}
      </Flex>
    </section>
  );
};

export default MainPostList;
