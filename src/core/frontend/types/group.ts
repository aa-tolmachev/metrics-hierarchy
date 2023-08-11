export interface Group {
  cfg: {
    canvas: {
      cfg: {
        context: CanvasRenderingContext2D;
      };
    };
    totalMatrix: number[];
  };
  addShape: any;
}
