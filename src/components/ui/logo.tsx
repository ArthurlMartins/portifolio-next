import Link from "next/link";
import Image from "next/image";

export default function Logo({ width, height }: any) {
  return (
    <Link href="/" className="inline-flex" aria-label="Cruip">
      <Image alt='logo da pagina' src="/images/logoArthurRed.png" width={width} height={height}/>
    </Link>
  );
}
