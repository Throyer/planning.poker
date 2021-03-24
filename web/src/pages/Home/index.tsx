import { FaCertificate } from 'react-icons/fa';
import { BsBoxArrowInRight } from 'react-icons/bs';
import { Button } from '../../components/Button';
import { Container } from './styles';

export const Home = () => (
  <Container>
    <div>
      <Button type="button">
        <BsBoxArrowInRight />
        <span>Join</span>
      </Button>
      <Button type="button">
        <FaCertificate />
        <span>Create</span>
      </Button>
    </div>
  </Container>
);
