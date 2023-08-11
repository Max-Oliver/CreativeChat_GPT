import { Configuration, OpenAIApi } from "openai-edge";
import {OpenAIStream, StreamingTextResponse} from 'ai'

const config = new Configuration({
  apiKey: process.env.OPEN_AI_SECRET,
});

const openai = new OpenAIApi(config);

export async function POST(req: Request) {
  const { messages } = await req.json();

  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    stream: true,
    messages,
  });
  console.log(messages);

  //const stream = OpenAIStream(response);
  const stream = OpenAIStream(response);

  // process with ai
  return new StreamingTextResponse(stream);
}
