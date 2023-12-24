export interface TUserInfo {
  teamName: string;
  part: 'FE' | 'BE';
  name: string;
  accessToken: string;
  teamVoted: boolean;
  candidateVoted: boolean;
  expTime: number;
}
