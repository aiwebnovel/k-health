import { notification, Radio, Space } from 'antd';
import { useRef, useState } from 'react';
import { useSelfTestKeyStore } from '../../store';
import { GreenButton } from '../../styles/commonStyles';
import { CloseCircleFilled } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

const SelfTestSurveyPage = ({ setTestPageVisible }) => {
  const { t } = useTranslation();
  const array = new Array(23).fill(0);
  const optionArray = new Array(4).fill(0);
  const [api, contextHolder] = notification.useNotification();
  const updateSelfTestResultKey = useSelfTestKeyStore(
    (state) => state.updateSelfTestResultKey,
  );
  const [testTotal, setTestTotal] = useState(
    new Array(array.length).fill(null),
  );

  const checkeBoxRefs = useRef<HTMLDivElement[]>([]);

  const onChange = (value, index) => {
    testTotal[index] = value;
    setTestTotal(testTotal.slice());
  };

  const answerResult = () => {
    if (testTotal.some((v) => v === null)) {
      // 메시지 올리고 클릭 안한 부분으로 스크롤 이동

      const unCheckedBoxIndex = testTotal.indexOf(null);

      api.info({
        message: `(${unCheckedBoxIndex + 1}) ${t('message.not_checked')}`,
        description: t('message.not_checked_description'),
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
    <section>
      <div>
        <h1 style={{ fontWeight: 'bold', fontSize: '20px', margin: '20px 0' }}>
          {t('self_test.title')}
        </h1>
        <p style={{ wordBreak: 'keep-all' }}>{t('self_test.notice')}</p>
      </div>

      {array.map((el, questionIndex) => {
        return (
          <div
            key={questionIndex}
            style={{
              marginTop: '25px',
              display: 'flex',
              flexDirection: 'column',
            }}
            ref={(ref) => (checkeBoxRefs.current[questionIndex] = ref!)}
          >
            <h3
              style={{
                fontWeight: 'bold',
                color: '#a84200',
                marginBottom: '10px',
                fontSize: '17px',
              }}
            >
              {`${questionIndex + 1}. ${t(
                `self_test.question_${questionIndex + 1}`,
              )}`}
            </h3>

            <Radio.Group
              size="large"
              onChange={(e) => onChange(e.target.value, questionIndex)}
              // value={value}
              style={{ paddingLeft: '5px' }}
            >
              <Space direction="vertical">
                {optionArray.map((option, choiceIndex) => {
                  return (
                    <Radio
                      key={choiceIndex}
                      value={choiceIndex}
                      style={{ fontSize: '16px' }}
                    >
                      {t(
                        `self_test.question_${questionIndex + 1}_choice_${
                          choiceIndex + 1
                        }`,
                      )}
                    </Radio>
                  );
                })}
              </Space>
            </Radio.Group>
          </div>
        );
      })}
      <section style={{ display: 'flex', justifyContent: 'center' }}>
        <GreenButton onClick={answerResult}>
          {t('self_test.submit')}
        </GreenButton>
      </section>
      {contextHolder}
    </section>
  );
};

export default SelfTestSurveyPage;
