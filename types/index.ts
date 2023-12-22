export interface TUserInfo {
  team: string;
  part: 'FE' | 'BE';
  name: string;
  accessToken: string;
  isDemoDone: boolean;
  isPartDone: boolean;
  expTime: number;
}
