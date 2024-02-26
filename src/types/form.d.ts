import { Dispatch, MouseEvent, SetStateAction } from 'react';

export type TextFieldProps = {
  name: string;
  type: string;
  placeholder: string;
  value: string;
  setValue: Dispatch<SetStateAction<any>>;
  className: string;
};

export type ButtonProps = {
  name: string;
  className: string;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
};
