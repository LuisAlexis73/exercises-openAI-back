import OpenAI from 'openai';

interface Options {
  prompt: string;
}

export const orthographyCheckUseCase = async (
  openai: OpenAI,
  options: Options,
) => {
  const { prompt } = options;

  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: 'system',
        content: `
        Te seran proveidos textos en español con posibles errores ortograficos y gramaticales, ten en cuenta que las palabras utilizadas deben de existir en el diccionario de la RAE(Real Academia Española).
        Debes de responder en formato JSON, tu tarea es corregirlos y retornar información de las solicitudes, también debes de dar un porcentaje de acierto por el usuario.
        Si no hay errores, debes de retornar un mensaje de felicitaciones.

        Ejemplo:
        {
        userScore: number,
        errors: string[], // [error -> solucion] Debe ser un array
        message: string, // usa emogis y texto para felicitar al usuario
        }
        `,
      },
      {
        role: 'user',
        content: prompt,
      },
    ],
    model: 'gpt-3.5-turbo',
    temperature: 0.3,
    max_tokens: 150,
    response_format: {
      type: 'json_object',
    },
  });

  const jsonResponse = JSON.parse(completion.choices[0].message.content);

  return jsonResponse;
};
