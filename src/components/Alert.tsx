import { ReactNode, useState } from "react";

interface Props {
  children: ReactNode;
}

const Alert = ({ children }: Props) => {
  const [showAlert, setShowALert] = useState(true);

  return showAlert ? (
    <div
      className="alert alert-warning alert-dismissible fade show"
      role="alert"
    >
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={() => {
          setShowALert(!showAlert);
        }}
      ></button>
    </div>
  ) : null;
};

export default Alert;
