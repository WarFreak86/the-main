'use server';

/**
 * @fileOverview A flow that forecasts marketing outcomes using AI and provides recommendations for strategy refinement.
 *
 * - forecastMarketingOutcomes - A function that handles the forecasting process.
 * - ForecastMarketingOutcomesInput - The input type for the forecastMarketingOutcomes function.
 * - ForecastMarketingOutcomesOutput - The return type for the forecastMarketingOutcomes function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ForecastMarketingOutcomesInputSchema = z.object({
  marketingData: z.string().describe('The marketing data to forecast outcomes.'),
  campaignGoals: z.string().describe('The goals of the marketing campaign.'),
});
export type ForecastMarketingOutcomesInput = z.infer<typeof ForecastMarketingOutcomesInputSchema>;

const ForecastMarketingOutcomesOutputSchema = z.object({
  forecastedOutcomes: z.string().describe('The forecasted marketing outcomes.'),
  recommendations: z.string().describe('The recommendations for refining marketing strategies.'),
});
export type ForecastMarketingOutcomesOutput = z.infer<typeof ForecastMarketingOutcomesOutputSchema>;

export async function forecastMarketingOutcomes(input: ForecastMarketingOutcomesInput): Promise<ForecastMarketingOutcomesOutput> {
  return forecastMarketingOutcomesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'forecastMarketingOutcomesPrompt',
  input: {schema: ForecastMarketingOutcomesInputSchema},
  output: {schema: ForecastMarketingOutcomesOutputSchema},
  prompt: `You are an AI-powered marketing analyst. Based on the provided marketing data and campaign goals, forecast the marketing outcomes and provide recommendations for refining the marketing strategies in real time.

Marketing Data: {{{marketingData}}}
Campaign Goals: {{{campaignGoals}}}

Forecasted Outcomes: 
Recommendations: `,
});

const forecastMarketingOutcomesFlow = ai.defineFlow(
  {
    name: 'forecastMarketingOutcomesFlow',
    inputSchema: ForecastMarketingOutcomesInputSchema,
    outputSchema: ForecastMarketingOutcomesOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
