const fetchUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=1da23b1cc2fb4efca3e8138e7610d0d3`

export const getPopularNewsStories = () => {
    fetch(fetchUrl)
  .then(response => response.json())
  .then(data => data);
}