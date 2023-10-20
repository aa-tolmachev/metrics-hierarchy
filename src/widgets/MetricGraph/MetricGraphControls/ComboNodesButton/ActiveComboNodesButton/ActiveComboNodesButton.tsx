import { useState } from "react";
import { GroupOutlined } from "@ant-design/icons";
import { Space, Typography, Input, Button, Popover } from "antd";
import { IconButton } from "../../../../../components/IconButton";
import { COMBO_TOOLTIP_TEXT } from "../constants";
import { createCombo } from "./utils/createCombo";
import { useAddCombo } from "./utils/hooks/useAddCombo";

export const ActiveComboNodesButton = () => {
  const [openPopover, setOpenPopover] = useState(false);
  const [comboName, setComboName] = useState("");

  const addCombo = useAddCombo();

  const onCreate = () => {
    addCombo(createCombo(comboName));
    setOpenPopover(false);
  };

  const popoverContent = (
    <Space direction="vertical">
      <Typography.Text>Название группы</Typography.Text>
      <Input value={comboName} onChange={(e) => setComboName(e.target.value)} />
      <Button onClick={onCreate}>Создать</Button>
    </Space>
  );

  return (
    <Popover
      content={popoverContent}
      trigger="click"
      open={openPopover}
      onOpenChange={(open) => setOpenPopover(open)}
      placement="bottomRight"
    >
      <IconButton icon={<GroupOutlined />} tooltipText={COMBO_TOOLTIP_TEXT} />
    </Popover>
  );
};
