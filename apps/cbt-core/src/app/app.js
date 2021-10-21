import styles from './app.module.scss';
import { ReactComponent as Logo } from './logo.svg';
import star from './star.svg';

import { Route, Link } from 'react-router-dom';

import AppClientMgmt  from '@edutest/app/center-mgmt';

export function App() {
  return (
    <div className={styles.app}>
        <AppClientMgmt />
      <br />
    </div>
  );
}
export default App;
