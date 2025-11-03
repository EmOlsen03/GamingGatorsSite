import Image from "next/image";
import Link from "next/link";

export default function Navbar() {

    return (
        <div className="flex flex-row items-center justify-between gap-x-8 w-full h-16 bg-purple-500/20 px-4">

            <div>
                <Image src={'/vercel.svg'} width={32} height={32} alt=''></Image>
            </div>
        
            <div className="flex flex-row items-center justify-center gap-x-8 h-16 ">
                <Link href="/news" className="text-xl font-bold hover:text-amber-300 transition-colors">News</Link>
                <Link href="" className="text-xl font-bold hover:text-amber-300 transition-colors">About</Link>
                <Link href="/" className="text-xl font-bold hover:text-amber-300 transition-colors">Home</Link>
                <Link href="" className="text-xl font-bold hover:text-amber-300 transition-colors">Events</Link>
                <Link href="" className="text-xl font-bold hover:text-amber-300 transition-colors">Contact</Link>
            </div>

            <div>
                something here
            </div>

        </div>
    );
}

