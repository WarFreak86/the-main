import { Button } from '@/components/ui/button';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  ArrowRight,
  BarChart,
  BrainCircuit,
  FileText,
  TrendingUp,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const services = [
  {
    icon: <TrendingUp className="h-8 w-8 text-primary" />,
    title: 'AI-Powered SEO',
    description:
      'Stay ahead of algorithm changes with AI that analyzes trends and optimizes your content for top rankings.',
    href: '/services#ai-seo',
  },
  {
    icon: <BrainCircuit className="h-8 w-8 text-primary" />,
    title: 'Generative Engine Optimization',
    description:
      "Become the authoritative answer in your niche by appearing in AI Overviews and generative search results.",
    href: '/services#geo',
  },
  {
    icon: <BarChart className="h-8 w-8 text-primary" />,
    title: 'Predictive Analytics',
    description:
      'Make data-driven decisions with confidence using our AI-powered forecasting and strategy recommendations.',
    href: '/services#analytics',
  },
  {
    icon: <FileText className="h-8 w-8 text-primary" />,
    title: 'Automated Content Creation',
    description:
      'Scale your content production across all channels without sacrificing quality or brand voice.',
    href: '/services#content',
  },
];

export default function Home() {
  const heroImage = PlaceHolderImages.find((img) => img.id === '1');
  const purposeImage = PlaceHolderImages.find((img) => img.id === '7');

  return (
    <div className="flex flex-col">
      <section className="relative w-full py-20 md:py-32 lg:py-40">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Struggling to Make AI Marketing Work? Get Your Edge.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground md:text-xl">
              We master the complex AI workflows and data strategies that drive
              real growth, so you can dominate AI-driven search and leave the
              competition behind.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/contact">Book Your Strategy Call</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/services">
                  Explore Services <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
        <div className="container mx-auto grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
        {purposeImage && (
            <Image
              src={purposeImage.imageUrl}
              alt={purposeImage.description}
              width={600}
              height={400}
              className="mx-auto aspect-[4/3] overflow-hidden rounded-xl object-cover object-center sm:w-full"
              data-ai-hint={purposeImage.imageHint}
            />
          )}
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
              Our Refined Purpose
            </div>
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Championing Small Business in the AI Age
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We believe in small business, and we’re here to help you stay relevant in an ever-changing AI landscape. While larger corporations are increasingly squeezing out smaller companies, we offer practical, affordable services designed to help you compete and grow. We haven’t forgotten where we came from—and we know businesses like yours are the backbone of every community. Let’s use the tools of the future to strengthen your business today.
            </p>
            <Button asChild size="lg" className="mt-4">
              <Link href="/contact">Let's Build Together</Link>
            </Button>
          </div>
        </div>
      </section>

      <section
        id="services"
        className="w-full py-12 md:py-24 lg:py-32"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                Our Services
              </div>
              <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">
                Intelligent Solutions for Modern Marketing
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We offer a suite of specialized, AI-powered services designed to
                deliver measurable results and a tangible return on investment.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:max-w-none lg:grid-cols-4 mt-12">
            {services.map((service) => (
              <Card
                key={service.title}
                className="transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <CardHeader className="items-center text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    {service.icon}
                  </div>
                  <CardTitle className="font-headline">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                  <Button variant="link" asChild className="mt-2">
                    <Link href={service.href}>
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
        <div className="container mx-auto grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
              Why Us?
            </div>
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Beyond Automation. Intelligent Growth.
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              While many agencies are only beginning to add “AI” to their presentations, we have already built and deployed a custom website scanner and social media engine designed to produce tailored, brand-aligned content that keeps you consistently active across every major platform. Beyond content creation, we also provide ongoing website refresh services—modernizing your site’s look and feel, improving clarity and flow, and streamlining the experience so it stays current, polished, and conversion-ready.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <div className="rounded-lg border bg-card p-4 text-center">
                <p className="text-4xl font-bold text-primary">4,162%</p>
                <p className="text-sm text-muted-foreground">
                  Increase in Organic Traffic
                </p>
              </div>
              <div className="rounded-lg border bg-card p-4 text-center">
                <p className="text-4xl font-bold text-primary">60%</p>
                <p className="text-sm text-muted-foreground">
                  Reduction in Content Costs
                </p>
              </div>
              <div className="rounded-lg border bg-card p-4 text-center">
                <p className="text-4xl font-bold text-primary">300%</p>
                <p className="text-sm text-muted-foreground">Average ROI</p>
              </div>
            </div>
            <Button asChild size="lg" className="mt-4">
              <Link href="/about">Learn About Our Mission</Link>
            </Button>
          </div>
          {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              width={600}
              height={400}
              className="mx-auto aspect-[4/3] overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              data-ai-hint={heroImage.imageHint}
            />
          )}
        </div>
      </section>
    </div>
  );
}
