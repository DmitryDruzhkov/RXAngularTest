import { Layer } from "./interfaces";

export const dataSource: number[] = [0, 1, 2, 3, 4];

const layerMaxValue = 1000000;

export const getLayerId = () => Math.floor(Math.random() * layerMaxValue);

export const layers: Layer[] = [
  {
    id: getLayerId(),
    layer: '1.1',
    isViewList: false,
    child: [
      {
        id: getLayerId(),
        layer: '1.2',
        isViewList: true,
        child: [
          {
            id: getLayerId(),
            layer: '1.3',
            isViewList: false,
          }
        ]
      }
    ]
  },
  {
    id: getLayerId(),
    layer: '2.1',
    isViewList: false,
    child: [
      {
        id: getLayerId(),
        layer: '2.2',
        isViewList: true,
        child: [
          {
            id: getLayerId(),
            layer: '2.3',
            isViewList: false,
          }
        ]
      }
    ]
  }
];