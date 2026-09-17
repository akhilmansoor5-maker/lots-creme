import Link from "next/link";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "gold" | "teal" | "outline-white" | "outline-dark";
  className?: string;
  external?: boolean;
};

export function Button({
  href,
  children,
  variant = "gold",
  className = "",
  external = false,
}: ButtonProps) {
  const classes = `btn btn-${variant} ${className}`;
  if (external) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
