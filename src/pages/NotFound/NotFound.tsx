import { Button, Result } from 'antd';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <section>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Link to="/">
            <Button type="primary">홈으로</Button>
          </Link>
        }
      />
    </section>
  );
};

export default NotFound;
