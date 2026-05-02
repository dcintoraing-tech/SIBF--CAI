'use server';
/**
 * @fileOverview A Genkit flow to generate a concise executive summary for a project.
 *
 * - generateAIProjectSummary - A function that generates an executive summary.
 * - AIProjectSummaryInput - The input type for the generateAIProjectSummary function.
 * - AIProjectSummaryOutput - The return type for the generateAIProjectSummary function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const AIProjectSummaryInputSchema = z.object({
  problemStatement: z.string().describe('The problem statement of the project.'),
  generalObjective: z.string().describe('The general objective of the project.'),
  specificObjectives: z.array(z.string()).describe('A list of specific objectives for the project.'),
  justification: z.string().describe('The justification and value proposition of the project.'),
});
export type AIProjectSummaryInput = z.infer<typeof AIProjectSummaryInputSchema>;

const AIProjectSummaryOutputSchema = z.object({
  summary: z.string().describe('A concise executive summary of the project.'),
});
export type AIProjectSummaryOutput = z.infer<typeof AIProjectSummaryOutputSchema>;

/**
 * Generates a concise executive summary for a project based on its problem statement, objectives, and justification.
 * @param input - The project details to summarize.
 * @returns An object containing the executive summary.
 */
export async function generateAIProjectSummary(input: AIProjectSummaryInput): Promise<AIProjectSummaryOutput> {
  return aIProjectSummaryFlow(input);
}

const summaryPrompt = ai.definePrompt({
  name: 'executiveSummaryPrompt',
  input: { schema: AIProjectSummaryInputSchema },
  output: { schema: AIProjectSummaryOutputSchema },
  prompt: `You are an expert technical writer and marketing specialist. Your task is to create a concise and compelling executive summary for a university technology project. This summary should highlight the project's purpose, the problem it solves, its main goals, and its value proposition.

Keep the summary brief, clear, and engaging for a general audience.

Project Details:

Problem Statement:
{{{problemStatement}}}

General Objective:
{{{generalObjective}}}

Specific Objectives:
{{#each specificObjectives}}- {{{this}}}
{{/each}}

Justification:
{{{justification}}}`,
});

const aIProjectSummaryFlow = ai.defineFlow(
  {
    name: 'aIProjectSummaryFlow',
    inputSchema: AIProjectSummaryInputSchema,
    outputSchema: AIProjectSummaryOutputSchema,
  },
  async (input) => {
    const { output } = await summaryPrompt(input);
    return output!;
  }
);
