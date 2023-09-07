import {
  ArrowDownOutlined,
  ArrowLeftOutlined,
  ArrowRightOutlined,
  ArrowUpOutlined,
} from "@ant-design/icons";
import { GraphDirection } from "../../../utils/hooks/useGraphDirection";

export const getDirectionIcon = (direction: GraphDirection) => {
  switch (direction) {
    case "BT":
      return <ArrowUpOutlined />;
    case "LR":
      return <ArrowRightOutlined />;
    case "RL":
      return <ArrowLeftOutlined />;
    case "TB":
      return <ArrowDownOutlined />;
  }
};
