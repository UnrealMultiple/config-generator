/*
 * By Cai & 熙恩 & 以前的Config中文注解者
 * 本 TypeScript 文件由原版 TShock JSON(C) 配置转换而来
 * 转换后可用于类型校验 / 代码生成 / 二次处理配置，再序列化为 config.json 供 TShock 加载
 * v2026.3.15 (TShock 6.1.0)
 */

import type { RgbTuple } from '@/utils/rgb'

/** REST API 令牌授权信息 */
export interface RestToken {
  /** 用户名 */
  Username: string
  /** 权限组 */
  UserGroupName: string
}

/** TShock 服务器配置项 */
export interface TShockConfig {
  Settings: {
    /** 服务器密码 */
    ServerPassword: string
    /** 服务器端口 */
    ServerPort: number
    /** 最大玩家数 */
    MaxSlots: number
    /** 预留玩家位 (需要 tshock.reservedslot 权限) */
    ReservedSlots: number
    /** 服务器名称 */
    ServerName: string
    /** 启用服务器名称 */
    UseServerName: boolean
    /** 日志路径 */
    LogPath: string
    /** 启用 Debug 日志 */
    DebugLogs: boolean
    /** 关闭进服前登录 */
    DisableLoginBeforeJoin: boolean
    /** 加载地图时忽略箱子物品最大堆叠检验 */
    IgnoreChestStacksOnLoad: boolean
    /** 地图图格提供器 (default 默认，constileation 节省内存(推荐)，heaptile 屎) */
    WorldTileProvider: 'default' | 'constileation' | 'heaptile'
    /** 自动保存 */
    AutoSave: boolean
    /** 保存时发送广播 */
    AnnounceSave: boolean
    /** 自动备份时发送广播 */
    ShowBackupAutosaveMessages: boolean
    /** 自动备份间隔 (单位：分钟) */
    BackupInterval: number
    /** 每个备份保留时间 (到期自动删除) (单位：分钟) */
    BackupKeepFor: number
    /** 服务器崩溃时保存地图 */
    SaveWorldOnCrash: boolean
    /** 最后一个玩家离开时保存地图 */
    SaveWorldOnLastPlayerExit: boolean
    /** /worldevent invasion 入侵规模系数 入侵规模 = 100 + 入侵规模系数 X 在线玩家数 */
    InvasionMultiplier: number
    /** 默认单个玩家附近允许存在的最大活跃生物数量上限 */
    DefaultMaximumSpawns: number
    /** 默认生物生成的时间间隔(单位：帧，60帧=1秒)，值越小生成越快 */
    DefaultSpawnRate: number
    /** /worldevent invasion 无限入侵 */
    InfiniteInvasion: boolean
    /** PVP 模式：normal(正常), always(强制PVP), pvpwithnoteam(强制无队伍PVP), disabled(禁用PVP) */
    PvPMode: 'normal' | 'always' | 'pvpwithnoteam' | 'disabled'
    /** 出生点保护 */
    SpawnProtection: boolean
    /** 出生点保护半径 (单位：图格) */
    SpawnProtectionRadius: number
    /** 范围检查 */
    RangeChecks: boolean
    /** 仅允许硬核角色加入 */
    HardcoreOnly: boolean
    /** 仅允许中核角色加入 */
    MediumcoreOnly: boolean
    /** 仅允许软核角色加入 */
    SoftcoreOnly: boolean
    /** 禁止建筑 */
    DisableBuild: boolean
    /** 禁止进入困难模式 */
    DisableHardmode: boolean
    /** 已弃用-禁止召唤骷髅王 */
    DisableDungeonGuardian: boolean
    /** 关闭小丑炸弹 */
    DisableClownBombs: boolean
    /** 关闭雪球 */
    DisableSnowBalls: boolean
    /** 关闭墓碑掉落 */
    DisableTombstones: boolean
    /** 关闭机械骷髅王炸弹 */
    DisablePrimeBombs: boolean
    /** 强制固定时间：normal(正常), day(永昼), night(永夜) */
    ForceTime: 'normal' | 'day' | 'night'
    /** 阻止玩家PVP时使用隐身Buff */
    DisableInvisPvP: boolean
    /** 玩家被限制行动时可移动的最大距离 */
    MaxRangeForDisabled: number
    /** 保护区域内的箱子 */
    RegionProtectChests: boolean
    /** 保护区域内的宝石锁 */
    RegionProtectGemLocks: boolean
    /** 无效-忽略弹幕更新的检测 */
    IgnoreProjUpdate: boolean
    /** 忽略弹幕Kill检测 */
    IgnoreProjKill: boolean
    /** 失效-允许玩家在无权建筑的地方打破易碎品 (eg. 罐子, 草) */
    AllowCutTilesAndBreakables: boolean
    /** 无效-允许玩家在无权建筑的地方放置冰 */
    AllowIce: boolean
    /** 允许猩红蔓延 */
    AllowCrimsonCreep: boolean
    /** 允许腐化蔓延 */
    AllowCorruptionCreep: boolean
    /** 允许神圣蔓延 */
    AllowHallowCreep: boolean
    /** 200像素(12.5格)内最大雕像怪数量 */
    StatueSpawn200: number
    /** 600像素(37.5格)内最大雕像怪数量 */
    StatueSpawn600: number
    /** 世界中最大雕像怪数量 */
    StatueSpawnWorld: number
    /** 阻止玩家被给予被封禁的物品 */
    PreventBannedItemSpawn: boolean
    /** 阻止玩家在死亡状态下与游戏世界进行交互 */
    PreventDeadModification: boolean
    /** 阻止玩家放置无效Style的图格 */
    PreventInvalidPlaceStyle: boolean
    /** 强制圣诞节事件 (不是霜月!!) */
    ForceXmas: boolean
    /** 强制万圣节事件 (不是南瓜月!!) */
    ForceHalloween: boolean
    /** "PreventBannedItemSpawn"为true时，允许给予"禁止物品允许列表中的组"被封禁的物品 */
    AllowAllowedGroupsToSpawnBannedItems: boolean
    /** 非BOSS时玩家复活时间 (0为不设置) */
    RespawnSeconds: number
    /** BOSS时玩家复活时间 (0为不设置) */
    RespawnBossSeconds: number
    /** 广播Boss和入侵的召唤者 */
    AnonymousBossInvasions: boolean
    /** 允许玩家最大生命值 (tshock.ignore.hp跳过检查) (超过会被限制行动) */
    MaxHP: number
    /** 允许玩家最大魔力值 (tshock.ignore.mp跳过检查) (超过会被限制行动) */
    MaxMP: number
    /** 无效-爆炸物能影响液体的最大距离 (液体反作弊) (单位：图格) */
    BombExplosionRadius: number
    /** 直接将物品放入玩家背包 (需要启用SSC，否则无效) true则直接修改玩家背包放入物品(无捡物品声音)，false则以掉落物的显示给予玩家物品(捡物品声音) */
    GiveItemsDirectly: boolean
    /** 新注册用户默认的组名 */
    DefaultRegistrationGroupName: string
    /** 未登录玩家默认的组名 */
    DefaultGuestGroupName: string
    /** 加入服务器后回到上次离开时的位置 (玩家名和IP一样才会执行) */
    RememberLeavePos: boolean
    /** 最大失败登录尝试次数 (超过后踢出玩家) */
    MaximumLoginAttempts: number
    /** 踢出死亡的中核玩家 */
    KickOnMediumcoreDeath: boolean
    /** 踢出死亡的中核玩家的理由 */
    MediumcoreKickReason: string
    /** 封禁死亡的中核玩家 */
    BanOnMediumcoreDeath: boolean
    /** 封禁死亡的中核玩家的理由 */
    MediumcoreBanReason: string
    /** 禁用Ban时默认封禁IP */
    DisableDefaultIPBan: boolean
    /** 启用IP白名单 */
    EnableWhitelist: boolean
    /** 踢出非白名单玩家理由 */
    WhitelistKickReason: string
    /** 服务器满人踢出理由 */
    ServerFullReason: string
    /** 服务器满人且无预留踢出理由 */
    ServerFullNoReservedReason: string
    /** 踢出死亡的硬核玩家 */
    KickOnHardcoreDeath: boolean
    /** 踢出死亡的硬核玩家的理由 */
    HardcoreKickReason: string
    /** 封禁死亡的硬核玩家 */
    BanOnHardcoreDeath: boolean
    /** 封禁死亡的硬核玩家的理由 */
    HardcoreBanReason: string
    /** 踢出使用代理的玩家 (检测能力取决于GeoIP.dat) */
    KickProxyUsers: boolean
    /** 强制要求玩家登录 */
    RequireLogin: boolean
    /** 允许登录非玩家名账户 (/login <用户名> <密码>) */
    AllowLoginAnyUsername: boolean
    /** 允许注册非玩家名账户 (/register <用户名> <密码>) */
    AllowRegisterAnyUsername: boolean
    /** 注册最短密码长度 */
    MinimumPasswordLength: number
    /** 用户密码加密BCrypt工作因子，值越高安全性越强但验证越慢 (范围：5-31) */
    BCryptWorkFactor: number
    /** 禁用UUID登录 (即关闭同设备免密登录) */
    DisableUUIDLogin: boolean
    /** 踢出空UUID玩家 */
    KickEmptyUUID: boolean
    /** 油漆图格速度阈值 (tshock.ignore.paint跳过检查) (单位：图格/秒) */
    TilePaintThreshold: number
    /** 踢出超过油漆图格速度阈值的玩家 */
    KickOnTilePaintThresholdBroken: boolean
    /** 玩家单次造成伤害阈值 (tshock.ignore.damage跳过检查) */
    MaxDamage: number
    /** 玩家弹幕伤害阈值 (tshock.ignore.damage跳过检查) */
    MaxProjDamage: number
    /** 踢出超过玩家单次造成伤害阈值的玩家 */
    KickOnDamageThresholdBroken: boolean
    /** 玩家破坏图格阈值 (tshock.ignore.removetile跳过检查) (单位：图格/秒) */
    TileKillThreshold: number
    /** 踢出超过玩家破坏图格阈值的玩家 */
    KickOnTileKillThresholdBroken: boolean
    /** 玩家替换图格阈值 (tshock.ignore.placetile跳过检查) (单位：图格/秒) */
    TilePlaceThreshold: number
    /** 踢出超过玩家替换图格阈值的玩家 */
    KickOnTilePlaceThresholdBroken: boolean
    /** 玩家放置流体阈值 (tshock.ignore.liquid跳过检查) (单位：图格/秒) */
    TileLiquidThreshold: number
    /** 踢出超过玩家放置流体阈值的玩家 */
    KickOnTileLiquidThresholdBroken: boolean
    /** 在玩家生成弹幕阈值计数中忽略水晶子弹的碎片 */
    ProjIgnoreShrapnel: boolean
    /** 玩家生成弹幕阈值 (tshock.ignore.projectile跳过检查) */
    ProjectileThreshold: number
    /** 踢出超过玩家生成弹幕阈值的玩家 */
    KickOnProjectileThresholdBroken: boolean
    /** 治疗其他玩家阈值 (tshock.ignore.damage跳过检查) */
    HealOtherThreshold: number
    /** 踢出超过治疗其他玩家阈值的玩家 */
    KickOnHealOtherThresholdBroken: boolean
    /** 关闭无建筑权限警告 */
    SuppressPermissionFailureNotices: boolean
    /** 阻止非法天顶剑弹幕 */
    DisableModifiedZenith: boolean
    /** 阻止自定义死亡讯息 */
    DisableCustomDeathMessages: boolean
    /** 是否允许Ct标签 (此标签会崩溃PE玩家!!!) */
    AllowCtTag: boolean
    /** 命令起始符，长度大于1无法正常识别命令 */
    CommandSpecifier: string
    /** 静默命令起始符，长度大于1无法正常识别静默命令 */
    CommandSilentSpecifier: string
    /** 聊天消息最大长度 */
    MaximumChatMessageLength: number
    /** 是否截断超长聊天消息 */
    TruncateExcessiveChatMessages: boolean
    /** 禁用向有日志权限(tshock.admin.viewlogs)的玩家发送日志 */
    DisableSpewLogs: boolean
    /** 禁用玩家被限制行动时记录日志 */
    DisableSecondUpdateLogs: boolean
    /** 超级管理员聊天颜色 (RGB) */
    SuperAdminChatRGB: RgbTuple
    /** 超级管理员聊天前缀 */
    SuperAdminChatPrefix: string
    /** 超级管理员聊天后缀 */
    SuperAdminChatSuffix: string
    /** 启用GeoIP，玩家加入服务器显示玩家国家 */
    EnableGeoIP: boolean
    /** 玩家加入服务器时向管理员显示玩家IP */
    DisplayIPToAdmins: boolean
    /** 聊天格式 ({0}: 组名，{1}: 组前缀，{2}: 玩家名，{3}: 组后缀，{4}: 聊天消息) */
    ChatFormat: string
    /** 头顶聊天格式，同上 */
    ChatAboveHeadsFormat: string
    /** 启用头顶聊天 */
    EnableChatAboveHeads: boolean
    /** 广播颜色 */
    BroadcastRGB: RgbTuple
    /** 数据库类型 mysql|sqlite|postgres */
    StorageType: 'mysql' | 'sqlite' | 'postgres'
    /** SQLite连接字符串 (优先级高) */
    SqliteConnectionString: string
    /** SQLite数据路径 */
    SqliteDBPath: string
    /** MySQL连接字符串 (优先级高) */
    MySqlConnectionString: string
    /** MySQL数据库地址 */
    MySqlHost: string
    /** MySQL数据库名称 */
    MySqlDbName: string
    /** MySQL用户名 */
    MySqlUsername: string
    /** MySQL用户密码 */
    MySqlPassword: string
    /** Postgres连接字符串 (优先级高) */
    PostgresConnectionString: string
    /** Postgres数据库地址 */
    PostgresHost: string
    /** Postgres数据库名称 */
    PostgresDbName: string
    /** Postgres用户名 */
    PostgresUsername: string
    /** Postgres数据库名称 */
    PostgresPassword: string
    /** 使用数据库进行日志 (不推荐) */
    UseSqlLogs: boolean
    /** 数据库日志失败回文本日志阈值 (超过就会自动退回文本日志) */
    RevertToTextLogsOnSqlFailures: number
    /** 启用REST API */
    RestApiEnabled: boolean
    /** REST API侦听端口 */
    RestApiPort: number
    /** 记录REST API日志 */
    LogRest: boolean
    /** 启用公共REST API端点令牌认证 (/v2/server/status, /v3/server/motd, /v3/server/rules) */
    EnableTokenEndpointAuthentication: boolean
    /** 每个令牌在每个时间间隔内允许的最大REST API请求次数 */
    RESTMaximumRequestsPerInterval: number
    /** 每个令牌请求计数器的重置时间间隔 (单位：分钟) */
    RESTRequestBucketDecreaseIntervalMinutes: number
    /** 令牌 -> 授权信息 映射表 (你需要填入BOT/工具的令牌，请不要泄漏) */
    ApplicationRestTokens: Record<string, RestToken>
  }
}

