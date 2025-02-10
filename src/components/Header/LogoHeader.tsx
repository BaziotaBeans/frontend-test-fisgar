import Link from "next/link";
import Image from "next/image";

function LogoHeader() {
  return (
    <Link href="/">
      <Image
        src="/logo.svg"
        alt="Logo"
        width={118}
        height={32}
        style={{
          objectFit: "cover",
          width: "118px",
        }}
      />
    </Link>
  );
}

export default LogoHeader;
