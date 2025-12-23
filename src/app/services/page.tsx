import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  BrainCircuit,
  TrendingUp,
  BarChart,
  FileText,
} from 'lucide-react';
import Image from 'next/image';

const services = [
  {
    id: 'ai-seo',
    icon: TrendingUp,
    title: 'AI-Powered SEO',
    image: PlaceHolderImages.find((img) => img.id === '5'),
    problem:
      "Search engine algorithms are constantly changing, making it nearly impossible to keep up and maintain top rankings. Your team is wasting hours on strategies that become obsolete overnight.",
    solution:
      'Our AI platform constantly analyzes search trends, competitor movements, and algorithm updates in real-time. It doesn’t just track keywords; it understands intent and predicts shifts in search behavior, providing continuous, automated optimization recommendations for your content.',
    benefit:
      'Stay permanently ahead of the curve. Consistently improve your search rankings, capture more high-value organic traffic, and free up your team to focus on strategy, not guesswork.',
  },
  {
    id: 'geo',
    icon: BrainCircuit,
    title: 'Generative Engine Optimization (GEO)',
    image: PlaceHolderImages.find((img) => img.id === '4'),
    problem:
      "Your customers are now getting answers directly from AI Overviews and generative search, completely bypassing traditional search results. If your brand isn't the source of those answers, you're invisible.",
    solution:
      'We are experts in Generative Engine Optimization. We restructure and optimize your existing content—and create new, targeted assets—to become the primary, citable source for AI-driven search engines. Our process ensures your brand messaging is accurately represented in AI-generated summaries.',
    benefit:
      'Become the authoritative voice in your niche. Capture high-intent traffic at the top of the funnel, build unparalleled brand trust, and position your business as a leader for the next decade of search.',
  },
  {
    id: 'analytics',
    icon: BarChart,
    title: 'Predictive Analytics & Forecasting',
    image: PlaceHolderImages.find((img) => img.id === '2'),
    problem:
      'You are spending your marketing budget based on historical data and uncertain ROI. It’s difficult to forecast outcomes, justify spending, and make agile strategic decisions.',
    solution:
      'Our predictive analytics dashboard ingests your marketing and sales data to forecast campaign outcomes with remarkable accuracy. It goes beyond simple reporting to provide clear, actionable recommendations for budget allocation and strategy refinement to maximize impact.',
    benefit:
      'Make data-driven decisions with confidence. Optimize your marketing spend for maximum ROI, eliminate waste on underperforming channels, and clearly demonstrate the financial impact of your marketing efforts to stakeholders.',
  },
  {
    id: 'content',
    icon: FileText,
    title: 'Automated Content Generation at Scale',
    image: PlaceHolderImages.find((img) => img.id === '6'),
    problem:
      'Creating high-quality, on-brand content consistently across multiple platforms is slow, resource-intensive, and expensive. Your content calendar has gaps, and quality is suffering.',
    solution:
      'Our system automates the creation of SEO-optimized blog posts, engaging social media updates, and personalized email campaigns. We fine-tune the AI to your specific brand voice, products, and target audience, ensuring every piece of content is authentic and effective.',
    benefit:
      'Reduce content production time and costs by up to 60%. Publish a high volume of quality content consistently, engage your audience across all channels, and establish a powerful brand presence without burning out your team.',
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">
                Our AI-Powered Services
              </h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We deliver tangible results by mastering the AI workflows that
                other agencies are still experimenting with. Explore how our
                specialized services can give you a definitive edge.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6">
        {services.map((service, index) => (
          <section
            id={service.id}
            key={service.id}
            className="w-full py-12 md:py-20 border-t"
          >
            <div
              className={`grid gap-10 lg:grid-cols-2 lg:gap-16 items-center`}
            >
              <div
                className={`space-y-4 ${
                  index % 2 === 1 ? 'lg:order-last' : ''
                }`}
              >
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-medium">
                  {service.title}
                </div>
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl font-headline">
                  The Problem
                </h2>
                <p className="text-muted-foreground">{service.problem}</p>

                <h3 className="text-xl font-bold tracking-tighter sm:text-2xl font-headline">
                  Our Solution
                </h3>
                <p className="text-muted-foreground">{service.solution}</p>

                <h3 className="text-xl font-bold tracking-tighter sm:text-2xl font-headline">
                  The Benefit
                </h3>
                <p className="text-muted-foreground">{service.benefit}</p>
              </div>

              {service.image && (
                <Image
                  src={service.image.imageUrl}
                  alt={service.image.description}
                  width={600}
                  height={450}
                  className="mx-auto aspect-4/3 overflow-hidden rounded-xl object-cover"
                  data-ai-hint={service.image.imageHint}
                />
              )}
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
