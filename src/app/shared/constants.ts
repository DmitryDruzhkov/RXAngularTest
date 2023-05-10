import { Layer } from "./interfaces";

export const dataSource: number[] = [0, 1, 2, 3, 4];

const layerMaxValue = 1000000;

export const getLayerId = () => Math.floor(Math.random() * layerMaxValue);

const getLayerConfig = () => ({
  isViewList: false,
  isChildRx: true,
  isListRx: true,
  isCounterRx: false,
  id: getLayerId(),
})

export const layers: Layer[] = [
  {
    ...getLayerConfig(),
    layer: '1.1',
    child: [
      {
        ...getLayerConfig(),
        layer: '1.2',
        isViewList: true,
        child: [
          {
            ...getLayerConfig(),
            layer: '1.3',
          }
        ]
      }
    ]
  },
  {
    ...getLayerConfig(),
    layer: '2.1',
    child: [
      {
        ...getLayerConfig(),
        layer: '2.2',
        isViewList: true,
        child: [
          {
            ...getLayerConfig(),
            layer: '2.3',
          }
        ]
      }
    ]
  }
];
