export interface InputTextProps {
  children?: ReactNode;
  style?: CSSProperty;
  placeholder?: string;
  width?: number;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}
