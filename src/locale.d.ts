declare module "locale" {
  export type Locale = "en" | "fr";
  export type Content = {
    [key: string]: string | Content | ((args: any) => string) | string[];
  };
  export type Translation = {
    [locale in Locale]: Content;
  };
}
