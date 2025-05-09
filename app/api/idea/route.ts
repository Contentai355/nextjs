// app/api/idea/route.ts

import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();

    const chatCompletion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [{ role: "user", content: prompt }],
    });

    const result = chatCompletion.choices[0]?.message?.content || "No response.";
    return NextResponse.json({ result });
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
  }
}
