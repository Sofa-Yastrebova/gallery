export interface attributesTypes {
  [key: string]: string | number | boolean;
}

export interface ParamsType {
  tagName: string;
  classList?: string;
  attributes?: attributesTypes;
  text?: string;
}
