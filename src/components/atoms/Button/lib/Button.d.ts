export interface ButtonProps {
  children?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  style?: React.CSSProperties | undefined;
  type?: "primary" | "normal";
}
