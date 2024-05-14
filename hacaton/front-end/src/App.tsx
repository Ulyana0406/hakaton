import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import styles from './App.module.scss'

function App() {
  return (
    <>
    <div className={styles.container}>
      <Header />
      <Outlet />
    </div>
    <Footer />
    </>
  );
}

export default App;
