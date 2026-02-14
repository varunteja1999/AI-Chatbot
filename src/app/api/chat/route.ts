import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

// Initialize Gemini using your private environment variable
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

// System Prompt: Tells the AI how to behave
const SYSTEM_INSTRUCTION = `You are a helpful and professional AI assistant for Sai Varun Teja's portfolio. 
Varun is a Full Stack Developer specializing in AI-Integrated Web Applications and Cloud Solutions. 
Keep your answers concise, friendly, and tech-focused.`;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const userMessage = body.message;

    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json({ reply: "API Key missing!", metrics: null }, { status: 500 });
    }

    // Use Gemini 2.5 Flash for fast, cost-effective responses
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    // Combine system instruction with user message
    const prompt = `${SYSTEM_INSTRUCTION}\n\nUser: ${userMessage}\nAI:`;

    // 1. Generate the response
    const result = await model.generateContent(prompt);
    const responseText = result.response.text();

    // 2. Fetch Token Usage (The Research Aspect!)
    const usageMetadata = result.response.usageMetadata;
    const inputTokens = usageMetadata?.promptTokenCount || 0;
    const outputTokens = usageMetadata?.candidatesTokenCount || 0;

    // 3. Calculate Cost (Based on rough Gemini 1.5 Flash pricing: $0.075/1M input, $0.30/1M output)
    const inputCost = (inputTokens / 1000000) * 0.075;
    const outputCost = (outputTokens / 1000000) * 0.30;
    const totalCost = (inputCost + outputCost).toFixed(6);

    // Return the reply AND the research metrics to the frontend
    return NextResponse.json({
      reply: responseText,
      metrics: {
        tokens: { input: inputTokens, output: outputTokens, total: inputTokens + outputTokens },
        cost: { totalUSD: totalCost }
      }
    });

  } catch (error) {
    console.error("Gemini API Error:", error);
    return NextResponse.json(
      { reply: "Sorry, I am currently offline for maintenance.", metrics: null },
      { status: 500 }
    );
  }
}