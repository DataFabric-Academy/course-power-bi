import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Power BI Fundamentals',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        เรียนรู้พื้นฐาน Power BI ตั้งแต่การเชื่อมต่อข้อมูล การสร้างรายงาน และการเผยแพร่
      </>
    ),
  },
  {
    title: 'DAX & Data Modeling',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        เรียนรู้การเขียน DAX สำหรับการคำนวณขั้นสูง และการออกแบบ Data Model ที่มีประสิทธิภาพ
      </>
    ),
  },
  {
    title: 'Power BI Service & Advanced',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        เรียนรู้การใช้งาน Power BI Service, Workspace Management, และเทคนิคขั้นสูงต่างๆ
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

