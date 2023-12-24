export interface TUserInfo {
  teamName: string;
  part: 'FE' | 'BE';
  name: string;
  accessToken: string;
  isDemoDone: boolean;
  isPartDone: boolean;
  expTime: number;
}
