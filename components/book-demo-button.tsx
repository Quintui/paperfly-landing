import type React from "react"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import { DEMO_BOOKING_URL } from "@/lib/constants"

interface BookDemoButtonProps {
  className?: string
  showIcon?: boolean
  size?: "default" | "sm" | "lg" | "icon"
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  children?: React.ReactNode
}

export function BookDemoButton({
  className = "",
  showIcon = false,
  size = "default",
  variant = "default",
  children = "Book a Demo",
}: BookDemoButtonProps) {
  return (
    <Button className={className} size={size} variant={variant} asChild>
      <a href={DEMO_BOOKING_URL} target="_blank" rel="noopener noreferrer">
        {children}
        {showIcon && <ChevronRight className="ml-2" size={20} />}
      </a>
    </Button>
  )
}
