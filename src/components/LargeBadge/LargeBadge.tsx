import { Typography } from "antd";
import { FC, ReactNode } from "react";
import styles from "./LargeBadge.module.scss";

interface LargeBadgeProps {
  children: ReactNode;
  backgroundColor: string;
}

export const LargeBadge: FC<LargeBadgeProps> = ({
  children,
  backgroundColor,
}) => (
  <div className={styles.badge} style={{ backgroundColor }}>
    <Typography.Text className={styles.text}>{children}</Typography.Text>
  </div>
);
