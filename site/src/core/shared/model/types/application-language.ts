export const ApplicationLanguage = {
    PL: 'PL',
    EN: 'EN',
} as const;

export const LanguageWithApplicationLanguage = {
    'pl': ApplicationLanguage.PL,
    'en': ApplicationLanguage.EN,
} as const;

export const ApplicationLanguageWithLanguage = {
    [ApplicationLanguage.PL]: 'pl',
    [ApplicationLanguage.EN]: 'en',
} as const;

export type LanguageWithApplicationLanguage = typeof LanguageWithApplicationLanguage[keyof typeof LanguageWithApplicationLanguage];
export type ApplicationLanguage = typeof ApplicationLanguage[keyof typeof ApplicationLanguage];

export const DEFAULT_APPLICATION_LANGUAGE = ApplicationLanguage.EN;
