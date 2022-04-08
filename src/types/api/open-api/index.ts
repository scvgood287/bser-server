import { AxiosRequestConfig, AxiosRequestHeaders } from 'axios';

/* Primitive Types */

// Path
export type Path = string;
export type Nickname = string;
export type SeasonId = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
export type MatchingTeamMode = 1 | 2 | 3;
export type UserNum = number;
export type GameId = number;
export type MetaType = "hash" | "";
export type Language =
  // 완전 제공 언어
  "Korean" |
  "English" |
  "Japanese" |
  "ChineseSimplified" |
  "ChineseTraditional" |

  // 부분 제공 언어
  "French" |
  "Spanish" |
  "SpanishLatin" |
  "Portuguese" |
  "PortugueseLatin" |
  "Indonesian" |
  "German" |
  "Russian" |
  "Thai" |
  "Vietnamese";

// api
export type CustomBoolean = 0 | 1;
export type Code = number;
export type Message = string;
export type Rank = number;
export type MMR = number;
export type RankSize = number;
export type TotalGames = number;
export type TotalWins = number;
export type TotalTeamKills = number;
export type RankPercent = number;
export type AverageRank = number;
export type AverageKills = number;
export type AverageAssistants = number;
export type AverageHunts = number;
export type Top1 = number;
export type Top2 = number;
export type Top3 = number;
export type Top5 = number;
export type Top7 = number;
export type CharacterCode = number;
export type Usages = number;
export type MaxKillings = number;
export type Wins = number;
export type Top3Rate = number;
export type MatchingMode = 2 | 3;
export type L10Path = Path;
export type Username = string;
export type Password = string;
export type OpenApiKey = string;
export type Issued = string; // YYYY_MM_DD
export type FreeCharacter = number;
export type Duration = number;
export type none0Level = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20;
export type Level = 0 | none0Level;
export type CharacterLevel = none0Level;
export type GameRank = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18;
export type PlayerKill = number;
export type PlayerAssistants = number;
export type MonsterKill = number;
export type BestWeaponLevel = Level;
export type Mastery = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 101 | 102 | 103 | 104 | 201 | 202 | 203 | 204;
export type EquipmentSlot = 0 | 1 | 2 | 3 | 4 | 5;
export type VersionMajor = number;
export type VersionMinor = number;
export type SkillLevel = number;
export type MaxHp = number;
export type MaxSp = number;
export type AttackPower = number;
export type MoveSpeed = number;
export type HpRegen = number;
export type SpRegen = number;
export type AttackSpeed = number;
export type OutofCombatMoveSpeed = number;
export type SightRange = number;
export type AttackRange = number;
export type CritialStrikeChance = number;
export type CriticalStrikeDamage = number;
export type CoolDownReduction = number;
export type LifeSteal = number;
export type NormalLifeSteal = number;
export type SkillLifeSteal = number;
export type AmplifierToMonster = number;
export type TrapDamage = number;
export type GainExp = number;
export type StartDtm = Date;
export type MMRBefore = number;
export type MMRGain = number;
export type MMRAfter = number;
export type PlayTime = number;
export type WatchTime = number;
export type TotalTime = number;
export type BotAdded = number;
export type BotRemain = number;
export type RestrictedAreaAccelerated = number;
export type SafeAreas = number;
export type TeamNumber = number;
export type PreMade = number;
export type Victory = CustomBoolean;
export type GainedNormalMMRKFactor = number;
export type CraftUncommon = number;
export type CraftRare = number;
export type CraftEpic = number;
export type CraftLegend = number;
export type Damage = number;
export type DamageToPlayer = Damage;
export type DamageToPlayerTrap = Damage;
export type DamageToPlayerBasic = Damage;
export type DamageToPlayerSkill = Damage;
export type DamageToPlayerItemSkill = Damage;
export type DamageToPlayerDirect = Damage;
export type DamageFromPlayer = Damage;
export type DamageFromPlayerTrap = Damage;
export type DamageFromPlayerBasic = Damage;
export type DamageFromPlayerSkill = Damage;
export type DamageFromPlayerItemSkill = Damage;
export type DamageFromPlayerDirect = Damage;
export type DamageToMonster = Damage;
export type DamageToMonsterTrap = Damage;
export type DamageToMonsterBasic = Damage;
export type DamageToMonsterSkill = Damage;
export type DamageToMonsterItemSkill = Damage;
export type DamageToMonsterDirect = Damage;
export type DamageFromMonster = Damage;
export type Monster = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
export type KillMonster = number; // 0 제외
export type GiveUp = CustomBoolean;
export type HealAmount = number;
export type TeamRecover = number;
export type ProtectAbsorb = number;
export type AddSurveillanceCamera = number;
export type AddTelephotoCamera = number;
export type RemoveSurveillanceCamera = number;
export type RemoveTelephotoCamera = number;
export type UseHyperLoop = number;
export type UseSecurityConsole = number;
export type TeamSpectator = CustomBoolean;
export type RouteIdOfStart = number;
export type RouteSlotId = number;
export type PlaceOfStart = number;
export type MMRAvg = MMR;
export type TeamKill = number;
export type AccountLevel = number;
export type KillerUserNum = UserNum;
export type Killer = "player" | "wildAnimal" | "restrictedArea";
export type KillDetail = Nickname;
export type FishingCount = number;
export type UseEmoticonCount = number;
export type Count = number;
export type ExpireDtm = Date;

