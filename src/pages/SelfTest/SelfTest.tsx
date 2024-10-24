import { useState } from 'react';
import SelfTestSurveyPage from './SelfTestSurveyPage';
import SelfTestResult from './SelfTestResult';
import { GreenButton } from '../../styles/commonStyles';
import { useTranslation } from 'react-i18next';

const SelfTest = () => {
  const { t } = useTranslation();
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
            {t('self_test.intro_0')}
          </h1>
          <p style={{ fontSize: '18px', fontWeight: 'bold', margin: '25px 0' }}>
            {t('self_test.intro_1')}
            <br />
            {t('self_test.intro_2')}
          </p>
          <p>
            {t('self_test.intro_3')}
            <br />
            {t('self_test.intro_4')}
          </p>

          <GreenButton
            onClick={() => {
              setTestPageVisible([false, true, false]);
            }}
          >
            {t('self_test.start')}
          </GreenButton>
        </section>
      )}
      {testPageVisible[1] && (
        <SelfTestSurveyPage setTestPageVisible={setTestPageVisible} />
      )}
      {testPageVisible[2] && <SelfTestResult />}
    </div>
  );
};

export default SelfTest;
