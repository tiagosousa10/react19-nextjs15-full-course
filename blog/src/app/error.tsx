'use client';

import ErrorMessage from '@/components/ErrorMessage';
import { useEffect } from 'react';

type RouteErrorPageProps = {
  error: Error;
  reset: () => void;
};

export default function RouteErrorPage({ error }: RouteErrorPageProps) {
  useEffect(() => {
    // console.error(error);
  }, [error]);
  return (
    <ErrorMessage
      pageTitle="Internal Server Error"
      contentTitle="501"
      content={
        'Ocorreu um erro interno no servidor. Por favor, tente novamente mais tarde.'
      }
    />
  );
}
