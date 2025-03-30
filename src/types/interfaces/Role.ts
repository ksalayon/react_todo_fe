export const Roles = {
    User: "user",
    Admin: "admin",
    Moderator: "moderator",
} as const;

export type Role = (typeof Roles)[keyof typeof Roles];

export const RoleLabels: Record<Role, string> = {
    user: "User",
    admin: "Administrator",
    moderator: "Moderator",
};

export const RoleFromLabel: Record<string, Role> = Object.fromEntries(
    Object.entries(RoleLabels).map(([key, value]) => [value, key]),
) as Record<string, Role>;
