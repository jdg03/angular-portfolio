export type CredentialProvider = 'google-skills' | 'microsoft-learn';
export interface Credential {
  id: string;
  title: string;
  provider: CredentialProvider;
  image: string;
  issuedOn: string;
  /** Source image dimensions and inner badge rectangle, in pixels. */
  artwork: { sourceWidth: number; x: number; y: number; width: number; height: number };
}
