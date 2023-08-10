import { QuestionCircleOutlined } from "@ant-design/icons";
import { Space, Tooltip, Typography } from "antd";
import { FC, ReactNode } from "react";
import styles from "./TextTooltip.module.scss";

interface TextTooltipProps {
  children: ReactNode;
  tooltip: string;
}

export const TextTooltip: FC<TextTooltipProps> = ({ children, tooltip }) => (
  <Space align="center">
    <Typography.Text className={styles.text}>{children}</Typography.Text>
    <Tooltip title={tooltip} trigger="hover">
      <QuestionCircleOutlined />
    </Tooltip>
  </Space>
);
