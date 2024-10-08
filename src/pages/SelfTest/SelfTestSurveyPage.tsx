import {
  Alert,
  message,
  notification,
  Radio,
  RadioChangeEvent,
  Space,
} from 'antd';
import { useRef, useState } from 'react';
import { selfTestData } from '../../constant/selfTestData';
import { useSelfTestKeyStore } from '../../store';
import { OrangeButton } from '../../styles/commonStyles';
import { CloseCircleFilled } from '@ant-design/icons';

const SelfTestSurveyPage = ({ setTestPageVisible }) => {
  const [api, contextHolder] = notification.useNotification();
  const updateSelfTestResultKey = useSelfTestKeyStore(
    (state) => state.updateSelfTestResultKey,
  );
  const [testTotal, setTestTotal] = useState(
    new Array(selfTestData.length).fill(null),
  );

  const checkeBoxRefs = useRef([]);

  const onChange = (value, index) => {
    testTotal[index] = value;
    setTestTotal(testTotal.slice());
  };

  const answerResult = () => {
    if (testTotal.some((v) => v === null)) {
      // 메시지 올리고 클릭 안한 부분으로 스크롤 이동

      const unCheckedBoxIndex = testTotal.indexOf(null);

      api.info({
        message: `${unCheckedBoxIndex + 1}번이 체크되지 않았습니다.`,
        description: '비어있는 항목을 체크해주세요.',
        placement: 'bottomRight',
        closeIcon: true,
        icon: <CloseCircleFilled style={{ color: 'red' }} />,
      });
      window.scrollBy({
        top: checkeBoxRefs.current[unCheckedBoxIndex].getBoundingClientRect()
          .top,

        behavior: 'smooth',
      });
      return;
    }

    const gradingSheet = {
      0: 0,
      1: 0,
      2: 0,
      3: 0,
    };

    testTotal.forEach((option) => {
      gradingSheet[option] += 1;
    });

    const maxGrade = Math.max(...Object.values(gradingSheet));
    let findedKey = '';
    for (const key in gradingSheet) {
      if (gradingSheet[key] === maxGrade) {
        findedKey = key;
      }
    }

    updateSelfTestResultKey(findedKey);
    setTestPageVisible([false, false, true]);
  };

  return (
    <section style={{ padding: '10px' }}>
      <div>
        <h1 style={{ fontWeight: 'bold', fontSize: '20px', margin: '20px 0' }}>
          나의 사상체질 알아보기
        </h1>
        <p style={{ wordBreak: 'keep-all' }}>
          본 설문은 당신의 사상체질을 정확히 알아보기 위한 질문으로 실제
          한의사의 진단과 차이가 날 수 있습니다.
        </p>
      </div>

      {selfTestData.map((el, index) => {
        return (
          <div
            key={el.id}
            style={{
              marginTop: '25px',
              display: 'flex',
              flexDirection: 'column',
            }}
            ref={(el) => (checkeBoxRefs.current[index] = el)}
          >
            <h3
              style={{
                fontWeight: 'bold',
                color: '#a84200',
                marginBottom: '10px',
                fontSize: '17px',
              }}
            >
              {`${index + 1}. ${el.title}`}
            </h3>

            <Radio.Group
              size="large"
              onChange={(e) => onChange(e.target.value, index)}
              // value={value}
              style={{ paddingLeft: '5px' }}
            >
              <Space direction="vertical">
                {el.options.map((option, index) => {
                  return (
                    <Radio value={index} style={{ fontSize: '16px' }}>
                      {option}
                    </Radio>
                  );
                })}
              </Space>
            </Radio.Group>
          </div>
        );
      })}
      <section style={{ display: 'flex', justifyContent: 'center' }}>
        <OrangeButton onClick={answerResult}>결과보기</OrangeButton>
      </section>
      {contextHolder}
    </section>
  );
};

export default SelfTestSurveyPage;
