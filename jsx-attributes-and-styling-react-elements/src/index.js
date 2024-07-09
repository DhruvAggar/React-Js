// this is the practice file.....

import React from "react";
import ReactDOM from "react-dom";

// it will provide the random photos
const img = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 style={{ color: "red" }}>HELLO WORLD!</h1>

    <img src={img} alt="" className="imageStyle" />
    <img
      src="https://imgs.search.brave.com/pNEAc7APSoId-jL8nUT6ytyDBAONIoKDMCQfyoeqBjQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM5/MzQwNDg5My9waG90/by90ZXJpeWFraS1z/aHJpbXAtd2l0aC1y/YW1lbi1ub29kbGVz/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz05TjNITjdSUlVi/RzVOQlZMd3lJM2ZV/SEJ5WERRVkk2RzNh/QkRVQlFCLVI4PQ"
      alt=""
      className="imageStyle"
    />
  </div>,
  document.getElementById("root")
);
