import React from 'react';

interface JokeProps {
  joke: string;
}

const Joke: React.FC<JokeProps> = ({ joke }) => {
  return <p>{joke}</p>;
};

export default Joke;