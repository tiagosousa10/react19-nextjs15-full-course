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
  async findAll(): Promise<PostModel[]>;
  async findById(id: string): Promise<PostModel | undefined>;
  async findBySlugPublic(id: string): Promise<PostModel | undefined>;
}

(async () => {
  const repo = new DrizzlePostRepository();
  const posts = await repo.findAllPublic();

  posts.forEach((post) => console.log(post.slug));
})();
