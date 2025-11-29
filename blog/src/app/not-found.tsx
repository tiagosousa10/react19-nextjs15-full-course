import ErrorMessage from '@/components/ErrorMessage';
import clsx from 'clsx';

export default function NotFoundPage() {
  return (
    <ErrorMessage
      pageTitle="Pagina não encontrada"
      contentTitle="404"
      content="Erro 404 - Página não encontrada."
    />
  );
}
