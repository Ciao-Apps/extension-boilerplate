import styles from '../../styles/Pages.module.css';

export default function Index({ navigateToPage }) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>NEXT-CHROME-STARTER</h1>
        <p className={styles.description}>
          Tab page
        </p>
        <h1 className={styles.code}>Tab Page ./pages/TabPage/index.js</h1>
        <p>{"[ - This is Index page content - ]"}</p>
        <p onClick={() => navigateToPage('new')}>{"Go to New Page >"}</p>
      </main>
    </div>
  );
}
