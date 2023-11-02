import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import OrderHistory from './components/OrderHistory';
import Bottom from './components/Bottom';
import useWebSocket, { ReadyState } from 'react-use-websocket';

const SOCKET_URL = 'wss://www.cryptofacilities.com/ws/v1';

function App() {
  const { sendMessage, lastMessage, readyState } = useWebSocket(SOCKET_URL);
  const [messageHistory, setMessageHistory] = useState([]);

  useEffect(() => {
    if (lastMessage !== null) {
      // setMessageHistory((prev: any) => prev.concat(lastMessage));
      console.log(lastMessage.data);
    }
  }, [lastMessage, setMessageHistory]);
  useEffect(() => {
    if (readyState === 1) {
      sendMessage(
        JSON.stringify({
          event: 'subscribe',
          feed: 'book_ui_1',
          product_ids: ['PI_XBTUSD'],
        })
      );
    }
  }, [readyState]);

  return (
    <div className="flex justify-center mt-[50px]">
      <div className="w-[800px] h-[600px] bg-black">
        <Header />
        <div className="flex order-book">
          <div className="w-6/12">
            <OrderHistory
              orders={[
                { total: 1000.5, size: 50, price: 55042.4 },
                { total: 544.5, size: 21, price: 2352.4 },
              ]}
            />
          </div>
          <div className="w-6/12">
            <OrderHistory
              isSellBoard={true}
              orders={[
                { total: 544.5, size: 21, price: 2352.4 },
                { total: 1000.5, size: 50, price: 55042.4 },
              ]}
            />
          </div>
        </div>
        <Bottom />
      </div>
    </div>
  );
}

export default App;
