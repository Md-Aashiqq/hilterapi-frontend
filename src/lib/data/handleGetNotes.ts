"use server";

import { sdk } from "@lib/config";
import { getCacheOptions } from "./cookies";

export type Note = {
  id: string;
  content: string;
  createdAt?: string;
};

export type GetNoteResponse = {
  success: boolean;
  notes: Note[];
  message?: string;
};

export const handleGetNotes = async (): Promise<GetNoteResponse> => {
  const next = {
    ...(await getCacheOptions("note")),
  };

  try {
    const response = await sdk.client.fetch<any>(
      "/store/note", // ✅ your endpoint
      {
        method: "GET",
        next,
      }
    );
    console.log("Fetched notes:", response);
    return {
      success: true,
      notes: response?.notes || [],
      message: response?.message || "Notes fetched successfully",
    };
  } catch (error) {
    console.error("Failed to fetch notes:", error);
    return {
      success: false,
      notes: [],
      message: "An error occurred while fetching notes",
    };
  }
};
