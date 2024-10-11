// import styled from 'styled-components';
import MainContentsSlider from '../components/main/MainContentsSlider';
import MainInfomationList from '../components/main/MainInfomationList';
import MainPostList from '../components/main/MainPostList';

// const MainWrapper = styled.section`

//   @media (min-width: 768px) {

//   }
//   @media (min-width: 1280px) {
//   }
// `;

const Main = () => {
  return (
    <section>
      <MainContentsSlider />

      <MainInfomationList />

      <MainPostList />
    </section>
  );
};

export default Main;
