export interface Layer {
  id: number;
  layer: string;
  isViewList: boolean;
  isListRx?: boolean;
  isCounterRx?: boolean;
  isChildRx?: boolean;
  child?: Layer[];
}
