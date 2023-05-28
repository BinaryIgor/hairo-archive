export const UILanguage = {
    PL: 'PL',
    EN: 'EN',
} as const;

export type UILanguage = typeof UILanguage[keyof typeof UILanguage];

export const UILanguageWithLanguage = {
    PL: 'pl',
    EN: 'en',
} as const;
