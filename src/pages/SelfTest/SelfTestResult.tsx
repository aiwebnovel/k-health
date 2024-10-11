import { useNavigate } from 'react-router-dom';
import { selfTestResultData } from '../../constant/selfTestData';
import { useSelfTestKeyStore } from '../../store';
import { GreenButton } from '../../styles/commonStyles';

const SelfTestResult = () => {
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
        진단 결과
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
        >{`당신은 ${selfTestResultData[selfTestResultKey].title} 입니다.`}</h2>
        <span
          style={{ fontWeight: 'bold', marginBottom: '10px', display: 'block' }}
        >
          {selfTestResultData[selfTestResultKey].title}은...
        </span>
        <p>{selfTestResultData[selfTestResultKey].description0}</p>
        <br />
        <p>{selfTestResultData[selfTestResultKey].description1}</p>
      </article>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <GreenButton
          onClick={() => {
            navigate('/');
          }}
        >{`${selfTestResultData[selfTestResultKey].title} 정보 보기`}</GreenButton>
      </div>
    </section>
  );
};

export default SelfTestResult;
