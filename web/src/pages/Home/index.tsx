import { FaCertificate } from 'react-icons/fa';
import { BsBoxArrowInRight } from 'react-icons/bs';
import { useHistory } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Container } from './styles';

export const Home = () => {
  const history = useHistory();

  return (
    <Container>
      <div>
        <Button type="button" onClick={() => history.push('/join')}>
          <BsBoxArrowInRight />
          <span>Join</span>
        </Button>
        <Button type="button" onClick={() => history.push('/create')}>
          <FaCertificate />
          <span>Create</span>
        </Button>
      </div>
    </Container>
  );
};
