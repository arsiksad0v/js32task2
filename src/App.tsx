import React from 'react';
import JokeFetcher from './components/JokeFetcher';

const App: React.FC = () => {
  return (
    <div>
      <h1>Chuck Norris Jokes</h1>
      <JokeFetcher />
    </div>
  );
};

export default App;
