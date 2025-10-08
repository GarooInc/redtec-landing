import { Header } from '@/components/organisms/NavBar'
import { HeroSection } from '@/components/sections/HeroSection';
import { Button } from '@/components/atoms/Button';
import PartnersSection from '@/components/sections/PartnersSection';
import HeaderSection from '@/components/organisms/HeaderSection';
import Accordion from '@/components/organisms/Accordion';
import Footer from '@/components/organisms/Footer';


import { TiStarOutline } from "react-icons/ti";
import { FaChartPie } from "react-icons/fa6";
import { AiOutlineDotChart } from "react-icons/ai";
import { FaSatellite } from "react-icons/fa";
import ImgSquares from '@/components/organisms/ImgSquares';

import { MdStars } from "react-icons/md";
import { FaBuilding } from "react-icons/fa6";
import { PiPlantDuotone } from "react-icons/pi";


const page = () => {
  return (
    <main className="min-h-screen ">

      {/* Hero Section 1 */}
      <section className="xl:px-20 md:px-10 sm:px-8 px-5 rounded-xl">
        <Header />
        <div className=' xl:pt-20 md:pt-16 pt-10 rounded-2xl p-10' style={{ background: "url('assets/images/bg/fondo.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <HeroSection
          color='white'
          title="AI Agents That Work While You Think."
          description="Custom-built and pre-configured agents to 
          automate, analyze, and act, for teams that 
          want to work smarter, not harder."
          align="left"
          imageUrl="/assets/images/sections/s1_banner_img.png"
          imagePosition="right"
          disableShift={true}
          buttons={
            <>
              <Button variant="primary" size="md" href="mailto:hello@redtec.ai">
                Get Started
              </Button>
              <Button variant="outline" size="md" className='text-white' href="mailto:hello@redtec.ai">
                Watch Demo
              </Button>
            </>
            
          }
        />
        </div>

        {/* Logos partners*/}
        {/* <div className="py-10 bg-white">
          <PartnersSection
            description='As Seen On leaders and best-in-class brands'
            logos={[
            { src: "/assets/images/logos/logo1.png", alt: "Logo 1" },
            { src: "/assets/images/logos/logo1.png", alt: "Logo 2" },
            { src: "/assets/images/logos/logo1.png", alt: "Logo 3" },
          ]} />
        </div> */}
      </section>

      {/* Hero Section 2 */}
      <section className="relative xl:px-40 md:px-20 sm:px-10 px-5 xl:py-10 md:py-12 py-14">
        <div className='p-8 md:p-10 bg-[#F7F7F7] rounded-xl border border-gray-200'>
          <HeroSection
          title={`More Than AI. 
            A New Way to Work.`}
          description={
            `At RedTec, we build intelligent agents and automation 
            tools that transform how businesses operate. 

            Our technology makes AI truly actionable helping 
            you move from reactive to proactive, and from 
            complex to simple.

            We offer both custom AI solutions and a suite of prebuilt 
            agents, already optimized for real-world challenges. 
            `
          }
          titleBold={false}
          align="left"
          alignMobile='left'
          imageUrl="/assets/images/sections/s2_banner_img.png"
          imagePosition="right"
          imageWidth='80%'
          buttons={
            <>
              <Button variant="secondary" size="md" href="mailto:hello@redtec.ai">
                 Explore our agents
              </Button>
            </>
            
          }
        />
        </div>
      </section> 

      {/* Hero Section 3 */}
      <section className="relative xl:px-40 md:px-20 sm:px-10 xl:py-16 md:py-12 p-10">
            <HeaderSection
            title="Every business is different."
            subtitle="That’s why we offer tailor-made AI solutions for teams with specific challenges, workflows, or visions. 
            Whether you're automating internal operations, building a vertical AI product, or integrating AI into legacy 
            systems we work with you to design, develop, and deploy agents that match your exact needs."
            align='center'
            titleBold={false}
            subtitleBold={false}
            />
      </section>

      {/** Sections with image and text */}
      <section className="relative xl:px-40 md:px-20 sm:px-10 px-5 xl:py-10 md:py-12">
        <div className='md:p-10'>
          <HeroSection
          title={`Intelligent automation`}
          description={
            `Lorem Ipsum is simply dummy text of the printing 
            and typesetting industry. Lorem Ipsum has been 
            the industry's standard dummy when an unknown 
            printer took a galley of type and scrambled it.
            `
          }
          titleBold={false}
          align="left"
          imageUrl="/assets/images/sections/s4_banner_img.png"
          imagePosition="right"
          imageWidth='80%'
          buttons={
            <>
              <Button variant="outline" size="md" href="mailto:hello@redtec.ai">
                 Explore our agents
              </Button>
            </>
            
          }
        />
        </div>
      </section> 

      <section className="relative xl:px-40 md:px-20 sm:px-10 px-5 xl:py-10 md:py-12">
        <div className='md:p-10'>
          <HeroSection
          title={`Conversational AI Tools`}
          description={
            `Lorem Ipsum is simply dummy text of the printing 
              and typesetting industry. Lorem Ipsum has been 
              the industry's standard dummy when an unknown 
              printer took a galley of type and scrambled it.
            `
          }
          titleBold={false}
          align="left"
          imageUrl="/assets/images/sections/s5_banner_img.png"
          imagePosition="left"
          imageWidth='80%'
          buttons={
            <>
              <Button variant="outline" size="md" href="mailto:hello@redtec.ai">
                 Talk to an expert
              </Button>
            </>
            
          }
        />
        </div>
      </section> 

      <section className="relative xl:px-40 md:px-20 sm:px-10 px-5 xl:py-10 md:py-12">
        <div className='md:p-10'>
          <HeroSection
          title={`Data connectivity`}
          description={
            `
              Lorem Ipsum is simply dummy text of the printing 
              and typesetting industry. Lorem Ipsum has been 
              the industry's standard dummy when an unknown 
              printer took a galley of type and scrambled it.
            `
          }
          titleBold={false}
          align="left"
          imageUrl="/assets/images/sections/s6_banner_img.png"
          imagePosition="right"
          imageWidth='80%'
          buttons={
            <>
              <Button variant="outline" size="md" href="mailto:hello@redtec.ai">
                 Schedule a Demo
              </Button>
            </>
            
          }
        />
        </div>
      </section> 

      <section className="relative xl:px-40 md:px-20 sm:px-10 px-5 xl:py-10 md:py-12">
        <div className='md:p-10'>
          <HeroSection
          title={`Real-world business logic`}
          description={
            `Lorem Ipsum is simply dummy text of the printing 
            and typesetting industry. Lorem Ipsum has been 
            the industry's standard dummy when an unknown 
            printer took a galley of type and scrambled it.
            `
          }
          titleBold={false}
          align="left"
          imageUrl="/assets/images/sections/s7_banner_img.png"
          imagePosition="left"
          imageWidth='80%'
          buttons={
            <>
              <Button variant="outline" size="md" href="mailto:hello@redtec.ai">
                 Explore Our Agents
              </Button>
            </>
            
          }
        />
        </div>
      </section> 

      {/* Hero Section 4 */}
      <section className="relative xl:px-40 md:px-20 sm:px-10 xl:py-16 p-12 w-full">
            <span className="text-center block text-xs md:text-sm lg:text-base mb-2 text-[#CC1D1A]">
              Request a custom solution today and unlock what AI can do for your organization.
            </span>
            <HeroSection
            title="If you can describe it, we can help you build it."
            align='center'
            titleBold={false}
            buttons={
              <>
                <Button variant="secondary" size="md" href="mailto:hello@redtec.ai">
                  Request Custom Solution
                </Button>
              </>
              
            }
            />
      </section>

      {/* Accordion Section */}
      <section className="relative xl:px-40 md:px-20 sm:px-10 px-5 xl:py-10 md:py-12 ">
        <div className='md:p-20 p-10 bg-black rounded-xl'>
        <HeaderSection
          title="Our AI Agents Are Ready for Work"
          color='white'
          subtitle={`Custom-built and pre-configured agents to automate, analyze, and act for teams that want to work smarter, not harder.`}
          align='center'
          titleBold={false}
        />
        <div className='flex justify-between mt-6'>
          <Accordion
            items={[
              {
                title: 'CRM Agent',
                content: `Automates lead qualification, follow-ups, and campaign 
                          intelligence across your sales channels, ensuring no 
                          opportunity is missed and your team can focus on 
                          closing deals faster.`,
                icon: <TiStarOutline size={24} color="white" />,
                img: '/assets/images/sections/s9_banner_img.png'
              },
              {
                title: 'Data Agent',
                content: `Transforms raw data into actionable insights by automating
                          data cleaning, analysis, and visualization, empowering 
                          your team to make informed decisions with ease.`,
                icon: <FaChartPie size={24} color="white" />,
                img: '/assets/images/sections/s9_banner_img.png'
              },
              {
                title: 'Satelital Agent',
                content: `Monitors and analyzes satellite data to provide insights
                          into environmental changes, helping organizations
                          make data-driven decisions for sustainability.`,
                icon: <FaSatellite size={24} color="white" />,
                img: '/assets/images/sections/s9_banner_img.png'
              },
              {
                title: 'Marketing Analyst',
                content: `Analyzes market trends, customer behavior, and campaign
                          performance to optimize marketing strategies and drive
                          better ROI.`,
                icon: <AiOutlineDotChart size={24} color="white" />,
                img: '/assets/images/sections/s9_banner_img.png'
              },
            ]}
          />
        </div>
        </div>
      </section>

      <section className="xl:px-40 md:px-20 px-10 xl:py-16 md:py-12 p-10 w-full">
        <HeaderSection
          title="Built for Real-World Impact"
          subtitle='We specialize in industries where intelligent automation makes a difference:'
          align='center'
          titleBold={false}
        />
        <div className='py-10 flex flex-col w-full'>
          <ImgSquares images={[
            { img: '/assets/images/sections/s10/industry1.png', alt: 'Industry 1', title: 'Hospitality' , description: 'Guest experience, operations, upselling', icon: <MdStars size={24} color="white" />},
            { img: '/assets/images/sections/s10/industry2.png', alt: 'Industry 2', title: "Real Estate", description: 'Lead capture, agent productivity, property insights' , icon: <FaBuilding size={24} color="white" />},
            { img: '/assets/images/sections/s10/industry3.png', alt: 'Industry 3', title: 'Agriculture', description: 'Yield monitoring, anomaly detection, NDVI/NDWI insights' , icon: <PiPlantDuotone size={24} color="white" />},
          ]} />
          <div className='flex justify-center gap-2 mt-10 w-full md:w-1/2 mx-auto'>
          <Button
            variant="secondary"
            size="md"
            className='w-full'
            href="mailto:hello@redtec.ai"
          >
            Schedule a Demo
          </Button>
          <Button
            variant="outline"
            size="md"
            className='w-full'
            href="mailto:hello@redtec.ai"
          >
            Get Started
          </Button>
          </div>
        </div>
      </section>

      {/* Hero Section 5 */}
      <section className="xl:px-40 md:px-20 sm:px-10 px-5 xl:py-16 md:py-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch w-full">
          {/* Imagen a la izquierda */}
          <div className="relative rounded-3xl overflow-hidden bg-base-200 aspect-[4/3] lg:aspect-auto md:min-h-[420px] lg:min-h-[520px]">
            <img
              src="/assets/images/sections/s10_banner_img.png"
              alt="RedTec people smiling"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Tarjeta a la derecha */}
          <div className="relative bg-white rounded-3xl border border-black/10 shadow-sm p-6 sm:p-8 lg:p-10">
            {/* Logo  */}
            <img src="/assets/images/logos/logo1.png" alt="RedTec Logo" className="h-4 mb-6" />

            {/* Encabezado y primer párrafo usando HeaderSection */}
            <HeaderSection
              title={"We’re Not Just Building AI, We’re Transforming Lives."}
              subtitle={
                `RedTec was born from a belief that AI should empower people not replace them. We create tools that improve decision‑making, simplify operations, and allow teams to do more of what matters.
                
                We work with purpose, share our success, and strive to leave a legacy that goes beyond technology.
                `
              }
              titleBold
              subtitleBold={false}
              align="left"
              alignMobile="left"
              spacing="md"
              className="[&_*]:!text-left"
            />

            {/* Quote box */}
            <div className="mt-8 rounded-2xl border border-black/10 bg-neutral-50 p-6">
              <p className="text-neutral-700">
                We may not know exactly what the future looks like but we intend to help write it.
              </p>
            </div>

            {/* Borde suave exterior, similar al mockup */}
            <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-black/5" />
          </div>
        </div>
      </section>


      {/* Hero Section 6 */}
      <section className='relative xl:px-40 md:px-20 sm:px-10 px-5 md:py-10 mt-10 w-full'>
        <div className=' xl:p-20 md:p-16 rounded-2xl p-10' style={{ background: "url('assets/images/bg/fondo.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <span className="text-center block text-xs md:text-sm lg:text-base mb-2 text-white">
            AI Agents That Work While You Think.
          </span>
          <HeaderSection
            title="Build Your First AI Agent with RedTec"
            subtitle="Whether you're just starting or already scaling, our team is ready to help you unlock the power of intelligent automation."
            align='center'
            color='white'
            titleBold={false}
            subtitleBold={false}
          />
          <div className='flex justify-center mt-6'>
            <Button variant="primary" size="md" href="mailto:hello@redtec.ai">
              Schedule a Demo
            </Button>
            <Button variant="outline" size="md" className='text-white ml-4' href="mailto:hello@redtec.ai">
              Get Started
            </Button>
          </div>
        </div>
      </section>

      {/* Logos partners*/}
      {/* <section className="relative xl:px-40 md:px-20 sm:px-10 px-5 md:py-10 mt-10 w-full">
      <div className="py-10 bg-white flex flex-col">
        <HeaderSection
          title="Trusted by Industry Leaders"
          subtitle='Join the growing list of companies leveraging RedTec to transform their operations with AI.'
          align='center'
          titleBold={false}
          subtitleBold={false}
        />
        <PartnersSection
          logos={[
          { src: "/assets/images/logos/logo1.png", alt: "Logo 1" },
          { src: "/assets/images/logos/logo1.png", alt: "Logo 2" },
          { src: "/assets/images/logos/logo1.png", alt: "Logo 3" },
        ]} />
      </div>
      </section> */}
      {/* Footer */}
      <Footer />


    </main>
  )
}

export default page