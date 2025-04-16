import { ERROR_MESSAGES } from "@/constants/constants";

export const getErrorMessage = (error: unknown, fallback: string = ERROR_MESSAGES.UNKNOWN_ERROR): string => {
    return error instanceof Error ? error.message : fallback;
};
