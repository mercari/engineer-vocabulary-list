import '../styles/globals.css'
import '../styles/style.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <head>
        <meta charSet="UTF-8"/>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Engineer Vocabulary List in Japanese/English エンジニア向け日英ボキャブラリーリスト</title>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <div className="container">
        <main className="main">
          <Component {...pageProps} />
        </main>
        {/* <footer className="footer">
          <a
            href="https://github.com/kevincobain2000/engineer-vocabulary-list"
            target="_blank"
            rel="noopener noreferrer"
          >
            Medium Article
          </a>
        </footer> */}
      </div>
    </>
  )
}

export default MyApp
