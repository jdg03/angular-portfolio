import { Technology } from './technology.model';
import { TranslatedText } from '../services/translation.service';

export interface Project {
  id: number;
  title: string | TranslatedText;
  image: string;
  description: string | TranslatedText;
  github: string;
  technologies: Technology[];
  link?: string;
  is_active: boolean;
}
