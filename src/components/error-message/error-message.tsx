import React from "react";
import { useStyles } from "./error-message-styles";

/** Props expected  by ErrorMessage component */
interface IErrorMessageProps {
  message: string;
  notification?: boolean;
}

/** Component showing error message */
const ErrorMessage: React.FC<IErrorMessageProps & any> = ({
  message,
  notification = false
}) => {
  const classes = useStyles();

  return (
    <h4 className={notification ? classes.notification : classes.error}>
      {message}
    </h4>
  );
};

export default ErrorMessage;
