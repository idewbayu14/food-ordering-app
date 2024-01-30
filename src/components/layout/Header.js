import Link from "next/link";

export default function Header() {
    return(
        <header className="flex items-center justify-between">
        <Link className="flex items-center ml-2 font-semibold text-2xl" href="">
          <img className="logo" src="/NB.png" alt="Logo" />  
          <Link className="items-center ml-3 font-semibold text-2xl" href="">
            Nesh Bill
          </Link>
        </Link>
        <nav className="flex items-center gap-8 text-gray-500 font-semibold">
          <Link href={''}>Home</Link>
          <Link href={''}>Menu</Link>
          <Link href={''}>About</Link>
          <Link href={''}>Contact</Link>
          <Link href={''} className="bg-primary rounded-full text-white px-6 py-1">Login</Link>
        </nav>
      </header> 
    );
}