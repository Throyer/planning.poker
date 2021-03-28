import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { AiOutlineUser } from 'react-icons/ai';

import { gravatarUrl, github } from '../../utils/avatar-utils';

import { Button } from '../../components/Button';

import {
  Container,
  Form,
  AvatarContainer,
  BlankAvatar,
  ButtonContainer,
} from './styles';

export const Join = () => {
  const history = useHistory();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [avatarUrl, setAvatarUrl] = useState('');
  const [bio, setBio] = useState('');

  useEffect(() => {
    (async () => {
      let url = '';
      let githubBio = '';
      if (username) {
        const result = await github(username);
        if (result) {
          url = result.avatar;
          githubBio = result.bio;
        }
      }
      if (email) {
        const result = await gravatarUrl(email);

        if (result) {
          url = result;
        }
      }

      if (url) {
        setAvatarUrl(url);
        setBio(githubBio);
      } else {
        setAvatarUrl('');
        setBio('');
      }
    })();
  }, [email, username]);

  return (
    <Container>
      <AvatarContainer>
        {avatarUrl ? (
          <img src={avatarUrl} alt="Avatar" />
        ) : (
          <BlankAvatar>
            <AiOutlineUser />
          </BlankAvatar>
        )}
        <p>you can use gravatar email or github username on avatar</p>
      </AvatarContainer>
      <Form
        onSubmit={event => {
          event.preventDefault();
          history.push('session', {
            username,
            avatar: avatarUrl,
            bio,
          });
        }}
      >
        <input
          type="text"
          name="username"
          value={username}
          placeholder="username"
          onChange={({ target: { value } }) => setUsername(value)}
        />
        <input
          type="text"
          name="email"
          value={email}
          placeholder="e-mail"
          onChange={({ target: { value } }) => setEmail(value)}
        />
        <ButtonContainer>
          <Button
            className="left"
            onClick={() => history.push('/')}
            type="button"
          >
            Back
          </Button>
          <Button className="right" disabled={!avatarUrl} type="submit">
            join
          </Button>
        </ButtonContainer>
      </Form>
    </Container>
  );
};
