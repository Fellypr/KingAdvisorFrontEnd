import Link from "next/link";

function Navbar() {
    return (
        <div className="flex items-center justify-center">
            <Link href="/" className="cursor-pointer">
                <img src="/images/logoClash-removebg-preview.png" alt="" className="w-36" />
            </Link>
        </div>
    )
}

export default Navbar;
