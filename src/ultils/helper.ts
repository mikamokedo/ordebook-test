import { ProcessedData, ReceiveMessage } from './types';

export function handleData(data: ReceiveMessage) {
  let newData: ProcessedData = { bids: [], asks: [] };
  function processList(list: number[][], type: 'bids' | 'asks') {
    let total = 0;
    list.forEach(function (item) {
      let price = item[0];
      let size = item[1];
      total += size;
      newData[type].push({ total, size, price });
    });
  }
  processList(data.bids, 'bids');
  processList(data.asks, 'asks');
  return newData;
}

export function mergeData(
  oldData: ProcessedData,
  newData: ProcessedData
): ProcessedData {
  for (let key in newData) {
    let keyOfProcessedData = key as keyof ProcessedData;
    for (let i = 0; i < newData[keyOfProcessedData].length; i++) {
      let price = newData[keyOfProcessedData][i].price;
      let size = newData[keyOfProcessedData][i].size;

      let index = oldData[keyOfProcessedData].findIndex(function (item) {
        return item.price === price;
      });

      if (index !== -1) {
        oldData[keyOfProcessedData][index].size += size;
        oldData[keyOfProcessedData][index].total += size;
      } else {
        oldData[keyOfProcessedData].push(newData[keyOfProcessedData][i]);
      }
    }
  }
  return oldData;
}
