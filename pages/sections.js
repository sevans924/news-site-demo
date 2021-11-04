import Head from "next/head";
import styles from "../styles/Home.module.css"
import Header from "../components/Header";
import Footer from "../components/Footer";

const Sections = () => {
  return (
    <>
      <Head>
        <title className={styles.title}> Sections Page</title>
      </Head>
      <div>
        <Header />
        <main className={styles.main}>
          <h2>Sections</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
            consequatur nemo. Numquam, iste. Ducimus, saepe. Nobis recusandae
            eligendi iusto est sequi distinctio error eveniet, unde reiciendis,
            voluptates cumque quas tempore.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
            consequatur nemo. Numquam, iste. Ducimus, saepe. Nobis recusandae
            eligendi iusto est sequi distinctio error eveniet, unde reiciendis,
            voluptates cumque quas tempore.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
            consequatur nemo. Numquam, iste. Ducimus, saepe. Nobis recusandae
            eligendi iusto est sequi distinctio error eveniet, unde reiciendis,
            voluptates cumque quas tempore.
          </p>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Sections;
