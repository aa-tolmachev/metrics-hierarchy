import { SaveOutlined } from "@ant-design/icons";
import { Button, Tooltip } from "antd";
import { FC } from "react";
import styles from "./SaveGraphButton.module.scss";

interface SaveGraphButtonProps {
  disabled?: boolean;

  onClick?: VoidFunction;
}

export const SaveGraphButton: FC<SaveGraphButtonProps> = ({
  disabled = false,
  onClick,
}) => {
  return (
    <Tooltip title="Сохранить состояние графа" trigger="hover" placement="left">
      <Button
        className={styles.save}
        shape="circle"
        icon={<SaveOutlined />}
        onClick={onClick}
        disabled={disabled}
      />
    </Tooltip>
  );
};
