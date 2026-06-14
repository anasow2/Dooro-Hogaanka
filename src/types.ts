export interface Candidate {
  id: string;
  fullName: string;
  party: string;
  slogan: string;
  image: string;
  agendas: string[];
}

export interface VoteData {
  fullName: string;
  motherName: string;
  nationalId: string;
  region: string;
  candidateId: string;
}

export interface RegionStats {
  region: string;
  votes: number;
  percentage: number;
}
