import Head from "next/head";

export default function Meta({ title, keywords, description }) {
    const homepage = "";
    const logo = "";
    const fevicon = "";

    function isiteJsonLd() {
        return {
            __html: `{
                "@context": "https://schema.org",
                "@type": "Organization",
                "url": ${homepage},
                "logo": ${logo},
                "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "",
                    "contactType": "customer service"
                },
                "image": ${logo},
                "description": ${description},
                "founder": "Sagar Saurabh",
                "foundingDate": "2025",
                "foundingLocation": "IN",
                "email": "sagarsaurabh404@gmail.com",
                "telephone": "",
                "areaServed": "IN",
                "keywords": ${keywords},
                "mainEntityOfPage": ${homepage},
                "knowsAbout": ${keywords},
                "knowsLanguage": "English",
                "memberOf": "Sagar Saurabh",
                "owns": "Sagar Saurabh",
                "publishingPrinciples": ${homepage},
                "slogan": ""
            }`
        }
    }


    return (
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="keywords" content={keywords} />
            <meta name="description" content={description} />
            <meta charSet="utf-8" />
            <link rel="icon" href={fevicon} />
            <title>{title}</title>
            <meta type="copyright" content="ResumeBuilder" />
            <meta type="author" content="Sagar Saurabh" />
            {/* Open Graph */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={homepage} />
            <meta property="og:title" content={title} />
            <meta
                property="og:description"
                content={description} />
            <meta property="og:image" content={logo} />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={isiteJsonLd()}
                key="isiteJsonLd"
            />
        </Head>
    );
}