import { cn } from "@/lib/utils"

export function Section({
  className,
  children,
  id,
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <section
      id={id}
      className={cn("py-20 md:py-32 overflow-hidden", className)}
    >
      {children}
    </section>
  )
}
