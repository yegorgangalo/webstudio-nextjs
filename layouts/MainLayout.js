import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ToastContainer } from 'react-toastify';

export function MainLayout({ children, headTitle = 'page' }) {

    return (
        <>
            <Head>
                <title>{headTitle} | WebStudio</title>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name='keywords' content='web, studio' />
                <meta name='description' content='this is web studio' />
            </Head>
            <Header/>
            <main>
                {children}
            </main>
            <Footer />
            <ToastContainer/>
        </>
    )
}