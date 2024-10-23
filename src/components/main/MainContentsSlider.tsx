import { Carousel } from 'antd';
import { Link } from 'react-router-dom';

const MainContentsSlider = () => {
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
            <img src="/slide/self_test.png" style={{ borderRadius: '10px' }} />
          </div>
        </Link>
      </Carousel>
    </section>
  );
};

export default MainContentsSlider;
