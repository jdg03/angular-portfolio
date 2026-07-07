import { TranslatedText } from '../services/translation.service';

export interface Certification {
  id: number;
  title: string | TranslatedText;
  academy: string;
  description: string | TranslatedText;
  link: string;
  image: string;
  order_index: number;
  created_at: string;
  is_active: boolean;
}
