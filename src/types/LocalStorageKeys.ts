export const LocalStorageKeys = {
    CurrentUser: "currentUser",
} as const;

export type LocalStorageKey =
    (typeof LocalStorageKeys)[keyof typeof LocalStorageKeys];
