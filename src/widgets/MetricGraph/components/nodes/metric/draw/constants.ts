export const CONTAINER_WIDTH = 200;
export const CONTAINER_HEIGHT = 98;
export const CONTAINER_COLOR = "#FFFBFB";

export const METRIC_CONTENT_PADDING = {
  top: 8,
  right: 8,
  bottom: 8,
  left: 10,
};

export const DOMAIN_FLAG_WIDTH = 10;
// TO-DO: add colors
export const DOMAIN_FLAG_COLORS = {
  finance: "#50E537",
  product: "white",
  marketing: "white",
  risks: "white",
  clientService: "white",
  sales: "white",
};

// offset from the left
export const CONTENT_X_OFFSET = DOMAIN_FLAG_WIDTH + METRIC_CONTENT_PADDING.left;

export const HEADING_COLOR = "#000000";
export const HEADING_LINE_HEIGHT = 24;
export const HEADING_FONT_SIZE = 16;
// offset from the top
export const HEADING_Y_OFFSET =
  METRIC_CONTENT_PADDING.top + HEADING_LINE_HEIGHT;
export const HEADING_FONT_WEIGHT = 400;
const HEADING_MARGIN_BOTTOM = 16;

export const EXPAND_ICON_SIZE = 10;

export const DEFAULT_FONT_SIZE = 12;
export const DEFAULT_LINE_HEIGHT = 18;
export const DEFAULT_FONT_WEIGHT = 400;

// common offset for value, trend text and icon
export const VALUES_Y_OFFSET =
  METRIC_CONTENT_PADDING.top + HEADING_LINE_HEIGHT + HEADING_MARGIN_BOTTOM;
// offset of value and trend text from the top
export const VALUES_TEXT_Y_OFFSET = DEFAULT_LINE_HEIGHT + VALUES_Y_OFFSET;

export const VALUE_COLOR = "#000000";
export const VALUE_MARGIN_RIGHT = 10;

export const TREND_ICON_SIZE = 12;
export const TREND_ICON_MARGIN_RIGHT = 2;

export const TREND_VALUE_COLOR = "#33A000";
