import { routes } from './routing'
import { translations } from './i18n/translations-en'

declare module "@vue/runtime-core" {
    interface ComponentCustomProperties {
        $translations: typeof translations;
        $routes: typeof routes;
    }
}
