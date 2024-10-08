import { Carousel } from 'antd';
import { Link } from 'react-router-dom';

const MainContentsSlider = () => {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };
  return (
    <section>
      <Carousel afterChange={onChange}>
        <Link to="/self_test">
          <img src="/slide/self_test.png" />
        </Link>
      </Carousel>
    </section>
  );
};

export default MainContentsSlider;
