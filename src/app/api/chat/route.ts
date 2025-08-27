import { NextRequest, NextResponse } from "next/server";
import { generateResponse } from "@/lib/gemini";

export async function POST(request: NextRequest) {
  try {
    const { message, chatHistory } = await request.json();

    if (!message) {
      return NextResponse.json(
        { success: false, error: "Message is required" },
        { status: 400 }
      );
    }

    const response = await generateResponse(message, chatHistory);

    return NextResponse.json({
      success: true,
      message: response,
    });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
