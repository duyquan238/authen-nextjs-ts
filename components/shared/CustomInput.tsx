import { FormControl, Input, InputLabel } from "@mui/material";
import { makeStyles } from "@mui/styles";
import classNames from "classnames";
import React from "react";

type Props = {
  formControlProps?: object;
  labelText?: string;
  id?: string;
  labelProps?: object;
  inputProps?: object;
  error?: boolean;
  white?: boolean;
  success?: boolean;
  inputRootCustomClasses?: any;
  handleChange?: () => void;
  type?: string;
};

import styles from "../../lib/mui/customInputStyle";

const useStyles = makeStyles(styles);

const CustomInput = (props: Props) => {
  const classes = useStyles();
  const {
    formControlProps,
    labelText,
    id,
    labelProps,
    inputProps,
    error,
    white,
    inputRootCustomClasses,
    success,
    handleChange,
    type,
  } = props;
  const labelClasses = classNames({
    [" " + classes.labelRootError]: error,
    [" " + classes.labelRootSuccess]: success && !error,
  });
  const underlineClasses = classNames({
    [classes.underlineError]: error,
    [classes.underlineSuccess]: success && !error,
    [classes.underline]: true,
    [classes.whiteUnderline]: white,
  });
  const marginTop = classNames({
    [inputRootCustomClasses]: inputRootCustomClasses !== undefined,
  });
  const inputClasses = classNames({
    [classes.input]: true,
    [classes.whiteInput]: white,
  });
  var formControlClasses;
  if (formControlProps !== undefined) {
    formControlClasses = classNames(classes.formControl);
  } else {
    formControlClasses = classes.formControl;
  }

  return (
    <div>
      <FormControl {...formControlProps} className={formControlClasses}>
        {labelText !== undefined ? (
          <InputLabel
            className={classes.labelRoot + " " + labelClasses}
            htmlFor={id}
            {...labelProps}
          >
            {labelText}
          </InputLabel>
        ) : null}
        <Input
          classes={{
            input: inputClasses,
            root: marginTop,
            disabled: classes.disabled,
            underline: underlineClasses,
          }}
          id={id}
          onChange={handleChange}
          {...inputProps}
          type={type}
        />
      </FormControl>
    </div>
  );
};

export default CustomInput;
