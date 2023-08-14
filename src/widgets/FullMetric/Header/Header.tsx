import { FC } from "react";
import { LinkOutlined } from "@ant-design/icons";
import { notification } from "antd";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { MetricSectionProps } from "../types";
import { Heading } from "../../../components/Heading/Heading";
import styles from "./Header.module.scss";

export const Header: FC<MetricSectionProps> = ({ metric }) => {
  const { name } = metric;

  const onCopy = () =>
    notification.info({
      message: "Ссылка на метрику скопирована.",
      duration: 1.5,
    });

  return (
    <header className={styles.header}>
      <CopyToClipboard text={window.location.href} onCopy={onCopy}>
        <LinkOutlined className={styles.copy} />
      </CopyToClipboard>
      <Heading className={styles.heading} level={1}>
        {name}
      </Heading>
    </header>
  );
};
