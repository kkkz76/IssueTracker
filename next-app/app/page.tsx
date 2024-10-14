import testimg from "@/public/images/testimg.jpg";
import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import { authOptions } from "./api/auth/authOptions";
import ProductCard from "./components/ProductCard";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <main>
      <h1>Hello {session && <span>{session.user!.name}</span>}</h1>
      <Link href="/users">Go To Users</Link>
      <ProductCard />
      <Image src={testimg} alt="a mountain"></Image>
    </main>
  );
}
