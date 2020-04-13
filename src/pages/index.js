import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>saspyrilia = <br/>&nbsp;&nbsp;&nbsp;&nbsp;SAS + Python + R + Julia</>,
    // imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        Examples for working with data in an assortment of languages.
        Other languages and tools will be added over time!
      </>
    ),
  },
  {
    title: <>Examples and examples<br/>&nbsp;</>,
    // imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        Emphasis is placed on examples &mdash; small code snippets to get
        going quickly!
      </>
    ),
  },
  {
    title: <>Evolving<br/>&nbsp;</>,
    // imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        Examples will be continually added.  Know a better technique?
        Believe a topic is missing?  Contribute on Github!
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Technical notes for working with data">
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/welcome')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
