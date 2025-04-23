import { gql, useQuery } from '@apollo/client';
import { getNextStaticProps } from '@faustwp/core';
import Head from 'next/head';
import EntryHeader from '@/components/entry-header';
import Footer from '@/components/footer';
import Header from '@/components/header';

/**
 * Next.js file based page example with Faust helpers.
 */
export default function Page() {
  const { data } = useQuery(Page.query);

  const { title: siteTitle, description: siteDescription } = data.generalSettings;
  const menuItems = data.primaryMenuItems.nodes;

  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <Header siteTitle={siteTitle} siteDescription={siteDescription} menuItems={menuItems} />

      <main className="container">
        <EntryHeader title="Next.js Page Example" />
        <p>Next.js pages are still supported!</p>
      </main>

      <Footer />
    </>
  );
}

Page.query = gql`
  ${Header.fragments.entry}
  query GetHomePage {
    ...HeaderFragment
  }
`;

export function getStaticProps(ctx) {
  return getNextStaticProps(ctx, {
    Page,
  });
}
