import React from "react";
import Nav from "./components/Nav.jsx";
import ImageSlider from "./components/ImageSlider.jsx";
import Cards from "./components/Cards.jsx";

const images = [
  "https://www.gitam.edu/sites/default/files/2024-03/liberal-education.webp",
  "https://www.gitam.edu/sites/default/files/2024-05/campus-connect%20April.webp",
  "https://www.gitam.edu/sites/default/files/2024-06/convocation-desktp.webp",
  "https://www.gitam.edu/sites/default/files/2024-03/GAT%20with%20Date%20Web_1.webp",
  "https://www.gitam.edu/sites/default/files/2024-03/MBA-banner.webp",
];

const App = () => {
  return (
    <div>
      <Nav />
      <ImageSlider images={images} />
      <div className="flex justify-evenly mt-36">
        <Cards />
        <Cards />
        <Cards />
      </div>
    </div>
  );
};

export default App;
