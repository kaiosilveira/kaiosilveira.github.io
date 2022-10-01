import { faGithub } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import './App.css';
import SocialIconLink from './components/social-icon';

const App = () => {
  return (
    <React.Fragment>
      <h1>Kaio Silveira</h1>
      <SocialIconLink
        href="https://github.com/kaiosilveira"
        icon={faGithub}
        ariaLabel="link to github profile"
      />
    </React.Fragment>
  );
};

export default App;
