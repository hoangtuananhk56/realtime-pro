import React, { useEffect, useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { User, Connect, Message } from './proto/message/message_pb';
import { MessageServiceClient } from './proto/message/MessageServiceClientPb';
import { requestPermission, onMessageListener } from './messaging_initial';



export const client = new MessageServiceClient("https://grpc.api.equateur.develop.bfast-vn.net", null, null);
// export const client = new MessageServiceClient("http://localhost:8888", null, null);

function App() {
  //Create a room

  const [a, setA] = useState(null);
  const [token, setToken] = useState<string>("1");
  const [connection, setConnection] = useState<Connect>();

  const defineConnection = () => {
    const user = new User()
    user.setId(Math.random().toString())
    user.setName("Jindo")
    // user.setRoomName("1")
    user.setRoomName("attendu_box-cli_f3b09aa0-c906-4793-bd55-03785bd10be8-cpn_4b3317bb-06ac-411a-927c-6866229dd1ba-ware_818bb82a-817f-4f4b-bfb8-060c261e9318")
    const connect = new Connect();
    connect.setUser(user);
    connect.setActive(true);
    connect.setToken(Math.random().toString())
    connect.setRoomName("attendu_box-cli_f3b09aa0-c906-4793-bd55-03785bd10be8-cpn_4b3317bb-06ac-411a-927c-6866229dd1ba-ware_818bb82a-817f-4f4b-bfb8-060c261e9318");

    setConnection(connect)
    return connect
  }

  const closeStream = () => {
    if (connection) {
      client.closeStream(connection)
    }

  }

  useEffect(() => {
    const connect = defineConnection();
    (() => {
      var stream = client.createStream(connect)

      // Handle incoming stream responses
      console.log("streamBox: ", stream)
      stream.on("data", (response: Message) => {
        // Process incoming data
        console.log("data: ", response.toObject())
      });

      // Handle stream completion or error
      stream.on("end", () => {
        // Stream ended
        closeStream()
        stream = client.createStream(connect)
      });

      stream.on("error", (error: Error) => {
        // Handle error
        closeStream()
        stream = client.createStream(connect)
      });

    })();
  }, [])



  // useEffect(() => {
  //   console.log("Requesting permission...");
  //   requestPermission();
  //   onMessageListener();
  // }, [])

  const sendHello = () => {
    const msg = new Message()
    const uuid = require("uuid");
    const id = uuid.v4();
    msg.setId("1")

    // msg.setAttenduEntry()
    msg.setTimestamp("123456789")
    msg.setRoomName("attendu_box-cli_f3b09aa0-c906-4793-bd55-03785bd10be8-cpn_4b3317bb-06ac-411a-927c-6866229dd1ba-ware_818bb82a-817f-4f4b-bfb8-060c261e9318")


    const aa = client.broadcastMessage(msg)
    aa.then(res => {
      console.log("client: ", res.toObject())
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={sendHello} style={{ width: 100, height: 50 }}>Send Hello</button>
        <button onClick={closeStream} style={{ width: 100, height: 50 }}>Close Stream</button>
      </header>
    </div>
  );
}

export default App;

