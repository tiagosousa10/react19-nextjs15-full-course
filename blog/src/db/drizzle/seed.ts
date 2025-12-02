import { JsonPostRepository } from '@/repositories/post/json-post-repository';
import { drizzleDb } from '.';
import { postsTable } from './schemas';

(async () => {
  const jsonPostRepository = new JsonPostRepository();
  const posts = await jsonPostRepository.findAll();

  try {
    await drizzleDb.delete(postsTable); //limpa a base de dados
    await drizzleDb.insert(postsTable).values(posts);
    console.log(`${posts.length} posts inseridos com sucesso!`);
  } catch (error) {
    console.log('🚀 ~ error:', error);
  }
})();
