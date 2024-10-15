import { message } from 'antd';

const UseMessage = () => {
  const [messageApi, contextHolder] = message.useMessage();
  return { messageApi, contextHolder };
};

export default UseMessage;
