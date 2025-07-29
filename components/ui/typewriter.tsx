"use client"

import { useEffect, useState } from "react"

interface TypewriterProps {
  strings: string[]
  className?: string
  typingSpeed?: number
  deletingSpeed?: number
  pauseDuration?: number
}

export function Typewriter({
  strings,
  className = "",
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 2000,
}: TypewriterProps) {
  const [currentStringIndex, setCurrentStringIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentString = strings[currentStringIndex]
    
    if (!isDeleting && currentText === currentString) {
      // Pause before deleting
      const timeout = setTimeout(() => setIsDeleting(true), pauseDuration)
      return () => clearTimeout(timeout)
    }
    
    if (isDeleting && currentText === "") {
      // Move to next string
      setIsDeleting(false)
      setCurrentStringIndex((prev) => (prev + 1) % strings.length)
      return
    }

    const timeout = setTimeout(() => {
      if (isDeleting) {
        setCurrentText(prev => prev.slice(0, -1))
      } else {
        setCurrentText(prev => currentString.slice(0, prev.length + 1))
      }
    }, isDeleting ? deletingSpeed : typingSpeed)

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, currentStringIndex, strings, typingSpeed, deletingSpeed, pauseDuration])

  return (
    <span className={className}>
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  )
}