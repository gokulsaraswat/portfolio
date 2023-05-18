export enum ContactType {
  github = 'github',
  linkedin = 'linkedin',
  twitter = 'twitter',
  youtube = 'youtube',
  email = 'email',
  buymeacoffee = 'buymeacoffee',
}

export interface Contact {
  twitter: string;
  site: string;
  calendly?: string;
  links: Record<ContactType, string>;
}

export const contact: Contact = {
  twitter: '@gokulsaraswat',
  site: 'gokulsaraswat.me',
  calendly: 'https://calendly.com/gokulsaraswat',
  links: {
    github: 'https://github.com/gokulsaraswat',
    linkedin: 'https://www.linkedin.com/in/gokul-saraswat/',
    twitter: 'https://twitter.com/gokulsaraswat',
    youtube: 'https://www.youtube.com/c/gokulsaraswat',
    email: 'mailto:gokulsaraswat07@gmail.com',
    buymeacoffee: 'https://www.buymeacoffee.com/gokuls',
  },
};
