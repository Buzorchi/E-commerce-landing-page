import { Body } from "@/components/body";
import { Navbar } from "@/components/navbar";
import Head from "next/head";
import '../styles/globals.css';


export default function Home() {
  return (
    <>
    <Head>
      <title>E- Commerce product page</title>
    </Head>
    <Navbar />
    <Body />
    </>
  );
}
