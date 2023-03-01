import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import { Post } from "./Post";

import styles from "./App.module.css";
import "./global.css";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post
            author="Thayna"
            content="Este é um post muito legal."
          />
          <Post author="Joao" content="Este é outro post muito legal." />
        </main>
      </div>
    </div>
  );
}
