'use server';

/**
 * @fileOverview Generates content from SEO keywords for blog posts, social media updates, and email campaigns.
 *
 * - generateContentFromKeywords - A function that generates content from SEO keywords.
 * - GenerateContentFromKeywordsInput - The input type for the generateContentFromKeywords function.
 * - GenerateContentFromKeywordsOutput - The return type for the generateContentFromKeywords function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateContentFromKeywordsInputSchema = z.object({
  keywords: z
    .string()
    .describe('A comma-separated list of SEO keywords to generate content from.'),
  contentType: z
    .enum(['blog post', 'social media update', 'email campaign'])
    .describe('The type of content to generate.'),
  toneOfVoice: z
    .string()
    .optional()
    .describe('The desired tone of voice for the content (e.g., expert, data-driven, supportive).'),
  brandName: z
    .string()
    .optional()
    .describe('The name of the brand for which the content is being generated.'),
});
export type GenerateContentFromKeywordsInput = z.infer<
  typeof GenerateContentFromKeywordsInputSchema
>;

const GenerateContentFromKeywordsOutputSchema = z.object({
  content: z
    .string()
    .describe('The generated content based on the provided SEO keywords.'),
});
export type GenerateContentFromKeywordsOutput = z.infer<
  typeof GenerateContentFromKeywordsOutputSchema
>;

export async function generateContentFromKeywords(
  input: GenerateContentFromKeywordsInput
): Promise<GenerateContentFromKeywordsOutput> {
  return generateContentFromKeywordsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateContentFromKeywordsPrompt',
  input: {schema: GenerateContentFromKeywordsInputSchema},
  output: {schema: GenerateContentFromKeywordsOutputSchema},
  prompt: `You are an expert content creator specializing in SEO-optimized content.

You will use the provided SEO keywords to generate content for the specified content type, maintaining a consistent brand voice.

SEO Keywords: {{{keywords}}}
Content Type: {{{contentType}}}
Tone of Voice: {{#if toneOfVoice}}{{{toneOfVoice}}}{{else}}Professional{{/if}}
Brand Name: {{#if brandName}}{{{brandName}}}{{else}}the brand{{/if}}

Generate content that is engaging, informative, and optimized for search engines. The generated content must align with the specified content type, keywords, and tone of voice.

Content:`,
});

const generateContentFromKeywordsFlow = ai.defineFlow(
  {
    name: 'generateContentFromKeywordsFlow',
    inputSchema: GenerateContentFromKeywordsInputSchema,
    outputSchema: GenerateContentFromKeywordsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
