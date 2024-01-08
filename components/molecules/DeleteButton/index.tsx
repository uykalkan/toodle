import DeleteIcon from "@/assets/icons/delete.svg";
import React from "react";

interface DeleteButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}
const DeleteButton: React.FC<DeleteButtonProps> = (props) => {
  return (
    <button className="delete" {...props}>
      <DeleteIcon className="icon" />
    </button>
  );
};

export default DeleteButton;
