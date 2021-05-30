import { useState } from 'react';
import './App.css';
import { Card } from './Card';
import Logo from './logo.png'
function App() {
  const [col, setColor] = useState('');
  const data = [{
    id: 1,
    name: 'Linktree x Luke John Matthew Arnold',

    style_bg: "green",
    style_item: "",
  },
  {
    id: 2,
    name: 'Linktree x Judit Zengovari',
    style_bg: "red",
    style_item: "",
  },

  {
    id: 3,
    name: 'Linktree x Laylie',
    style_bg: "linear-gradient(#e66465, #9198e5)",
    style_item: "",
  },
  {
    id: 4,
    name: 'Rainbow',
    style_bg: "",
    style_item: "",
  },
  {
    id: 5,
    name: '3D Blocks',
    style_bg: "linear-gradient(#bdc3c7 , #2c3e50)",
    style_item: "",
  },
  {
    id: 6,
    name: 'Confetti',
    style_bg: "linear-gradient(#00416a, #799f0c, #ffe000)",
    style_item: "",
  },
  {
    id: 7,
    name: 'Starry Night',
    style_bg: "linear-gradient(130deg, #ff7e00, #ffffff, #5cff00)",
    style_item: "",
  },
  {
    id: 8,
    name: 'Leaf',
    style_bg: "linear-gradient()",
    style_item: "",
  },
  {
    id: 9,
    name: 'Snow',
    style_bg: "linear-gradient()",
    style_item: "",
  },
  {
    id: 10,
    name: 'Moon',
    style_bg: "linear-gradient()",
    style_item: "",
  },
  {
    id: 11,
    name: 'Smoke',
    style_bg: "linear-gradient()",
    style_item: "",
  },
  {
    id: 12,
    name: 'Noir',
    style_bg: "linear-gradient()",
    style_item: "",
  },

  {
    id: 13,
    name: 'Mint',
    style_bg: "linear-gradient()",
    style_item: "",

  },
  {
    id: 14,
    name: 'Miami',
    style_bg: "linear-gradient()",
    style_item: "",
  },
  {
    id: 15,
    name: 'Bloom',
    style_bg: "linear-gradient()",
    style_item: "",
  },
  {
    id: 16,
    name: 'Spray',
    style_bg: "linear-gradient()",
    style_item: "",
  },
  ];

  const addCss = (id) => {

    const isindex = (element) => element.id === id;
    let d = data.findIndex(isindex);
    setColor(data[d].style_bg)
  
  }

  return (
    <div>
      <h1 className="App">Hii, HRishahbh</h1>
      <h2>Theme</h2>

      <div className="app_main">
        <div className='app_main_left'>
          {data.map((item) => (
            <Card key={item.id} id={item.id} background={item.style_bg} click1={addCss} name={item.name} />
          ))}
        </div>
        <div className='app_main_right'>
          <div style={{ background: col }} className='app_main_view'>
            <div>
              <img src={Logo} alt="" />
              <p>Newton</p>
              <p>Git</p>
              <p>Google</p>
              <p>Yahoo</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
