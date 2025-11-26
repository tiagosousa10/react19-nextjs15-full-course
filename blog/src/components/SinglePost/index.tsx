import { findPostBySlugCached } from "@/lib/post/queries";

type SinglePostProps = {
  slug: string;
};

export async function SinglePost({ slug }: SinglePostProps) {
  const post = await findPostBySlugCached(slug).catch(() => undefined);

  return (
    <div>
      <p>{post?.content}</p>
    </div>
  );
}
