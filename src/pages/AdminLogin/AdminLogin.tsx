import { Button, Form, Input } from 'antd';
import { Typography } from 'antd';
import {
  getAuth,
  signInWithEmailAndPassword,
  setPersistence,
  browserLocalPersistence,
} from '@firebase/auth';
import { app } from '../../config/firebase';
import { useState } from 'react';
import { useToast } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { myProfileStore } from '../../store/index';

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

// const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
// };

// const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {

// };

const AdminLogin = () => {
  const { updateMyProfile } = myProfileStore((state) => state);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginLoading, setLoginLoading] = useState(false);

  const navigate = useNavigate();

  const toast = useToast();
  const { Title } = Typography;

  return (
    <section
      style={{
        height: '100dvh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Title style={{ textAlign: 'center', padding: '30px 0', width: '100%' }}>
        어드민 로그인
      </Title>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600, width: '100%' }}
        initialValues={{ remember: true }}
        // onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label="Email"
          name="username"
          rules={[{ required: true, message: 'ID를 입력하세요' }]}
        >
          <Input
            value={username}
            onChange={(e) => {
              setUsername(e.currentTarget.value);
            }}
          />
        </Form.Item>

        <Form.Item<FieldType>
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Password를 입력하세요' }]}
        >
          <Input.Password
            value={password}
            onChange={(e) => {
              setPassword(e.currentTarget.value);
            }}
          />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button
            type="primary"
            htmlType="submit"
            style={{ width: '100%' }}
            loading={loginLoading}
            onClick={async () => {
              setLoginLoading(true);
              const auth = getAuth(app);
              setPersistence(auth, browserLocalPersistence)
                .then(async () => {
                  const userCredential = await signInWithEmailAndPassword(
                    auth,
                    username,
                    password,
                  );

                  updateMyProfile(userCredential.user);

                  const accessToken = await userCredential.user.getIdToken();

                  localStorage.setItem('login', accessToken);

                  toast({
                    position: 'top-right',
                    title: '로그인 성공',
                    description: `로그인에 성공하였습니다.`,
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                  });

                  navigate('/');
                })
                .catch((error) => {
                  const errorCode = error.code;
                  const errorMessage = error.message;

                  toast({
                    position: 'top-right',
                    title: 'Fail',
                    description: `[${errorCode}] ${errorMessage}`,
                    status: 'error',
                    duration: 3000,
                    isClosable: true,
                  });
                })
                .finally(() => {
                  setLoginLoading(false);
                });
            }}
          >
            로그인
          </Button>
        </Form.Item>
      </Form>
    </section>
  );
};

export default AdminLogin;
