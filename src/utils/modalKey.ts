import translations from "@translations/translations";
import type { ProjectKeys } from "@custom-types/projectKeys.types";
import type { availableLanguages } from "@i18n/ui";

interface ModalProps {
    paragraphs: string[];
    title: string;
    key: string;
    image: string;
    link: string;
}

export function capitalizeFirstLetter(str: string) {
    if (str.length === 0) return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function getModalProps(key: ProjectKeys, lang: availableLanguages): ModalProps {
    const image = `/images/${key}.png`;
    const paragraphs: string[] = Object.values(translations.resources[lang]["PROJECT-KEYS"][key]["DESCRIPTION"]);
    const title = key.split("-").map(key => capitalizeFirstLetter(key)).join(" ");
    const link = translations.resources[lang]["PROJECT-KEYS"][key]["LINK"];
    return {
        title,
        paragraphs,
        image,
        key,
        link
    }
}

export default getModalProps