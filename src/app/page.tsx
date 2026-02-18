"use client";

import { useChat } from "ai/react";
import { useRef, useEffect } from "react";

export default function Home() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } =
    useChat();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex flex-col h-screen bg-zinc-950 text-zinc-100">
      {/* Header */}
      <header className="border-b border-zinc-800 px-6 py-4">
        <h1 className="text-xl font-bold tracking-tight">
          <span className="text-emerald-400">◆</span> Isomorph
        </h1>
        <p className="text-sm text-zinc-500 mt-1">
          Cross-domain problem solving through structural isomorphism
        </p>
      </header>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-6 py-4 space-y-6">
        {messages.length === 0 && (
          <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
            <div className="text-6xl">◆</div>
            <h2 className="text-2xl font-bold text-zinc-300">
              Describe your problem
            </h2>
            <p className="text-zinc-500 max-w-md">
              Any domain. Any format. Isomorph will strip it to its abstract
              shape, find matching patterns across all fields, and map solutions
              back.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4 text-sm">
              {[
                "My team keeps bikeshedding on trivial decisions while ignoring critical ones",
                "I have a function that mutates state in a loop and the final value is wrong",
                "How do I practice trumpet more efficiently?",
              ].map((example, i) => (
                <button
                  key={i}
                  onClick={() => {
                    const fakeEvent = {
                      target: { value: example },
                    } as React.ChangeEvent<HTMLInputElement>;
                    handleInputChange(fakeEvent);
                  }}
                  className="p-3 rounded-lg border border-zinc-800 hover:border-emerald-400/50 hover:bg-zinc-900 transition-colors text-left text-zinc-400 hover:text-zinc-200"
                >
                  {example}
                </button>
              ))}
            </div>
          </div>
        )}

        {messages.map((m) => (
          <div
            key={m.id}
            className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-3xl rounded-xl px-4 py-3 ${
                m.role === "user"
                  ? "bg-emerald-600/20 border border-emerald-600/30 text-zinc-100"
                  : "bg-zinc-900 border border-zinc-800 text-zinc-200"
              }`}
            >
              {m.role === "assistant" && (
                <div className="text-emerald-400 text-xs font-mono mb-2">
                  ISOMORPH
                </div>
              )}
              <div className="whitespace-pre-wrap prose prose-invert prose-sm max-w-none">
                {m.content}
              </div>
            </div>
          </div>
        ))}

        {isLoading && messages[messages.length - 1]?.role !== "assistant" && (
          <div className="flex justify-start">
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3">
              <div className="text-emerald-400 text-xs font-mono mb-2">
                ISOMORPH
              </div>
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse delay-100" />
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse delay-200" />
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="border-t border-zinc-800 px-6 py-4">
        <form onSubmit={handleSubmit} className="flex gap-3 max-w-3xl mx-auto">
          <input
            value={input}
            onChange={handleInputChange}
            placeholder="Describe a problem from any domain..."
            className="flex-1 bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-emerald-400/50 focus:ring-1 focus:ring-emerald-400/20"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 disabled:bg-zinc-700 disabled:text-zinc-500 rounded-lg font-medium transition-colors"
          >
            Solve
          </button>
        </form>
      </div>
    </div>
  );
}
