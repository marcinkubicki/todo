import { ERROR_MESSAGES } from "@/constants/constants.ts";

const ABORT_ERROR ='AbortError';

export const getErrorMessage = (
    error: unknown,
    fallback: string = ERROR_MESSAGES.UNKNOWN_ERROR
): string => {
    if (error instanceof DOMException && error.name === ABORT_ERROR) {
        return '';
    }

    return error instanceof Error ? error.message : fallback;
};
