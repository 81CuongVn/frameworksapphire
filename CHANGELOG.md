# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [1.0.0-alpha.7](https://github.com/sapphire-project/framework/compare/v1.0.0-alpha.6...v1.0.0-alpha.7) (2021-02-06)

### ⚠ BREAKING CHANGES

-   **errors:** Changed UserError identifier from `'ArgumentBooleanInvalidBoolean'` to `Identifiers.ArgumentBoolean`.
-   **errors:** Changed UserError identifier from `'ArgumentCategoryChannelInvalidChannel'` to `Identifiers.ArgumentCategoryChannel`.
-   **errors:** Changed UserError identifier from `'ArgumentChannelMissingChannel'` to `Identifiers.ArgumentChannel`.
-   **errors:** Changed UserError identifier from `'ArgumentDateInvalidNumber'` to `Identifiers.ArgumentDate`.
-   **errors:** Changed UserError identifier from `'ArgumentDateTooSmall'` to `Identifiers.ArgumentDateTooSmall`.
-   **errors:** Changed UserError identifier from `'ArgumentDateTooBig'` to `Identifiers.ArgumentDateTooBig`.
-   **errors:** Changed UserError identifier from `'ArgumentDMChannelInvalidChannel'` to `Identifiers.ArgumentDMChannel`.
-   **errors:** Changed UserError identifier from `'ArgumentFloatInvalidFloat'` to `Identifiers.ArgumentFloat`.
-   **errors:** Changed UserError identifier from `'ArgumentFloatTooSmall'` to `Identifiers.ArgumentFloatTooSmall`.
-   **errors:** Changed UserError identifier from `'ArgumentFloatTooBig'` to `Identifiers.ArgumentFloatTooBig`.
-   **errors:** Changed UserError identifier from `'ArgumentGuildChannelMissingGuild'` to `Identifiers.ArgumentGuildChannelMissingGuild`.
-   **errors:** Changed UserError identifier from `'ArgumentGuildChannelUnknownChannel'` to `Identifiers.ArgumentGuildChannel`.
-   **errors:** Changed UserError identifier from `'ArgumentHyperlinkInvalidURL'` to `Identifiers.ArgumentHyperlink`.
-   **errors:** Changed UserError identifier from `'ArgumentIntegerInvalidNumber'` to `Identifiers.ArgumentInteger`.
-   **errors:** Changed UserError identifier from `'ArgumentIntegerTooSmall'` to `Identifiers.ArgumentIntegerTooSmall`.
-   **errors:** Changed UserError identifier from `'ArgumentIntegerTooBig'` to `Identifiers.ArgumentIntegerTooBig`.
-   **errors:** Changed UserError identifier from `'ArgumentMemberMissingGuild'` to `Identifiers.ArgumentMemberMissingGuild`.
-   **errors:** Changed UserError identifier from `'ArgumentMemberUnknownMember'` to `Identifiers.ArgumentMember`.
-   **errors:** Changed UserError identifier from `'ArgumentMessageUnknownMessage'` to `Identifiers.Message`.
-   **errors:** Changed UserError identifier from `'ArgumentNewsChannelInvalidChannel'` to `Identifiers.NewsChannel`.
-   **errors:** Changed UserError identifier from `'ArgumentNumberInvalidNumber'` to `Identifiers.Number`.
-   **errors:** Changed UserError identifier from `'ArgumentNumberTooSmall'` to `Identifiers.ArgumentNumberTooSmall`.
-   **errors:** Changed UserError identifier from `'ArgumentNumberTooBig'` to `Identifiers.ArgumentNumberTooBig`.
-   **errors:** Changed UserError identifier from `'ArgumentRoleMissingGuild'` to `Identifiers.ArgumentRoleMissingGuild`.
-   **errors:** Changed UserError identifier from `'ArgumentRoleUnknownRole'` to `Identifiers.Role`.
-   **errors:** Changed UserError identifier from `'ArgumentStringTooShort'` to `Identifiers.ArgumentStringTooShort`.
-   **errors:** Changed UserError identifier from `'ArgumentStringTooLong'` to `Identifiers.ArgumentStringTooLong`.
-   **errors:** Changed UserError identifier from `'ArgumentTextChannelInvalidChannel'` to `Identifiers.TextChannel`.
-   **errors:** Changed UserError identifier from `'ArgumentUserUnknownUser'` to `Identifiers.User`.
-   **errors:** Changed UserError identifier from `'ArgumentVoiceChannelInvalidChannel'` to `Identifiers.VoiceChannel`.
-   **errors:** Changed UserError identifier from `'CommandDisabled'` to `Identifiers.CommandDisabled`.
-   **errors:** Changed UserError identifier from `'UnavailableArgument'` to `Identifiers.ArgsUnavailable`.
-   **errors:** Changed UserError identifier from `'MissingArguments'` to `Identifiers.ArgsMissing`.
-   **errors:** Changed UserError identifier from `'Cooldown'` to `Identifiers.PreconditionCooldown`.
-   **errors:** Changed UserError identifier from `'DMOnly'` to `Identifiers.PreconditionDMOnly`.
-   **errors:** Changed UserError identifier from `'GuildOnly'` to `Identifiers.PreconditionGuildOnly`.
-   **errors:** Changed UserError identifier from `'NSFW'` to `Identifiers.PreconditionNSFW`.
-   **errors:** Changed UserError identifier from `'Permissions'` to `Identifiers.PreconditionPermissions`.
-   **preconditions:** Added `PreconditionContext` as third parameter to `IPreconditionContainer#run`.
-   **preconditions:** Changed `PermissionsPrecondition#context` from `PreconditionContext` to `Record<PropertyKey, unknown>`.
-   **preconditions:** Changed `PreconditionContainerSingle#context` from `PreconditionContext` to `Record<PropertyKey, unknown>`.
-   **preconditions:** Changed `PreconditionSingleResolvableDetails#context` from `PreconditionContext` to `Record<PropertyKey, unknown>`.
-   **preconditions:** Added `PreconditionContext` as third parameter to `IPreconditionCondition#run`.
-   **args:** changed `Args.err` to return `Err<ArgumentError<T>>` instead of `ArgumentError<T>`

