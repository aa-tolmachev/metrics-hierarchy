import Title, { TitleProps } from "antd/es/typography/Title";
import { FC } from "react";
import cx from "classnames";
import styles from "./Heading.module.scss";

interface HeadingProps extends TitleProps {
  modal?: boolean;
}

export const Heading: FC<HeadingProps> = ({ modal = false, ...props }) => {
  const { children, className, level } = props;

  const headingClassName = cx(
    className,
    { [styles.h1]: level === 1 },
    { [styles.modal]: modal }
  );

  return (
    <Title className={headingClassName} {...props}>
      {children}
    </Title>
  );
};
