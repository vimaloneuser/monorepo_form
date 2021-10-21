import styles from './app.module.scss';
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
