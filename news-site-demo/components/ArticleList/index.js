import styles from './articleList.module.css';

const ArticleList = ({ newsStories }) => {

const articles = newsStories.articles

return (
 <div>

  <div className={styles.grid}>
    {articles.length ? (
      articles.map(
        ({ author, title, description, url, urlToImage, publishedAt }) => (
          <div className={styles.card}>
            <a href={url}>
              <div className={styles.image_wrapper}>
                <img
                  className={styles.image}
                  src={urlToImage}
                  alt={`Featured image for ${title}`}
                  height="300"
                  width="300"
                  objectFit="cover"
                  objectPosition="center"
                />
              </div>
              <h3>{title}</h3>
              <h4>{description}</h4>
              <div className={styles.card_bottom}>
                <h5>{author}</h5>
                <img alt="Share icon" src="share.png" height="30" />
                <img alt="Bookmark icon" src="bookmark.png" height="30" />
                <p>{publishedAt}</p>
              </div>
            </a>
          </div>
        )
      )
    ) : (
      <h3>No new stories</h3>
    )}
  </div>
  </div>
);
};

  export default ArticleList;