### Features

-   **args:** add Args#ok, refactored Args#error to return Err<ArgumentError<T>> ([#159](https://github.com/sapphire-project/framework/issues/159)) ([65316a6](https://github.com/sapphire-project/framework/commit/65316a6f13533b90b0ba84ff214ebf8bb54cc5ee))
-   **args:** change visibility of parser from private to protected ([#160](https://github.com/sapphire-project/framework/issues/160)) ([3ad6f85](https://github.com/sapphire-project/framework/commit/3ad6f85db92287c0c073dcbc21df13d52c629abb))
-   **command:** add CommandContext#commandPrefix ([#157](https://github.com/sapphire-project/framework/issues/157)) ([c8c7417](https://github.com/sapphire-project/framework/commit/c8c741768e78a5f3c75282cc8461368bd9609016))
-   **command-events:** pass more context ([#162](https://github.com/sapphire-project/framework/issues/162)) ([11a6274](https://github.com/sapphire-project/framework/commit/11a6274613536fcc7fa2bcbb936b6332740978a4))
-   **errors:** expose all identifiers in an enum ([#161](https://github.com/sapphire-project/framework/issues/161)) ([3371f35](https://github.com/sapphire-project/framework/commit/3371f35c2ad9fabdacca5b1ae614e5a5c9530dbc))
-   **preconditions:** add context to Container and Condition ([#158](https://github.com/sapphire-project/framework/issues/158)) ([de6bc03](https://github.com/sapphire-project/framework/commit/de6bc035f737ddc269a1b7e44ad34c175cfa35dd))

## [1.0.0-alpha.6](https://github.com/sapphire-project/framework/compare/v1.0.0-alpha.5...v1.0.0-alpha.6) (2021-02-04)

### Bug Fixes

-   **preconditions:** make options optional ([#155](https://github.com/sapphire-project/framework/issues/155)) ([ecc5323](https://github.com/sapphire-project/framework/commit/ecc5323dc0213524c0bf21a47b52aac3357528ac))

## [1.0.0-alpha.5](https://github.com/sapphire-project/framework/compare/v1.0.0-alpha.4...v1.0.0-alpha.5) (2021-02-02)

### ⚠ BREAKING CHANGES

-   **client:** `client.arguments` is now `client.stores.get('arguments')`
-   **client:** `client.commands` is now `client.stores.get('commands')`
-   **client:** `client.events` is now `client.stores.get('events')`
-   **client:** `client.preconditions` is now `client.stores.get('preconditions')`
-   **client:** `client.registerUserDirectories` is now `client.stores.registerUserDirectories`
-   **client:** `client.deregisterStore` is now `client.stores.deregister`
-   **client:** `client.registerStore` is now `client.stores.register`
-   **command parser:** The events `prefixedMessage`, `unknownCommandName`, and `unknownCommand` 3rd
    parameter now have the type `string | RegExp`
-   **command parser:** `CommandContext.prefix` now has the type `string | RegExp`
-   The `UserError`, `PreconditionError`, `ArgumentError` classes,
    and the `ok`, `err` functions now take a single parameter which is an object
    of properties, rather than multiple parameters.

### Features

-   **args:** add Args#commandContext ([#154](https://github.com/sapphire-project/framework/issues/154)) ([63c195b](https://github.com/sapphire-project/framework/commit/63c195bde51cb069ef141f4da5990717e2c092da))
-   **client:** change stores from a Set to a Map ([#129](https://github.com/sapphire-project/framework/issues/129)) ([01f7161](https://github.com/sapphire-project/framework/commit/01f716153e8d2e1865cc2402736c6aadb1247c60))
-   **command:** add generateDashLessAliases ([#146](https://github.com/sapphire-project/framework/issues/146)) ([e94649c](https://github.com/sapphire-project/framework/commit/e94649c2c7ae2840a7a08be59fa1daf9227bbfc0))
-   **command parser:** add regexPrefix client option ([#145](https://github.com/sapphire-project/framework/issues/145)) ([86e6b79](https://github.com/sapphire-project/framework/commit/86e6b7960956674c5f0140e6c78bd75e899d559c))
-   **preconditions:** make Permission errors less vague ([#151](https://github.com/sapphire-project/framework/issues/151)) ([c6b04e1](https://github.com/sapphire-project/framework/commit/c6b04e16163b580021e1986b541cb9d4247865ab))
-   make errors take objects instead of many params ([#144](https://github.com/sapphire-project/framework/issues/144)) ([f638410](https://github.com/sapphire-project/framework/commit/f6384101a1a07620df2ad293d138a793a3a724fb))

### Bug Fixes

-   update discord redirect URL ([61edce2](https://github.com/sapphire-project/framework/commit/61edce2040f6d88e9da3bb8a9f5eb10cd0cb60a5))

## [1.0.0-alpha.4](https://github.com/sapphire-project/framework/compare/v1.0.0-alpha.3...v1.0.0-alpha.4) (2021-01-28)

### Features

-   **argument:** pass args through context ([#142](https://github.com/sapphire-project/framework/issues/142)) ([cfeef64](https://github.com/sapphire-project/framework/commit/cfeef6479427353d9e681fb92dc578ed4412aa2a))
-   **arguments:** add CoreCategoryChannel ([#136](https://github.com/sapphire-project/framework/issues/136)) ([4c281a3](https://github.com/sapphire-project/framework/commit/4c281a33c2852bee3daac160ed76f0cc2ab9b0ad))
-   **command:** expose Command#lexer ([#143](https://github.com/sapphire-project/framework/issues/143)) ([4ec1b4d](https://github.com/sapphire-project/framework/commit/4ec1b4da6c2524b2e4c8b8b2ebb298707a7633c4))
-   add optional default error events ([#141](https://github.com/sapphire-project/framework/issues/141)) ([27fd086](https://github.com/sapphire-project/framework/commit/27fd086b2900be658a458e93e3ea29b60450fba3))

### Bug Fixes

-   add discord.js utilities for type guards ([cf74431](https://github.com/sapphire-project/framework/commit/cf7443176a7080a8826ad9a15711863bc8d021a1))

## [1.0.0-alpha.3](https://github.com/sapphire-project/framework/compare/v1.0.0-alpha.2...v1.0.0-alpha.3) (2021-01-14)

### Features

-   **args:** add Args#nextMaybe and Args#next ([#130](https://github.com/sapphire-project/framework/issues/130)) ([10a6e0b](https://github.com/sapphire-project/framework/commit/10a6e0b36f72353ea3b25a89fa16fb001711e225))
-   add client#deregisterStore ([#128](https://github.com/sapphire-project/framework/issues/128)) ([dedd6d1](https://github.com/sapphire-project/framework/commit/dedd6d1149ab58f35e1dede88c67eefacfd070c7))
-   **args:** add Args#finished ([#125](https://github.com/sapphire-project/framework/issues/125)) ([36e0a1f](https://github.com/sapphire-project/framework/commit/36e0a1f11ae75bb4709f469ac12d18b74d853aac))
-   **arguments:** more descriptive error messages ([#127](https://github.com/sapphire-project/framework/issues/127)) ([04931bc](https://github.com/sapphire-project/framework/commit/04931bcc3216d68242338c026cd54b10fd53878d))

### Bug Fixes

-   change CoreBoolean error signature ([#126](https://github.com/sapphire-project/framework/issues/126)) ([9ca7456](https://github.com/sapphire-project/framework/commit/9ca74564fe4fa3ecf9bcac72b30398b11bb6d029))

## [1.0.0-alpha.2](https://github.com/sapphire-project/framework/compare/v1.0.0-alpha.1...v1.0.0-alpha.2) (2021-01-03)

### Features

-   **args:** allow peeking arguments ([#121](https://github.com/sapphire-project/framework/issues/121)) ([4786d48](https://github.com/sapphire-project/framework/commit/4786d48e5ddabf292fca3a09dfc55f685087368a))

### Bug Fixes

-   **index:** export PreconditionError ([#124](https://github.com/sapphire-project/framework/issues/124)) ([5daa3c9](https://github.com/sapphire-project/framework/commit/5daa3c965960710c7e088e8245e5e1d9875d34eb))

## [1.0.0-alpha.1](https://github.com/sapphire-project/framework/compare/v1.0.0-alpha.0...v1.0.0-alpha.1) (2020-12-28)

### Features

-   new preconditions ([#119](https://github.com/sapphire-project/framework/issues/119)) ([10c7a1b](https://github.com/sapphire-project/framework/commit/10c7a1b1a83838c89ac6d858cdc3a507ad1ab32a))
-   **arguments:** Add Message argument, use discord-utilities ([#118](https://github.com/sapphire-project/framework/issues/118)) ([c70af0a](https://github.com/sapphire-project/framework/commit/c70af0ab0fc241691b88da9bc7b8bcc6c97efa28))
-   **logger:** make Logger.levels protected ([5a4b8d6](https://github.com/sapphire-project/framework/commit/5a4b8d6e5c86f7f2c5153730d4565654c54a59c0))

### 1.0.0-alpha.0 (2020-12-22)

### Features

-   re-export public-facing structures from pieces ([#113](https://github.com/sapphire-project/framework/issues/113)) ([648a57d](https://github.com/sapphire-project/framework/commit/648a57dd1e9b5ca7494a28378c759141613ea1ee))
-   output type declarations to a single .d.ts file ([#112](https://github.com/sapphire-project/framework/issues/112)) ([2652a9b](https://github.com/sapphire-project/framework/commit/2652a9be2077dee456cdc0241977473e887c5a11))
-   allow case insensitive commands ([#105](https://github.com/sapphire-project/framework/issues/105)) ([a9485ec](https://github.com/sapphire-project/framework/commit/a9485ec6514c96ac54e700a6a990608915959e79))
-   **arguments:** add CoreBoolean argument ([#96](https://github.com/sapphire-project/framework/issues/96)) ([c4c25c3](https://github.com/sapphire-project/framework/commit/c4c25c3ac6817ec35004570005b8f120911a68a6))
-   **arguments:** Add extended argument functionality ([#101](https://github.com/sapphire-project/framework/issues/101)) ([8fa9e7b](https://github.com/sapphire-project/framework/commit/8fa9e7bd794409be14acfd0ac6b1466858ca628d))
-   **arguments:** added more resolvers ([#63](https://github.com/sapphire-project/framework/issues/63)) ([4eb1016](https://github.com/sapphire-project/framework/commit/4eb1016064f29f2f55c7c6f51cf2e482a521200c))
-   **arguments:** Improve ID/mention checking of members, roles, and users ([#100](https://github.com/sapphire-project/framework/issues/100)) ([008dd44](https://github.com/sapphire-project/framework/commit/008dd44172c7b93265a7866daeaabd991e59b309))
-   **arguments:** more helpers, added richer errors ([#59](https://github.com/sapphire-project/framework/issues/59)) ([59027d8](https://github.com/sapphire-project/framework/commit/59027d8955c7c89a4606df037362231621a10ef7))
-   **commands:** add an optional context parameter ([#93](https://github.com/sapphire-project/framework/issues/93)) ([8e1d4f8](https://github.com/sapphire-project/framework/commit/8e1d4f8ea2534135faeffb131e67d55177cc4bbf))
-   add event types to event pieces ([#27](https://github.com/sapphire-project/framework/issues/27)) ([770101f](https://github.com/sapphire-project/framework/commit/770101f8284b045e72de49998249509ab0b83d1a))
-   add pregenericsinitialization plugin hook ([#45](https://github.com/sapphire-project/framework/issues/45)) ([972c2d4](https://github.com/sapphire-project/framework/commit/972c2d46a24ae0c22a82f3fd17a7220f5330d6c5))
-   added a lot more features ([4051121](https://github.com/sapphire-project/framework/commit/40511217dec2bf9f31dd5c05489eb8aca0e273e9))
-   added cooldown precondition ([#76](https://github.com/sapphire-project/framework/issues/76)) ([cfabf52](https://github.com/sapphire-project/framework/commit/cfabf524a0bcfdec020d9d0e5775b44b6744c866))
-   added events ([524f58c](https://github.com/sapphire-project/framework/commit/524f58cb291580fc812d67011c516d396e4a5ac4))
-   added missing imports ([7688a0a](https://github.com/sapphire-project/framework/commit/7688a0ae5422bdd5f32e9b068ad7636ab443adee))
-   added permissions precondition and utilities ([#64](https://github.com/sapphire-project/framework/issues/64)) ([123a975](https://github.com/sapphire-project/framework/commit/123a9757e7c39d5c1ed83bf8a739d79b0a1e8118))
-   added Result, finished PreconditionContainer ([08092b1](https://github.com/sapphire-project/framework/commit/08092b196f63fd4eb7233c8763fe7aad1b301c1c))
-   added some minor QoL features, and a lot of docs ([#84](https://github.com/sapphire-project/framework/issues/84)) ([909efb7](https://github.com/sapphire-project/framework/commit/909efb77b6cec8fb2aeb868c435eb9ef4e4e3fff))
-   async login plugin hooks ([#46](https://github.com/sapphire-project/framework/issues/46)) ([95be214](https://github.com/sapphire-project/framework/commit/95be214d4932cfca53948803398e4ba144a6fed0))
-   implement additional parsing methods for core arguments ([#82](https://github.com/sapphire-project/framework/issues/82)) ([33dc791](https://github.com/sapphire-project/framework/commit/33dc791e2b948d2bea1fb4574dfeb87577b7d990))
-   pass error into Events.CommandDenied ([#77](https://github.com/sapphire-project/framework/issues/77)) ([d329b0f](https://github.com/sapphire-project/framework/commit/d329b0f4f3e41a6050408a32899a98c4a49bd0bd))
-   **args:** add Args#repeat ([5924a53](https://github.com/sapphire-project/framework/commit/5924a53edeb1daea3046c8198e7798dc8932402c))
-   **args:** add overload for IArgument ([#39](https://github.com/sapphire-project/framework/issues/39)) ([0adac4b](https://github.com/sapphire-project/framework/commit/0adac4bab425fb09e5c82bb177e5fc1f0819bf4b))
-   **client:** move auto-register to registerUserDirectories ([cbb7667](https://github.com/sapphire-project/framework/commit/cbb7667f14cc595cd1cfc4de92f65074cdc77df6))
-   **client:** register and load stores ([#31](https://github.com/sapphire-project/framework/issues/31)) ([db581a9](https://github.com/sapphire-project/framework/commit/db581a9bf2e140893da8ca3b09e8849bd35d6980))
-   **core:** add base i18n handlers ([#43](https://github.com/sapphire-project/framework/issues/43)) ([a83b77a](https://github.com/sapphire-project/framework/commit/a83b77a54211ff9594384bd3b0afa1014f530ffa))
-   **core:** added logger ([#38](https://github.com/sapphire-project/framework/issues/38)) ([021085c](https://github.com/sapphire-project/framework/commit/021085c58c4138f843fd51bde3b29764fd77d5f3))
-   **events:** add commandSuccess, change commandFinish ([#65](https://github.com/sapphire-project/framework/issues/65)) ([0d107e4](https://github.com/sapphire-project/framework/commit/0d107e4a49c4073db1fc90b808db169eb0860cc9))
-   **flags:** Add flag parsing ([#47](https://github.com/sapphire-project/framework/issues/47)) ([905d1fc](https://github.com/sapphire-project/framework/commit/905d1fc650bebf203b85ddf70f3d1467a2672ffd))
-   **index:** re-export useful exports from @sapphire/pieces ([#40](https://github.com/sapphire-project/framework/issues/40)) ([d89ee44](https://github.com/sapphire-project/framework/commit/d89ee445373420531f950978a5e786c9a02c786e))
-   **loader:** automatically register client's directories ([ff86b04](https://github.com/sapphire-project/framework/commit/ff86b0484f79d605295bd96ce0b1c28a147a10ed))
-   commands and command store ([#2](https://github.com/sapphire-project/framework/issues/2)) ([73cdf0e](https://github.com/sapphire-project/framework/commit/73cdf0e9dfc89c1135cfd47405abc93c0a955b95))
-   finish command handler ([#29](https://github.com/sapphire-project/framework/issues/29)) ([a890d74](https://github.com/sapphire-project/framework/commit/a890d74dd0b726454a56d5586265e3d708c9b419))
-   implement monitors ([#1](https://github.com/sapphire-project/framework/issues/1)) ([9fde455](https://github.com/sapphire-project/framework/commit/9fde45586fc96dfd3e8a2d6f5b88527a356978c7))
-   initial work in precondition runners ([bd2be01](https://github.com/sapphire-project/framework/commit/bd2be01b0709c84f7c6b3010e2ae8e80bc623903))
-   more events ([7f7be02](https://github.com/sapphire-project/framework/commit/7f7be02bbcb3cdb894c7777525450f58933c7205))
-   plugin support ([#28](https://github.com/sapphire-project/framework/issues/28)) ([a992b7e](https://github.com/sapphire-project/framework/commit/a992b7eea17b27c92e39cd10b20d406cc283c3be))
-   type documented events ([#25](https://github.com/sapphire-project/framework/issues/25)) ([df95f00](https://github.com/sapphire-project/framework/commit/df95f003420c33f8b78729864d31eee6cc8e527a))
-   **Monitor:** add decorators ([#7](https://github.com/sapphire-project/framework/issues/7)) ([5d3accd](https://github.com/sapphire-project/framework/commit/5d3accd04ef60bcb3f6b48f7507e7ff42ae043fd))

### Bug Fixes

-   renamed `Events.SharedReady` -> `Events.ShardReady` ([#107](https://github.com/sapphire-project/framework/issues/107)) ([d8ca2c0](https://github.com/sapphire-project/framework/commit/d8ca2c0dbf754e66b661b33efb4496765a30003e))
-   **args:** add boolean to ArgType ([#97](https://github.com/sapphire-project/framework/issues/97)) ([67b4da8](https://github.com/sapphire-project/framework/commit/67b4da856a2d12aae5e9902e2d0669c66ac9289a))
-   **events:** Return early in CorePreCommandRun if the command is not enabled ([#99](https://github.com/sapphire-project/framework/issues/99)) ([7ac3ba0](https://github.com/sapphire-project/framework/commit/7ac3ba06ef1a5d1723f5b74abd583c4eb1d63237))
-   argument undefined error ([#34](https://github.com/sapphire-project/framework/issues/34)) ([23de1b2](https://github.com/sapphire-project/framework/commit/23de1b24d81fb6468f4d9662d0064abc53a08747))
-   do not run disabled commands ([#78](https://github.com/sapphire-project/framework/issues/78)) ([a24175c](https://github.com/sapphire-project/framework/commit/a24175ca138fa552fb5a250389e83a5206c4db34))
-   failing command tests ([#24](https://github.com/sapphire-project/framework/issues/24)) ([ceeb286](https://github.com/sapphire-project/framework/commit/ceeb286ec2f0abcc68733f84ec421ca45522af88))
-   make tests pass ([3068899](https://github.com/sapphire-project/framework/commit/3068899deb13fed3a12311a1eeb91b6a10d97615))
-   remove bug breaking prefixless commands ([#80](https://github.com/sapphire-project/framework/issues/80)) ([fc40a6c](https://github.com/sapphire-project/framework/commit/fc40a6c87ce823f1f360ae199f919cc2e1af0eb7))
-   resolved bug where all pieces were nameless ([989e0c7](https://github.com/sapphire-project/framework/commit/989e0c781e7ced5fc27a6dd59b5980dfc2271ccf))
-   resolved build errors ([09bb56f](https://github.com/sapphire-project/framework/commit/09bb56f3eb088fcd6bf23f25db221e8f978190ab))
-   small docs inconsistency ([#87](https://github.com/sapphire-project/framework/issues/87)) ([f560742](https://github.com/sapphire-project/framework/commit/f56074209b8e4164b8dd831bff9cc14f8ca19ae2))
-   small typo ([#53](https://github.com/sapphire-project/framework/issues/53)) ([cee4a77](https://github.com/sapphire-project/framework/commit/cee4a77401afe8ebe16110e284637feb53c9b44e))
-   typing error ([#68](https://github.com/sapphire-project/framework/issues/68)) ([961c33b](https://github.com/sapphire-project/framework/commit/961c33b5269fbc6f8563196d4bc6fb226889e315))
-   **args:** make options optional ([584c6ef](https://github.com/sapphire-project/framework/commit/584c6ef3a9159c384805723b81ea61bbe659b3e3))
-   **arguments:** error names ([#36](https://github.com/sapphire-project/framework/issues/36)) ([6b3c195](https://github.com/sapphire-project/framework/commit/6b3c195070db58ff21420affe2bdf15c3ec0cc64))
-   **command-handler:** handle command name resolution better ([0c868e1](https://github.com/sapphire-project/framework/commit/0c868e1f4fc32df7e20333096ba125e473b6e7ef))
-   **command-handler:** make checks more strict ([#62](https://github.com/sapphire-project/framework/issues/62)) ([77352e8](https://github.com/sapphire-project/framework/commit/77352e8535c7424bb0fccb90a82e6d3895664f9c))
-   **command-handler:** pass parameters through all events ([44cfe86](https://github.com/sapphire-project/framework/commit/44cfe86c2b06106a8f51750afafd2ff7d6e7849a))
-   **command-handler:** use the right variable ([a12e61e](https://github.com/sapphire-project/framework/commit/a12e61ef04b93f88378788bbfaf3013062d6d449))
-   **core:** arguments docs ([#44](https://github.com/sapphire-project/framework/issues/44)) ([1421c05](https://github.com/sapphire-project/framework/commit/1421c056dc4845f8ed57a893acc0085453b76e0d))
-   **eslint:** cast idOffset to a number ([923bf43](https://github.com/sapphire-project/framework/commit/923bf43f47ea15e1da4f8b507c9bda1dce9d06ff))
-   **event:** set emitter to client if unset ([a3bb96e](https://github.com/sapphire-project/framework/commit/a3bb96eac5df335958f5d068754e2e703aba96a2))
