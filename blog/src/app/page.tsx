import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { PostHeading } from "@/components/PostHeading";
import { PostsList } from "@/components/PostsLists";
import { SpinLoader } from "@/components/SpinLoader";
import { postRepository } from "@/repositories/post";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

export default async function HomePage() {
  return (
    <Container>
      <Header />

      <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group ">
        <Link href="#" className="w-full h-full overflow-hidden rounded-xl">
          <Image
            className="group-hover:scale-105 transition w-full h-full object-cover object-center"
            src="/images/bryen_0.png"
            alt="Titulo do Post"
            width={1200}
            height={700}
            priority
          />
        </Link>
        <div className="flex flex-col gap-4 sm:justify-center">
          <time className="text-slate-600 text-sm" dateTime="2025-04-20">
            2025-04-20
          </time>
          <PostHeading as="h1" url="#">
            dwdawdwa
          </PostHeading>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          </p>
        </div>
      </section>

      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>

      <footer className="text-6xl font-bold text-center py-8">
        <h1>Aqui é o footer</h1>
      </footer>
    </Container>
  );
}
