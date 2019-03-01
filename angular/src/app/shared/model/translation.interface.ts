import { Status } from "./status";

export interface TranslationHolder {
    currentTranslation : Translation | Status;
    language : string | Status;
}

export interface Translation {
    language : string | Status;
}