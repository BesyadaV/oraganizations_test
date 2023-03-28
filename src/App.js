import React from 'react';
import Header from "./containers/Header/Header";
import styles from './App.module.scss'
import Organizations from "./containers/Organizations/Organizations";
const App = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Organizations />
    </div>
  );
};

export default App;
