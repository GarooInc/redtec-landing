import { Header } from '@/components/organisms/NavBar'
import { HeroSection } from '@/components/sections/HeroSection';
import { Button } from '@/components/atoms/Button';
import PartnersSection from '@/components/sections/PartnersSection';
import HeaderSection from '@/components/organisms/HeaderSection';

const page = () => {
  return (
    <main className="min-h-screen ">
      <section className="relative h-screen xl:px-40 md:px-20 sm:px-10 px-5">
        {/* background mobile */}
        <img
          src="/assets/images/bg/mobile-homepage.png"
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover block md:hidden -z-10"
        />
        {/* background desktop */}
        <img
          src="/assets/images/bg/desktophomepage.png"
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover hidden md:block -z-10"
        />
        <Header />
        <div className='xl:pt-20 md:pt-16 pt-10'>
          <HeroSection
          title="AI Agents That Work While You Think."
          description="Custom-built and pre-configured agents to 
          automate, analyze, and act, for teams that 
          want to work smarter, not harder."
          align="left"
          imageUrl="/assets/images/sections/s1_banner_img.png"
          imagePosition="right"
          disableShift={true}
          imageWidth='90%'
          buttons={
            <>
              <Button variant="secondary" size="md">
                Get Started
              </Button>
              <Button variant="outline" size="md">
                Watch Demo
              </Button>
            </>
            
          }
        />
        </div>

        {/* Logos partners*/}
        <div className="py-10 bg-white">
          <PartnersSection
            description='As Seen On leaders and best-in-class brands'
            logos={[
            { src: "/assets/images/logos/logo1.png", alt: "Logo 1" },
            { src: "/assets/images/logos/logo1.png", alt: "Logo 2" },
            { src: "/assets/images/logos/logo1.png", alt: "Logo 3" },
          ]} />
        </div>
      </section>

      <section className="relative xl:px-40 md:px-20 sm:px-10 px-5 xl:py-10 md:py-12 py-14">
        <div className='p-4 md:p-10 bg-[#F7F7F7] rounded-md border border-gray-200'>
          <HeroSection
          title={`More Than AI. 
            A New Way to Work.`}
          description={
            `At RedTec, we build intelligent agents and automation 
            tools that transform how businesses operate. 

            Our technology makes AI truly actionable — helping 
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
              <Button variant="secondary" size="md">
                 Explore our agents
              </Button>
            </>
            
          }
        />
        </div>
      </section> 

      <section className="relative xl:px-40 md:px-20 sm:px-10 xl:py-16 md:py-12 p-10">
            <HeaderSection
            title="Every business is different."
            subtitle="That’s why we offer tailor-made AI solutions for teams with specific challenges, workflows, or visions. 
            Whether you're automating internal operations, building a vertical AI product, or integrating AI into legacy 
            systems — we work with you to design, develop, and deploy agents that match your exact needs."
            align='center'
            titleBold={false}
            subtitleBold={false}
            />
      </section>

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
              <Button variant="outline" size="md">
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
              <Button variant="outline" size="md">
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
              <Button variant="outline" size="md">
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
              <Button variant="outline" size="md">
                 Explore Our Agents
              </Button>
            </>
            
          }
        />
        </div>
      </section> 
    </main>
  )
}

export default page