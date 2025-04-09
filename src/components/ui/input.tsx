import * as React from "react"

import { cn } from "@/lib/utils" 
import { MovingButton } from "./moving_border"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <MovingButton>
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30  flex h-9 w-full min-w-0 rounded-md  bg-transparent px-3 py-1 text-lg shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-lg file:font-lg disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-lg   font-medium tracking-widest bg-gradient-to-b from-neutral-50 to-neutral-500 bg-clip-text text-transparent border border-zinc-700",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      )}
      {...props} 
    />
    </MovingButton>
  )
}

export { Input }
