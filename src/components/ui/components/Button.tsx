
import { Variants, motion } from 'framer-motion';
import { cn } from "../../../lib/util";

type ButtonVariant = "solid" | "outline";
type ButtonSize = "w-32" | "w-48" | "w-64" | "full";

interface Props {
  text: string;
  url?: string;
  blank?: boolean;
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: React.FC<React.SVGProps<SVGSVGElement>>;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
  disabled?: boolean;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const sizeClasses: Record<ButtonSize, string> = {
  "w-32": "w-32",
  "w-48": "w-48",
  "w-64": "w-64",
  full: "w-full",
};

const variantClasses: Record<ButtonVariant, string> = {
  solid:
    "bg-primary border-primary text-primary-content  active:bg-primary/80",
  outline:
    "bg-base-100 border-primary text-primary  active:bg-primary/10",
};

const buttonVariants: Variants = {
  hover: {
    scale: 1.015,
    boxShadow: "0 2px 8px rgba(0, 87, 214, 0.25)",
    transition: { duration: 0.22, ease: [0.16, 1, 0.3, 1] }
  },
  tap: {
    scale: 0.98,
    boxShadow: "0 2px 6px rgba(0, 87, 214, 0.2)",
    transition: { duration: 0.1, ease: "easeOut" }
  },
};

export const Button = ({
  text,
  url = "",
  blank,
  variant = "solid",
  size = "w-48",
  icon: Icon,
  iconPosition = "left",
  fullWidth = false,
  disabled = false,
  className,
  onClick,
}: Props) => {
  return (
    <motion.a
      variants={buttonVariants}
      whileHover={'hover'}
      whileTap={'tap'}
      target={blank ? "_blank" : undefined}
      rel={blank ? "noreferrer" : undefined}
      href={disabled ? undefined : url}
      aria-disabled={disabled}
      onClick={(e) => {
        e.stopPropagation();
        if (disabled) {
          e.preventDefault();
          return;
        }
        onClick?.(e);
      }}
      className={cn(
        "btn h-12 gap-2 rounded-field border-[1.5px] px-5 text-lg lato-regular normal-case shadow-none transition-colors",
        variantClasses[variant],
        fullWidth ? "w-full" : sizeClasses[size],
        disabled && "opacity-50 pointer-events-none",
        className
      )}
    >
      {Icon && iconPosition === "left" && (
        <Icon className='w-6 h-6 shrink-0' />
      )}
      <span className='leading-[22px]'>{text}</span>
      {Icon && iconPosition === "right" && (
        <Icon className='w-6 h-6 shrink-0' />
      )}
    </motion.a>
  );
};
