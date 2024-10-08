import { useState } from 'react';
import SelfTestSurveyPage from './SelfTestSurveyPage';
// import { useNavigate } from 'react-router-dom';
import SelfTestResult from './SelfTestResult';
import { OrangeButton } from '../../styles/commonStyles';

const SelfTest = () => {
  // const navigate = useNavigate();
  const [testPageVisible, setTestPageVisible] = useState([true, false, false]);

  return (
    <>
      {testPageVisible[0] && (
        <section style={{ textAlign: 'center' }}>
          <h1
            style={{
              fontSize: '30px',
              fontWeight: 'bold',
              margin: '80px 0 40px 0',
            }}
          >
            사상체질 설문 테스트
          </h1>
          <p style={{ fontSize: '18px', fontWeight: 'bold', margin: '25px 0' }}>
            사상체질 테스트는 총 23개의
            <br />
            문항으로 이루어져 있습니다.
          </p>
          <p>
            빠짐 없이 문항에 체크를 해주세요 !
            <br /> 본인의 체질을 제대로 파악할 수 있습니다.
          </p>

          <OrangeButton
            onClick={() => {
              setTestPageVisible([false, true, false]);
            }}
          >
            시작하기
          </OrangeButton>

          <p style={{ fontWeight: '700', fontSize: '14px' }}>
            * 테스트는 무료이며 데이터는 저장되지 않습니다.
          </p>
        </section>
      )}
      {testPageVisible[1] && (
        <SelfTestSurveyPage setTestPageVisible={setTestPageVisible} />
      )}
      {testPageVisible[2] && <SelfTestResult />}
      {/* <SelfTestResult /> */}
    </>
  );
};

export default SelfTest;
