interface ButtonProps extends React.ComponentPropsWithRef<'button'> {
  children?: React.ReactNode;
}

const Button = ({ children, ...others }: ButtonProps) => {
  return <button {...others}>{children}</button>;
};

export default Button;
