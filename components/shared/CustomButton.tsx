import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import classNames from "classnames";
import React from "react";
import styles from "../../lib/mui/customButtonStyle";
type Props = {
  color:
    | "primary"
    | "info"
    | "success"
    | "warning"
    | "danger"
    | "rose"
    | "white"
    | "facebook"
    | "twitter"
    | "google"
    | "github"
    | "transparent";
  size: "sm" | "lg" | "md";
  round?: boolean;
  children: React.ReactNode;
  fullWidth?: boolean;
  disabled?: boolean;
  block?: boolean;
  simple?: boolean;
  link?: boolean;
  justIcon?: boolean;
  className?: any;
  type: string;
};

const useStyle = makeStyles(styles);

const CustomButton = (props: Props) => {
  const classes = useStyle();
  const {
    color,
    round,
    children,
    fullWidth,
    disabled,
    simple,
    size,
    block,
    link,
    justIcon,
    className,
    ...rest
  } = props;

  const btnClasses = classNames({
    [classes.button]: true,
    [classes[size]]: size,
    [classes[color]]: color,
    [classes.round]: round,
    [classes.fullWidth]: fullWidth,
    [classes.disabled]: disabled,
    [classes.simple]: simple,
    [classes.block]: block,
    [classes.link]: link,
    [classes.justIcon]: justIcon,
    [className]: className,
  });
  return <Button className={btnClasses}>{children}</Button>;
};

export default CustomButton;
