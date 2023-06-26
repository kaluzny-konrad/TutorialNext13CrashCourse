"use client";

import React from "react";
import { FaSpinner } from "react-icons/fa";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export default function AddPost() {
  const [title, setTitle] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState("");

  const { mutate } = useMutation(
    async (title: string) => await axios.post("/api/posts", { title }),
    {
      onError: (error: any) => {
        setError(error.response.data.message);
        setIsLoading(false);
      },
      onSuccess: () => {
        setTitle("");
        setIsLoading(false);
      },
    }
  );

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    mutate(title);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-2 p-4 border border-gray-300 bg-white rounded-md shadow-md my-4"
    >
      <div>
        <textarea
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          name="title"
          id="title"
          cols={30}
          rows={4}
          placeholder="What's on your mind?"
          className="w-full p-2 border border-gray-300 bg-slate-200 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 scrollbar"
        />
      </div>
      <div className="flex items-center justify-between gap-2">
        <p
          className={`text-sm ${
            title.length > 300 ? "text-red-500" : "text-slate-500"
          }`}
        >
          {title.length}/300
        </p>
        {isLoading ? (
          <FaSpinner className="w-5 h-5 mr-7 my-1 animate-spin text-slate-600" />
        ) : (
          <button
            type="submit"
            className="px-4 py-1 text-sm font-semibold text-white bg-slate-500 rounded-md duration-300 flex items-center justify-center w-20 hover:bg-slate-600"
            disabled={isLoading}
          >
            Submit
          </button>
        )}
      </div>
    </form>
  );
}
