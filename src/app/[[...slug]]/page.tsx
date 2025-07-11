import { getPageComponent, hasPageComponent } from '@/components/pages';
import client from '@/lib/gql/client';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PageDocument } from './page.gql.g';

type PageParams = {
  slug?: string[];
};

function getPathnameFromParams(params: PageParams) {
  const { slug = [] } = params;
  if (!['en', 'fr', 'sv'].includes(slug[0])) {
    // first segment is not locale
    slug.unshift('en');
  }

  const pathname = '/' + slug.join('/');
  return pathname;
}

async function getDocument(pathname: string) {
  const pageResponse = await client.request(PageDocument, { pathname });
  const document = pageResponse.Content?.items?.[0] ?? null;
  return document;
}

export async function generateMetadata({
  params,
}: {
  params: PageParams;
}): Promise<Metadata> {
  const pathname = getPathnameFromParams(params);
  const doc = await getDocument(pathname);

  if (!doc) {
    return {};
  }

  const MetaTitle = 'MetaTitle' in doc ? doc.MetaTitle : null;
  const Name = 'Name' in doc ? doc.Name : null;

  return {
    title: MetaTitle || Name || 'Mosey Fashion',
  };
}

// TODO: Implement generateStaticParams in order to statically generate routes since catch-all segments routes are using
// FYI: https://nextjs.org/docs/app/api-reference/functions/generate-static-params

// export function generateStaticParams() {
//   return [{ slug: [''] }, { slug: [''] }];
// }

export default async function Page({ params }: { params: PageParams }) {
  const pathname = getPathnameFromParams(params);
  const document = await getDocument(pathname);

  if (!document || !hasPageComponent(document)) {
    notFound();
  }

  const PageComponent = getPageComponent(document);
  // @ts-expect-error
  return <PageComponent page={document} />;
}
