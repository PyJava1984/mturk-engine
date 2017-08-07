interface RootState {
  hits: HitTableEntry[];
  requesters: Map<string, RequesterDetails>
}

interface SearchParams {
  readonly selectedSearchType: string;
  readonly sortType: string;
  readonly pageSize: number;
  readonly minReward: number;
  readonly qualifiedFor: 'on' | 'off';
}

interface HitTableEntry {
  title: string;
  requester: string;
  requesterId: string;
  reward: string;
  groupId: string;
  turkopticon?: RequesterDetails;
}

interface TOpticonApiResponse {
  name: string;
  attrs: RequesterScores;
  reviews: number;
  tos_flags: number;
}

interface RequesterDetails extends TOpticonApiResponse {
  id?: string;
}

/**
 * Each string should be parseFloat()-able into a number.
 */
interface RequesterScores {
  comm?: string;
  pay?: string;
  fair?: string;
  fast?: string;
}
