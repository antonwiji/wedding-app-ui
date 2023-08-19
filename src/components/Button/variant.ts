import { cva, type VariantProps } from "class-variance-authority"

export const buttonVariants = cva(
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
    {
      variants: {
        variant: {
          default:
            "bg-sky-500 text-primary-foreground shadow hover:bg-sky-700",
          danger: "bg-red-500 text-primary underline-offset-4 hover:bg-red-700",
        },
        size: {
          default: "h-9 px-4 py-2",
          sm: "h-8 rounded-md px-3 text-xs",
          lg: "h-10 rounded-md px-8",
          full: "h-9 w-full py-2"
        },
      },
      defaultVariants: {
        variant: "default",
        size: "default",
      },
    }
  )