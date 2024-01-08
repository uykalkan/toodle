import CheckIcon from "@/assets/icons/check.svg";
import React, { useEffect, useState } from "react";
import classNames from "classnames";

interface CheckboxProps {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange: (checked: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = (props) => {
  const [checked, setChecked] = useState(props.defaultChecked);

  const handleChange = () => {
    setChecked(!checked);
    props.onChange(!checked);
  };

  return (
    <button onClick={handleChange} className={classNames("check", { checked })}>
      <CheckIcon className="icon" />
    </button>
  );
};

export default Checkbox;
