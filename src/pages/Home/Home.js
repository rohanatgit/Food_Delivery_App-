import React from 'react';
import Layout from "../../components/Layouts/Layout";
import "../../styles/HomeStyle.css";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";
import Section7 from './Section7';




function Home() {
  return (
    <>
     <Layout>
      {/* Home section hero banner */}
       <Section1/>

      {/* Home Section About Banner */}
      <Section2 />

      {/* Home Section Menu */}
      <Section3 />

      {/* Home Section Promotion       */}
      <Section4 />
      
      {/* Home section Shop */}
      <Section5 />

      <Section6 />

      <Section7 />
     </Layout>
    </>
  )
}

export default Home;
