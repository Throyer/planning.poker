import md5 from 'crypto-js/md5';

interface GithubUser {
  avatar: string;
  bio: string;
}

export const github = async (
  username: string,
): Promise<GithubUser | undefined> => {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const user = await response.json();

    if (response.status !== 200) {
      return undefined;
    }
    return {
      avatar: user.avatar_url,
      bio: user.bio,
    };
  } catch (error) {
    return undefined;
  }
};

export const gravatarUrl = async (
  email: string,
  size = 250,
): Promise<string> => {
  const url = `http://www.gravatar.com/avatar/${md5(
    email,
  )}.jpg?s=${size}&default=error`;

  try {
    await fetch(url);
    return url;
  } catch (error) {
    return '';
  }
};
