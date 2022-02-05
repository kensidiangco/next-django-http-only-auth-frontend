import Head from 'next/head';
import Navbar from '../components/Navbar';

const Layout = ({ title, content, children }) => (
  <>
    <Head>
      <title>{title}</title>
      <meta name="description" content={content} />
    </Head>
    <Navbar />
    <div className="container">
      {children}
    </div>
  </>
)

Layout.defaulProps = {
  title: 'httpOnly Auth',
  content: 'Tutorial for showing you how to use httpOnly cookies for storing json web tokens',
}

export default Layout;