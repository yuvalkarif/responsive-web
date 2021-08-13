import { Swipe, TopSection } from "./app.styles";
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

function App() {
  return (
    <div className="App">
      <TopSection>
        <header>TYK</header>
        <span>The tnw clone by Yuval Karif</span>
      </TopSection>
      <section>
        <Swipe>
          <Thumbnail info={thumbnails.thumbnail3} />
          <Thumbnail info={thumbnails.thumbnail2} />
          <Thumbnail info={thumbnails.thumbnail1} />
        </Swipe>
      </section>
      <section>
        <BigThumbnail />
      </section>
    </div>
  );
}

export default App;
