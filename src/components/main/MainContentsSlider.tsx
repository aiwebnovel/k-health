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
            style={{ position: 'relative', width: '500px', margin: '0 auto' }}
          >
            <img
              src="/slide/self_test.png"
              style={{ width: '500px', borderRadius: '10px' }}
            />
            <img
              src="/images/logo-remove.png"
              style={{
                width: '120px',
                position: 'absolute',
                bottom: '-40px',
                right: '10px',
              }}
            />
          </div>
        </Link>
      </Carousel>
    </section>
  );
};

export default MainContentsSlider;
