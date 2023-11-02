export const ProductIds = {
  XBTUSD: 'PI_XBTUSD',
  ETHUSD: 'PI_ETHUSD',
};

export const selectOptions: Record<string, number[]> = {
  PI_XBTUSD: [0.5, 1, 2.5],
  PI_ETHUSD: [0.05, 0.1, 0.25],
};

export enum ProductsEnum {
  PI_XBTUSD = 'PI_ETHUSD',
  PI_ETHUSD = 'PI_XBTUSD',
}
