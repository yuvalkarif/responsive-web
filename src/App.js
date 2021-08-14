import { ArticlesWrapper, Swipe, TopSection } from "./app.styles";
import Thumbnail from "./components/thumbnail";
import BigThumbnail from "./components/bigThumbnail";
const thumbnails = {
  thumbnail1: {
    imgSrc:
      "https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2021/08/Federated-learning-hed.jpg",
    title: "What is federated learning?",
    category: "NEURAL",
  },
  thumbnail2: {
    imgSrc:
      "https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2021/08/header-image-apple-scanning-iphones.jpg",
    title: "Please Apple, go through everything on my phone",
    category: "PLUGGED",
  },
  thumbnail3: {
    imgSrc:
      "https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2021/08/hedPerseidMeteor.jpg",
    title: "The Perseid meteor shower is TONIGHT — here’s how to watch it",
    category: "SPACE",
  },
};
const articles = [
  "OpenAI’s system for translating plain English into code looks impressive — and slightly scary",
  "Google’s ‘time crystals’ could be the greatest scientific achievement of our lifetimes",
  "Hacker who stole $600M of crypto returns $260M… ’cos they don’t dig money?",
  "Don’t adjust your screen: Twitter has a new font for improved accessibility",
  "Is space infinite? Here are 5 expert opinions",
];
function App() {
  return (
    <div className="App">
      <TopSection>
        <header>TYK</header>
        <span>The tnw clone by Yuval Karif</span>
      </TopSection>
      <section className="thumb-section">
        <Swipe>
          <Thumbnail info={thumbnails.thumbnail3} />
          <Thumbnail info={thumbnails.thumbnail2} />
          <Thumbnail info={thumbnails.thumbnail1} />
        </Swipe>
        <BigThumbnail />
      </section>
      <section>
        <ArticlesWrapper>
          <h2>POPULAR ARTICLES TODAY</h2>
          <ol>
            {articles.map((article, i) => (
              <li>
                <h3>{i + 1}</h3>
                <span>{article}</span>
              </li>
            ))}
          </ol>
        </ArticlesWrapper>
      </section>
    </div>
  );
}

export default App;
