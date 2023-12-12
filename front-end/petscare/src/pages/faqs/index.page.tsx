import React from "react";
/* import AccordionFaqs from "../../components/faqs/AccordionFaqs"; */
import { FaqsType } from "../../components/faqs/faqsData";
import { NextPage } from "next";
import Head from "next/head";
/* import BodySingle from "../../components/faqs/body-single"; */

interface Props {
/*   data: FaqsType[]; */
}

const Faqs: NextPage<Props> = (/* { data } */) => {
  return (
    <>
    <p>Faqs</p>
     {/*  <Head>
        <title>Faqs</title>
        <meta name="description" content="preguntas frecuentes" />
      </Head>
      <BodySingle title="preguntas frecuentes">
        {data.map((faqs) => {
          return (
            <AccordionFaqs
              key={faqs?.id}
              id={faqs?.id}
              question={faqs?.question}
              answer={faqs?.answer}
            />
          );
        })}
      </BodySingle> */}
    </>
  );
};

/* export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/faqs"); //cambiar url
  const data: FaqsType[] = await res.json();
  return {
    props: {
      data,
    },
  };
};
 */

export default Faqs;
