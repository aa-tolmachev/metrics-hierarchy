export const CONTAINER_WIDTH = 250;
export const CONTAINER_HEIGHT = 128;
export const CONTAINER_BACKGROUND = "#FFFBFB";

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

export const MAX_HEADING_WIDTH = 23;
export const HEADING_COLOR = "#000000";
export const HEADING_LINE_HEIGHT = 24;
export const HEADING_FONT_SIZE = 16;
// offset from the top
export const HEADING_Y_OFFSET =
  METRIC_CONTENT_PADDING.top + HEADING_LINE_HEIGHT;
export const HEADING_FONT_WEIGHT = 400;
const HEADING_MARGIN_BOTTOM = 36;

export const EXPAND_ICON_SIZE = 16;

export const DEFAULT_FONT_SIZE = 12;
export const DEFAULT_LINE_HEIGHT = 18;
export const DEFAULT_FONT_WEIGHT = 400;

export const SMALL_FONT_SIZE = 8;
export const SMALL_LINE_HEIGHT = 12;
export const SMALL_FONT_WEIGHT = 400;

// common offset for value, trend text and icon
export const VALUES_Y_OFFSET =
  METRIC_CONTENT_PADDING.top + HEADING_LINE_HEIGHT + HEADING_MARGIN_BOTTOM;
// offset of value and trend text from the top
export const VALUES_TEXT_Y_OFFSET = DEFAULT_LINE_HEIGHT + VALUES_Y_OFFSET;
const VALUES_MARGIN_BOTTOM = 8;

export const VALUE_COLOR = "#000000";
export const VALUE_MARGIN_RIGHT = 10;

export const TREND_ICON_SIZE = 16;
export const TREND_ICON_MARGIN_RIGHT = 2;

export const TREND_VALUE_COLOR = "#33A000";

export const OWNER_STATE_Y_OFFSET = VALUES_TEXT_Y_OFFSET + VALUES_MARGIN_BOTTOM;

export const OWNER_BACKGROUND = "#FF4444";
export const OWNER_PADDING = { top: 0, right: 10, bottom: 2, left: 10 };
export const OWNER_NAME_COLOR = "#FFFFFF";
export const OWNER_NAME_MAX_LENGTH = 11;
export const OWNER_MARGIN_RIGHT = 8;

export const STATE_PADDING = {
  top: 2,
  right: 10,
  bottom: 2,
  left: 10,
};
export const STATE_BORDER_COLOR = "#A99D9D";
export const STATE_BORDER_RADIUS = 4;
export const STATE_NAME_COLOR = "#000000";
