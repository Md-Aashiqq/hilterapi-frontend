"use server";

import { sdk } from "@lib/config";
import { getCacheOptions } from "./cookies";

export type NotePayload = {
  content: string;
};

export type NoteResponse = {
  success: boolean;
  message?: string;
};

export const handleNoteCommand = async (
  content: string
): Promise<NoteResponse> => {
  const next = {
    ...(await getCacheOptions("note")),
  };

  if (!content.trim()) {
    return {
      success: false,
      message: "Content cannot be empty",
    };
  }

  try {
    const response = await sdk.client.fetch<any>(
      "/store/note", // ✅ your endpoint
      {
        method: "POST",
        body: { content: content }, // ✅ your body structure
        next,
      }
    );

    return {
      success: true,
      message: response?.message || "Note saved successfully",
    };
  } catch (error) {
    console.error("Failed to post note:", error);
    return {
      success: false,
      message: "An error occurred while saving the note",
    };
  }
};
