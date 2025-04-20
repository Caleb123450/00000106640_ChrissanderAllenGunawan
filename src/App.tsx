import React from "react";

const getRandomColor = (): string => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const color1 = getRandomColor();
const color2 = getRandomColor();
const color3 = getRandomColor();
const color4 = getRandomColor();
const color5 = getRandomColor();
const color6 = getRandomColor();

const App: React.FC = () => {
  return (
    <div>
      <h1 style={{ color: color1 }}>Hello World</h1>
      <p style={{ color: color2 }}>My Name is YOURNAME HERE</p>
      <p style={{ color: color3 }}>I am a handsome/pretty human being</p>
      <p style={{ color: color4 }}>I love to learn JavaScript</p>
      <p style={{ color: color5 }}>I am a super high quality student</p>
      <p style={{ color: color6 }}>I am going to be a super star</p>
    </div>
  );
};

export default App;