// 나중에 디테일하게 지정해야 할것들
export type CharacterNum = number;
export type SkinCode = number;
export type BestWeapon = number;
export type Equipment = number;
export type Skill = number;
export type ServerName = string;
export type TraitSub = number;
export type TraitFirstCore = number;
export type CauseOfDeath = "basicAttack" | string;
export type KillerCharacter = string;
export type KillerWeapon = string;
export type PlaceOfDeath = string;

/* Reference Types */

export interface MatchingTeamModes {
  solo: MatchingTeamMode,
  duo: MatchingTeamMode,
  squad: MatchingTeamMode,
}

export interface MatchingModes {
  normal: MatchingMode,
  ranked: MatchingMode,
}

export interface DefaultHeaders extends AxiosRequestHeaders {
  [`x-api-key`]: OpenApiKey,
}

export interface Headers extends DefaultHeaders {

}

export interface DefaultAxiosRequestConfig extends AxiosRequestConfig {
  headers: Headers
}

export interface User {
  userNum: UserNum,
  nickname: Nickname,
};

export interface UserRank extends User {
  rank: Rank,
  mmr: MMR,
};

export interface CharacterStat {
  characterCode: CharacterCode,
  totalGames: TotalGames,
  usages: Usages,
  maxKillings: MaxKillings,
  top3: Top3,
  wins: Wins,
  top3Rate: Top3Rate,
  averageRank: AverageRank,
};

export type CharacterStats = CharacterStat[];

export interface UserStat extends UserRank {
  seasonId: SeasonId,
  matchingMode: MatchingMode,
  matchingTeamMode: MatchingTeamMode,
  rankSize: RankSize,
  totalGames: TotalGames,
  totalWins: TotalWins,
  totalTeamKills: TotalTeamKills,
  rankPercent: RankPercent,
  averageRank: AverageRank,
  averageKills: AverageKills,
  averageAssistants: AverageAssistants,
  averageHunts: AverageHunts,
  top1: Top1,
  top2: Top2,
  top3: Top3,
  top5: Top5,
  top7: Top7,
  characterStats: CharacterStats,
};

export interface MasteryLevel {
  // Mastery: Level
  // Mastery: Level
  // ...
  1?: Level,
  2?: Level,
  3?: Level,
  4?: Level,
  5?: Level,
  6?: Level,
  7?: Level,
  8?: Level,
  9?: Level,
  10?: Level,
  11?: Level,
  12?: Level,
  13?: Level,
  14?: Level,
  15?: Level,
  16?: Level,
  17?: Level,
  18?: Level,
  19?: Level,
  20?: Level,
  21?: Level,
  22?: Level,
  23?: Level,
  24?: Level,
  101?: Level,
  102?: Level,
  103?: Level,
  104?: Level,
  201?: Level,
  202?: Level,
  203?: Level,
  204?: Level,
}

export interface Equipments {
  // EquipmentSlot: Equipment
  // EquipmentSlot: Equipment
  // ...
  0?: Equipment,
  1?: Equipment,
  2?: Equipment,
  3?: Equipment,
  4?: Equipment,
  5?: Equipment,
}

