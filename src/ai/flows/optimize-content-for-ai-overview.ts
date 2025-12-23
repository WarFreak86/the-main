'use server';
/**
 * @fileOverview A flow that optimizes content to appear prominently in AI Overviews and generative search results.
 *
 * - optimizeContentForAIOverview - A function that handles the content optimization process.
 * - OptimizeContentInput - The input type for the optimizeContentForAIOverview function.
 * - OptimizeContentOutput - The return type for the optimizeContentForAIOverview function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const OptimizeContentInputSchema = z.object({
  content: z.string().describe('The content to be optimized.'),
  keywords: z.string().describe('Relevant keywords for the content.'),
});
export type OptimizeContentInput = z.infer<typeof OptimizeContentInputSchema>;

const OptimizeContentOutputSchema = z.object({
  optimizedContent: z.string().describe('The optimized content for AI Overviews.'),
  explanation: z.string().describe('Explanation of the changes made to the content.'),
});
export type OptimizeContentOutput = z.infer<typeof OptimizeContentOutputSchema>;

export async function optimizeContentForAIOverview(input: OptimizeContentInput): Promise<OptimizeContentOutput> {
  return optimizeContentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'optimizeContentPrompt',
  input: {schema: OptimizeContentInputSchema},
  output: {schema: OptimizeContentOutputSchema},
  prompt: `You are an expert in Generative Engine Optimization (GEO).
Your task is to optimize the given content to appear prominently in AI Overviews and generative search results.

Here is the content to optimize:
{{{content}}}

Here are the relevant keywords:
{{{keywords}}}

Please provide the optimized content and an explanation of the changes you made.

Output the optimized content in the 'optimizedContent' field and the explanation in the 'explanation' field.
`,
});

const optimizeContentFlow = ai.defineFlow(
  {
    name: 'optimizeContentFlow',
    inputSchema: OptimizeContentInputSchema,
    outputSchema: OptimizeContentOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
