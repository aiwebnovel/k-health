import { useNavigate } from 'react-router-dom';
import { useSelfTestKeyStore } from '../../store';
import { GreenButton } from '../../styles/commonStyles';
import { useTranslation } from 'react-i18next';
import { selfTestResultData } from '../../constant/selfTestData';

const SelfTestResult = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const selfTestResultKey = useSelfTestKeyStore(
    (state) => state.selfTestResultKey,
  );

  return (
    <section
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <h1
        style={{
          textAlign: 'center',
          fontSize: '30px',
          fontWeight: 'bold',
          padding: '10px',
        }}
      >
        {t('self_test.result')}
      </h1>
      <img
        src={selfTestResultData[selfTestResultKey].imageSrc}
        alt="selfTestResult"
        style={{ height: '500px' }}
      />
      <article style={{ padding: '15px' }}>
        <h2
          style={{
            textAlign: 'center',
            fontSize: '25px',
            fontWeight: 'bold',
            margin: '20px 0',
          }}
        >{`${t('self_test_result.you')} ${t(
          selfTestResultData[selfTestResultKey].title,
        )} ${t('self_test_result.are')}`}</h2>
        <span
          style={{ fontWeight: 'bold', marginBottom: '10px', display: 'block' }}
        >
          {t(selfTestResultData[selfTestResultKey].title)}
          {t('self_test_result.is')}
        </span>
        <p>{t(selfTestResultData[selfTestResultKey].description0)}</p>
        <br />
        <p>{t(selfTestResultData[selfTestResultKey].description1)}</p>
      </article>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <GreenButton
          onClick={() => {
            navigate('/post/physical');
          }}
        >{`${t(selfTestResultData[selfTestResultKey].title)} ${t(
          'self_test_result.view_information',
        )}`}</GreenButton>
      </div>
    </section>
  );
};

export default SelfTestResult;
