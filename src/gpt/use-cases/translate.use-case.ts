import OpenAI from 'openai';

interface Options {
  prompt: string;
  lang: string;
}

export const translateTextUseCase = async (
  openai: OpenAI,
  { prompt, lang }: Options,
) => {
  return await openai.chat.completions.create({
    stream: true,
    messages: [
      {
        role: 'system',
        content: ` Traduce el siguiente texto al idioma ${lang}:${prompt} `,
      },
    ],
    model: 'gpt-4',
    temperature: 0.2,
    // max_tokens: 500,
  });

  // return { message: response.choices[0].message.content };
};
