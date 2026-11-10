export type AppScreen =
  | 'home'
  | 'melodies'
  | 'melody-detail'
  | 'faq'
  | 'sources-community'
  | 'about';

// Legacy compatibility type for section jumps
export type ActiveSection =
  | 'overview'
  | 'rituals'
  | 'ba-trao'
  | 'belief'
  | 'sites'
  | 'glossary'
  | 'memories'
  | 'handbook'
  | 'quiz';

export interface MelodyItem {
  id: string;
  name: string;
  titleCn: string;
  role: string;
  roleCategory: 'tong-mui' | 'tong-khoang' | 'tong-lai' | 'trao-phu' | 'hoc-tro-le' | 'toan-doan';
  mood: 'hung-trang' | 'bi-ai' | 'vui-nhon' | 'lao-dong' | 'linh-thieng';
  moodLabel: string;
  region: string;
  regionCategory: 'da-nang-quang-nam' | 'quang-ngai-binh-dinh' | 'phu-yen-khanh-hoa' | 'ninh-thuan-binh-thuan' | 'toan-vung';
  description: string;
  musicalStructure: {
    scale: string;
    tempo: string;
    instruments: string[];
  };
  lyrics: {
    stanzas: {
      speaker: string;
      text: string[];
    }[];
    explanation: string;
  };
  choreography: string[];
  costumeAndProps: string;
  culturalContext: string;
  audioPreset: 'sinh-tien' | 'trong-lenh' | 'chieng-co' | 'mo-tre';
}

export interface FaqItem {
  id: string;
  category: 'tin-nguong' | 'nghi-le' | 'ba-trao' | 'di-tich' | 'cong-dong';
  categoryLabel: string;
  question: string;
  answer: string;
  keyReference: string;
  citation?: {
    recordName: string;
    community: string;
    location: string;
    source: string;
  };
}

export interface RitualStep {
  id: string;
  order: number;
  timeSlot: string;
  title: string;
  shortDesc: string;
  location: string;
  keyActors: string[];
  offerings: string[];
  significance: string;
  detailedSteps: string[];
  chantSnippet?: {
    title: string;
    verse: string[];
    meaning: string;
  };
}

export interface BaTraoRole {
  id: string;
  name: string;
  titleCn: string;
  position: 'bow' | 'mid' | 'stern' | 'left-oar' | 'right-oar';
  description: string;
  costume: string;
  prop: string;
  movements: string[];
  signatureVerse: {
    melody: string;
    lyrics: string[];
    context: string;
  };
}

export interface HeritageSite {
  id: string;
  province: string;
  name: string;
  address: string;
  establishedCentury: string;
  festivalLunarDate: string;
  highlights: string[];
  whaleRelicDescription: string;
  sacredItems: string[];
  historicalNotes: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface GlossaryTerm {
  id: string;
  term: string;
  phonetic?: string;
  category: 'nghi-le' | 'ngu-nghiep' | 'ba-trao' | 'chuc-sac' | 'kien-truc';
  definition: string;
  culturalContext: string;
  exampleSentence?: string;
}

export interface ImperialEdict {
  id: string;
  reign: string;
  year: string;
  conferredTitle: string;
  recipient: string;
  hannoExcerpt: string;
  translation: string;
  significance: string;
}

export interface CommunityNote {
  id: string;
  authorName: string;
  villageName: string;
  province: string;
  role: string;
  yearRecorded: string;
  storyTitle: string;
  content: string;
  tag: string;
}

export interface DiSanRecord {
  ten_theo_danh_muc: string;
  ten_goi_ban_dia: string;
  thuc_hanh_di_san: string;
  vung_van_hoa: string;
  dan_toc: string;
  dia_danh_hien_nay: string;
  dia_danh_tai_thoi_diem_tu_lieu: string;
  mo_ta: string;
  boi_canh_dien_xuong: string;
  nguoi_cung_cap: string;
  pham_vi_duoc_phep_su_dung: string;
  nguon_tu_lieu: string;
}