export interface SkillLevelInfo {
  // Skill: SkillLevel
  // Skill: SkillLevel
  // ...
}

export interface SkillOrderInfo {
  1?: Skill,
  2?: Skill,
  3?: Skill,
  4?: Skill,
  5?: Skill,
  6?: Skill,
  7?: Skill,
  8?: Skill,
  9?: Skill,
  10?: Skill,
  11?: Skill,
  12?: Skill,
  13?: Skill,
  14?: Skill,
  15?: Skill,
  16?: Skill,
  17?: Skill,
  18?: Skill,
  19?: Skill,
  20?: Skill,
  // 1: Skill
  // 2: Skill
  // 3: Skill
  // ...죽을때까지
}

export interface EventMissionResult {
  // 이벤트 번호: 카운트
  // 이벤트 번호: 카운트
  // ...
}

export interface KillMonsters {
  0?: KillMonster,
  1?: KillMonster,
  2?: KillMonster,
  3?: KillMonster,
  4?: KillMonster,
  5?: KillMonster,
  6?: KillMonster,
  7?: KillMonster,
  8?: KillMonster,
  9?: KillMonster,
  // Monster: KillMonster
  // Monster: KillMonster
  // ...Monster 잡은 몬스터 코드들만
}

export type TraitFirstSub = [TraitSub, TraitSub];

export type TraitSecondSub = [TraitSub, TraitSub];

export type AirSupplyOpenCount = Count[];

export type FoodCraftCount = Count[];

export type BeverageCraftCount = Count[];

