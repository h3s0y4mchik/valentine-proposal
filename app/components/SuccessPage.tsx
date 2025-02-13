import Image from "next/image"

export default function SuccessPage() {
  return (
    <div className="text-center">
      <h2 className="mb-8 text-3xl font-bold text-pink-600">Yay! You said yes!</h2>
      <p className="mb-4 text-xl text-pink-600">Now return to telegram (:</p>
      <Image src="/cat.png?height=200&width=200" alt="QR Code" width={200} height={200} className="mx-auto" />
    </div>
  )
}

