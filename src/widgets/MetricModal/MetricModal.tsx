import { Modal } from "antd";
import { MetricConfig } from "../../core/types/metric";
import { FC } from "react";
import { Heading } from "../../components/Heading/Heading";

interface MetricModalProps {
  metric: MetricConfig;

  onCancel: VoidFunction;
}

export const MetricModal: FC<MetricModalProps> = ({ metric, onCancel }) => {
  return (
    <Modal open width={600} onOk={onCancel} onCancel={onCancel}>
      <Heading level={2} modal>
        {metric.name}
      </Heading>
    </Modal>
  );
};
