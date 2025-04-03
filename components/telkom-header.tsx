import Link from "next/link"

export function TelkomHeader() {
  return (
    <header className="bg-[#0078C8] text-white p-4">
      <div className="container mx-auto">
        <Link href="/" className="text-xl font-bold">
          Telkom
        </Link>
      </div>
    </header>
  )
}

