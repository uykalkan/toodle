import type { AppProps } from "next/app";
import "@/styles/global.scss";
import { Inter } from "next/font/google";
import TodoProvider from "@/providers/TodoProvider";
import Head from "next/head";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={inter.className}>
      <Head>
        <title>Toodle</title>
        <meta name="description" content="Toodle" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TodoProvider>
        <Component {...pageProps} />
      </TodoProvider>
    </main>
  );
}
