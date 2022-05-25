// import ReactPlayer from "react-player/youtube";
import styles from "../../styles/Home.module.css";
import Head from "next/head";
import dynamic from 'next/dynamic'
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export default function ViewVideo(props: any) {

  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.main}>
        <div>
          <h3>GeeksforGeeks - Youtube</h3>
          <ReactPlayer
            url='https://www.youtube.com/watch?v=RvWbcK3YQ_o'
            playing={false}
            controls={true}></ReactPlayer>
        </div>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
