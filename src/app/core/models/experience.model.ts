import { TranslatedText } from '../services/translation.service';

export interface Responsibility {
  title: string | TranslatedText;
  description: string | TranslatedText;
  icon: string; // Material symbols icon identifier
  color: 'primary' | 'tertiary';
}

export interface ExperienceItem {
  title: string | TranslatedText;
  company: string;
  dateStart: string | TranslatedText;
  dateEnd: string | TranslatedText;
  type: string | TranslatedText;        // e.g. "FULL-TIME"
  modality: string | TranslatedText;    // e.g. "HYBRID"
  responsibilities: Responsibility[];
  frontendTechs?: string[];
  link?: string;
}