export interface BattleUserResult extends User {
  gameId: GameId,
  matchingMode: MatchingMode,
  matchingTeamMode: MatchingTeamMode,
  seasonId: SeasonId,
  characterNum: CharacterNum,
  skinCode: SkinCode,
  characterLevel: CharacterLevel,
  gameRank: GameRank,
  playerKill: PlayerKill,
  playerAssistants: PlayerAssistants,
  monsterKill: MonsterKill,
  bestWeapon: BestWeapon,
  bestWeaponLevel: BestWeaponLevel,
  masteryLevel: MasteryLevel,
  equipment: Equipments,
  versionMajor: VersionMajor,
  versionMinor: VersionMinor,
  language: Language,
  skillLevelInfo: SkillLevelInfo,
  skillOrderInfo: SkillOrderInfo,
  serverName: ServerName,
  maxHp: MaxHp,
  maxSp: MaxSp,
  attackPower: AttackPower,
  moveSpeed: MoveSpeed,
  hpRegen: HpRegen,
  spRegen: SpRegen,
  attackSpeed: AttackSpeed,
  outofCombatMoveSpeed: OutofCombatMoveSpeed,
  sightRange: SightRange,
  attackRange: AttackRange,
  critialStrikeChance: CritialStrikeChance,
  criticalStrikeDamage: CriticalStrikeDamage,
  coolDownReduction: CoolDownReduction,
  lifeSteal: LifeSteal,
  normalLifeSteal: NormalLifeSteal,
  skillLifeSteal: SkillLifeSteal,
  amplifierToMonster: AmplifierToMonster,
  trapDamage: TrapDamage,
  gainExp: GainExp,
  startDtm: StartDtm,
  duration: Duration,
  mmrBefore: MMRBefore,
  mmrGain: MMRGain,
  mmrAfter: MMRAfter,
  playTime: PlayTime,
  watchTime: WatchTime,
  totalTime: TotalTime,
  botAdded: BotAdded,
  botRemain: BotRemain,
  restrictedAreaAccelerated: RestrictedAreaAccelerated,
  safeAreas: SafeAreas,
  teamNumber: TeamNumber,
  preMade: PreMade,
  eventMissionResult: EventMissionResult,
  victory: Victory,
  gainedNormalMmrKFactor: GainedNormalMMRKFactor,
  craftUncommon: CraftUncommon,
  craftRare: CraftRare,
  craftEpic: CraftEpic,
  craftLegend: CraftLegend,
  damageToPlayer: DamageToPlayer,
  damageToPlayer_trap: DamageToPlayerTrap,
  damageToPlayer_basic: DamageToPlayerBasic,
  damageToPlayer_skill: DamageToPlayerSkill,
  damageToPlayer_itemSkill: DamageToPlayerItemSkill,
  damageToPlayer_direct: DamageToPlayerDirect,
  damageFromPlayer: DamageFromPlayer,
  damageFromPlayer_trap: DamageFromPlayerTrap,
  damageFromPlayer_basic: DamageFromPlayerBasic,
  damageFromPlayer_skill: DamageFromPlayerSkill,
  damageFromPlayer_itemSkill: DamageFromPlayerItemSkill,
  damageFromPlayer_direct: DamageFromPlayerDirect,
  damageToMonster: DamageToMonster,
  damageToMonster_trap: DamageToMonsterTrap,
  damageToMonster_basic: DamageToMonsterBasic,
  damageToMonster_skill: DamageToMonsterSkill,
  damageToMonster_itemSkill: DamageToMonsterItemSkill,
  damageToMonster_direct: DamageToMonsterDirect,
  damageFromMonster: DamageFromMonster,
  killMonsters: KillMonsters,
  healAmount: HealAmount,
  teamRecover: TeamRecover,
  protectAbsorb: ProtectAbsorb,
  addSurveillanceCamera: AddSurveillanceCamera,
  addTelephotoCamera: AddTelephotoCamera,
  removeSurveillanceCamera: RemoveSurveillanceCamera,
  removeTelephotoCamera: RemoveTelephotoCamera,
  useHyperLoop: UseHyperLoop,
  useSecurityConsole: UseSecurityConsole,
  giveUp: GiveUp,
  teamSpectator: TeamSpectator,
  routeIdOfStart: RouteIdOfStart,
  routeSlotId: RouteSlotId,
  placeOfStart: PlaceOfStart,
  mmrAvg: MMRAvg,
  teamKill: TeamKill,
  accountLevel: AccountLevel,
  killer?: Killer,
  killer2?: Killer,
  killer3?: Killer,
  killerUserNum: KillerUserNum,
  killerUserNum2: KillerUserNum,
  killerUserNum3: KillerUserNum,
  killDetail?: KillDetail,
  killDetail2?: KillDetail,
  killDetail3?: KillDetail,
  killerCharacter?: KillerCharacter,
  killerCharacter2?: KillerCharacter,
  killerCharacter3?: KillerCharacter,
  killerWeapon?: KillerWeapon,
  killerWeapon2?: KillerWeapon,
  killerWeapon3?: KillerWeapon,
  causeOfDeath: CauseOfDeath,
  placeOfDeath: PlaceOfDeath,
  fishingCount: FishingCount,
  useEmoticonCount: UseEmoticonCount,
  traitFirstCore: TraitFirstCore,
  traitFirstSub: TraitFirstSub,
  traitSecondSub: TraitSecondSub,
  airSupplyOpenCount: AirSupplyOpenCount,
  foodCraftCount: FoodCraftCount,
  beverageCraftCount: BeverageCraftCount,
  expireDtm: ExpireDtm,
};

export interface LanguageData {
  l10Path: L10Path,
};

export type UserRanks = UserRank[];
export type UserStats = UserStat[];
export type UserGames = BattleUserResult[];

export interface OpenApiKeyInfo {
  key: OpenApiKey,
  issued: Issued,
};

export type FreeCharacters = FreeCharacter[] | [];

/* Response Types */

export interface DefaultResponse {
  code: Code,
  message: Message,
  duration?: Duration,
}

export interface UserNumberResponse extends DefaultResponse {
  user: User,
};

export interface TopRankersResponse extends DefaultResponse {
  topRanks: UserRanks,
};

export interface UserRankResponse extends DefaultResponse {
  userRank: UserRank,
};

export interface UserStatsResponse extends DefaultResponse {
  userStats: UserStats,
};

export interface UserMatchesResponse extends DefaultResponse {
  userGames: UserGames,
};

export interface MatchResultsResponse extends DefaultResponse {
  userGames: UserGames,
};

export interface GameDataTableResponse extends DefaultResponse {

};

export interface FreeCharactersResponse extends DefaultResponse {
  freeCharacters: FreeCharacters
};

export interface LanguageDataResponse extends DefaultResponse {
  data: LanguageData,
};