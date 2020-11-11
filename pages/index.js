import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I am a Front End developer with industry experience building web applications for a bank.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt ipsam, asperiores enim illo omnis repudiandae iste magni perferendis dolorem expedita blanditiis odio neque veniam autem provident fugiat tenetur nihil laudantium.</p>
      </section>
    </Layout>
  )
}