import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { refresh_request } from '../actions/auth';
import Head from 'next/head';
import Navbar from '../components/Navbar';

const Layout = ({ title, content, children }) => { 
  const dispatch = useDispatch();

  useEffect(() => {
    if (dispatch && dispatch !== null && dispatch !== undefined)
      dispatch(refresh_request());
  }, [dispatch]);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={content} />
      </Head>
      <Navbar />
      <div className="container mt-5">
        {children}
      </div>
    </>
  )
}

Layout.defaulProps = {
  title: 'httpOnly Auth',
  content: 'Tutorial for showing you how to use httpOnly cookies for storing json web tokens',
}

export default Layout;