"use client"

import { useState, useCallback, useRef, useEffect } from "react"
import { Heart } from "lucide-react"

interface ProposalPageProps {
  onAccept: () => void
}

export default function ProposalPage({ onAccept }: ProposalPageProps) {
  const [noButtonPosition, setNoButtonPosition] = useState({ top: 0, left: 0 })
  const [yesButtonSize, setYesButtonSize] = useState(1)
  const containerRef = useRef<HTMLDivElement>(null)

  const moveNoButton = useCallback(() => {
    if (containerRef.current) {
      const container = containerRef.current.getBoundingClientRect()
      const newTop = Math.random() * 200 - 100 + container.height / 2
      const newLeft = Math.random() * 200 - 100 + container.width / 2

      setNoButtonPosition({
        top: Math.max(0, Math.min(newTop, container.height - 40)),
        left: Math.max(0, Math.min(newLeft, container.width - 100)),
      })
      setYesButtonSize((prev) => prev + 0.2)
    }
  }, [])

  useEffect(() => {
    moveNoButton()
  }, [moveNoButton])

  const handleYesClick = () => {
    console.log("User clicked 'Yes' button!") // New console log
    onAccept()
  }

  return (
    <div className="text-center">
      <h1 className="mb-8 text-4xl font-bold text-pink-600">Would you be my Valentine?</h1>
      <div className="mb-8 flex justify-center space-x-4">
        <Heart className="text-red-500" size={48} />
        <Heart className="text-red-500" size={48} fill="currentColor" />
        <Heart className="text-red-500" size={48} />
      </div>
      <div ref={containerRef} className="relative h-60 w-[30rem] mx-auto">
        <button
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-600 transition-all"
          style={{
            transform: `translate(-50%, -50%) scale(${yesButtonSize})`,
          }}
          onClick={handleYesClick} // Changed to new handler
        >
          Yes
        </button>
        <button
          className="absolute rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-600"
          style={{
            top: `${noButtonPosition.top}px`,
            left: `${noButtonPosition.left}px`,
          }}
          onClick={moveNoButton}
        >
          No
        </button>
      </div>
    </div>
  )
}

