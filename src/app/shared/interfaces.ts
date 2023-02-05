export interface Layer {
  id: number;
  layer: string;
  isViewList: boolean;
  child?: Layer[];
}
