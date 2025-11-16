import { PostsList } from "@/components/PostsLists";
import { SpinLoader } from "@/components/SpinLoader";
import { postRepository } from "@/repositories/post";
import { Suspense } from "react";

export default async function HomePage() {
  return (
    <div>
      <header className="text-6xl font-bold text-center py-8">
        <h1>Aqui é a header</h1>
      </header>

      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>

      <footer className="text-6xl font-bold text-center py-8">
        <h1>Aqui é o footer</h1>
      </footer>
    </div>
  );
}
