import React, { useState, useEffect } from 'react';

const JokeFetcher: React.FC = () => {
  const [joke, setJoke] = useState<string>('');

  useEffect(() => {
    fetchJoke();
  }, []);

  const fetchJoke = async () => {
    try {
      const response = await fetch('https://api.chucknorris.io/jokes/random');
      const data = await response.json();
      setJoke(data.value);
    } catch (error) {
      console.error('Error fetching joke:', error);
    }
  };

  return (
    <div>
      <p>{joke}</p>
      <button onClick={fetchJoke}>Get New Joke</button>
    </div>
  );
};

export default JokeFetcher;