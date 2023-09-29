export interface Group {
  cfg: {
    canvas: {
      cfg: {
        context: CanvasRenderingContext2D;
      };
    };
    totalMatrix: number[];
    item: {
      _cfg: {
        id: string;
        states: string[];
      };
    };
  };
  addShape: any;
}
