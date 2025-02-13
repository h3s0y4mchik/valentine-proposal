"use client"

import { useState } from "react"
import ProposalPage from "./components/ProposalPage"
import SuccessPage from "./components/SuccessPage"

export default function Home() {
  const [accepted, setAccepted] = useState(false)

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-pink-100 p-4">
      {!accepted ? <ProposalPage onAccept={() => setAccepted(true)} /> : <SuccessPage />}
    </main>
  )
}

