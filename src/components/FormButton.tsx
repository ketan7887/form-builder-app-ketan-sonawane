import React from "react";
import classNames from 'classnames';

interface FormButtonProps {
  label: string;
  type: "submit" | "reset" | "button";
  onClick?: () => void;
  className?: string;
  color:string | undefined;
}

const FormButton: React.FC<FormButtonProps> = ({ label, type, onClick, className, color }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={classNames("mt-3 me-3 px-4 py-2 text-white rounded",className, color === 'primary' ? 'bg-sky-700 hover:bg-sky-800' : 'bg-gray-500 hover:bg-gray-700')}
    >
      {label}
    </button>
  );
};

export default FormButton;
