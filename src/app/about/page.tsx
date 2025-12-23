import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';

export default function AboutPage() {
  const missionImage = PlaceHolderImages.find((img) => img.id === '3');
  const customerImage = PlaceHolderImages.find((img) => img.id === '2');
  
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">
                Demystifying AI for Real-World Growth
              </h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We're more than just an agency. We're your strategic partner in navigating the complexities of AI-driven marketing.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="mission" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                Our Mission
              </div>
              <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Bridge the Gap Between AI Potential and Proven Performance
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our mission is to demystify AI marketing. We bridge the critical skills gap that prevents so many businesses from succeeding. We transform complex data and chaotic workflows into clear, predictable growth for our partners. We believe success isn't just about adopting AI, but mastering its strategic integration to build a lasting competitive edge.
              </p>
            </div>
            {missionImage && (
                <Image
                src={missionImage.imageUrl}
                alt={missionImage.description}
                width={600}
                height={400}
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                data-ai-hint={missionImage.imageHint}
                />
            )}
          </div>
        </div>
      </section>

      <section id="customer" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
           {customerImage && (
                <Image
                    src={customerImage.imageUrl}
                    alt={customerImage.description}
                    width={600}
                    height={400}
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                    data-ai-hint={customerImage.imageHint}
                />
            )}
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                Our Customer
              </div>
              <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Built for Ambitious, Data-Driven Leaders
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We built Render-Lab for leaders who see the transformative potential of AI but are frustrated by the hype and complexity. You're tired of generic advice and agencies that just rebrand old services. You need a true partner who understands data infrastructure, workflow automation, and the new frontier of Generative Engine Optimization. If you're ready to move beyond experimentation and build a dominant digital presence, you're in the right place.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
