import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';

import { Button } from '@todo-liszt/components';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Button>Shared button</Button>
    </div>
  );
};

export default Home;
