import { EleButtonProps } from '@/components/elements/ele-button';

export interface ImageLike {
  imageUrl?: string;
}

export interface ImageListLike {
  imageList?: ImageLike[];
}

export interface IconLike {
  icon?: string;
}

export interface VideoLike {
  videoUrl?: string;
}

export interface ActionLike {
  code?: string;
  linkToUrl?: string;
  onClick?: Function;
  onChange?: Function;
  extraData?: any;
  disabled?: boolean;
  statInPage?: boolean;
}

export interface ModeClass {
  mode?: string | string[];
  className?: string;
}

export interface EleObject {
  id?: string | number;
  title?: string;
  brief?: string;
}

export interface CandidateValue {
  id: string; // id就是值，就是value
  title: string; // title就是name
  brief?: string;
  selected?: boolean;
}

export interface TitleValue {
  title?: any;
  value?: any;
}

export interface ActionListLike {
  actionList: EleButtonProps[];
}
