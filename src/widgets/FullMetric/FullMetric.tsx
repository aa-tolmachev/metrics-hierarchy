import { Button, Space, Typography } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import styles from "./FullMetric.module.scss";
import { ShortInfo } from "./ShortInfo/ShortInfo";
import { OwnerCards } from "./OwnerCards/OwnerCards";
import { Scrollbar } from "react-scrollbars-custom";
import { AnalyticSection } from "./AnalyticSection/AnalyticSection";
import { AdditionalInfo } from "./AdditionalInfo/AdditionalInfo";
import { useGetMetric } from "./utils/hooks/useGetMetric";
import { useNavigate } from "react-router-dom";
import { PATH } from "../../routes/paths";
import { Header } from "./Header/Header";

export const FullMetric = () => {
  const metric = useGetMetric();
  const { description } = metric;

  const nav = useNavigate();
  const onCancel = () => nav(PATH.metrics);

  return (
    <aside className={styles.metric}>
      <Button
        className={styles.closeButton}
        shape="circle"
        icon={<CloseOutlined />}
        onClick={onCancel}
      ></Button>
      <Scrollbar className={styles.content}>
        <Space direction="vertical" size={16}>
          <Header metric={metric} />
          <ShortInfo metric={metric} />
          <Typography.Paragraph>{description}</Typography.Paragraph>
          <OwnerCards metric={metric} />
          <AdditionalInfo metric={metric} />
          <AnalyticSection metric={metric} />
        </Space>
      </Scrollbar>
    </aside>
  );
};
