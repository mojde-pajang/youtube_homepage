import { cva } from "class-variance-authority";

const buttonStyles = cva(["transition-colors"], {
  variants: {
    variant: {
      primary: ["text-sm", "hover:bg-primary-300", "rounded-md", "bg-primary-100"],
      ghost: ["hover:bg-primary-100"],
    },
    size: {
      default: ["text-sm", "py-1", "px-2"],
      icon: ["rounded-full", "w-10", "h-10", "flex", "justify-center", "items-center"],
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "icon",
  },
});

export default buttonStyles;
