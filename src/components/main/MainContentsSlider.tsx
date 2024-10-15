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
          <img
            src="/slide/self_test.png"
            style={{ margin: '0 auto', borderRadius: '10px' }}
          />
        </Link>
      </Carousel>
    </section>
  );
};

export default MainContentsSlider;
