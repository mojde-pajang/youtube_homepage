/* eslint-disable react-refresh/only-export-components */
import { memo, ComponentProps } from "react";
import { VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import buttonStyles from "./styles";

type ButtonProps = VariantProps<typeof buttonStyles> & ComponentProps<"button">

function Button({ variant, size, className, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={twMerge(buttonStyles({ variant, size }), className)}
    />
  );
}

export default memo(Button);
