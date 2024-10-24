import { Button, Flex } from 'antd';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import shortid from 'shortid';

const MainPostList = () => {
  const { t } = useTranslation();
  const postButtonList = [
    {
      id: shortid.generate(),
      title: t('understanding_physical_feature'),
      backgroundColor: '#A2EEBD',
      link: '/post/physical',
    },
    {
      id: shortid.generate(),
      title: t('understanding_personality_feature'),
      backgroundColor: '#7CD3EA',
      link: '/post/personality',
    },
    {
      id: shortid.generate(),
      title: t('understanding_health_feature'),
      backgroundColor: '#F6F7C5',
      link: '/post/health',
    },
    {
      id: shortid.generate(),
      title: t('understanding_food_feature'),
      backgroundColor: '#F6D6D5',
      link: '/post/food',
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
                <Link to={el.link}>{t('go_now')}</Link>
              </Button>
            </button>
          );
        })}
      </Flex>
    </section>
  );
};

export default MainPostList;
