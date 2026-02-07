import Link from "next/link"

const Navbar = () => {
  return (
    <header>
        <nav>
            <ul className="flex gap-4 w-full justify-center  z-[-1]">
                <Link href="/" className="text-lg font-bold hover:text-blue-500">Home</Link>
                <Link href="/events" className="text-lg font-bold hover:text-blue-500">Events</Link>
                <Link href="/about" className="text-lg font-bold hover:text-blue-500">About</Link>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar