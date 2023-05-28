import { ApplicationLanguage } from '../../core/shared/model/types/application-language';
import { UILanguage } from '../../core/shared/model/types/ui-language';

export async function translation(lang: ApplicationLanguage | UILanguage): Promise<any> {
    if (lang == ApplicationLanguage.PL) {
        return (await import('./translations-pl')).translations;
    }
    if (lang == ApplicationLanguage.EN) {
        return (await import('./translations-en')).translations;
    }

    return (await import('./translations-en')).translations;
}

export async function valueFromKey(key: string, lang: ApplicationLanguage): Promise<string> {
    let tr = await translation(lang);
    let value: string = tr.shared.errors.apiError[key];
    if (!value) value = tr.shared.errors.appError[key];
    return value ? value : key
}
