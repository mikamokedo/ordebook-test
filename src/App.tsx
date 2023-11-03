import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import OrderBoard from './components/OrderBoard';
import Footer from './components/Footer';
import useWebSocket from 'react-use-websocket';
import {
  selectOptions,
  SOCKET_URL,
  ItemBoardLimit,
  initValueOrderList,
} from './ultils/const';
import { handleData, mergeData } from './ultils/helper';
import { ProductsEnum, ProcessedData } from './ultils/types';

function App() {
  const { sendMessage, lastMessage, getWebSocket } = useWebSocket(SOCKET_URL);
  const [productId, setProductId] = useState(ProductsEnum.PI_XBTUSD);
  const [isFeedKilled, setIsFeedKilled] = useState(false);
  const [groupSelected, setGroupSelected] = useState(
    selectOptions[ProductsEnum.PI_XBTUSD][0]
  );
  const [orderList, setOrderList] = useState<ProcessedData>(initValueOrderList);

  useEffect(() => {
    if (!lastMessage) {
      return;
    }
    const messageData = JSON.parse(lastMessage?.data);
    if (messageData?.asks) {
      const newData = handleData(messageData);
      setOrderList(mergeData(orderList, newData));
    }
  }, [lastMessage]);

  useEffect(() => {
    function connect(product: string) {
      const oppositeProductId =
        product === ProductsEnum.PI_XBTUSD
          ? ProductsEnum.PI_ETHUSD
          : ProductsEnum.PI_XBTUSD;

      const unSubscribeMessage = {
        event: 'unsubscribe',
        feed: 'book_ui_1',
        product_ids: [oppositeProductId],
      };
      sendMessage(JSON.stringify(unSubscribeMessage));

      const subscribeMessage = {
        event: 'subscribe',
        feed: 'book_ui_1',
        product_ids: [product],
      };
      sendMessage(JSON.stringify(subscribeMessage));
    }

    if (isFeedKilled) {
      getWebSocket()?.close();
    } else {
      connect(productId);
    }
  }, [isFeedKilled, productId, sendMessage, getWebSocket]);

  const handleToggle = () => {
    setProductId((state) =>
      state === ProductsEnum.PI_XBTUSD
        ? ProductsEnum.PI_ETHUSD
        : ProductsEnum.PI_XBTUSD
    );
    setOrderList(initValueOrderList);
  };

  const handleKillFeed = () => {
    setIsFeedKilled((state) => !state);
  };

  return (
    <div className="flex justify-center mt-[50px]">
      <div className="w-[800px] h-[600px] bg-black">
        <Header
          selectOptions={selectOptions[productId]}
          value={groupSelected}
          onChange={setGroupSelected}
        />
        <div className="flex order-book">
          <div className="w-6/12">
            <OrderBoard orders={orderList.bids.slice(-ItemBoardLimit)} />
          </div>
          <div className="w-6/12">
            <OrderBoard
              isSellBoard={true}
              orders={orderList.asks.slice(-ItemBoardLimit)}
            />
          </div>
        </div>
        <Footer onToggle={handleToggle} onKillFeed={handleKillFeed} />
      </div>
    </div>
  );
}

export default App;
