import Link from 'next/link';
import Image from 'next/image'
export default function Navbar() {
  return (
    <nav>
      <div className="logo">
        <Image src="/logo.png" width={77} height={77}/>
        {/* <h1>Xiao Space</h1> */}
      </div>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/testcase">Testcase Listing</Link>
    </nav>
  );
}




