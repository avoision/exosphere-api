import { NextResponse } from 'next/server';
import { buildPersonalityPrompt } from '../../util/';

export async function GET() {
  const aiPersonality = {
    prompt: buildPersonalityPrompt(),
  };

  return NextResponse.json(aiPersonality, {
    status: 200,
    headers: {
      // 'Access-Control-Allow-Origin': 'https://chat.openai.com',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers':
        'Content-Type, Authorization, openai-ephemeral-user-id, openai-conversation-id',
    },
  });
}

export async function OPTIONS() {
  return NextResponse.json(
    {},
    {
      status: 200,
      headers: {
        // 'Access-Control-Allow-Origin': 'https://chat.openai.com',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers':
          'Content-Type, Authorization, openai-ephemeral-user-id, openai-conversation-id',
      },
    }
  );
}
