import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import ArticleList from "../components/ArticleList";
import Footer from "../components/Footer";

const Home = ({ newsStories }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header />
        <ArticleList newsStories={newsStories} />
      </main>
      <Footer />
    </div>
  );
};

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&apiKey=1da23b1cc2fb4efca3e8138e7610d0d3`
  );
  const newsStories = await res.json();
  // Pass data to the page via props
  return { props: { newsStories } };
}

export default Home;
