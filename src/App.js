import React, {useState, useEffect} from 'react';
import Introduction from './components/introduction';
import Profile from './components/profile';
import Footer from './components/footer';

function App() {
  const profileHeading = "Belajar React";
  const profileText = "Belajar syntax dasar react js";

  const footer = () =>  {
    return (
      <div>
        <marquee>
          Selamat belajar,
          <br/>
          Sayang zooane dehh
        </marquee>
      </div>
    );
  }

  const [text, setText] = useState("Benjamin4k");

  useEffect(() => {
    text == '' ? setText("Benjamin4k") : setText(text);
  }, [text]);

  return (
    <div>
      <Profile heading={profileHeading} text={profileText} />
      <Introduction name={text} />
      <input type="text" className='text' placeholder='Nama kamu' onChange={(typing) => setText(typing.target.value)} />
      <Footer footer={footer} />
    </div>
  );
}

export default App;
