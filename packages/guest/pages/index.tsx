import Link from 'next/link';
import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';

import { Button } from '@todo-liszt/components';

// const APP_DOMAIN = 'http://localhost:3001';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Button>Shared button</Button>
      <a href="/app">Go to dashboard (CRA)</a>
      <Link href="/about">Go to about page (NextJS)</Link>
    </div>
  );
};

export default Home;

// location / {
//   proxy_pass "http://localhost:3000";
//   proxy_http_version 1.1;
//   proxy_set_header Upgrade $http_upgrade;
//   proxy_set_header Connection 'upgrade';
//   proxy_set_header Host $host;
//   proxy_cache_bypass $http_upgrade;
// }

// server {
//   listen 80;
//   listen [::]:80;

//   server_name _;

//   location /app {
// root /var/www/todo-liszt/dashboard/build;
// index index.html index.htm;
//           try_files $uri /index.html =404;
//   }
// }
