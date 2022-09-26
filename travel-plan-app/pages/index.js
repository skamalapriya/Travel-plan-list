import Head from "next/head";
import Image from "next/image";
import Accordion from "../components/Accordion";

export default function Home() {
  return (
    <div className="p-8">
      <Head>
        <title>Travel Plan App</title>
      </Head>
      <div className="">
        <Accordion/>
      </div>
    </div>
  );
}
