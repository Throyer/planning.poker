import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Container } from './styles';

export const Join = () => {
  const history = useHistory();
  const [username, setUsername] = useState('');
  return (
    <Container>
      <div>
        <input
          type="text"
          name="username"
          value={username}
          placeholder="username"
          onChange={({ target: { value } }) => setUsername(value)}
        />
        <Button
          onClick={() =>
            history.push('session', {
              username,
            })
          }
        >
          JOIN
        </Button>
      </div>
    </Container>
  );
};
