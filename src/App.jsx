import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import PhotoComponent from "./components/PhotoComponent";
import { createApi } from "unsplash-js";

const api = createApi({
  accessKey: "h24lkcjR0z51Ii8jHuZQWgksSukHd05Dm9U9CDO7N60",
});

function App() {
  const [photos, setPhotosResponse] = useState(null);
  const [searchResult, setSearchResult] = useState("mountain");
  console.log(searchResult);

  useEffect(() => {
    api.search
      .getPhotos({
        query: searchResult,
        orientation: "landscape",
        perPage: 100,
      })
      .then((result) => {
        setPhotosResponse(result);
      })
      .catch(() => {
        console.log("something went wrong!");
      });
  }, [searchResult]);

  return (
    <div id="main">
      <Navbar />
      <SearchBar setSearchResult={setSearchResult} />
      <div className="feed">
        <ul className="columnUl">
          {photos &&
            photos.response.results.map((photo) => (
              <li key={photo.id} className="li">
                <PhotoComponent photo={photo} />
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
