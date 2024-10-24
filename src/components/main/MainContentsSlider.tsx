import { Carousel } from 'antd';
import { Link } from 'react-router-dom';
import { getLanguage } from '../../language/i18n';
import { currentLanguageStore } from '../../store';

const MainContentsSlider = () => {
  const { currentLanguage } = currentLanguageStore((state) => state);
  const onChange = () => {
    // console.log(currentSlide);
  };

  return (
    <section style={{ paddingTop: '25px' }}>
      <Carousel afterChange={onChange}>
        <Link to="/self_test">
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              position: 'relative',
              margin: '0 auto',
            }}
          >
            <img
              src={`/slide/${
                currentLanguage === 'English'
                  ? 'self_test_en.png'
                  : 'self_test.png'
              }`}
              style={{ borderRadius: '10px' }}
            />
          </div>
        </Link>
      </Carousel>
    </section>
  );
};

export default MainContentsSlider;
