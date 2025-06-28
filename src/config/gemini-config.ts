// import { GoogleGenerativeAI } from '@google/generative-ai';
// console.log("Gemini API Key:", process.env.GEMINI_API_KEY);
// const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY as string);

// export default genAI;

import OpenAI from 'openai';
console.log(process.env.OPENAI_API_KEY)
export const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});