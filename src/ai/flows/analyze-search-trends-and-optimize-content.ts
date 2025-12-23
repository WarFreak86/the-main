'use server';

/**
 * @fileOverview Analyzes search trends and optimizes content for higher rankings.
 *
 * - analyzeSearchTrendsAndOptimizeContent - A function that handles the analysis and optimization process.
 * - AnalyzeSearchTrendsAndOptimizeContentInput - The input type for the analyzeSearchTrendsAndOptimizeContent function.
 * - AnalyzeSearchTrendsAndOptimizeContentOutput - The return type for the analyzeSearchTrendsAndOptimizeContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnalyzeSearchTrendsAndOptimizeContentInputSchema = z.object({
  keyword: z.string().describe('The primary keyword to analyze.'),
  content: z.string().describe('The content to optimize for the keyword.'),
});
export type AnalyzeSearchTrendsAndOptimizeContentInput = z.infer<typeof AnalyzeSearchTrendsAndOptimizeContentInputSchema>;

const AnalyzeSearchTrendsAndOptimizeContentOutputSchema = z.object({
  analysis: z.string().describe('Analysis of current search trends for the keyword.'),
  optimizationSuggestions: z.string().describe('Suggestions for optimizing the content to improve search ranking.'),
});
export type AnalyzeSearchTrendsAndOptimizeContentOutput = z.infer<typeof AnalyzeSearchTrendsAndOptimizeContentOutputSchema>;

export async function analyzeSearchTrendsAndOptimizeContent(input: AnalyzeSearchTrendsAndOptimizeContentInput): Promise<AnalyzeSearchTrendsAndOptimizeContentOutput> {
  return analyzeSearchTrendsAndOptimizeContentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'analyzeSearchTrendsAndOptimizeContentPrompt',
  input: {schema: AnalyzeSearchTrendsAndOptimizeContentInputSchema},
  output: {schema: AnalyzeSearchTrendsAndOptimizeContentOutputSchema},
  prompt: `You are an expert SEO analyst. Your task is to analyze search trends for a given keyword and provide actionable suggestions for optimizing content to rank higher in search results.\n\nKeyword: {{{keyword}}}\nContent: {{{content}}}\n\nAnalysis:\nOptimization Suggestions:`,
});

const analyzeSearchTrendsAndOptimizeContentFlow = ai.defineFlow(
  {
    name: 'analyzeSearchTrendsAndOptimizeContentFlow',
    inputSchema: AnalyzeSearchTrendsAndOptimizeContentInputSchema,
    outputSchema: AnalyzeSearchTrendsAndOptimizeContentOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
