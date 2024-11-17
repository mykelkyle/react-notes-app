import { useState } from "react";

const App = () => {
  const [text, setText] = useState("");
  const [messages, setMessage] = useState([]);

  const addMessage = () => {
    setMessage(messages.concat(text));

    setTimeout(() => {
      setMessage(messages.filter((m) => m !== text));
    }, 5000);
  };

  // const addMessage = (newMessage) => {
  //   setMessage((currentMessages) => currentMessages.concat(text));

  //   setTimeout(() => {
  //     setMessage((currentMessages) => {
  //       return currentMessages.filter((m) => m !== text);
  //     });
  //   }, 5000);
  // };

  //   const [someState, setSomeState] = useState('')

  // setSomeState('new state')

  // setSomeState((currentState) => {
  //   return 'new state'
  // })

  // someState = []
  // setState([...state, newUser])

  // setState(newArray)

  // {x: 0, y: 1}

  // setting state async
  // using object or array
  // when modifiying but not setting a new object

  return (
    <div>
      <input value={text} onChange={({ target }) => setText(target.value)} />
      <button onClick={addMessage}>add</button>

      {messages.map((m) => (
        <p key={m}>
          <strong>{m}</strong>
        </p>
      ))}
    </div>
  );
};

export default App;
