"use client";
import { useChat } from "ai/react";

function HomePage() {
  const { handleInputChange, input, handleSubmit, messages, isLoading } =
    useChat();

  const newArrMsg = [
    ...messages,
    {
      id: "1",
      role: "assistant",
      content: `Multiple models, each with different capabilities 
                and price points. Prices are per 1,000 tokens. You can think of tokens as pieces of words, 
                where 1,000 tokens is about 750 words. This paragraph is 35 tokens.`,
    },
  ];
  return (
    <section className="flex justify-center items-center h-screen">
      <form className=" max-w-xl w-full" onSubmit={handleSubmit}>
        <div className="text-white max-h-96 h-full overflow-y-auto">
          {newArrMsg.map((m) => (
            <div
              className={`flex flex-col mb-2 p-2 rounded-md ${
                m.role === "assistant"
                  ? "self-end bg-gray-800"
                  : "self-start bg-blue-700"
              }`}
              key={m.id}
            >
              <span
                className={`text-xs ${
                  m.role === "assistant" ? "text-right" : "text-left"
                }`}
              >
                {m.role}
              </span>
              {m.content}
            </div>
          ))}
        </div>

        <div className="flex justify-between my-4">
          <label className="text-white block font-bold my-2">
            Say something...
          </label>
          <button
            className="bg-blue-600 text-white px-3 py-2 rounded-md focus:outline-none"
            disabled={isLoading || !input}
          >
            Send
          </button>
        </div>
        <textarea
          rows={4}
          value={input}
          placeholder="Type your message here..."
          className="text-black bg-slate-300 px-3 w-full rounded-md focus: outline-none"
          onChange={handleInputChange}
        ></textarea>
        {/* Messages */}
      </form>
    </section>
  );
}

export default HomePage;
