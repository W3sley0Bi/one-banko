import { SpotlightPreview } from "./landingpage-components/ui/Spotlight/SpotlightPreview";
import GetStarted from "./landingpage-components/ui/GetStartedButton/GetStarted";
import SectionTwo from "./landingpage-components/SectionTwo"
import { Spacer } from "@nextui-org/react";

export default function Home() {
  return (
  <>
  <section id="section-one" style={{height:"100vh"}}>
  <SpotlightPreview></SpotlightPreview>
  <GetStarted></GetStarted>
  <p style={{transform: "rotate(90deg)", bottom:"2%", position:"absolute", display:"flex", marginLeft:"49%"}}>→</p>
  </section>

  <section id="section-two" style={{height:"100vh"}} className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative  items-center justify-center" >
  <Spacer x={1} />
  
  <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
  <h2 style={{textAlign:"center", lineHeight:"1.3"}} className="text-4xl md:text-5xl bg-clip-text items-center text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Features
          
        </h2>
        <br />
        <Spacer x={1} />
    <SectionTwo></SectionTwo>
  
  </section>
  <section id="section-three" style={{height:"100vh"}} >
  <Spacer x={1} />
  
  <h2 style={{textAlign:"center", lineHeight:"1.3"}} className="text-4xl md:text-5xl bg-clip-text items-center text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Security 🔒
          
        </h2>
        <br />
        <Spacer x={1} />
    <SectionTwo></SectionTwo>
  
 

  </section>
  <section id="section-four" style={{height:"100vh"}} >
  <Spacer x={1} />
  
  <h2 style={{textAlign:"center", lineHeight:"1.3"}} className="text-4xl md:text-5xl bg-clip-text items-center text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Watch the promo! 
          
        </h2>
        <br />
        <Spacer x={1} />
    <SectionTwo></SectionTwo>
  
 

  </section>

  <section id="section-five" style={{height:"100vh"}} >
  <Spacer x={1} />
  
  <h2 style={{textAlign:"center", lineHeight:"1.3"}} className="text-4xl md:text-5xl bg-clip-text items-center text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Coming soon! 
          
        </h2>
        <br />
        <Spacer x={1} />
    <SectionTwo></SectionTwo>
  
 

  </section>

  <section id="section-six" style={{height:"100vh"}} >
  <Spacer x={1} />
  
  <h2 style={{textAlign:"center", lineHeight:"1.3"}} className="text-4xl md:text-5xl bg-clip-text items-center text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Pricing
          
        </h2>
        <br />
        <Spacer x={1} />
    <SectionTwo></SectionTwo>
  
 

  </section>


  </>

  );
}
