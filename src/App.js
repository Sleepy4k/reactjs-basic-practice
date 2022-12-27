import React, {useState, useEffect} from 'react';
import Introduction from './components/introduction';
import Profile from './components/profile';

function App() {
  const [text, setText] = useState("Benjamin4k");

  useEffect(() => {
    text == '' ? setText("Benjamin4k") : setText(text);
  }, [text]);

  return (
    <div>
      <Profile />
      <Introduction name={text} />
      <input type="text" className='text' placeholder='Nama kamu' onChange={(typing) => setText(typing.target.value)} />
    </div>
  );
}

export default App;
