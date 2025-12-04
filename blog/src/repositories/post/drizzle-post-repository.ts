import { drizzleDb } from '@/db/drizzle';
import { PostRepository } from './post-repository';
import { postsTable } from '@/db/drizzle/schemas';
import { desc, eq } from 'drizzle-orm';
import { PostModel } from '@/models/post/post-model';

export class DrizzlePostRepository implements PostRepository {
  async findAllPublic(): Promise<PostModel[]> {
    const posts = await drizzleDb.query.posts.findMany({
      orderBy: (posts, { desc }) => desc(posts.createdAt),
      where: (posts, { eq }) => eq(posts.published, true),
    });

    return posts;
  }
  async findBySlugPublic(slug: string): Promise<PostModel> {
    const post = await drizzleDb.query.posts.findFirst({
      where: (posts, { eq, and }) =>
        and(eq(posts.published, true), eq(posts.slug, slug)),
    });

    if (!post) throw new Error('Post nao encontrado para o slug informado.');

    return post;
  }

  async findAll(): Promise<PostModel[]> {
    const posts = await drizzleDb.query.posts.findMany({
      orderBy: (posts, { desc }) => desc(posts.createdAt),
    });

    return posts;
  }

  async findById(id: string): Promise<PostModel | undefined> {
    const post = await drizzleDb.query.posts.findFirst({
      where: (posts, { eq }) => eq(posts.id, id),
    });

    if (!post) throw new Error('Post nao encontrado para o slug informado.');

    return post;
  }
}

(async () => {
  const repo = new DrizzlePostRepository();
  const posts = await repo.findAll();

  posts.forEach((post) => console.log(post.id, post.slug, post.published));
})();
