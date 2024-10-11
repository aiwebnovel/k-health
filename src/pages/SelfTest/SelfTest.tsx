import { useState } from 'react';
import SelfTestSurveyPage from './SelfTestSurveyPage';
// import { useNavigate } from 'react-router-dom';
import SelfTestResult from './SelfTestResult';
import { GreenButton } from '../../styles/commonStyles';

const SelfTest = () => {
  // const navigate = useNavigate();
  const [testPageVisible, setTestPageVisible] = useState([true, false, false]);

  return (
    <div style={{ maxWidth: '820px', padding: '0 30px', margin: '0 auto' }}>
      {testPageVisible[0] && (
        <section
          style={{
            textAlign: 'center',
          }}
          data-aos="fade-up"
        >
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

          <GreenButton
            onClick={() => {
              setTestPageVisible([false, true, false]);
            }}
          >
            시작하기
          </GreenButton>
        </section>
      )}
      {testPageVisible[1] && (
        <SelfTestSurveyPage setTestPageVisible={setTestPageVisible} />
      )}
      {testPageVisible[2] && <SelfTestResult />}
      {/* <SelfTestResult /> */}
    </div>
  );
};

export default SelfTest;