export const tshockConfig: TShockConfig = {
  Settings: {
    ServerPassword: '',
    ServerPort: 7777,
    MaxSlots: 233,
    ReservedSlots: 20,
    ServerName: '',
    UseServerName: false,
    LogPath: 'tshock/logs',
    DebugLogs: false,
    DisableLoginBeforeJoin: false,
    IgnoreChestStacksOnLoad: false,
    WorldTileProvider: 'constileation',
    AutoSave: true,
    AnnounceSave: false,
    ShowBackupAutosaveMessages: true,
    BackupInterval: 30,
    BackupKeepFor: 10080,
    SaveWorldOnCrash: true,
    SaveWorldOnLastPlayerExit: true,
    InvasionMultiplier: 1,
    DefaultMaximumSpawns: 5,
    DefaultSpawnRate: 600,
    InfiniteInvasion: false,
    PvPMode: 'normal',
    SpawnProtection: false,
    SpawnProtectionRadius: 10,
    RangeChecks: true,
    HardcoreOnly: false,
    MediumcoreOnly: false,
    SoftcoreOnly: false,
    DisableBuild: false,
    DisableHardmode: false,
    DisableDungeonGuardian: false,
    DisableClownBombs: false,
    DisableSnowBalls: false,
    DisableTombstones: false,
    DisablePrimeBombs: false,
    ForceTime: 'normal',
    DisableInvisPvP: false,
    MaxRangeForDisabled: 10,
    RegionProtectChests: false,
    RegionProtectGemLocks: true,
    IgnoreProjUpdate: false,
    IgnoreProjKill: false,
    AllowCutTilesAndBreakables: false,
    AllowIce: false,
    AllowCrimsonCreep: true,
    AllowCorruptionCreep: true,
    AllowHallowCreep: true,
    StatueSpawn200: 3,
    StatueSpawn600: 6,
    StatueSpawnWorld: 10,
    PreventBannedItemSpawn: false,
    PreventDeadModification: true,
    PreventInvalidPlaceStyle: true,
    ForceXmas: false,
    ForceHalloween: false,
    AllowAllowedGroupsToSpawnBannedItems: false,
    RespawnSeconds: 0,
    RespawnBossSeconds: 0,
    AnonymousBossInvasions: true,
    MaxHP: 600,
    MaxMP: 400,
    BombExplosionRadius: 5,
    GiveItemsDirectly: false,
    DefaultRegistrationGroupName: 'default',
    DefaultGuestGroupName: 'guest',
    RememberLeavePos: false,
    MaximumLoginAttempts: 3,
    KickOnMediumcoreDeath: false,
    MediumcoreKickReason: '因为死亡而被踢出',
    BanOnMediumcoreDeath: false,
    MediumcoreBanReason: '因为死亡而被封禁',
    DisableDefaultIPBan: false,
    EnableWhitelist: false,
    WhitelistKickReason: '你不在IP白名单中',
    ServerFullReason: '服务器已满',
    ServerFullNoReservedReason: '服务器已满（包括预留空间）',
    KickOnHardcoreDeath: false,
    HardcoreKickReason: '因为死亡而被踢出',
    BanOnHardcoreDeath: false,
    HardcoreBanReason: '因为死亡而被封禁',
    KickProxyUsers: true,
    RequireLogin: true,
    AllowLoginAnyUsername: false,
    AllowRegisterAnyUsername: false,
    MinimumPasswordLength: 4,
    BCryptWorkFactor: 7,
    DisableUUIDLogin: false,
    KickEmptyUUID: true,
    TilePaintThreshold: 200,
    KickOnTilePaintThresholdBroken: false,
    MaxDamage: 20000,
    MaxProjDamage: 20000,
    KickOnDamageThresholdBroken: false,
    TileKillThreshold: 200,
    KickOnTileKillThresholdBroken: false,
    TilePlaceThreshold: 200,
    KickOnTilePlaceThresholdBroken: false,
    TileLiquidThreshold: 200,
    KickOnTileLiquidThresholdBroken: false,
    ProjIgnoreShrapnel: true,
    ProjectileThreshold: 200,
    KickOnProjectileThresholdBroken: false,
    HealOtherThreshold: 200,
    KickOnHealOtherThresholdBroken: false,
    SuppressPermissionFailureNotices: false,
    DisableModifiedZenith: false,
    DisableCustomDeathMessages: true,
    AllowCtTag: false,
    CommandSpecifier: '/',
    CommandSilentSpecifier: '.',
    MaximumChatMessageLength: 500,
    TruncateExcessiveChatMessages: false,
    DisableSpewLogs: true,
    DisableSecondUpdateLogs: false,
    SuperAdminChatRGB: [255, 255, 255],
    SuperAdminChatPrefix: '[超级管理员]',
    SuperAdminChatSuffix: '',
    EnableGeoIP: true,
    DisplayIPToAdmins: true,
    ChatFormat: '{1}{2}{3}: {4}',
    ChatAboveHeadsFormat: '{2}',
    EnableChatAboveHeads: true,
    BroadcastRGB: [127, 255, 212],
    StorageType: 'sqlite',
    SqliteConnectionString: '',
    SqliteDBPath: 'tshock.sqlite',
    MySqlConnectionString: '',
    MySqlHost: 'localhost:3306',
    MySqlDbName: '',
    MySqlUsername: '',
    MySqlPassword: '',
    PostgresConnectionString: '',
    PostgresHost: '',
    PostgresDbName: '',
    PostgresUsername: '',
    PostgresPassword: '',
    UseSqlLogs: false,
    RevertToTextLogsOnSqlFailures: 10,
    RestApiEnabled: false,
    RestApiPort: 7878,
    LogRest: false,
    EnableTokenEndpointAuthentication: false,
    RESTMaximumRequestsPerInterval: 5,
    RESTRequestBucketDecreaseIntervalMinutes: 1,
    ApplicationRestTokens: {
      '1145141919810(一个又长又安全的令牌)': {
        Username: 'Cai',
        UserGroupName: 'superadmin',
      },
    },
  },
}

export default tshockConfig
