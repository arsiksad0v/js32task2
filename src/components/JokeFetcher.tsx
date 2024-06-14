import React, { useState, useEffect } from 'react';
import Joke from './Joke';

const JokeFetcher: React.FC = () => {
  const [joke, setJoke] = useState<string>('');
  const [error, setError] = useState<string>('');

  useEffect(() => {
    fetchJoke();
  }, []);

  const fetchJoke = async () => {
    try {
      const response = await fetch('https://api.chucknorris.io/jokes/random');
      const data = await response.json();
      setJoke(data.value);
      setError('');
    } catch (error) {
      setError('Failed to fetch joke');
    }
  };

  return (
    <div>
      {error ? <p>{error}</p> : <Joke joke={joke} />}
      <button onClick={fetchJoke}>Get New Joke</button>
    </div>
  );
};

export default JokeFetcher;