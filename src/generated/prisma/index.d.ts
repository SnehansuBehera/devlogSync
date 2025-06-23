
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Project
 * 
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>
/**
 * Model Task
 * 
 */
export type Task = $Result.DefaultSelection<Prisma.$TaskPayload>
/**
 * Model GitHubRepo
 * 
 */
export type GitHubRepo = $Result.DefaultSelection<Prisma.$GitHubRepoPayload>
/**
 * Model GitHubCommit
 * 
 */
export type GitHubCommit = $Result.DefaultSelection<Prisma.$GitHubCommitPayload>
/**
 * Model GitHubCommitGroup
 * 
 */
export type GitHubCommitGroup = $Result.DefaultSelection<Prisma.$GitHubCommitGroupPayload>
/**
 * Model DailyLog
 * 
 */
export type DailyLog = $Result.DefaultSelection<Prisma.$DailyLogPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const TaskStatus: {
  PENDING: 'PENDING',
  COMPLETED: 'COMPLETED',
  OVERDUE: 'OVERDUE'
};

export type TaskStatus = (typeof TaskStatus)[keyof typeof TaskStatus]

}

export type TaskStatus = $Enums.TaskStatus

export const TaskStatus: typeof $Enums.TaskStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.task`: Exposes CRUD operations for the **Task** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tasks
    * const tasks = await prisma.task.findMany()
    * ```
    */
  get task(): Prisma.TaskDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.gitHubRepo`: Exposes CRUD operations for the **GitHubRepo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GitHubRepos
    * const gitHubRepos = await prisma.gitHubRepo.findMany()
    * ```
    */
  get gitHubRepo(): Prisma.GitHubRepoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.gitHubCommit`: Exposes CRUD operations for the **GitHubCommit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GitHubCommits
    * const gitHubCommits = await prisma.gitHubCommit.findMany()
    * ```
    */
  get gitHubCommit(): Prisma.GitHubCommitDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.gitHubCommitGroup`: Exposes CRUD operations for the **GitHubCommitGroup** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GitHubCommitGroups
    * const gitHubCommitGroups = await prisma.gitHubCommitGroup.findMany()
    * ```
    */
  get gitHubCommitGroup(): Prisma.GitHubCommitGroupDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dailyLog`: Exposes CRUD operations for the **DailyLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DailyLogs
    * const dailyLogs = await prisma.dailyLog.findMany()
    * ```
    */
  get dailyLog(): Prisma.DailyLogDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.9.0
   * Query Engine version: 81e4af48011447c3cc503a190e86995b66d2a28e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Account: 'Account',
    Project: 'Project',
    Task: 'Task',
    GitHubRepo: 'GitHubRepo',
    GitHubCommit: 'GitHubCommit',
    GitHubCommitGroup: 'GitHubCommitGroup',
    DailyLog: 'DailyLog'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "account" | "project" | "task" | "gitHubRepo" | "gitHubCommit" | "gitHubCommitGroup" | "dailyLog"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Project: {
        payload: Prisma.$ProjectPayload<ExtArgs>
        fields: Prisma.ProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findFirst: {
            args: Prisma.ProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findMany: {
            args: Prisma.ProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          create: {
            args: Prisma.ProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          createMany: {
            args: Prisma.ProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          delete: {
            args: Prisma.ProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          update: {
            args: Prisma.ProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          upsert: {
            args: Prisma.ProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.ProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      Task: {
        payload: Prisma.$TaskPayload<ExtArgs>
        fields: Prisma.TaskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaskFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaskFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findFirst: {
            args: Prisma.TaskFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaskFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findMany: {
            args: Prisma.TaskFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          create: {
            args: Prisma.TaskCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          createMany: {
            args: Prisma.TaskCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TaskCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          delete: {
            args: Prisma.TaskDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          update: {
            args: Prisma.TaskUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          deleteMany: {
            args: Prisma.TaskDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaskUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TaskUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          upsert: {
            args: Prisma.TaskUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          aggregate: {
            args: Prisma.TaskAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTask>
          }
          groupBy: {
            args: Prisma.TaskGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaskCountArgs<ExtArgs>
            result: $Utils.Optional<TaskCountAggregateOutputType> | number
          }
        }
      }
      GitHubRepo: {
        payload: Prisma.$GitHubRepoPayload<ExtArgs>
        fields: Prisma.GitHubRepoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GitHubRepoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GitHubRepoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GitHubRepoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GitHubRepoPayload>
          }
          findFirst: {
            args: Prisma.GitHubRepoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GitHubRepoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GitHubRepoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GitHubRepoPayload>
          }
          findMany: {
            args: Prisma.GitHubRepoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GitHubRepoPayload>[]
          }
          create: {
            args: Prisma.GitHubRepoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GitHubRepoPayload>
          }
          createMany: {
            args: Prisma.GitHubRepoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GitHubRepoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GitHubRepoPayload>[]
          }
          delete: {
            args: Prisma.GitHubRepoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GitHubRepoPayload>
          }
          update: {
            args: Prisma.GitHubRepoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GitHubRepoPayload>
          }
          deleteMany: {
            args: Prisma.GitHubRepoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GitHubRepoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GitHubRepoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GitHubRepoPayload>[]
          }
          upsert: {
            args: Prisma.GitHubRepoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GitHubRepoPayload>
          }
          aggregate: {
            args: Prisma.GitHubRepoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGitHubRepo>
          }
          groupBy: {
            args: Prisma.GitHubRepoGroupByArgs<ExtArgs>
            result: $Utils.Optional<GitHubRepoGroupByOutputType>[]
          }
          count: {
            args: Prisma.GitHubRepoCountArgs<ExtArgs>
            result: $Utils.Optional<GitHubRepoCountAggregateOutputType> | number
          }
        }
      }
      GitHubCommit: {
        payload: Prisma.$GitHubCommitPayload<ExtArgs>
        fields: Prisma.GitHubCommitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GitHubCommitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GitHubCommitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GitHubCommitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GitHubCommitPayload>
          }
          findFirst: {
            args: Prisma.GitHubCommitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GitHubCommitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GitHubCommitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GitHubCommitPayload>
          }
          findMany: {
            args: Prisma.GitHubCommitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GitHubCommitPayload>[]
          }
          create: {
            args: Prisma.GitHubCommitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GitHubCommitPayload>
          }
          createMany: {
            args: Prisma.GitHubCommitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GitHubCommitCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GitHubCommitPayload>[]
          }
          delete: {
            args: Prisma.GitHubCommitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GitHubCommitPayload>
          }
          update: {
            args: Prisma.GitHubCommitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GitHubCommitPayload>
          }
          deleteMany: {
            args: Prisma.GitHubCommitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GitHubCommitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GitHubCommitUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GitHubCommitPayload>[]
          }
          upsert: {
            args: Prisma.GitHubCommitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GitHubCommitPayload>
          }
          aggregate: {
            args: Prisma.GitHubCommitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGitHubCommit>
          }
          groupBy: {
            args: Prisma.GitHubCommitGroupByArgs<ExtArgs>
            result: $Utils.Optional<GitHubCommitGroupByOutputType>[]
          }
          count: {
            args: Prisma.GitHubCommitCountArgs<ExtArgs>
            result: $Utils.Optional<GitHubCommitCountAggregateOutputType> | number
          }
        }
      }
      GitHubCommitGroup: {
        payload: Prisma.$GitHubCommitGroupPayload<ExtArgs>
        fields: Prisma.GitHubCommitGroupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GitHubCommitGroupFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GitHubCommitGroupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GitHubCommitGroupFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GitHubCommitGroupPayload>
          }
          findFirst: {
            args: Prisma.GitHubCommitGroupFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GitHubCommitGroupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GitHubCommitGroupFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GitHubCommitGroupPayload>
          }
          findMany: {
            args: Prisma.GitHubCommitGroupFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GitHubCommitGroupPayload>[]
          }
          create: {
            args: Prisma.GitHubCommitGroupCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GitHubCommitGroupPayload>
          }
          createMany: {
            args: Prisma.GitHubCommitGroupCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GitHubCommitGroupCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GitHubCommitGroupPayload>[]
          }
          delete: {
            args: Prisma.GitHubCommitGroupDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GitHubCommitGroupPayload>
          }
          update: {
            args: Prisma.GitHubCommitGroupUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GitHubCommitGroupPayload>
          }
          deleteMany: {
            args: Prisma.GitHubCommitGroupDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GitHubCommitGroupUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GitHubCommitGroupUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GitHubCommitGroupPayload>[]
          }
          upsert: {
            args: Prisma.GitHubCommitGroupUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GitHubCommitGroupPayload>
          }
          aggregate: {
            args: Prisma.GitHubCommitGroupAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGitHubCommitGroup>
          }
          groupBy: {
            args: Prisma.GitHubCommitGroupGroupByArgs<ExtArgs>
            result: $Utils.Optional<GitHubCommitGroupGroupByOutputType>[]
          }
          count: {
            args: Prisma.GitHubCommitGroupCountArgs<ExtArgs>
            result: $Utils.Optional<GitHubCommitGroupCountAggregateOutputType> | number
          }
        }
      }
      DailyLog: {
        payload: Prisma.$DailyLogPayload<ExtArgs>
        fields: Prisma.DailyLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DailyLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DailyLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyLogPayload>
          }
          findFirst: {
            args: Prisma.DailyLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DailyLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyLogPayload>
          }
          findMany: {
            args: Prisma.DailyLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyLogPayload>[]
          }
          create: {
            args: Prisma.DailyLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyLogPayload>
          }
          createMany: {
            args: Prisma.DailyLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DailyLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyLogPayload>[]
          }
          delete: {
            args: Prisma.DailyLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyLogPayload>
          }
          update: {
            args: Prisma.DailyLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyLogPayload>
          }
          deleteMany: {
            args: Prisma.DailyLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DailyLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DailyLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyLogPayload>[]
          }
          upsert: {
            args: Prisma.DailyLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyLogPayload>
          }
          aggregate: {
            args: Prisma.DailyLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDailyLog>
          }
          groupBy: {
            args: Prisma.DailyLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<DailyLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.DailyLogCountArgs<ExtArgs>
            result: $Utils.Optional<DailyLogCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    account?: AccountOmit
    project?: ProjectOmit
    task?: TaskOmit
    gitHubRepo?: GitHubRepoOmit
    gitHubCommit?: GitHubCommitOmit
    gitHubCommitGroup?: GitHubCommitGroupOmit
    dailyLog?: DailyLogOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    accounts: number
    Project: number
    ProjectMembers: number
    assignedTasks: number
    createdTasks: number
    updatedTasks: number
    GitHubCommit: number
    GitHubCommitGroup: number
    DailyLog: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    Project?: boolean | UserCountOutputTypeCountProjectArgs
    ProjectMembers?: boolean | UserCountOutputTypeCountProjectMembersArgs
    assignedTasks?: boolean | UserCountOutputTypeCountAssignedTasksArgs
    createdTasks?: boolean | UserCountOutputTypeCountCreatedTasksArgs
    updatedTasks?: boolean | UserCountOutputTypeCountUpdatedTasksArgs
    GitHubCommit?: boolean | UserCountOutputTypeCountGitHubCommitArgs
    GitHubCommitGroup?: boolean | UserCountOutputTypeCountGitHubCommitGroupArgs
    DailyLog?: boolean | UserCountOutputTypeCountDailyLogArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProjectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProjectMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAssignedTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUpdatedTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGitHubCommitArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GitHubCommitWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGitHubCommitGroupArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GitHubCommitGroupWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDailyLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyLogWhereInput
  }


  /**
   * Count Type ProjectCountOutputType
   */

  export type ProjectCountOutputType = {
    members: number
    tasks: number
    githubRepos: number
  }

  export type ProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | ProjectCountOutputTypeCountMembersArgs
    tasks?: boolean | ProjectCountOutputTypeCountTasksArgs
    githubRepos?: boolean | ProjectCountOutputTypeCountGithubReposArgs
  }

  // Custom InputTypes
  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCountOutputType
     */
    select?: ProjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountGithubReposArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GitHubRepoWhereInput
  }


  /**
   * Count Type GitHubRepoCountOutputType
   */

  export type GitHubRepoCountOutputType = {
    GitHubCommit: number
    GitHubCommitGroup: number
  }

  export type GitHubRepoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    GitHubCommit?: boolean | GitHubRepoCountOutputTypeCountGitHubCommitArgs
    GitHubCommitGroup?: boolean | GitHubRepoCountOutputTypeCountGitHubCommitGroupArgs
  }

  // Custom InputTypes
  /**
   * GitHubRepoCountOutputType without action
   */
  export type GitHubRepoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GitHubRepoCountOutputType
     */
    select?: GitHubRepoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GitHubRepoCountOutputType without action
   */
  export type GitHubRepoCountOutputTypeCountGitHubCommitArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GitHubCommitWhereInput
  }

  /**
   * GitHubRepoCountOutputType without action
   */
  export type GitHubRepoCountOutputTypeCountGitHubCommitGroupArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GitHubCommitGroupWhereInput
  }


  /**
   * Count Type GitHubCommitGroupCountOutputType
   */

  export type GitHubCommitGroupCountOutputType = {
    commits: number
  }

  export type GitHubCommitGroupCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    commits?: boolean | GitHubCommitGroupCountOutputTypeCountCommitsArgs
  }

  // Custom InputTypes
  /**
   * GitHubCommitGroupCountOutputType without action
   */
  export type GitHubCommitGroupCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GitHubCommitGroupCountOutputType
     */
    select?: GitHubCommitGroupCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GitHubCommitGroupCountOutputType without action
   */
  export type GitHubCommitGroupCountOutputTypeCountCommitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GitHubCommitWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    firstName: string | null
    lastName: string | null
    username: string | null
    image: string | null
    isActive: boolean | null
    isAdmin: boolean | null
    isVerified: boolean | null
    createdAt: Date | null
    accessToken: string | null
    githubToken: string | null
    githubUsername: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    firstName: string | null
    lastName: string | null
    username: string | null
    image: string | null
    isActive: boolean | null
    isAdmin: boolean | null
    isVerified: boolean | null
    createdAt: Date | null
    accessToken: string | null
    githubToken: string | null
    githubUsername: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    firstName: number
    lastName: number
    username: number
    image: number
    isActive: number
    isAdmin: number
    isVerified: number
    createdAt: number
    accessToken: number
    githubToken: number
    githubUsername: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    firstName?: true
    lastName?: true
    username?: true
    image?: true
    isActive?: true
    isAdmin?: true
    isVerified?: true
    createdAt?: true
    accessToken?: true
    githubToken?: true
    githubUsername?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    firstName?: true
    lastName?: true
    username?: true
    image?: true
    isActive?: true
    isAdmin?: true
    isVerified?: true
    createdAt?: true
    accessToken?: true
    githubToken?: true
    githubUsername?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    firstName?: true
    lastName?: true
    username?: true
    image?: true
    isActive?: true
    isAdmin?: true
    isVerified?: true
    createdAt?: true
    accessToken?: true
    githubToken?: true
    githubUsername?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    password: string | null
    firstName: string | null
    lastName: string | null
    username: string | null
    image: string | null
    isActive: boolean
    isAdmin: boolean
    isVerified: boolean
    createdAt: Date
    accessToken: string | null
    githubToken: string | null
    githubUsername: string | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    username?: boolean
    image?: boolean
    isActive?: boolean
    isAdmin?: boolean
    isVerified?: boolean
    createdAt?: boolean
    accessToken?: boolean
    githubToken?: boolean
    githubUsername?: boolean
    accounts?: boolean | User$accountsArgs<ExtArgs>
    Project?: boolean | User$ProjectArgs<ExtArgs>
    ProjectMembers?: boolean | User$ProjectMembersArgs<ExtArgs>
    assignedTasks?: boolean | User$assignedTasksArgs<ExtArgs>
    createdTasks?: boolean | User$createdTasksArgs<ExtArgs>
    updatedTasks?: boolean | User$updatedTasksArgs<ExtArgs>
    GitHubCommit?: boolean | User$GitHubCommitArgs<ExtArgs>
    GitHubCommitGroup?: boolean | User$GitHubCommitGroupArgs<ExtArgs>
    DailyLog?: boolean | User$DailyLogArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    username?: boolean
    image?: boolean
    isActive?: boolean
    isAdmin?: boolean
    isVerified?: boolean
    createdAt?: boolean
    accessToken?: boolean
    githubToken?: boolean
    githubUsername?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    username?: boolean
    image?: boolean
    isActive?: boolean
    isAdmin?: boolean
    isVerified?: boolean
    createdAt?: boolean
    accessToken?: boolean
    githubToken?: boolean
    githubUsername?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    username?: boolean
    image?: boolean
    isActive?: boolean
    isAdmin?: boolean
    isVerified?: boolean
    createdAt?: boolean
    accessToken?: boolean
    githubToken?: boolean
    githubUsername?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "firstName" | "lastName" | "username" | "image" | "isActive" | "isAdmin" | "isVerified" | "createdAt" | "accessToken" | "githubToken" | "githubUsername", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | User$accountsArgs<ExtArgs>
    Project?: boolean | User$ProjectArgs<ExtArgs>
    ProjectMembers?: boolean | User$ProjectMembersArgs<ExtArgs>
    assignedTasks?: boolean | User$assignedTasksArgs<ExtArgs>
    createdTasks?: boolean | User$createdTasksArgs<ExtArgs>
    updatedTasks?: boolean | User$updatedTasksArgs<ExtArgs>
    GitHubCommit?: boolean | User$GitHubCommitArgs<ExtArgs>
    GitHubCommitGroup?: boolean | User$GitHubCommitGroupArgs<ExtArgs>
    DailyLog?: boolean | User$DailyLogArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      Project: Prisma.$ProjectPayload<ExtArgs>[]
      ProjectMembers: Prisma.$ProjectPayload<ExtArgs>[]
      assignedTasks: Prisma.$TaskPayload<ExtArgs>[]
      createdTasks: Prisma.$TaskPayload<ExtArgs>[]
      updatedTasks: Prisma.$TaskPayload<ExtArgs>[]
      GitHubCommit: Prisma.$GitHubCommitPayload<ExtArgs>[]
      GitHubCommitGroup: Prisma.$GitHubCommitGroupPayload<ExtArgs>[]
      DailyLog: Prisma.$DailyLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string | null
      firstName: string | null
      lastName: string | null
      username: string | null
      image: string | null
      isActive: boolean
      isAdmin: boolean
      isVerified: boolean
      createdAt: Date
      accessToken: string | null
      githubToken: string | null
      githubUsername: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Project<T extends User$ProjectArgs<ExtArgs> = {}>(args?: Subset<T, User$ProjectArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ProjectMembers<T extends User$ProjectMembersArgs<ExtArgs> = {}>(args?: Subset<T, User$ProjectMembersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    assignedTasks<T extends User$assignedTasksArgs<ExtArgs> = {}>(args?: Subset<T, User$assignedTasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    createdTasks<T extends User$createdTasksArgs<ExtArgs> = {}>(args?: Subset<T, User$createdTasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    updatedTasks<T extends User$updatedTasksArgs<ExtArgs> = {}>(args?: Subset<T, User$updatedTasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    GitHubCommit<T extends User$GitHubCommitArgs<ExtArgs> = {}>(args?: Subset<T, User$GitHubCommitArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GitHubCommitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    GitHubCommitGroup<T extends User$GitHubCommitGroupArgs<ExtArgs> = {}>(args?: Subset<T, User$GitHubCommitGroupArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GitHubCommitGroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    DailyLog<T extends User$DailyLogArgs<ExtArgs> = {}>(args?: Subset<T, User$DailyLogArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly image: FieldRef<"User", 'String'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly isAdmin: FieldRef<"User", 'Boolean'>
    readonly isVerified: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly accessToken: FieldRef<"User", 'String'>
    readonly githubToken: FieldRef<"User", 'String'>
    readonly githubUsername: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.Project
   */
  export type User$ProjectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    cursor?: ProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * User.ProjectMembers
   */
  export type User$ProjectMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    cursor?: ProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * User.assignedTasks
   */
  export type User$assignedTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * User.createdTasks
   */
  export type User$createdTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * User.updatedTasks
   */
  export type User$updatedTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * User.GitHubCommit
   */
  export type User$GitHubCommitArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GitHubCommit
     */
    select?: GitHubCommitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GitHubCommit
     */
    omit?: GitHubCommitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GitHubCommitInclude<ExtArgs> | null
    where?: GitHubCommitWhereInput
    orderBy?: GitHubCommitOrderByWithRelationInput | GitHubCommitOrderByWithRelationInput[]
    cursor?: GitHubCommitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GitHubCommitScalarFieldEnum | GitHubCommitScalarFieldEnum[]
  }

  /**
   * User.GitHubCommitGroup
   */
  export type User$GitHubCommitGroupArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GitHubCommitGroup
     */
    select?: GitHubCommitGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GitHubCommitGroup
     */
    omit?: GitHubCommitGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GitHubCommitGroupInclude<ExtArgs> | null
    where?: GitHubCommitGroupWhereInput
    orderBy?: GitHubCommitGroupOrderByWithRelationInput | GitHubCommitGroupOrderByWithRelationInput[]
    cursor?: GitHubCommitGroupWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GitHubCommitGroupScalarFieldEnum | GitHubCommitGroupScalarFieldEnum[]
  }

  /**
   * User.DailyLog
   */
  export type User$DailyLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyLog
     */
    select?: DailyLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyLog
     */
    omit?: DailyLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyLogInclude<ExtArgs> | null
    where?: DailyLogWhereInput
    orderBy?: DailyLogOrderByWithRelationInput | DailyLogOrderByWithRelationInput[]
    cursor?: DailyLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DailyLogScalarFieldEnum | DailyLogScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type AccountSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type AccountMinAggregateOutputType = {
    id: number | null
    provider: string | null
    providerAccountId: string | null
    userId: number | null
    accessToken: string | null
    refreshToken: string | null
    expiresAt: Date | null
  }

  export type AccountMaxAggregateOutputType = {
    id: number | null
    provider: string | null
    providerAccountId: string | null
    userId: number | null
    accessToken: string | null
    refreshToken: string | null
    expiresAt: Date | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    provider: number
    providerAccountId: number
    userId: number
    accessToken: number
    refreshToken: number
    expiresAt: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type AccountSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    provider?: true
    providerAccountId?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    expiresAt?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    provider?: true
    providerAccountId?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    expiresAt?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    provider?: true
    providerAccountId?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    expiresAt?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: number
    provider: string
    providerAccountId: string
    userId: number
    accessToken: string | null
    refreshToken: string | null
    expiresAt: Date | null
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    provider?: boolean
    providerAccountId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    expiresAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    provider?: boolean
    providerAccountId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    expiresAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    provider?: boolean
    providerAccountId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    expiresAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    provider?: boolean
    providerAccountId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    expiresAt?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "provider" | "providerAccountId" | "userId" | "accessToken" | "refreshToken" | "expiresAt", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      provider: string
      providerAccountId: string
      userId: number
      accessToken: string | null
      refreshToken: string | null
      expiresAt: Date | null
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'Int'>
    readonly provider: FieldRef<"Account", 'String'>
    readonly providerAccountId: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'Int'>
    readonly accessToken: FieldRef<"Account", 'String'>
    readonly refreshToken: FieldRef<"Account", 'String'>
    readonly expiresAt: FieldRef<"Account", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type ProjectSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type ProjectMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: number | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: number | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    name: number
    description: number
    createdAt: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type ProjectAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ProjectSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ProjectMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Project to aggregate.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type ProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithAggregationInput | ProjectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _avg?: ProjectAvgAggregateInputType
    _sum?: ProjectSumAggregateInputType
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: number
    name: string
    description: string | null
    createdAt: Date
    updatedAt: Date
    userId: number
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    members?: boolean | Project$membersArgs<ExtArgs>
    tasks?: boolean | Project$tasksArgs<ExtArgs>
    githubRepos?: boolean | Project$githubReposArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
  }

  export type ProjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "createdAt" | "updatedAt" | "userId", ExtArgs["result"]["project"]>
  export type ProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    members?: boolean | Project$membersArgs<ExtArgs>
    tasks?: boolean | Project$tasksArgs<ExtArgs>
    githubRepos?: boolean | Project$githubReposArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs>
      members: Prisma.$UserPayload<ExtArgs>[]
      tasks: Prisma.$TaskPayload<ExtArgs>[]
      githubRepos: Prisma.$GitHubRepoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      createdAt: Date
      updatedAt: Date
      userId: number
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> = $Result.GetResult<Prisma.$ProjectPayload, S>

  type ProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface ProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Project'], meta: { name: 'Project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectFindUniqueArgs>(args: SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectFindFirstArgs>(args?: SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectFindManyArgs>(args?: SelectSubset<T, ProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
     */
    create<T extends ProjectCreateArgs>(args: SelectSubset<T, ProjectCreateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projects.
     * @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectCreateManyArgs>(args?: SelectSubset<T, ProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projects and returns the data saved in the database.
     * @param {ProjectCreateManyAndReturnArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
     */
    delete<T extends ProjectDeleteArgs>(args: SelectSubset<T, ProjectDeleteArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectUpdateArgs>(args: SelectSubset<T, ProjectUpdateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectDeleteManyArgs>(args?: SelectSubset<T, ProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectUpdateManyArgs>(args: SelectSubset<T, ProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects and returns the data updated in the database.
     * @param {ProjectUpdateManyAndReturnArgs} args - Arguments to update many Projects.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProjectUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends ProjectUpsertArgs>(args: SelectSubset<T, ProjectUpsertArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Project model
   */
  readonly fields: ProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    members<T extends Project$membersArgs<ExtArgs> = {}>(args?: Subset<T, Project$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tasks<T extends Project$tasksArgs<ExtArgs> = {}>(args?: Subset<T, Project$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    githubRepos<T extends Project$githubReposArgs<ExtArgs> = {}>(args?: Subset<T, Project$githubReposArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GitHubRepoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Project model
   */
  interface ProjectFieldRefs {
    readonly id: FieldRef<"Project", 'Int'>
    readonly name: FieldRef<"Project", 'String'>
    readonly description: FieldRef<"Project", 'String'>
    readonly createdAt: FieldRef<"Project", 'DateTime'>
    readonly updatedAt: FieldRef<"Project", 'DateTime'>
    readonly userId: FieldRef<"Project", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Project findUnique
   */
  export type ProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findFirst
   */
  export type ProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findMany
   */
  export type ProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project create
   */
  export type ProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Project.
     */
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }

  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Project createManyAndReturn
   */
  export type ProjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Project update
   */
  export type ProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Project.
     */
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Project updateManyAndReturn
   */
  export type ProjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Project upsert
   */
  export type ProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Project to update in case it exists.
     */
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     */
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }

  /**
   * Project delete
   */
  export type ProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter which Project to delete.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to delete.
     */
    limit?: number
  }

  /**
   * Project.members
   */
  export type Project$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Project.tasks
   */
  export type Project$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Project.githubRepos
   */
  export type Project$githubReposArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GitHubRepo
     */
    select?: GitHubRepoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GitHubRepo
     */
    omit?: GitHubRepoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GitHubRepoInclude<ExtArgs> | null
    where?: GitHubRepoWhereInput
    orderBy?: GitHubRepoOrderByWithRelationInput | GitHubRepoOrderByWithRelationInput[]
    cursor?: GitHubRepoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GitHubRepoScalarFieldEnum | GitHubRepoScalarFieldEnum[]
  }

  /**
   * Project without action
   */
  export type ProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
  }


  /**
   * Model Task
   */

  export type AggregateTask = {
    _count: TaskCountAggregateOutputType | null
    _avg: TaskAvgAggregateOutputType | null
    _sum: TaskSumAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  export type TaskAvgAggregateOutputType = {
    id: number | null
    projectId: number | null
    assignedToId: number | null
    assignedById: number | null
    updatedById: number | null
  }

  export type TaskSumAggregateOutputType = {
    id: number | null
    projectId: number | null
    assignedToId: number | null
    assignedById: number | null
    updatedById: number | null
  }

  export type TaskMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    startDate: Date | null
    dueDate: Date | null
    status: $Enums.TaskStatus | null
    projectId: number | null
    assignedToId: number | null
    assignedById: number | null
    updatedById: number | null
    createdAt: Date | null
    updatedAt: Date | null
    completedOn: Date | null
  }

  export type TaskMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    startDate: Date | null
    dueDate: Date | null
    status: $Enums.TaskStatus | null
    projectId: number | null
    assignedToId: number | null
    assignedById: number | null
    updatedById: number | null
    createdAt: Date | null
    updatedAt: Date | null
    completedOn: Date | null
  }

  export type TaskCountAggregateOutputType = {
    id: number
    title: number
    description: number
    startDate: number
    dueDate: number
    status: number
    projectId: number
    assignedToId: number
    assignedById: number
    updatedById: number
    createdAt: number
    updatedAt: number
    completedOn: number
    _all: number
  }


  export type TaskAvgAggregateInputType = {
    id?: true
    projectId?: true
    assignedToId?: true
    assignedById?: true
    updatedById?: true
  }

  export type TaskSumAggregateInputType = {
    id?: true
    projectId?: true
    assignedToId?: true
    assignedById?: true
    updatedById?: true
  }

  export type TaskMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    startDate?: true
    dueDate?: true
    status?: true
    projectId?: true
    assignedToId?: true
    assignedById?: true
    updatedById?: true
    createdAt?: true
    updatedAt?: true
    completedOn?: true
  }

  export type TaskMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    startDate?: true
    dueDate?: true
    status?: true
    projectId?: true
    assignedToId?: true
    assignedById?: true
    updatedById?: true
    createdAt?: true
    updatedAt?: true
    completedOn?: true
  }

  export type TaskCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    startDate?: true
    dueDate?: true
    status?: true
    projectId?: true
    assignedToId?: true
    assignedById?: true
    updatedById?: true
    createdAt?: true
    updatedAt?: true
    completedOn?: true
    _all?: true
  }

  export type TaskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Task to aggregate.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tasks
    **/
    _count?: true | TaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TaskAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TaskSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskMaxAggregateInputType
  }

  export type GetTaskAggregateType<T extends TaskAggregateArgs> = {
        [P in keyof T & keyof AggregateTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTask[P]>
      : GetScalarType<T[P], AggregateTask[P]>
  }




  export type TaskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithAggregationInput | TaskOrderByWithAggregationInput[]
    by: TaskScalarFieldEnum[] | TaskScalarFieldEnum
    having?: TaskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskCountAggregateInputType | true
    _avg?: TaskAvgAggregateInputType
    _sum?: TaskSumAggregateInputType
    _min?: TaskMinAggregateInputType
    _max?: TaskMaxAggregateInputType
  }

  export type TaskGroupByOutputType = {
    id: number
    title: string
    description: string | null
    startDate: Date
    dueDate: Date
    status: $Enums.TaskStatus
    projectId: number
    assignedToId: number
    assignedById: number
    updatedById: number | null
    createdAt: Date
    updatedAt: Date
    completedOn: Date | null
    _count: TaskCountAggregateOutputType | null
    _avg: TaskAvgAggregateOutputType | null
    _sum: TaskSumAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  type GetTaskGroupByPayload<T extends TaskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskGroupByOutputType[P]>
            : GetScalarType<T[P], TaskGroupByOutputType[P]>
        }
      >
    >


  export type TaskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    startDate?: boolean
    dueDate?: boolean
    status?: boolean
    projectId?: boolean
    assignedToId?: boolean
    assignedById?: boolean
    updatedById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    completedOn?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    assignedTo?: boolean | UserDefaultArgs<ExtArgs>
    assignedBy?: boolean | UserDefaultArgs<ExtArgs>
    updatedBy?: boolean | Task$updatedByArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    startDate?: boolean
    dueDate?: boolean
    status?: boolean
    projectId?: boolean
    assignedToId?: boolean
    assignedById?: boolean
    updatedById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    completedOn?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    assignedTo?: boolean | UserDefaultArgs<ExtArgs>
    assignedBy?: boolean | UserDefaultArgs<ExtArgs>
    updatedBy?: boolean | Task$updatedByArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    startDate?: boolean
    dueDate?: boolean
    status?: boolean
    projectId?: boolean
    assignedToId?: boolean
    assignedById?: boolean
    updatedById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    completedOn?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    assignedTo?: boolean | UserDefaultArgs<ExtArgs>
    assignedBy?: boolean | UserDefaultArgs<ExtArgs>
    updatedBy?: boolean | Task$updatedByArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    startDate?: boolean
    dueDate?: boolean
    status?: boolean
    projectId?: boolean
    assignedToId?: boolean
    assignedById?: boolean
    updatedById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    completedOn?: boolean
  }

  export type TaskOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "startDate" | "dueDate" | "status" | "projectId" | "assignedToId" | "assignedById" | "updatedById" | "createdAt" | "updatedAt" | "completedOn", ExtArgs["result"]["task"]>
  export type TaskInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    assignedTo?: boolean | UserDefaultArgs<ExtArgs>
    assignedBy?: boolean | UserDefaultArgs<ExtArgs>
    updatedBy?: boolean | Task$updatedByArgs<ExtArgs>
  }
  export type TaskIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    assignedTo?: boolean | UserDefaultArgs<ExtArgs>
    assignedBy?: boolean | UserDefaultArgs<ExtArgs>
    updatedBy?: boolean | Task$updatedByArgs<ExtArgs>
  }
  export type TaskIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    assignedTo?: boolean | UserDefaultArgs<ExtArgs>
    assignedBy?: boolean | UserDefaultArgs<ExtArgs>
    updatedBy?: boolean | Task$updatedByArgs<ExtArgs>
  }

  export type $TaskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Task"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
      assignedTo: Prisma.$UserPayload<ExtArgs>
      assignedBy: Prisma.$UserPayload<ExtArgs>
      updatedBy: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string | null
      startDate: Date
      dueDate: Date
      status: $Enums.TaskStatus
      projectId: number
      assignedToId: number
      assignedById: number
      updatedById: number | null
      createdAt: Date
      updatedAt: Date
      completedOn: Date | null
    }, ExtArgs["result"]["task"]>
    composites: {}
  }

  type TaskGetPayload<S extends boolean | null | undefined | TaskDefaultArgs> = $Result.GetResult<Prisma.$TaskPayload, S>

  type TaskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TaskFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TaskCountAggregateInputType | true
    }

  export interface TaskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Task'], meta: { name: 'Task' } }
    /**
     * Find zero or one Task that matches the filter.
     * @param {TaskFindUniqueArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaskFindUniqueArgs>(args: SelectSubset<T, TaskFindUniqueArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Task that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TaskFindUniqueOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaskFindUniqueOrThrowArgs>(args: SelectSubset<T, TaskFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaskFindFirstArgs>(args?: SelectSubset<T, TaskFindFirstArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaskFindFirstOrThrowArgs>(args?: SelectSubset<T, TaskFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tasks
     * const tasks = await prisma.task.findMany()
     * 
     * // Get first 10 Tasks
     * const tasks = await prisma.task.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taskWithIdOnly = await prisma.task.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TaskFindManyArgs>(args?: SelectSubset<T, TaskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Task.
     * @param {TaskCreateArgs} args - Arguments to create a Task.
     * @example
     * // Create one Task
     * const Task = await prisma.task.create({
     *   data: {
     *     // ... data to create a Task
     *   }
     * })
     * 
     */
    create<T extends TaskCreateArgs>(args: SelectSubset<T, TaskCreateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tasks.
     * @param {TaskCreateManyArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TaskCreateManyArgs>(args?: SelectSubset<T, TaskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tasks and returns the data saved in the database.
     * @param {TaskCreateManyAndReturnArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tasks and only return the `id`
     * const taskWithIdOnly = await prisma.task.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TaskCreateManyAndReturnArgs>(args?: SelectSubset<T, TaskCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Task.
     * @param {TaskDeleteArgs} args - Arguments to delete one Task.
     * @example
     * // Delete one Task
     * const Task = await prisma.task.delete({
     *   where: {
     *     // ... filter to delete one Task
     *   }
     * })
     * 
     */
    delete<T extends TaskDeleteArgs>(args: SelectSubset<T, TaskDeleteArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Task.
     * @param {TaskUpdateArgs} args - Arguments to update one Task.
     * @example
     * // Update one Task
     * const task = await prisma.task.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TaskUpdateArgs>(args: SelectSubset<T, TaskUpdateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tasks.
     * @param {TaskDeleteManyArgs} args - Arguments to filter Tasks to delete.
     * @example
     * // Delete a few Tasks
     * const { count } = await prisma.task.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TaskDeleteManyArgs>(args?: SelectSubset<T, TaskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TaskUpdateManyArgs>(args: SelectSubset<T, TaskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks and returns the data updated in the database.
     * @param {TaskUpdateManyAndReturnArgs} args - Arguments to update many Tasks.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tasks and only return the `id`
     * const taskWithIdOnly = await prisma.task.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TaskUpdateManyAndReturnArgs>(args: SelectSubset<T, TaskUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Task.
     * @param {TaskUpsertArgs} args - Arguments to update or create a Task.
     * @example
     * // Update or create a Task
     * const task = await prisma.task.upsert({
     *   create: {
     *     // ... data to create a Task
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Task we want to update
     *   }
     * })
     */
    upsert<T extends TaskUpsertArgs>(args: SelectSubset<T, TaskUpsertArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskCountArgs} args - Arguments to filter Tasks to count.
     * @example
     * // Count the number of Tasks
     * const count = await prisma.task.count({
     *   where: {
     *     // ... the filter for the Tasks we want to count
     *   }
     * })
    **/
    count<T extends TaskCountArgs>(
      args?: Subset<T, TaskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TaskAggregateArgs>(args: Subset<T, TaskAggregateArgs>): Prisma.PrismaPromise<GetTaskAggregateType<T>>

    /**
     * Group by Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TaskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskGroupByArgs['orderBy'] }
        : { orderBy?: TaskGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Task model
   */
  readonly fields: TaskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Task.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    assignedTo<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    assignedBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    updatedBy<T extends Task$updatedByArgs<ExtArgs> = {}>(args?: Subset<T, Task$updatedByArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Task model
   */
  interface TaskFieldRefs {
    readonly id: FieldRef<"Task", 'Int'>
    readonly title: FieldRef<"Task", 'String'>
    readonly description: FieldRef<"Task", 'String'>
    readonly startDate: FieldRef<"Task", 'DateTime'>
    readonly dueDate: FieldRef<"Task", 'DateTime'>
    readonly status: FieldRef<"Task", 'TaskStatus'>
    readonly projectId: FieldRef<"Task", 'Int'>
    readonly assignedToId: FieldRef<"Task", 'Int'>
    readonly assignedById: FieldRef<"Task", 'Int'>
    readonly updatedById: FieldRef<"Task", 'Int'>
    readonly createdAt: FieldRef<"Task", 'DateTime'>
    readonly updatedAt: FieldRef<"Task", 'DateTime'>
    readonly completedOn: FieldRef<"Task", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Task findUnique
   */
  export type TaskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findUniqueOrThrow
   */
  export type TaskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findFirst
   */
  export type TaskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findFirstOrThrow
   */
  export type TaskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findMany
   */
  export type TaskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Tasks to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task create
   */
  export type TaskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to create a Task.
     */
    data: XOR<TaskCreateInput, TaskUncheckedCreateInput>
  }

  /**
   * Task createMany
   */
  export type TaskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Task createManyAndReturn
   */
  export type TaskCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Task update
   */
  export type TaskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to update a Task.
     */
    data: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
    /**
     * Choose, which Task to update.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task updateMany
   */
  export type TaskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tasks.
     */
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to update.
     */
    limit?: number
  }

  /**
   * Task updateManyAndReturn
   */
  export type TaskUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * The data used to update Tasks.
     */
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Task upsert
   */
  export type TaskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The filter to search for the Task to update in case it exists.
     */
    where: TaskWhereUniqueInput
    /**
     * In case the Task found by the `where` argument doesn't exist, create a new Task with this data.
     */
    create: XOR<TaskCreateInput, TaskUncheckedCreateInput>
    /**
     * In case the Task was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
  }

  /**
   * Task delete
   */
  export type TaskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter which Task to delete.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task deleteMany
   */
  export type TaskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tasks to delete
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to delete.
     */
    limit?: number
  }

  /**
   * Task.updatedBy
   */
  export type Task$updatedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Task without action
   */
  export type TaskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
  }


  /**
   * Model GitHubRepo
   */

  export type AggregateGitHubRepo = {
    _count: GitHubRepoCountAggregateOutputType | null
    _avg: GitHubRepoAvgAggregateOutputType | null
    _sum: GitHubRepoSumAggregateOutputType | null
    _min: GitHubRepoMinAggregateOutputType | null
    _max: GitHubRepoMaxAggregateOutputType | null
  }

  export type GitHubRepoAvgAggregateOutputType = {
    id: number | null
    projectId: number | null
    webHookId: number | null
  }

  export type GitHubRepoSumAggregateOutputType = {
    id: number | null
    projectId: number | null
    webHookId: number | null
  }

  export type GitHubRepoMinAggregateOutputType = {
    id: number | null
    name: string | null
    url: string | null
    createdAt: Date | null
    updatedAt: Date | null
    projectId: number | null
    webHookId: number | null
  }

  export type GitHubRepoMaxAggregateOutputType = {
    id: number | null
    name: string | null
    url: string | null
    createdAt: Date | null
    updatedAt: Date | null
    projectId: number | null
    webHookId: number | null
  }

  export type GitHubRepoCountAggregateOutputType = {
    id: number
    name: number
    url: number
    createdAt: number
    updatedAt: number
    projectId: number
    webHookId: number
    _all: number
  }


  export type GitHubRepoAvgAggregateInputType = {
    id?: true
    projectId?: true
    webHookId?: true
  }

  export type GitHubRepoSumAggregateInputType = {
    id?: true
    projectId?: true
    webHookId?: true
  }

  export type GitHubRepoMinAggregateInputType = {
    id?: true
    name?: true
    url?: true
    createdAt?: true
    updatedAt?: true
    projectId?: true
    webHookId?: true
  }

  export type GitHubRepoMaxAggregateInputType = {
    id?: true
    name?: true
    url?: true
    createdAt?: true
    updatedAt?: true
    projectId?: true
    webHookId?: true
  }

  export type GitHubRepoCountAggregateInputType = {
    id?: true
    name?: true
    url?: true
    createdAt?: true
    updatedAt?: true
    projectId?: true
    webHookId?: true
    _all?: true
  }

  export type GitHubRepoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GitHubRepo to aggregate.
     */
    where?: GitHubRepoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GitHubRepos to fetch.
     */
    orderBy?: GitHubRepoOrderByWithRelationInput | GitHubRepoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GitHubRepoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GitHubRepos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GitHubRepos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GitHubRepos
    **/
    _count?: true | GitHubRepoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GitHubRepoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GitHubRepoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GitHubRepoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GitHubRepoMaxAggregateInputType
  }

  export type GetGitHubRepoAggregateType<T extends GitHubRepoAggregateArgs> = {
        [P in keyof T & keyof AggregateGitHubRepo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGitHubRepo[P]>
      : GetScalarType<T[P], AggregateGitHubRepo[P]>
  }




  export type GitHubRepoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GitHubRepoWhereInput
    orderBy?: GitHubRepoOrderByWithAggregationInput | GitHubRepoOrderByWithAggregationInput[]
    by: GitHubRepoScalarFieldEnum[] | GitHubRepoScalarFieldEnum
    having?: GitHubRepoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GitHubRepoCountAggregateInputType | true
    _avg?: GitHubRepoAvgAggregateInputType
    _sum?: GitHubRepoSumAggregateInputType
    _min?: GitHubRepoMinAggregateInputType
    _max?: GitHubRepoMaxAggregateInputType
  }

  export type GitHubRepoGroupByOutputType = {
    id: number
    name: string
    url: string
    createdAt: Date
    updatedAt: Date
    projectId: number
    webHookId: number | null
    _count: GitHubRepoCountAggregateOutputType | null
    _avg: GitHubRepoAvgAggregateOutputType | null
    _sum: GitHubRepoSumAggregateOutputType | null
    _min: GitHubRepoMinAggregateOutputType | null
    _max: GitHubRepoMaxAggregateOutputType | null
  }

  type GetGitHubRepoGroupByPayload<T extends GitHubRepoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GitHubRepoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GitHubRepoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GitHubRepoGroupByOutputType[P]>
            : GetScalarType<T[P], GitHubRepoGroupByOutputType[P]>
        }
      >
    >


  export type GitHubRepoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    projectId?: boolean
    webHookId?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    GitHubCommit?: boolean | GitHubRepo$GitHubCommitArgs<ExtArgs>
    GitHubCommitGroup?: boolean | GitHubRepo$GitHubCommitGroupArgs<ExtArgs>
    _count?: boolean | GitHubRepoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gitHubRepo"]>

  export type GitHubRepoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    projectId?: boolean
    webHookId?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gitHubRepo"]>

  export type GitHubRepoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    projectId?: boolean
    webHookId?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gitHubRepo"]>

  export type GitHubRepoSelectScalar = {
    id?: boolean
    name?: boolean
    url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    projectId?: boolean
    webHookId?: boolean
  }

  export type GitHubRepoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "url" | "createdAt" | "updatedAt" | "projectId" | "webHookId", ExtArgs["result"]["gitHubRepo"]>
  export type GitHubRepoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    GitHubCommit?: boolean | GitHubRepo$GitHubCommitArgs<ExtArgs>
    GitHubCommitGroup?: boolean | GitHubRepo$GitHubCommitGroupArgs<ExtArgs>
    _count?: boolean | GitHubRepoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GitHubRepoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type GitHubRepoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $GitHubRepoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GitHubRepo"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
      GitHubCommit: Prisma.$GitHubCommitPayload<ExtArgs>[]
      GitHubCommitGroup: Prisma.$GitHubCommitGroupPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      url: string
      createdAt: Date
      updatedAt: Date
      projectId: number
      webHookId: number | null
    }, ExtArgs["result"]["gitHubRepo"]>
    composites: {}
  }

  type GitHubRepoGetPayload<S extends boolean | null | undefined | GitHubRepoDefaultArgs> = $Result.GetResult<Prisma.$GitHubRepoPayload, S>

  type GitHubRepoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GitHubRepoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GitHubRepoCountAggregateInputType | true
    }

  export interface GitHubRepoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GitHubRepo'], meta: { name: 'GitHubRepo' } }
    /**
     * Find zero or one GitHubRepo that matches the filter.
     * @param {GitHubRepoFindUniqueArgs} args - Arguments to find a GitHubRepo
     * @example
     * // Get one GitHubRepo
     * const gitHubRepo = await prisma.gitHubRepo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GitHubRepoFindUniqueArgs>(args: SelectSubset<T, GitHubRepoFindUniqueArgs<ExtArgs>>): Prisma__GitHubRepoClient<$Result.GetResult<Prisma.$GitHubRepoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GitHubRepo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GitHubRepoFindUniqueOrThrowArgs} args - Arguments to find a GitHubRepo
     * @example
     * // Get one GitHubRepo
     * const gitHubRepo = await prisma.gitHubRepo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GitHubRepoFindUniqueOrThrowArgs>(args: SelectSubset<T, GitHubRepoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GitHubRepoClient<$Result.GetResult<Prisma.$GitHubRepoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GitHubRepo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GitHubRepoFindFirstArgs} args - Arguments to find a GitHubRepo
     * @example
     * // Get one GitHubRepo
     * const gitHubRepo = await prisma.gitHubRepo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GitHubRepoFindFirstArgs>(args?: SelectSubset<T, GitHubRepoFindFirstArgs<ExtArgs>>): Prisma__GitHubRepoClient<$Result.GetResult<Prisma.$GitHubRepoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GitHubRepo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GitHubRepoFindFirstOrThrowArgs} args - Arguments to find a GitHubRepo
     * @example
     * // Get one GitHubRepo
     * const gitHubRepo = await prisma.gitHubRepo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GitHubRepoFindFirstOrThrowArgs>(args?: SelectSubset<T, GitHubRepoFindFirstOrThrowArgs<ExtArgs>>): Prisma__GitHubRepoClient<$Result.GetResult<Prisma.$GitHubRepoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GitHubRepos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GitHubRepoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GitHubRepos
     * const gitHubRepos = await prisma.gitHubRepo.findMany()
     * 
     * // Get first 10 GitHubRepos
     * const gitHubRepos = await prisma.gitHubRepo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gitHubRepoWithIdOnly = await prisma.gitHubRepo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GitHubRepoFindManyArgs>(args?: SelectSubset<T, GitHubRepoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GitHubRepoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GitHubRepo.
     * @param {GitHubRepoCreateArgs} args - Arguments to create a GitHubRepo.
     * @example
     * // Create one GitHubRepo
     * const GitHubRepo = await prisma.gitHubRepo.create({
     *   data: {
     *     // ... data to create a GitHubRepo
     *   }
     * })
     * 
     */
    create<T extends GitHubRepoCreateArgs>(args: SelectSubset<T, GitHubRepoCreateArgs<ExtArgs>>): Prisma__GitHubRepoClient<$Result.GetResult<Prisma.$GitHubRepoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GitHubRepos.
     * @param {GitHubRepoCreateManyArgs} args - Arguments to create many GitHubRepos.
     * @example
     * // Create many GitHubRepos
     * const gitHubRepo = await prisma.gitHubRepo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GitHubRepoCreateManyArgs>(args?: SelectSubset<T, GitHubRepoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GitHubRepos and returns the data saved in the database.
     * @param {GitHubRepoCreateManyAndReturnArgs} args - Arguments to create many GitHubRepos.
     * @example
     * // Create many GitHubRepos
     * const gitHubRepo = await prisma.gitHubRepo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GitHubRepos and only return the `id`
     * const gitHubRepoWithIdOnly = await prisma.gitHubRepo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GitHubRepoCreateManyAndReturnArgs>(args?: SelectSubset<T, GitHubRepoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GitHubRepoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GitHubRepo.
     * @param {GitHubRepoDeleteArgs} args - Arguments to delete one GitHubRepo.
     * @example
     * // Delete one GitHubRepo
     * const GitHubRepo = await prisma.gitHubRepo.delete({
     *   where: {
     *     // ... filter to delete one GitHubRepo
     *   }
     * })
     * 
     */
    delete<T extends GitHubRepoDeleteArgs>(args: SelectSubset<T, GitHubRepoDeleteArgs<ExtArgs>>): Prisma__GitHubRepoClient<$Result.GetResult<Prisma.$GitHubRepoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GitHubRepo.
     * @param {GitHubRepoUpdateArgs} args - Arguments to update one GitHubRepo.
     * @example
     * // Update one GitHubRepo
     * const gitHubRepo = await prisma.gitHubRepo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GitHubRepoUpdateArgs>(args: SelectSubset<T, GitHubRepoUpdateArgs<ExtArgs>>): Prisma__GitHubRepoClient<$Result.GetResult<Prisma.$GitHubRepoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GitHubRepos.
     * @param {GitHubRepoDeleteManyArgs} args - Arguments to filter GitHubRepos to delete.
     * @example
     * // Delete a few GitHubRepos
     * const { count } = await prisma.gitHubRepo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GitHubRepoDeleteManyArgs>(args?: SelectSubset<T, GitHubRepoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GitHubRepos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GitHubRepoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GitHubRepos
     * const gitHubRepo = await prisma.gitHubRepo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GitHubRepoUpdateManyArgs>(args: SelectSubset<T, GitHubRepoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GitHubRepos and returns the data updated in the database.
     * @param {GitHubRepoUpdateManyAndReturnArgs} args - Arguments to update many GitHubRepos.
     * @example
     * // Update many GitHubRepos
     * const gitHubRepo = await prisma.gitHubRepo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GitHubRepos and only return the `id`
     * const gitHubRepoWithIdOnly = await prisma.gitHubRepo.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GitHubRepoUpdateManyAndReturnArgs>(args: SelectSubset<T, GitHubRepoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GitHubRepoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GitHubRepo.
     * @param {GitHubRepoUpsertArgs} args - Arguments to update or create a GitHubRepo.
     * @example
     * // Update or create a GitHubRepo
     * const gitHubRepo = await prisma.gitHubRepo.upsert({
     *   create: {
     *     // ... data to create a GitHubRepo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GitHubRepo we want to update
     *   }
     * })
     */
    upsert<T extends GitHubRepoUpsertArgs>(args: SelectSubset<T, GitHubRepoUpsertArgs<ExtArgs>>): Prisma__GitHubRepoClient<$Result.GetResult<Prisma.$GitHubRepoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GitHubRepos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GitHubRepoCountArgs} args - Arguments to filter GitHubRepos to count.
     * @example
     * // Count the number of GitHubRepos
     * const count = await prisma.gitHubRepo.count({
     *   where: {
     *     // ... the filter for the GitHubRepos we want to count
     *   }
     * })
    **/
    count<T extends GitHubRepoCountArgs>(
      args?: Subset<T, GitHubRepoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GitHubRepoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GitHubRepo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GitHubRepoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GitHubRepoAggregateArgs>(args: Subset<T, GitHubRepoAggregateArgs>): Prisma.PrismaPromise<GetGitHubRepoAggregateType<T>>

    /**
     * Group by GitHubRepo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GitHubRepoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GitHubRepoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GitHubRepoGroupByArgs['orderBy'] }
        : { orderBy?: GitHubRepoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GitHubRepoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGitHubRepoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GitHubRepo model
   */
  readonly fields: GitHubRepoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GitHubRepo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GitHubRepoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    GitHubCommit<T extends GitHubRepo$GitHubCommitArgs<ExtArgs> = {}>(args?: Subset<T, GitHubRepo$GitHubCommitArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GitHubCommitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    GitHubCommitGroup<T extends GitHubRepo$GitHubCommitGroupArgs<ExtArgs> = {}>(args?: Subset<T, GitHubRepo$GitHubCommitGroupArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GitHubCommitGroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GitHubRepo model
   */
  interface GitHubRepoFieldRefs {
    readonly id: FieldRef<"GitHubRepo", 'Int'>
    readonly name: FieldRef<"GitHubRepo", 'String'>
    readonly url: FieldRef<"GitHubRepo", 'String'>
    readonly createdAt: FieldRef<"GitHubRepo", 'DateTime'>
    readonly updatedAt: FieldRef<"GitHubRepo", 'DateTime'>
    readonly projectId: FieldRef<"GitHubRepo", 'Int'>
    readonly webHookId: FieldRef<"GitHubRepo", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * GitHubRepo findUnique
   */
  export type GitHubRepoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GitHubRepo
     */
    select?: GitHubRepoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GitHubRepo
     */
    omit?: GitHubRepoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GitHubRepoInclude<ExtArgs> | null
    /**
     * Filter, which GitHubRepo to fetch.
     */
    where: GitHubRepoWhereUniqueInput
  }

  /**
   * GitHubRepo findUniqueOrThrow
   */
  export type GitHubRepoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GitHubRepo
     */
    select?: GitHubRepoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GitHubRepo
     */
    omit?: GitHubRepoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GitHubRepoInclude<ExtArgs> | null
    /**
     * Filter, which GitHubRepo to fetch.
     */
    where: GitHubRepoWhereUniqueInput
  }

  /**
   * GitHubRepo findFirst
   */
  export type GitHubRepoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GitHubRepo
     */
    select?: GitHubRepoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GitHubRepo
     */
    omit?: GitHubRepoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GitHubRepoInclude<ExtArgs> | null
    /**
     * Filter, which GitHubRepo to fetch.
     */
    where?: GitHubRepoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GitHubRepos to fetch.
     */
    orderBy?: GitHubRepoOrderByWithRelationInput | GitHubRepoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GitHubRepos.
     */
    cursor?: GitHubRepoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GitHubRepos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GitHubRepos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GitHubRepos.
     */
    distinct?: GitHubRepoScalarFieldEnum | GitHubRepoScalarFieldEnum[]
  }

  /**
   * GitHubRepo findFirstOrThrow
   */
  export type GitHubRepoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GitHubRepo
     */
    select?: GitHubRepoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GitHubRepo
     */
    omit?: GitHubRepoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GitHubRepoInclude<ExtArgs> | null
    /**
     * Filter, which GitHubRepo to fetch.
     */
    where?: GitHubRepoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GitHubRepos to fetch.
     */
    orderBy?: GitHubRepoOrderByWithRelationInput | GitHubRepoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GitHubRepos.
     */
    cursor?: GitHubRepoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GitHubRepos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GitHubRepos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GitHubRepos.
     */
    distinct?: GitHubRepoScalarFieldEnum | GitHubRepoScalarFieldEnum[]
  }

  /**
   * GitHubRepo findMany
   */
  export type GitHubRepoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GitHubRepo
     */
    select?: GitHubRepoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GitHubRepo
     */
    omit?: GitHubRepoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GitHubRepoInclude<ExtArgs> | null
    /**
     * Filter, which GitHubRepos to fetch.
     */
    where?: GitHubRepoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GitHubRepos to fetch.
     */
    orderBy?: GitHubRepoOrderByWithRelationInput | GitHubRepoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GitHubRepos.
     */
    cursor?: GitHubRepoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GitHubRepos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GitHubRepos.
     */
    skip?: number
    distinct?: GitHubRepoScalarFieldEnum | GitHubRepoScalarFieldEnum[]
  }

  /**
   * GitHubRepo create
   */
  export type GitHubRepoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GitHubRepo
     */
    select?: GitHubRepoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GitHubRepo
     */
    omit?: GitHubRepoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GitHubRepoInclude<ExtArgs> | null
    /**
     * The data needed to create a GitHubRepo.
     */
    data: XOR<GitHubRepoCreateInput, GitHubRepoUncheckedCreateInput>
  }

  /**
   * GitHubRepo createMany
   */
  export type GitHubRepoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GitHubRepos.
     */
    data: GitHubRepoCreateManyInput | GitHubRepoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GitHubRepo createManyAndReturn
   */
  export type GitHubRepoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GitHubRepo
     */
    select?: GitHubRepoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GitHubRepo
     */
    omit?: GitHubRepoOmit<ExtArgs> | null
    /**
     * The data used to create many GitHubRepos.
     */
    data: GitHubRepoCreateManyInput | GitHubRepoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GitHubRepoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GitHubRepo update
   */
  export type GitHubRepoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GitHubRepo
     */
    select?: GitHubRepoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GitHubRepo
     */
    omit?: GitHubRepoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GitHubRepoInclude<ExtArgs> | null
    /**
     * The data needed to update a GitHubRepo.
     */
    data: XOR<GitHubRepoUpdateInput, GitHubRepoUncheckedUpdateInput>
    /**
     * Choose, which GitHubRepo to update.
     */
    where: GitHubRepoWhereUniqueInput
  }

  /**
   * GitHubRepo updateMany
   */
  export type GitHubRepoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GitHubRepos.
     */
    data: XOR<GitHubRepoUpdateManyMutationInput, GitHubRepoUncheckedUpdateManyInput>
    /**
     * Filter which GitHubRepos to update
     */
    where?: GitHubRepoWhereInput
    /**
     * Limit how many GitHubRepos to update.
     */
    limit?: number
  }

  /**
   * GitHubRepo updateManyAndReturn
   */
  export type GitHubRepoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GitHubRepo
     */
    select?: GitHubRepoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GitHubRepo
     */
    omit?: GitHubRepoOmit<ExtArgs> | null
    /**
     * The data used to update GitHubRepos.
     */
    data: XOR<GitHubRepoUpdateManyMutationInput, GitHubRepoUncheckedUpdateManyInput>
    /**
     * Filter which GitHubRepos to update
     */
    where?: GitHubRepoWhereInput
    /**
     * Limit how many GitHubRepos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GitHubRepoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GitHubRepo upsert
   */
  export type GitHubRepoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GitHubRepo
     */
    select?: GitHubRepoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GitHubRepo
     */
    omit?: GitHubRepoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GitHubRepoInclude<ExtArgs> | null
    /**
     * The filter to search for the GitHubRepo to update in case it exists.
     */
    where: GitHubRepoWhereUniqueInput
    /**
     * In case the GitHubRepo found by the `where` argument doesn't exist, create a new GitHubRepo with this data.
     */
    create: XOR<GitHubRepoCreateInput, GitHubRepoUncheckedCreateInput>
    /**
     * In case the GitHubRepo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GitHubRepoUpdateInput, GitHubRepoUncheckedUpdateInput>
  }

  /**
   * GitHubRepo delete
   */
  export type GitHubRepoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GitHubRepo
     */
    select?: GitHubRepoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GitHubRepo
     */
    omit?: GitHubRepoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GitHubRepoInclude<ExtArgs> | null
    /**
     * Filter which GitHubRepo to delete.
     */
    where: GitHubRepoWhereUniqueInput
  }

  /**
   * GitHubRepo deleteMany
   */
  export type GitHubRepoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GitHubRepos to delete
     */
    where?: GitHubRepoWhereInput
    /**
     * Limit how many GitHubRepos to delete.
     */
    limit?: number
  }

  /**
   * GitHubRepo.GitHubCommit
   */
  export type GitHubRepo$GitHubCommitArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GitHubCommit
     */
    select?: GitHubCommitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GitHubCommit
     */
    omit?: GitHubCommitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GitHubCommitInclude<ExtArgs> | null
    where?: GitHubCommitWhereInput
    orderBy?: GitHubCommitOrderByWithRelationInput | GitHubCommitOrderByWithRelationInput[]
    cursor?: GitHubCommitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GitHubCommitScalarFieldEnum | GitHubCommitScalarFieldEnum[]
  }

  /**
   * GitHubRepo.GitHubCommitGroup
   */
  export type GitHubRepo$GitHubCommitGroupArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GitHubCommitGroup
     */
    select?: GitHubCommitGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GitHubCommitGroup
     */
    omit?: GitHubCommitGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GitHubCommitGroupInclude<ExtArgs> | null
    where?: GitHubCommitGroupWhereInput
    orderBy?: GitHubCommitGroupOrderByWithRelationInput | GitHubCommitGroupOrderByWithRelationInput[]
    cursor?: GitHubCommitGroupWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GitHubCommitGroupScalarFieldEnum | GitHubCommitGroupScalarFieldEnum[]
  }

  /**
   * GitHubRepo without action
   */
  export type GitHubRepoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GitHubRepo
     */
    select?: GitHubRepoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GitHubRepo
     */
    omit?: GitHubRepoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GitHubRepoInclude<ExtArgs> | null
  }


  /**
   * Model GitHubCommit
   */

  export type AggregateGitHubCommit = {
    _count: GitHubCommitCountAggregateOutputType | null
    _avg: GitHubCommitAvgAggregateOutputType | null
    _sum: GitHubCommitSumAggregateOutputType | null
    _min: GitHubCommitMinAggregateOutputType | null
    _max: GitHubCommitMaxAggregateOutputType | null
  }

  export type GitHubCommitAvgAggregateOutputType = {
    id: number | null
    repoId: number | null
    userId: number | null
    gitHubCommitGroupId: number | null
  }

  export type GitHubCommitSumAggregateOutputType = {
    id: number | null
    repoId: number | null
    userId: number | null
    gitHubCommitGroupId: number | null
  }

  export type GitHubCommitMinAggregateOutputType = {
    id: number | null
    repoId: number | null
    userId: number | null
    commitDate: Date | null
    timing: Date | null
    message: string | null
    gitHubCommitGroupId: number | null
  }

  export type GitHubCommitMaxAggregateOutputType = {
    id: number | null
    repoId: number | null
    userId: number | null
    commitDate: Date | null
    timing: Date | null
    message: string | null
    gitHubCommitGroupId: number | null
  }

  export type GitHubCommitCountAggregateOutputType = {
    id: number
    repoId: number
    userId: number
    commitDate: number
    timing: number
    message: number
    gitHubCommitGroupId: number
    _all: number
  }


  export type GitHubCommitAvgAggregateInputType = {
    id?: true
    repoId?: true
    userId?: true
    gitHubCommitGroupId?: true
  }

  export type GitHubCommitSumAggregateInputType = {
    id?: true
    repoId?: true
    userId?: true
    gitHubCommitGroupId?: true
  }

  export type GitHubCommitMinAggregateInputType = {
    id?: true
    repoId?: true
    userId?: true
    commitDate?: true
    timing?: true
    message?: true
    gitHubCommitGroupId?: true
  }

  export type GitHubCommitMaxAggregateInputType = {
    id?: true
    repoId?: true
    userId?: true
    commitDate?: true
    timing?: true
    message?: true
    gitHubCommitGroupId?: true
  }

  export type GitHubCommitCountAggregateInputType = {
    id?: true
    repoId?: true
    userId?: true
    commitDate?: true
    timing?: true
    message?: true
    gitHubCommitGroupId?: true
    _all?: true
  }

  export type GitHubCommitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GitHubCommit to aggregate.
     */
    where?: GitHubCommitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GitHubCommits to fetch.
     */
    orderBy?: GitHubCommitOrderByWithRelationInput | GitHubCommitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GitHubCommitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GitHubCommits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GitHubCommits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GitHubCommits
    **/
    _count?: true | GitHubCommitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GitHubCommitAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GitHubCommitSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GitHubCommitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GitHubCommitMaxAggregateInputType
  }

  export type GetGitHubCommitAggregateType<T extends GitHubCommitAggregateArgs> = {
        [P in keyof T & keyof AggregateGitHubCommit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGitHubCommit[P]>
      : GetScalarType<T[P], AggregateGitHubCommit[P]>
  }




  export type GitHubCommitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GitHubCommitWhereInput
    orderBy?: GitHubCommitOrderByWithAggregationInput | GitHubCommitOrderByWithAggregationInput[]
    by: GitHubCommitScalarFieldEnum[] | GitHubCommitScalarFieldEnum
    having?: GitHubCommitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GitHubCommitCountAggregateInputType | true
    _avg?: GitHubCommitAvgAggregateInputType
    _sum?: GitHubCommitSumAggregateInputType
    _min?: GitHubCommitMinAggregateInputType
    _max?: GitHubCommitMaxAggregateInputType
  }

  export type GitHubCommitGroupByOutputType = {
    id: number
    repoId: number
    userId: number
    commitDate: Date
    timing: Date
    message: string
    gitHubCommitGroupId: number | null
    _count: GitHubCommitCountAggregateOutputType | null
    _avg: GitHubCommitAvgAggregateOutputType | null
    _sum: GitHubCommitSumAggregateOutputType | null
    _min: GitHubCommitMinAggregateOutputType | null
    _max: GitHubCommitMaxAggregateOutputType | null
  }

  type GetGitHubCommitGroupByPayload<T extends GitHubCommitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GitHubCommitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GitHubCommitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GitHubCommitGroupByOutputType[P]>
            : GetScalarType<T[P], GitHubCommitGroupByOutputType[P]>
        }
      >
    >


  export type GitHubCommitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    repoId?: boolean
    userId?: boolean
    commitDate?: boolean
    timing?: boolean
    message?: boolean
    gitHubCommitGroupId?: boolean
    repo?: boolean | GitHubRepoDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    GitHubCommitGroup?: boolean | GitHubCommit$GitHubCommitGroupArgs<ExtArgs>
  }, ExtArgs["result"]["gitHubCommit"]>

  export type GitHubCommitSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    repoId?: boolean
    userId?: boolean
    commitDate?: boolean
    timing?: boolean
    message?: boolean
    gitHubCommitGroupId?: boolean
    repo?: boolean | GitHubRepoDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    GitHubCommitGroup?: boolean | GitHubCommit$GitHubCommitGroupArgs<ExtArgs>
  }, ExtArgs["result"]["gitHubCommit"]>

  export type GitHubCommitSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    repoId?: boolean
    userId?: boolean
    commitDate?: boolean
    timing?: boolean
    message?: boolean
    gitHubCommitGroupId?: boolean
    repo?: boolean | GitHubRepoDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    GitHubCommitGroup?: boolean | GitHubCommit$GitHubCommitGroupArgs<ExtArgs>
  }, ExtArgs["result"]["gitHubCommit"]>

  export type GitHubCommitSelectScalar = {
    id?: boolean
    repoId?: boolean
    userId?: boolean
    commitDate?: boolean
    timing?: boolean
    message?: boolean
    gitHubCommitGroupId?: boolean
  }

  export type GitHubCommitOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "repoId" | "userId" | "commitDate" | "timing" | "message" | "gitHubCommitGroupId", ExtArgs["result"]["gitHubCommit"]>
  export type GitHubCommitInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    repo?: boolean | GitHubRepoDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    GitHubCommitGroup?: boolean | GitHubCommit$GitHubCommitGroupArgs<ExtArgs>
  }
  export type GitHubCommitIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    repo?: boolean | GitHubRepoDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    GitHubCommitGroup?: boolean | GitHubCommit$GitHubCommitGroupArgs<ExtArgs>
  }
  export type GitHubCommitIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    repo?: boolean | GitHubRepoDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    GitHubCommitGroup?: boolean | GitHubCommit$GitHubCommitGroupArgs<ExtArgs>
  }

  export type $GitHubCommitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GitHubCommit"
    objects: {
      repo: Prisma.$GitHubRepoPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      GitHubCommitGroup: Prisma.$GitHubCommitGroupPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      repoId: number
      userId: number
      commitDate: Date
      timing: Date
      message: string
      gitHubCommitGroupId: number | null
    }, ExtArgs["result"]["gitHubCommit"]>
    composites: {}
  }

  type GitHubCommitGetPayload<S extends boolean | null | undefined | GitHubCommitDefaultArgs> = $Result.GetResult<Prisma.$GitHubCommitPayload, S>

  type GitHubCommitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GitHubCommitFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GitHubCommitCountAggregateInputType | true
    }

  export interface GitHubCommitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GitHubCommit'], meta: { name: 'GitHubCommit' } }
    /**
     * Find zero or one GitHubCommit that matches the filter.
     * @param {GitHubCommitFindUniqueArgs} args - Arguments to find a GitHubCommit
     * @example
     * // Get one GitHubCommit
     * const gitHubCommit = await prisma.gitHubCommit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GitHubCommitFindUniqueArgs>(args: SelectSubset<T, GitHubCommitFindUniqueArgs<ExtArgs>>): Prisma__GitHubCommitClient<$Result.GetResult<Prisma.$GitHubCommitPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GitHubCommit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GitHubCommitFindUniqueOrThrowArgs} args - Arguments to find a GitHubCommit
     * @example
     * // Get one GitHubCommit
     * const gitHubCommit = await prisma.gitHubCommit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GitHubCommitFindUniqueOrThrowArgs>(args: SelectSubset<T, GitHubCommitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GitHubCommitClient<$Result.GetResult<Prisma.$GitHubCommitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GitHubCommit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GitHubCommitFindFirstArgs} args - Arguments to find a GitHubCommit
     * @example
     * // Get one GitHubCommit
     * const gitHubCommit = await prisma.gitHubCommit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GitHubCommitFindFirstArgs>(args?: SelectSubset<T, GitHubCommitFindFirstArgs<ExtArgs>>): Prisma__GitHubCommitClient<$Result.GetResult<Prisma.$GitHubCommitPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GitHubCommit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GitHubCommitFindFirstOrThrowArgs} args - Arguments to find a GitHubCommit
     * @example
     * // Get one GitHubCommit
     * const gitHubCommit = await prisma.gitHubCommit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GitHubCommitFindFirstOrThrowArgs>(args?: SelectSubset<T, GitHubCommitFindFirstOrThrowArgs<ExtArgs>>): Prisma__GitHubCommitClient<$Result.GetResult<Prisma.$GitHubCommitPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GitHubCommits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GitHubCommitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GitHubCommits
     * const gitHubCommits = await prisma.gitHubCommit.findMany()
     * 
     * // Get first 10 GitHubCommits
     * const gitHubCommits = await prisma.gitHubCommit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gitHubCommitWithIdOnly = await prisma.gitHubCommit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GitHubCommitFindManyArgs>(args?: SelectSubset<T, GitHubCommitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GitHubCommitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GitHubCommit.
     * @param {GitHubCommitCreateArgs} args - Arguments to create a GitHubCommit.
     * @example
     * // Create one GitHubCommit
     * const GitHubCommit = await prisma.gitHubCommit.create({
     *   data: {
     *     // ... data to create a GitHubCommit
     *   }
     * })
     * 
     */
    create<T extends GitHubCommitCreateArgs>(args: SelectSubset<T, GitHubCommitCreateArgs<ExtArgs>>): Prisma__GitHubCommitClient<$Result.GetResult<Prisma.$GitHubCommitPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GitHubCommits.
     * @param {GitHubCommitCreateManyArgs} args - Arguments to create many GitHubCommits.
     * @example
     * // Create many GitHubCommits
     * const gitHubCommit = await prisma.gitHubCommit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GitHubCommitCreateManyArgs>(args?: SelectSubset<T, GitHubCommitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GitHubCommits and returns the data saved in the database.
     * @param {GitHubCommitCreateManyAndReturnArgs} args - Arguments to create many GitHubCommits.
     * @example
     * // Create many GitHubCommits
     * const gitHubCommit = await prisma.gitHubCommit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GitHubCommits and only return the `id`
     * const gitHubCommitWithIdOnly = await prisma.gitHubCommit.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GitHubCommitCreateManyAndReturnArgs>(args?: SelectSubset<T, GitHubCommitCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GitHubCommitPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GitHubCommit.
     * @param {GitHubCommitDeleteArgs} args - Arguments to delete one GitHubCommit.
     * @example
     * // Delete one GitHubCommit
     * const GitHubCommit = await prisma.gitHubCommit.delete({
     *   where: {
     *     // ... filter to delete one GitHubCommit
     *   }
     * })
     * 
     */
    delete<T extends GitHubCommitDeleteArgs>(args: SelectSubset<T, GitHubCommitDeleteArgs<ExtArgs>>): Prisma__GitHubCommitClient<$Result.GetResult<Prisma.$GitHubCommitPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GitHubCommit.
     * @param {GitHubCommitUpdateArgs} args - Arguments to update one GitHubCommit.
     * @example
     * // Update one GitHubCommit
     * const gitHubCommit = await prisma.gitHubCommit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GitHubCommitUpdateArgs>(args: SelectSubset<T, GitHubCommitUpdateArgs<ExtArgs>>): Prisma__GitHubCommitClient<$Result.GetResult<Prisma.$GitHubCommitPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GitHubCommits.
     * @param {GitHubCommitDeleteManyArgs} args - Arguments to filter GitHubCommits to delete.
     * @example
     * // Delete a few GitHubCommits
     * const { count } = await prisma.gitHubCommit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GitHubCommitDeleteManyArgs>(args?: SelectSubset<T, GitHubCommitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GitHubCommits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GitHubCommitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GitHubCommits
     * const gitHubCommit = await prisma.gitHubCommit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GitHubCommitUpdateManyArgs>(args: SelectSubset<T, GitHubCommitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GitHubCommits and returns the data updated in the database.
     * @param {GitHubCommitUpdateManyAndReturnArgs} args - Arguments to update many GitHubCommits.
     * @example
     * // Update many GitHubCommits
     * const gitHubCommit = await prisma.gitHubCommit.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GitHubCommits and only return the `id`
     * const gitHubCommitWithIdOnly = await prisma.gitHubCommit.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GitHubCommitUpdateManyAndReturnArgs>(args: SelectSubset<T, GitHubCommitUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GitHubCommitPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GitHubCommit.
     * @param {GitHubCommitUpsertArgs} args - Arguments to update or create a GitHubCommit.
     * @example
     * // Update or create a GitHubCommit
     * const gitHubCommit = await prisma.gitHubCommit.upsert({
     *   create: {
     *     // ... data to create a GitHubCommit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GitHubCommit we want to update
     *   }
     * })
     */
    upsert<T extends GitHubCommitUpsertArgs>(args: SelectSubset<T, GitHubCommitUpsertArgs<ExtArgs>>): Prisma__GitHubCommitClient<$Result.GetResult<Prisma.$GitHubCommitPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GitHubCommits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GitHubCommitCountArgs} args - Arguments to filter GitHubCommits to count.
     * @example
     * // Count the number of GitHubCommits
     * const count = await prisma.gitHubCommit.count({
     *   where: {
     *     // ... the filter for the GitHubCommits we want to count
     *   }
     * })
    **/
    count<T extends GitHubCommitCountArgs>(
      args?: Subset<T, GitHubCommitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GitHubCommitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GitHubCommit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GitHubCommitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GitHubCommitAggregateArgs>(args: Subset<T, GitHubCommitAggregateArgs>): Prisma.PrismaPromise<GetGitHubCommitAggregateType<T>>

    /**
     * Group by GitHubCommit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GitHubCommitGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GitHubCommitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GitHubCommitGroupByArgs['orderBy'] }
        : { orderBy?: GitHubCommitGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GitHubCommitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGitHubCommitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GitHubCommit model
   */
  readonly fields: GitHubCommitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GitHubCommit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GitHubCommitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    repo<T extends GitHubRepoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GitHubRepoDefaultArgs<ExtArgs>>): Prisma__GitHubRepoClient<$Result.GetResult<Prisma.$GitHubRepoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    GitHubCommitGroup<T extends GitHubCommit$GitHubCommitGroupArgs<ExtArgs> = {}>(args?: Subset<T, GitHubCommit$GitHubCommitGroupArgs<ExtArgs>>): Prisma__GitHubCommitGroupClient<$Result.GetResult<Prisma.$GitHubCommitGroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GitHubCommit model
   */
  interface GitHubCommitFieldRefs {
    readonly id: FieldRef<"GitHubCommit", 'Int'>
    readonly repoId: FieldRef<"GitHubCommit", 'Int'>
    readonly userId: FieldRef<"GitHubCommit", 'Int'>
    readonly commitDate: FieldRef<"GitHubCommit", 'DateTime'>
    readonly timing: FieldRef<"GitHubCommit", 'DateTime'>
    readonly message: FieldRef<"GitHubCommit", 'String'>
    readonly gitHubCommitGroupId: FieldRef<"GitHubCommit", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * GitHubCommit findUnique
   */
  export type GitHubCommitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GitHubCommit
     */
    select?: GitHubCommitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GitHubCommit
     */
    omit?: GitHubCommitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GitHubCommitInclude<ExtArgs> | null
    /**
     * Filter, which GitHubCommit to fetch.
     */
    where: GitHubCommitWhereUniqueInput
  }

  /**
   * GitHubCommit findUniqueOrThrow
   */
  export type GitHubCommitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GitHubCommit
     */
    select?: GitHubCommitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GitHubCommit
     */
    omit?: GitHubCommitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GitHubCommitInclude<ExtArgs> | null
    /**
     * Filter, which GitHubCommit to fetch.
     */
    where: GitHubCommitWhereUniqueInput
  }

  /**
   * GitHubCommit findFirst
   */
  export type GitHubCommitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GitHubCommit
     */
    select?: GitHubCommitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GitHubCommit
     */
    omit?: GitHubCommitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GitHubCommitInclude<ExtArgs> | null
    /**
     * Filter, which GitHubCommit to fetch.
     */
    where?: GitHubCommitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GitHubCommits to fetch.
     */
    orderBy?: GitHubCommitOrderByWithRelationInput | GitHubCommitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GitHubCommits.
     */
    cursor?: GitHubCommitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GitHubCommits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GitHubCommits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GitHubCommits.
     */
    distinct?: GitHubCommitScalarFieldEnum | GitHubCommitScalarFieldEnum[]
  }

  /**
   * GitHubCommit findFirstOrThrow
   */
  export type GitHubCommitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GitHubCommit
     */
    select?: GitHubCommitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GitHubCommit
     */
    omit?: GitHubCommitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GitHubCommitInclude<ExtArgs> | null
    /**
     * Filter, which GitHubCommit to fetch.
     */
    where?: GitHubCommitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GitHubCommits to fetch.
     */
    orderBy?: GitHubCommitOrderByWithRelationInput | GitHubCommitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GitHubCommits.
     */
    cursor?: GitHubCommitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GitHubCommits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GitHubCommits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GitHubCommits.
     */
    distinct?: GitHubCommitScalarFieldEnum | GitHubCommitScalarFieldEnum[]
  }

  /**
   * GitHubCommit findMany
   */
  export type GitHubCommitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GitHubCommit
     */
    select?: GitHubCommitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GitHubCommit
     */
    omit?: GitHubCommitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GitHubCommitInclude<ExtArgs> | null
    /**
     * Filter, which GitHubCommits to fetch.
     */
    where?: GitHubCommitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GitHubCommits to fetch.
     */
    orderBy?: GitHubCommitOrderByWithRelationInput | GitHubCommitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GitHubCommits.
     */
    cursor?: GitHubCommitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GitHubCommits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GitHubCommits.
     */
    skip?: number
    distinct?: GitHubCommitScalarFieldEnum | GitHubCommitScalarFieldEnum[]
  }

  /**
   * GitHubCommit create
   */
  export type GitHubCommitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GitHubCommit
     */
    select?: GitHubCommitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GitHubCommit
     */
    omit?: GitHubCommitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GitHubCommitInclude<ExtArgs> | null
    /**
     * The data needed to create a GitHubCommit.
     */
    data: XOR<GitHubCommitCreateInput, GitHubCommitUncheckedCreateInput>
  }

  /**
   * GitHubCommit createMany
   */
  export type GitHubCommitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GitHubCommits.
     */
    data: GitHubCommitCreateManyInput | GitHubCommitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GitHubCommit createManyAndReturn
   */
  export type GitHubCommitCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GitHubCommit
     */
    select?: GitHubCommitSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GitHubCommit
     */
    omit?: GitHubCommitOmit<ExtArgs> | null
    /**
     * The data used to create many GitHubCommits.
     */
    data: GitHubCommitCreateManyInput | GitHubCommitCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GitHubCommitIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GitHubCommit update
   */
  export type GitHubCommitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GitHubCommit
     */
    select?: GitHubCommitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GitHubCommit
     */
    omit?: GitHubCommitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GitHubCommitInclude<ExtArgs> | null
    /**
     * The data needed to update a GitHubCommit.
     */
    data: XOR<GitHubCommitUpdateInput, GitHubCommitUncheckedUpdateInput>
    /**
     * Choose, which GitHubCommit to update.
     */
    where: GitHubCommitWhereUniqueInput
  }

  /**
   * GitHubCommit updateMany
   */
  export type GitHubCommitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GitHubCommits.
     */
    data: XOR<GitHubCommitUpdateManyMutationInput, GitHubCommitUncheckedUpdateManyInput>
    /**
     * Filter which GitHubCommits to update
     */
    where?: GitHubCommitWhereInput
    /**
     * Limit how many GitHubCommits to update.
     */
    limit?: number
  }

  /**
   * GitHubCommit updateManyAndReturn
   */
  export type GitHubCommitUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GitHubCommit
     */
    select?: GitHubCommitSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GitHubCommit
     */
    omit?: GitHubCommitOmit<ExtArgs> | null
    /**
     * The data used to update GitHubCommits.
     */
    data: XOR<GitHubCommitUpdateManyMutationInput, GitHubCommitUncheckedUpdateManyInput>
    /**
     * Filter which GitHubCommits to update
     */
    where?: GitHubCommitWhereInput
    /**
     * Limit how many GitHubCommits to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GitHubCommitIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GitHubCommit upsert
   */
  export type GitHubCommitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GitHubCommit
     */
    select?: GitHubCommitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GitHubCommit
     */
    omit?: GitHubCommitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GitHubCommitInclude<ExtArgs> | null
    /**
     * The filter to search for the GitHubCommit to update in case it exists.
     */
    where: GitHubCommitWhereUniqueInput
    /**
     * In case the GitHubCommit found by the `where` argument doesn't exist, create a new GitHubCommit with this data.
     */
    create: XOR<GitHubCommitCreateInput, GitHubCommitUncheckedCreateInput>
    /**
     * In case the GitHubCommit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GitHubCommitUpdateInput, GitHubCommitUncheckedUpdateInput>
  }

  /**
   * GitHubCommit delete
   */
  export type GitHubCommitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GitHubCommit
     */
    select?: GitHubCommitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GitHubCommit
     */
    omit?: GitHubCommitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GitHubCommitInclude<ExtArgs> | null
    /**
     * Filter which GitHubCommit to delete.
     */
    where: GitHubCommitWhereUniqueInput
  }

  /**
   * GitHubCommit deleteMany
   */
  export type GitHubCommitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GitHubCommits to delete
     */
    where?: GitHubCommitWhereInput
    /**
     * Limit how many GitHubCommits to delete.
     */
    limit?: number
  }

  /**
   * GitHubCommit.GitHubCommitGroup
   */
  export type GitHubCommit$GitHubCommitGroupArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GitHubCommitGroup
     */
    select?: GitHubCommitGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GitHubCommitGroup
     */
    omit?: GitHubCommitGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GitHubCommitGroupInclude<ExtArgs> | null
    where?: GitHubCommitGroupWhereInput
  }

  /**
   * GitHubCommit without action
   */
  export type GitHubCommitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GitHubCommit
     */
    select?: GitHubCommitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GitHubCommit
     */
    omit?: GitHubCommitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GitHubCommitInclude<ExtArgs> | null
  }


  /**
   * Model GitHubCommitGroup
   */

  export type AggregateGitHubCommitGroup = {
    _count: GitHubCommitGroupCountAggregateOutputType | null
    _avg: GitHubCommitGroupAvgAggregateOutputType | null
    _sum: GitHubCommitGroupSumAggregateOutputType | null
    _min: GitHubCommitGroupMinAggregateOutputType | null
    _max: GitHubCommitGroupMaxAggregateOutputType | null
  }

  export type GitHubCommitGroupAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    repoId: number | null
  }

  export type GitHubCommitGroupSumAggregateOutputType = {
    id: number | null
    userId: number | null
    repoId: number | null
  }

  export type GitHubCommitGroupMinAggregateOutputType = {
    id: number | null
    userId: number | null
    repoId: number | null
  }

  export type GitHubCommitGroupMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    repoId: number | null
  }

  export type GitHubCommitGroupCountAggregateOutputType = {
    id: number
    userId: number
    repoId: number
    _all: number
  }


  export type GitHubCommitGroupAvgAggregateInputType = {
    id?: true
    userId?: true
    repoId?: true
  }

  export type GitHubCommitGroupSumAggregateInputType = {
    id?: true
    userId?: true
    repoId?: true
  }

  export type GitHubCommitGroupMinAggregateInputType = {
    id?: true
    userId?: true
    repoId?: true
  }

  export type GitHubCommitGroupMaxAggregateInputType = {
    id?: true
    userId?: true
    repoId?: true
  }

  export type GitHubCommitGroupCountAggregateInputType = {
    id?: true
    userId?: true
    repoId?: true
    _all?: true
  }

  export type GitHubCommitGroupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GitHubCommitGroup to aggregate.
     */
    where?: GitHubCommitGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GitHubCommitGroups to fetch.
     */
    orderBy?: GitHubCommitGroupOrderByWithRelationInput | GitHubCommitGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GitHubCommitGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GitHubCommitGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GitHubCommitGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GitHubCommitGroups
    **/
    _count?: true | GitHubCommitGroupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GitHubCommitGroupAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GitHubCommitGroupSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GitHubCommitGroupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GitHubCommitGroupMaxAggregateInputType
  }

  export type GetGitHubCommitGroupAggregateType<T extends GitHubCommitGroupAggregateArgs> = {
        [P in keyof T & keyof AggregateGitHubCommitGroup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGitHubCommitGroup[P]>
      : GetScalarType<T[P], AggregateGitHubCommitGroup[P]>
  }




  export type GitHubCommitGroupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GitHubCommitGroupWhereInput
    orderBy?: GitHubCommitGroupOrderByWithAggregationInput | GitHubCommitGroupOrderByWithAggregationInput[]
    by: GitHubCommitGroupScalarFieldEnum[] | GitHubCommitGroupScalarFieldEnum
    having?: GitHubCommitGroupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GitHubCommitGroupCountAggregateInputType | true
    _avg?: GitHubCommitGroupAvgAggregateInputType
    _sum?: GitHubCommitGroupSumAggregateInputType
    _min?: GitHubCommitGroupMinAggregateInputType
    _max?: GitHubCommitGroupMaxAggregateInputType
  }

  export type GitHubCommitGroupGroupByOutputType = {
    id: number
    userId: number
    repoId: number
    _count: GitHubCommitGroupCountAggregateOutputType | null
    _avg: GitHubCommitGroupAvgAggregateOutputType | null
    _sum: GitHubCommitGroupSumAggregateOutputType | null
    _min: GitHubCommitGroupMinAggregateOutputType | null
    _max: GitHubCommitGroupMaxAggregateOutputType | null
  }

  type GetGitHubCommitGroupGroupByPayload<T extends GitHubCommitGroupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GitHubCommitGroupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GitHubCommitGroupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GitHubCommitGroupGroupByOutputType[P]>
            : GetScalarType<T[P], GitHubCommitGroupGroupByOutputType[P]>
        }
      >
    >


  export type GitHubCommitGroupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    repoId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    repo?: boolean | GitHubRepoDefaultArgs<ExtArgs>
    commits?: boolean | GitHubCommitGroup$commitsArgs<ExtArgs>
    _count?: boolean | GitHubCommitGroupCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gitHubCommitGroup"]>

  export type GitHubCommitGroupSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    repoId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    repo?: boolean | GitHubRepoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gitHubCommitGroup"]>

  export type GitHubCommitGroupSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    repoId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    repo?: boolean | GitHubRepoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gitHubCommitGroup"]>

  export type GitHubCommitGroupSelectScalar = {
    id?: boolean
    userId?: boolean
    repoId?: boolean
  }

  export type GitHubCommitGroupOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "repoId", ExtArgs["result"]["gitHubCommitGroup"]>
  export type GitHubCommitGroupInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    repo?: boolean | GitHubRepoDefaultArgs<ExtArgs>
    commits?: boolean | GitHubCommitGroup$commitsArgs<ExtArgs>
    _count?: boolean | GitHubCommitGroupCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GitHubCommitGroupIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    repo?: boolean | GitHubRepoDefaultArgs<ExtArgs>
  }
  export type GitHubCommitGroupIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    repo?: boolean | GitHubRepoDefaultArgs<ExtArgs>
  }

  export type $GitHubCommitGroupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GitHubCommitGroup"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      repo: Prisma.$GitHubRepoPayload<ExtArgs>
      commits: Prisma.$GitHubCommitPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      repoId: number
    }, ExtArgs["result"]["gitHubCommitGroup"]>
    composites: {}
  }

  type GitHubCommitGroupGetPayload<S extends boolean | null | undefined | GitHubCommitGroupDefaultArgs> = $Result.GetResult<Prisma.$GitHubCommitGroupPayload, S>

  type GitHubCommitGroupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GitHubCommitGroupFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GitHubCommitGroupCountAggregateInputType | true
    }

  export interface GitHubCommitGroupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GitHubCommitGroup'], meta: { name: 'GitHubCommitGroup' } }
    /**
     * Find zero or one GitHubCommitGroup that matches the filter.
     * @param {GitHubCommitGroupFindUniqueArgs} args - Arguments to find a GitHubCommitGroup
     * @example
     * // Get one GitHubCommitGroup
     * const gitHubCommitGroup = await prisma.gitHubCommitGroup.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GitHubCommitGroupFindUniqueArgs>(args: SelectSubset<T, GitHubCommitGroupFindUniqueArgs<ExtArgs>>): Prisma__GitHubCommitGroupClient<$Result.GetResult<Prisma.$GitHubCommitGroupPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GitHubCommitGroup that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GitHubCommitGroupFindUniqueOrThrowArgs} args - Arguments to find a GitHubCommitGroup
     * @example
     * // Get one GitHubCommitGroup
     * const gitHubCommitGroup = await prisma.gitHubCommitGroup.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GitHubCommitGroupFindUniqueOrThrowArgs>(args: SelectSubset<T, GitHubCommitGroupFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GitHubCommitGroupClient<$Result.GetResult<Prisma.$GitHubCommitGroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GitHubCommitGroup that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GitHubCommitGroupFindFirstArgs} args - Arguments to find a GitHubCommitGroup
     * @example
     * // Get one GitHubCommitGroup
     * const gitHubCommitGroup = await prisma.gitHubCommitGroup.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GitHubCommitGroupFindFirstArgs>(args?: SelectSubset<T, GitHubCommitGroupFindFirstArgs<ExtArgs>>): Prisma__GitHubCommitGroupClient<$Result.GetResult<Prisma.$GitHubCommitGroupPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GitHubCommitGroup that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GitHubCommitGroupFindFirstOrThrowArgs} args - Arguments to find a GitHubCommitGroup
     * @example
     * // Get one GitHubCommitGroup
     * const gitHubCommitGroup = await prisma.gitHubCommitGroup.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GitHubCommitGroupFindFirstOrThrowArgs>(args?: SelectSubset<T, GitHubCommitGroupFindFirstOrThrowArgs<ExtArgs>>): Prisma__GitHubCommitGroupClient<$Result.GetResult<Prisma.$GitHubCommitGroupPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GitHubCommitGroups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GitHubCommitGroupFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GitHubCommitGroups
     * const gitHubCommitGroups = await prisma.gitHubCommitGroup.findMany()
     * 
     * // Get first 10 GitHubCommitGroups
     * const gitHubCommitGroups = await prisma.gitHubCommitGroup.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gitHubCommitGroupWithIdOnly = await prisma.gitHubCommitGroup.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GitHubCommitGroupFindManyArgs>(args?: SelectSubset<T, GitHubCommitGroupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GitHubCommitGroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GitHubCommitGroup.
     * @param {GitHubCommitGroupCreateArgs} args - Arguments to create a GitHubCommitGroup.
     * @example
     * // Create one GitHubCommitGroup
     * const GitHubCommitGroup = await prisma.gitHubCommitGroup.create({
     *   data: {
     *     // ... data to create a GitHubCommitGroup
     *   }
     * })
     * 
     */
    create<T extends GitHubCommitGroupCreateArgs>(args: SelectSubset<T, GitHubCommitGroupCreateArgs<ExtArgs>>): Prisma__GitHubCommitGroupClient<$Result.GetResult<Prisma.$GitHubCommitGroupPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GitHubCommitGroups.
     * @param {GitHubCommitGroupCreateManyArgs} args - Arguments to create many GitHubCommitGroups.
     * @example
     * // Create many GitHubCommitGroups
     * const gitHubCommitGroup = await prisma.gitHubCommitGroup.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GitHubCommitGroupCreateManyArgs>(args?: SelectSubset<T, GitHubCommitGroupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GitHubCommitGroups and returns the data saved in the database.
     * @param {GitHubCommitGroupCreateManyAndReturnArgs} args - Arguments to create many GitHubCommitGroups.
     * @example
     * // Create many GitHubCommitGroups
     * const gitHubCommitGroup = await prisma.gitHubCommitGroup.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GitHubCommitGroups and only return the `id`
     * const gitHubCommitGroupWithIdOnly = await prisma.gitHubCommitGroup.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GitHubCommitGroupCreateManyAndReturnArgs>(args?: SelectSubset<T, GitHubCommitGroupCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GitHubCommitGroupPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GitHubCommitGroup.
     * @param {GitHubCommitGroupDeleteArgs} args - Arguments to delete one GitHubCommitGroup.
     * @example
     * // Delete one GitHubCommitGroup
     * const GitHubCommitGroup = await prisma.gitHubCommitGroup.delete({
     *   where: {
     *     // ... filter to delete one GitHubCommitGroup
     *   }
     * })
     * 
     */
    delete<T extends GitHubCommitGroupDeleteArgs>(args: SelectSubset<T, GitHubCommitGroupDeleteArgs<ExtArgs>>): Prisma__GitHubCommitGroupClient<$Result.GetResult<Prisma.$GitHubCommitGroupPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GitHubCommitGroup.
     * @param {GitHubCommitGroupUpdateArgs} args - Arguments to update one GitHubCommitGroup.
     * @example
     * // Update one GitHubCommitGroup
     * const gitHubCommitGroup = await prisma.gitHubCommitGroup.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GitHubCommitGroupUpdateArgs>(args: SelectSubset<T, GitHubCommitGroupUpdateArgs<ExtArgs>>): Prisma__GitHubCommitGroupClient<$Result.GetResult<Prisma.$GitHubCommitGroupPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GitHubCommitGroups.
     * @param {GitHubCommitGroupDeleteManyArgs} args - Arguments to filter GitHubCommitGroups to delete.
     * @example
     * // Delete a few GitHubCommitGroups
     * const { count } = await prisma.gitHubCommitGroup.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GitHubCommitGroupDeleteManyArgs>(args?: SelectSubset<T, GitHubCommitGroupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GitHubCommitGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GitHubCommitGroupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GitHubCommitGroups
     * const gitHubCommitGroup = await prisma.gitHubCommitGroup.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GitHubCommitGroupUpdateManyArgs>(args: SelectSubset<T, GitHubCommitGroupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GitHubCommitGroups and returns the data updated in the database.
     * @param {GitHubCommitGroupUpdateManyAndReturnArgs} args - Arguments to update many GitHubCommitGroups.
     * @example
     * // Update many GitHubCommitGroups
     * const gitHubCommitGroup = await prisma.gitHubCommitGroup.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GitHubCommitGroups and only return the `id`
     * const gitHubCommitGroupWithIdOnly = await prisma.gitHubCommitGroup.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GitHubCommitGroupUpdateManyAndReturnArgs>(args: SelectSubset<T, GitHubCommitGroupUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GitHubCommitGroupPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GitHubCommitGroup.
     * @param {GitHubCommitGroupUpsertArgs} args - Arguments to update or create a GitHubCommitGroup.
     * @example
     * // Update or create a GitHubCommitGroup
     * const gitHubCommitGroup = await prisma.gitHubCommitGroup.upsert({
     *   create: {
     *     // ... data to create a GitHubCommitGroup
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GitHubCommitGroup we want to update
     *   }
     * })
     */
    upsert<T extends GitHubCommitGroupUpsertArgs>(args: SelectSubset<T, GitHubCommitGroupUpsertArgs<ExtArgs>>): Prisma__GitHubCommitGroupClient<$Result.GetResult<Prisma.$GitHubCommitGroupPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GitHubCommitGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GitHubCommitGroupCountArgs} args - Arguments to filter GitHubCommitGroups to count.
     * @example
     * // Count the number of GitHubCommitGroups
     * const count = await prisma.gitHubCommitGroup.count({
     *   where: {
     *     // ... the filter for the GitHubCommitGroups we want to count
     *   }
     * })
    **/
    count<T extends GitHubCommitGroupCountArgs>(
      args?: Subset<T, GitHubCommitGroupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GitHubCommitGroupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GitHubCommitGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GitHubCommitGroupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GitHubCommitGroupAggregateArgs>(args: Subset<T, GitHubCommitGroupAggregateArgs>): Prisma.PrismaPromise<GetGitHubCommitGroupAggregateType<T>>

    /**
     * Group by GitHubCommitGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GitHubCommitGroupGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GitHubCommitGroupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GitHubCommitGroupGroupByArgs['orderBy'] }
        : { orderBy?: GitHubCommitGroupGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GitHubCommitGroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGitHubCommitGroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GitHubCommitGroup model
   */
  readonly fields: GitHubCommitGroupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GitHubCommitGroup.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GitHubCommitGroupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    repo<T extends GitHubRepoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GitHubRepoDefaultArgs<ExtArgs>>): Prisma__GitHubRepoClient<$Result.GetResult<Prisma.$GitHubRepoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    commits<T extends GitHubCommitGroup$commitsArgs<ExtArgs> = {}>(args?: Subset<T, GitHubCommitGroup$commitsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GitHubCommitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GitHubCommitGroup model
   */
  interface GitHubCommitGroupFieldRefs {
    readonly id: FieldRef<"GitHubCommitGroup", 'Int'>
    readonly userId: FieldRef<"GitHubCommitGroup", 'Int'>
    readonly repoId: FieldRef<"GitHubCommitGroup", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * GitHubCommitGroup findUnique
   */
  export type GitHubCommitGroupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GitHubCommitGroup
     */
    select?: GitHubCommitGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GitHubCommitGroup
     */
    omit?: GitHubCommitGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GitHubCommitGroupInclude<ExtArgs> | null
    /**
     * Filter, which GitHubCommitGroup to fetch.
     */
    where: GitHubCommitGroupWhereUniqueInput
  }

  /**
   * GitHubCommitGroup findUniqueOrThrow
   */
  export type GitHubCommitGroupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GitHubCommitGroup
     */
    select?: GitHubCommitGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GitHubCommitGroup
     */
    omit?: GitHubCommitGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GitHubCommitGroupInclude<ExtArgs> | null
    /**
     * Filter, which GitHubCommitGroup to fetch.
     */
    where: GitHubCommitGroupWhereUniqueInput
  }

  /**
   * GitHubCommitGroup findFirst
   */
  export type GitHubCommitGroupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GitHubCommitGroup
     */
    select?: GitHubCommitGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GitHubCommitGroup
     */
    omit?: GitHubCommitGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GitHubCommitGroupInclude<ExtArgs> | null
    /**
     * Filter, which GitHubCommitGroup to fetch.
     */
    where?: GitHubCommitGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GitHubCommitGroups to fetch.
     */
    orderBy?: GitHubCommitGroupOrderByWithRelationInput | GitHubCommitGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GitHubCommitGroups.
     */
    cursor?: GitHubCommitGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GitHubCommitGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GitHubCommitGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GitHubCommitGroups.
     */
    distinct?: GitHubCommitGroupScalarFieldEnum | GitHubCommitGroupScalarFieldEnum[]
  }

  /**
   * GitHubCommitGroup findFirstOrThrow
   */
  export type GitHubCommitGroupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GitHubCommitGroup
     */
    select?: GitHubCommitGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GitHubCommitGroup
     */
    omit?: GitHubCommitGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GitHubCommitGroupInclude<ExtArgs> | null
    /**
     * Filter, which GitHubCommitGroup to fetch.
     */
    where?: GitHubCommitGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GitHubCommitGroups to fetch.
     */
    orderBy?: GitHubCommitGroupOrderByWithRelationInput | GitHubCommitGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GitHubCommitGroups.
     */
    cursor?: GitHubCommitGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GitHubCommitGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GitHubCommitGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GitHubCommitGroups.
     */
    distinct?: GitHubCommitGroupScalarFieldEnum | GitHubCommitGroupScalarFieldEnum[]
  }

  /**
   * GitHubCommitGroup findMany
   */
  export type GitHubCommitGroupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GitHubCommitGroup
     */
    select?: GitHubCommitGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GitHubCommitGroup
     */
    omit?: GitHubCommitGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GitHubCommitGroupInclude<ExtArgs> | null
    /**
     * Filter, which GitHubCommitGroups to fetch.
     */
    where?: GitHubCommitGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GitHubCommitGroups to fetch.
     */
    orderBy?: GitHubCommitGroupOrderByWithRelationInput | GitHubCommitGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GitHubCommitGroups.
     */
    cursor?: GitHubCommitGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GitHubCommitGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GitHubCommitGroups.
     */
    skip?: number
    distinct?: GitHubCommitGroupScalarFieldEnum | GitHubCommitGroupScalarFieldEnum[]
  }

  /**
   * GitHubCommitGroup create
   */
  export type GitHubCommitGroupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GitHubCommitGroup
     */
    select?: GitHubCommitGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GitHubCommitGroup
     */
    omit?: GitHubCommitGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GitHubCommitGroupInclude<ExtArgs> | null
    /**
     * The data needed to create a GitHubCommitGroup.
     */
    data: XOR<GitHubCommitGroupCreateInput, GitHubCommitGroupUncheckedCreateInput>
  }

  /**
   * GitHubCommitGroup createMany
   */
  export type GitHubCommitGroupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GitHubCommitGroups.
     */
    data: GitHubCommitGroupCreateManyInput | GitHubCommitGroupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GitHubCommitGroup createManyAndReturn
   */
  export type GitHubCommitGroupCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GitHubCommitGroup
     */
    select?: GitHubCommitGroupSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GitHubCommitGroup
     */
    omit?: GitHubCommitGroupOmit<ExtArgs> | null
    /**
     * The data used to create many GitHubCommitGroups.
     */
    data: GitHubCommitGroupCreateManyInput | GitHubCommitGroupCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GitHubCommitGroupIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GitHubCommitGroup update
   */
  export type GitHubCommitGroupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GitHubCommitGroup
     */
    select?: GitHubCommitGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GitHubCommitGroup
     */
    omit?: GitHubCommitGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GitHubCommitGroupInclude<ExtArgs> | null
    /**
     * The data needed to update a GitHubCommitGroup.
     */
    data: XOR<GitHubCommitGroupUpdateInput, GitHubCommitGroupUncheckedUpdateInput>
    /**
     * Choose, which GitHubCommitGroup to update.
     */
    where: GitHubCommitGroupWhereUniqueInput
  }

  /**
   * GitHubCommitGroup updateMany
   */
  export type GitHubCommitGroupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GitHubCommitGroups.
     */
    data: XOR<GitHubCommitGroupUpdateManyMutationInput, GitHubCommitGroupUncheckedUpdateManyInput>
    /**
     * Filter which GitHubCommitGroups to update
     */
    where?: GitHubCommitGroupWhereInput
    /**
     * Limit how many GitHubCommitGroups to update.
     */
    limit?: number
  }

  /**
   * GitHubCommitGroup updateManyAndReturn
   */
  export type GitHubCommitGroupUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GitHubCommitGroup
     */
    select?: GitHubCommitGroupSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GitHubCommitGroup
     */
    omit?: GitHubCommitGroupOmit<ExtArgs> | null
    /**
     * The data used to update GitHubCommitGroups.
     */
    data: XOR<GitHubCommitGroupUpdateManyMutationInput, GitHubCommitGroupUncheckedUpdateManyInput>
    /**
     * Filter which GitHubCommitGroups to update
     */
    where?: GitHubCommitGroupWhereInput
    /**
     * Limit how many GitHubCommitGroups to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GitHubCommitGroupIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GitHubCommitGroup upsert
   */
  export type GitHubCommitGroupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GitHubCommitGroup
     */
    select?: GitHubCommitGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GitHubCommitGroup
     */
    omit?: GitHubCommitGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GitHubCommitGroupInclude<ExtArgs> | null
    /**
     * The filter to search for the GitHubCommitGroup to update in case it exists.
     */
    where: GitHubCommitGroupWhereUniqueInput
    /**
     * In case the GitHubCommitGroup found by the `where` argument doesn't exist, create a new GitHubCommitGroup with this data.
     */
    create: XOR<GitHubCommitGroupCreateInput, GitHubCommitGroupUncheckedCreateInput>
    /**
     * In case the GitHubCommitGroup was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GitHubCommitGroupUpdateInput, GitHubCommitGroupUncheckedUpdateInput>
  }

  /**
   * GitHubCommitGroup delete
   */
  export type GitHubCommitGroupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GitHubCommitGroup
     */
    select?: GitHubCommitGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GitHubCommitGroup
     */
    omit?: GitHubCommitGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GitHubCommitGroupInclude<ExtArgs> | null
    /**
     * Filter which GitHubCommitGroup to delete.
     */
    where: GitHubCommitGroupWhereUniqueInput
  }

  /**
   * GitHubCommitGroup deleteMany
   */
  export type GitHubCommitGroupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GitHubCommitGroups to delete
     */
    where?: GitHubCommitGroupWhereInput
    /**
     * Limit how many GitHubCommitGroups to delete.
     */
    limit?: number
  }

  /**
   * GitHubCommitGroup.commits
   */
  export type GitHubCommitGroup$commitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GitHubCommit
     */
    select?: GitHubCommitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GitHubCommit
     */
    omit?: GitHubCommitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GitHubCommitInclude<ExtArgs> | null
    where?: GitHubCommitWhereInput
    orderBy?: GitHubCommitOrderByWithRelationInput | GitHubCommitOrderByWithRelationInput[]
    cursor?: GitHubCommitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GitHubCommitScalarFieldEnum | GitHubCommitScalarFieldEnum[]
  }

  /**
   * GitHubCommitGroup without action
   */
  export type GitHubCommitGroupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GitHubCommitGroup
     */
    select?: GitHubCommitGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GitHubCommitGroup
     */
    omit?: GitHubCommitGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GitHubCommitGroupInclude<ExtArgs> | null
  }


  /**
   * Model DailyLog
   */

  export type AggregateDailyLog = {
    _count: DailyLogCountAggregateOutputType | null
    _avg: DailyLogAvgAggregateOutputType | null
    _sum: DailyLogSumAggregateOutputType | null
    _min: DailyLogMinAggregateOutputType | null
    _max: DailyLogMaxAggregateOutputType | null
  }

  export type DailyLogAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type DailyLogSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type DailyLogMinAggregateOutputType = {
    id: number | null
    userId: number | null
    date: Date | null
    aiSummary: string | null
    export: string | null
  }

  export type DailyLogMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    date: Date | null
    aiSummary: string | null
    export: string | null
  }

  export type DailyLogCountAggregateOutputType = {
    id: number
    userId: number
    date: number
    works: number
    aiSummary: number
    export: number
    _all: number
  }


  export type DailyLogAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type DailyLogSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type DailyLogMinAggregateInputType = {
    id?: true
    userId?: true
    date?: true
    aiSummary?: true
    export?: true
  }

  export type DailyLogMaxAggregateInputType = {
    id?: true
    userId?: true
    date?: true
    aiSummary?: true
    export?: true
  }

  export type DailyLogCountAggregateInputType = {
    id?: true
    userId?: true
    date?: true
    works?: true
    aiSummary?: true
    export?: true
    _all?: true
  }

  export type DailyLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailyLog to aggregate.
     */
    where?: DailyLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyLogs to fetch.
     */
    orderBy?: DailyLogOrderByWithRelationInput | DailyLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DailyLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DailyLogs
    **/
    _count?: true | DailyLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DailyLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DailyLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DailyLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DailyLogMaxAggregateInputType
  }

  export type GetDailyLogAggregateType<T extends DailyLogAggregateArgs> = {
        [P in keyof T & keyof AggregateDailyLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDailyLog[P]>
      : GetScalarType<T[P], AggregateDailyLog[P]>
  }




  export type DailyLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyLogWhereInput
    orderBy?: DailyLogOrderByWithAggregationInput | DailyLogOrderByWithAggregationInput[]
    by: DailyLogScalarFieldEnum[] | DailyLogScalarFieldEnum
    having?: DailyLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DailyLogCountAggregateInputType | true
    _avg?: DailyLogAvgAggregateInputType
    _sum?: DailyLogSumAggregateInputType
    _min?: DailyLogMinAggregateInputType
    _max?: DailyLogMaxAggregateInputType
  }

  export type DailyLogGroupByOutputType = {
    id: number
    userId: number
    date: Date
    works: JsonValue
    aiSummary: string | null
    export: string | null
    _count: DailyLogCountAggregateOutputType | null
    _avg: DailyLogAvgAggregateOutputType | null
    _sum: DailyLogSumAggregateOutputType | null
    _min: DailyLogMinAggregateOutputType | null
    _max: DailyLogMaxAggregateOutputType | null
  }

  type GetDailyLogGroupByPayload<T extends DailyLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DailyLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DailyLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DailyLogGroupByOutputType[P]>
            : GetScalarType<T[P], DailyLogGroupByOutputType[P]>
        }
      >
    >


  export type DailyLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    date?: boolean
    works?: boolean
    aiSummary?: boolean
    export?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dailyLog"]>

  export type DailyLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    date?: boolean
    works?: boolean
    aiSummary?: boolean
    export?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dailyLog"]>

  export type DailyLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    date?: boolean
    works?: boolean
    aiSummary?: boolean
    export?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dailyLog"]>

  export type DailyLogSelectScalar = {
    id?: boolean
    userId?: boolean
    date?: boolean
    works?: boolean
    aiSummary?: boolean
    export?: boolean
  }

  export type DailyLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "date" | "works" | "aiSummary" | "export", ExtArgs["result"]["dailyLog"]>
  export type DailyLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DailyLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DailyLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $DailyLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DailyLog"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      date: Date
      works: Prisma.JsonValue
      aiSummary: string | null
      export: string | null
    }, ExtArgs["result"]["dailyLog"]>
    composites: {}
  }

  type DailyLogGetPayload<S extends boolean | null | undefined | DailyLogDefaultArgs> = $Result.GetResult<Prisma.$DailyLogPayload, S>

  type DailyLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DailyLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DailyLogCountAggregateInputType | true
    }

  export interface DailyLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DailyLog'], meta: { name: 'DailyLog' } }
    /**
     * Find zero or one DailyLog that matches the filter.
     * @param {DailyLogFindUniqueArgs} args - Arguments to find a DailyLog
     * @example
     * // Get one DailyLog
     * const dailyLog = await prisma.dailyLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DailyLogFindUniqueArgs>(args: SelectSubset<T, DailyLogFindUniqueArgs<ExtArgs>>): Prisma__DailyLogClient<$Result.GetResult<Prisma.$DailyLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DailyLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DailyLogFindUniqueOrThrowArgs} args - Arguments to find a DailyLog
     * @example
     * // Get one DailyLog
     * const dailyLog = await prisma.dailyLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DailyLogFindUniqueOrThrowArgs>(args: SelectSubset<T, DailyLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DailyLogClient<$Result.GetResult<Prisma.$DailyLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DailyLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyLogFindFirstArgs} args - Arguments to find a DailyLog
     * @example
     * // Get one DailyLog
     * const dailyLog = await prisma.dailyLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DailyLogFindFirstArgs>(args?: SelectSubset<T, DailyLogFindFirstArgs<ExtArgs>>): Prisma__DailyLogClient<$Result.GetResult<Prisma.$DailyLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DailyLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyLogFindFirstOrThrowArgs} args - Arguments to find a DailyLog
     * @example
     * // Get one DailyLog
     * const dailyLog = await prisma.dailyLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DailyLogFindFirstOrThrowArgs>(args?: SelectSubset<T, DailyLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__DailyLogClient<$Result.GetResult<Prisma.$DailyLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DailyLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DailyLogs
     * const dailyLogs = await prisma.dailyLog.findMany()
     * 
     * // Get first 10 DailyLogs
     * const dailyLogs = await prisma.dailyLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dailyLogWithIdOnly = await prisma.dailyLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DailyLogFindManyArgs>(args?: SelectSubset<T, DailyLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DailyLog.
     * @param {DailyLogCreateArgs} args - Arguments to create a DailyLog.
     * @example
     * // Create one DailyLog
     * const DailyLog = await prisma.dailyLog.create({
     *   data: {
     *     // ... data to create a DailyLog
     *   }
     * })
     * 
     */
    create<T extends DailyLogCreateArgs>(args: SelectSubset<T, DailyLogCreateArgs<ExtArgs>>): Prisma__DailyLogClient<$Result.GetResult<Prisma.$DailyLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DailyLogs.
     * @param {DailyLogCreateManyArgs} args - Arguments to create many DailyLogs.
     * @example
     * // Create many DailyLogs
     * const dailyLog = await prisma.dailyLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DailyLogCreateManyArgs>(args?: SelectSubset<T, DailyLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DailyLogs and returns the data saved in the database.
     * @param {DailyLogCreateManyAndReturnArgs} args - Arguments to create many DailyLogs.
     * @example
     * // Create many DailyLogs
     * const dailyLog = await prisma.dailyLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DailyLogs and only return the `id`
     * const dailyLogWithIdOnly = await prisma.dailyLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DailyLogCreateManyAndReturnArgs>(args?: SelectSubset<T, DailyLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DailyLog.
     * @param {DailyLogDeleteArgs} args - Arguments to delete one DailyLog.
     * @example
     * // Delete one DailyLog
     * const DailyLog = await prisma.dailyLog.delete({
     *   where: {
     *     // ... filter to delete one DailyLog
     *   }
     * })
     * 
     */
    delete<T extends DailyLogDeleteArgs>(args: SelectSubset<T, DailyLogDeleteArgs<ExtArgs>>): Prisma__DailyLogClient<$Result.GetResult<Prisma.$DailyLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DailyLog.
     * @param {DailyLogUpdateArgs} args - Arguments to update one DailyLog.
     * @example
     * // Update one DailyLog
     * const dailyLog = await prisma.dailyLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DailyLogUpdateArgs>(args: SelectSubset<T, DailyLogUpdateArgs<ExtArgs>>): Prisma__DailyLogClient<$Result.GetResult<Prisma.$DailyLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DailyLogs.
     * @param {DailyLogDeleteManyArgs} args - Arguments to filter DailyLogs to delete.
     * @example
     * // Delete a few DailyLogs
     * const { count } = await prisma.dailyLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DailyLogDeleteManyArgs>(args?: SelectSubset<T, DailyLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DailyLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DailyLogs
     * const dailyLog = await prisma.dailyLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DailyLogUpdateManyArgs>(args: SelectSubset<T, DailyLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DailyLogs and returns the data updated in the database.
     * @param {DailyLogUpdateManyAndReturnArgs} args - Arguments to update many DailyLogs.
     * @example
     * // Update many DailyLogs
     * const dailyLog = await prisma.dailyLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DailyLogs and only return the `id`
     * const dailyLogWithIdOnly = await prisma.dailyLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DailyLogUpdateManyAndReturnArgs>(args: SelectSubset<T, DailyLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DailyLog.
     * @param {DailyLogUpsertArgs} args - Arguments to update or create a DailyLog.
     * @example
     * // Update or create a DailyLog
     * const dailyLog = await prisma.dailyLog.upsert({
     *   create: {
     *     // ... data to create a DailyLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DailyLog we want to update
     *   }
     * })
     */
    upsert<T extends DailyLogUpsertArgs>(args: SelectSubset<T, DailyLogUpsertArgs<ExtArgs>>): Prisma__DailyLogClient<$Result.GetResult<Prisma.$DailyLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DailyLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyLogCountArgs} args - Arguments to filter DailyLogs to count.
     * @example
     * // Count the number of DailyLogs
     * const count = await prisma.dailyLog.count({
     *   where: {
     *     // ... the filter for the DailyLogs we want to count
     *   }
     * })
    **/
    count<T extends DailyLogCountArgs>(
      args?: Subset<T, DailyLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DailyLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DailyLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DailyLogAggregateArgs>(args: Subset<T, DailyLogAggregateArgs>): Prisma.PrismaPromise<GetDailyLogAggregateType<T>>

    /**
     * Group by DailyLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DailyLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DailyLogGroupByArgs['orderBy'] }
        : { orderBy?: DailyLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DailyLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDailyLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DailyLog model
   */
  readonly fields: DailyLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DailyLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DailyLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DailyLog model
   */
  interface DailyLogFieldRefs {
    readonly id: FieldRef<"DailyLog", 'Int'>
    readonly userId: FieldRef<"DailyLog", 'Int'>
    readonly date: FieldRef<"DailyLog", 'DateTime'>
    readonly works: FieldRef<"DailyLog", 'Json'>
    readonly aiSummary: FieldRef<"DailyLog", 'String'>
    readonly export: FieldRef<"DailyLog", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DailyLog findUnique
   */
  export type DailyLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyLog
     */
    select?: DailyLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyLog
     */
    omit?: DailyLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyLogInclude<ExtArgs> | null
    /**
     * Filter, which DailyLog to fetch.
     */
    where: DailyLogWhereUniqueInput
  }

  /**
   * DailyLog findUniqueOrThrow
   */
  export type DailyLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyLog
     */
    select?: DailyLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyLog
     */
    omit?: DailyLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyLogInclude<ExtArgs> | null
    /**
     * Filter, which DailyLog to fetch.
     */
    where: DailyLogWhereUniqueInput
  }

  /**
   * DailyLog findFirst
   */
  export type DailyLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyLog
     */
    select?: DailyLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyLog
     */
    omit?: DailyLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyLogInclude<ExtArgs> | null
    /**
     * Filter, which DailyLog to fetch.
     */
    where?: DailyLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyLogs to fetch.
     */
    orderBy?: DailyLogOrderByWithRelationInput | DailyLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailyLogs.
     */
    cursor?: DailyLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyLogs.
     */
    distinct?: DailyLogScalarFieldEnum | DailyLogScalarFieldEnum[]
  }

  /**
   * DailyLog findFirstOrThrow
   */
  export type DailyLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyLog
     */
    select?: DailyLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyLog
     */
    omit?: DailyLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyLogInclude<ExtArgs> | null
    /**
     * Filter, which DailyLog to fetch.
     */
    where?: DailyLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyLogs to fetch.
     */
    orderBy?: DailyLogOrderByWithRelationInput | DailyLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailyLogs.
     */
    cursor?: DailyLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyLogs.
     */
    distinct?: DailyLogScalarFieldEnum | DailyLogScalarFieldEnum[]
  }

  /**
   * DailyLog findMany
   */
  export type DailyLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyLog
     */
    select?: DailyLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyLog
     */
    omit?: DailyLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyLogInclude<ExtArgs> | null
    /**
     * Filter, which DailyLogs to fetch.
     */
    where?: DailyLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyLogs to fetch.
     */
    orderBy?: DailyLogOrderByWithRelationInput | DailyLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DailyLogs.
     */
    cursor?: DailyLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyLogs.
     */
    skip?: number
    distinct?: DailyLogScalarFieldEnum | DailyLogScalarFieldEnum[]
  }

  /**
   * DailyLog create
   */
  export type DailyLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyLog
     */
    select?: DailyLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyLog
     */
    omit?: DailyLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyLogInclude<ExtArgs> | null
    /**
     * The data needed to create a DailyLog.
     */
    data: XOR<DailyLogCreateInput, DailyLogUncheckedCreateInput>
  }

  /**
   * DailyLog createMany
   */
  export type DailyLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DailyLogs.
     */
    data: DailyLogCreateManyInput | DailyLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DailyLog createManyAndReturn
   */
  export type DailyLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyLog
     */
    select?: DailyLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DailyLog
     */
    omit?: DailyLogOmit<ExtArgs> | null
    /**
     * The data used to create many DailyLogs.
     */
    data: DailyLogCreateManyInput | DailyLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DailyLog update
   */
  export type DailyLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyLog
     */
    select?: DailyLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyLog
     */
    omit?: DailyLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyLogInclude<ExtArgs> | null
    /**
     * The data needed to update a DailyLog.
     */
    data: XOR<DailyLogUpdateInput, DailyLogUncheckedUpdateInput>
    /**
     * Choose, which DailyLog to update.
     */
    where: DailyLogWhereUniqueInput
  }

  /**
   * DailyLog updateMany
   */
  export type DailyLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DailyLogs.
     */
    data: XOR<DailyLogUpdateManyMutationInput, DailyLogUncheckedUpdateManyInput>
    /**
     * Filter which DailyLogs to update
     */
    where?: DailyLogWhereInput
    /**
     * Limit how many DailyLogs to update.
     */
    limit?: number
  }

  /**
   * DailyLog updateManyAndReturn
   */
  export type DailyLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyLog
     */
    select?: DailyLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DailyLog
     */
    omit?: DailyLogOmit<ExtArgs> | null
    /**
     * The data used to update DailyLogs.
     */
    data: XOR<DailyLogUpdateManyMutationInput, DailyLogUncheckedUpdateManyInput>
    /**
     * Filter which DailyLogs to update
     */
    where?: DailyLogWhereInput
    /**
     * Limit how many DailyLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DailyLog upsert
   */
  export type DailyLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyLog
     */
    select?: DailyLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyLog
     */
    omit?: DailyLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyLogInclude<ExtArgs> | null
    /**
     * The filter to search for the DailyLog to update in case it exists.
     */
    where: DailyLogWhereUniqueInput
    /**
     * In case the DailyLog found by the `where` argument doesn't exist, create a new DailyLog with this data.
     */
    create: XOR<DailyLogCreateInput, DailyLogUncheckedCreateInput>
    /**
     * In case the DailyLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DailyLogUpdateInput, DailyLogUncheckedUpdateInput>
  }

  /**
   * DailyLog delete
   */
  export type DailyLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyLog
     */
    select?: DailyLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyLog
     */
    omit?: DailyLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyLogInclude<ExtArgs> | null
    /**
     * Filter which DailyLog to delete.
     */
    where: DailyLogWhereUniqueInput
  }

  /**
   * DailyLog deleteMany
   */
  export type DailyLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailyLogs to delete
     */
    where?: DailyLogWhereInput
    /**
     * Limit how many DailyLogs to delete.
     */
    limit?: number
  }

  /**
   * DailyLog without action
   */
  export type DailyLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyLog
     */
    select?: DailyLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyLog
     */
    omit?: DailyLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyLogInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    firstName: 'firstName',
    lastName: 'lastName',
    username: 'username',
    image: 'image',
    isActive: 'isActive',
    isAdmin: 'isAdmin',
    isVerified: 'isVerified',
    createdAt: 'createdAt',
    accessToken: 'accessToken',
    githubToken: 'githubToken',
    githubUsername: 'githubUsername'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    id: 'id',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    userId: 'userId',
    accessToken: 'accessToken',
    refreshToken: 'refreshToken',
    expiresAt: 'expiresAt'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const TaskScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    startDate: 'startDate',
    dueDate: 'dueDate',
    status: 'status',
    projectId: 'projectId',
    assignedToId: 'assignedToId',
    assignedById: 'assignedById',
    updatedById: 'updatedById',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    completedOn: 'completedOn'
  };

  export type TaskScalarFieldEnum = (typeof TaskScalarFieldEnum)[keyof typeof TaskScalarFieldEnum]


  export const GitHubRepoScalarFieldEnum: {
    id: 'id',
    name: 'name',
    url: 'url',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    projectId: 'projectId',
    webHookId: 'webHookId'
  };

  export type GitHubRepoScalarFieldEnum = (typeof GitHubRepoScalarFieldEnum)[keyof typeof GitHubRepoScalarFieldEnum]


  export const GitHubCommitScalarFieldEnum: {
    id: 'id',
    repoId: 'repoId',
    userId: 'userId',
    commitDate: 'commitDate',
    timing: 'timing',
    message: 'message',
    gitHubCommitGroupId: 'gitHubCommitGroupId'
  };

  export type GitHubCommitScalarFieldEnum = (typeof GitHubCommitScalarFieldEnum)[keyof typeof GitHubCommitScalarFieldEnum]


  export const GitHubCommitGroupScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    repoId: 'repoId'
  };

  export type GitHubCommitGroupScalarFieldEnum = (typeof GitHubCommitGroupScalarFieldEnum)[keyof typeof GitHubCommitGroupScalarFieldEnum]


  export const DailyLogScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    date: 'date',
    works: 'works',
    aiSummary: 'aiSummary',
    export: 'export'
  };

  export type DailyLogScalarFieldEnum = (typeof DailyLogScalarFieldEnum)[keyof typeof DailyLogScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'TaskStatus'
   */
  export type EnumTaskStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TaskStatus'>
    


  /**
   * Reference to a field of type 'TaskStatus[]'
   */
  export type ListEnumTaskStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TaskStatus[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    password?: StringNullableFilter<"User"> | string | null
    firstName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    username?: StringNullableFilter<"User"> | string | null
    image?: StringNullableFilter<"User"> | string | null
    isActive?: BoolFilter<"User"> | boolean
    isAdmin?: BoolFilter<"User"> | boolean
    isVerified?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    accessToken?: StringNullableFilter<"User"> | string | null
    githubToken?: StringNullableFilter<"User"> | string | null
    githubUsername?: StringNullableFilter<"User"> | string | null
    accounts?: AccountListRelationFilter
    Project?: ProjectListRelationFilter
    ProjectMembers?: ProjectListRelationFilter
    assignedTasks?: TaskListRelationFilter
    createdTasks?: TaskListRelationFilter
    updatedTasks?: TaskListRelationFilter
    GitHubCommit?: GitHubCommitListRelationFilter
    GitHubCommitGroup?: GitHubCommitGroupListRelationFilter
    DailyLog?: DailyLogListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    username?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    isActive?: SortOrder
    isAdmin?: SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
    accessToken?: SortOrderInput | SortOrder
    githubToken?: SortOrderInput | SortOrder
    githubUsername?: SortOrderInput | SortOrder
    accounts?: AccountOrderByRelationAggregateInput
    Project?: ProjectOrderByRelationAggregateInput
    ProjectMembers?: ProjectOrderByRelationAggregateInput
    assignedTasks?: TaskOrderByRelationAggregateInput
    createdTasks?: TaskOrderByRelationAggregateInput
    updatedTasks?: TaskOrderByRelationAggregateInput
    GitHubCommit?: GitHubCommitOrderByRelationAggregateInput
    GitHubCommitGroup?: GitHubCommitGroupOrderByRelationAggregateInput
    DailyLog?: DailyLogOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringNullableFilter<"User"> | string | null
    firstName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    image?: StringNullableFilter<"User"> | string | null
    isActive?: BoolFilter<"User"> | boolean
    isAdmin?: BoolFilter<"User"> | boolean
    isVerified?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    accessToken?: StringNullableFilter<"User"> | string | null
    githubToken?: StringNullableFilter<"User"> | string | null
    githubUsername?: StringNullableFilter<"User"> | string | null
    accounts?: AccountListRelationFilter
    Project?: ProjectListRelationFilter
    ProjectMembers?: ProjectListRelationFilter
    assignedTasks?: TaskListRelationFilter
    createdTasks?: TaskListRelationFilter
    updatedTasks?: TaskListRelationFilter
    GitHubCommit?: GitHubCommitListRelationFilter
    GitHubCommitGroup?: GitHubCommitGroupListRelationFilter
    DailyLog?: DailyLogListRelationFilter
  }, "id" | "email" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    username?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    isActive?: SortOrder
    isAdmin?: SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
    accessToken?: SortOrderInput | SortOrder
    githubToken?: SortOrderInput | SortOrder
    githubUsername?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    firstName?: StringNullableWithAggregatesFilter<"User"> | string | null
    lastName?: StringNullableWithAggregatesFilter<"User"> | string | null
    username?: StringNullableWithAggregatesFilter<"User"> | string | null
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    isAdmin?: BoolWithAggregatesFilter<"User"> | boolean
    isVerified?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    accessToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    githubToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    githubUsername?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: IntFilter<"Account"> | number
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    userId?: IntFilter<"Account"> | number
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    expiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    expiresAt?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    userId?: IntFilter<"Account"> | number
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    expiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "provider_providerAccountId">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    expiresAt?: SortOrderInput | SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Account"> | number
    provider?: StringWithAggregatesFilter<"Account"> | string
    providerAccountId?: StringWithAggregatesFilter<"Account"> | string
    userId?: IntWithAggregatesFilter<"Account"> | number
    accessToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    refreshToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    expiresAt?: DateTimeNullableWithAggregatesFilter<"Account"> | Date | string | null
  }

  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    id?: IntFilter<"Project"> | number
    name?: StringFilter<"Project"> | string
    description?: StringNullableFilter<"Project"> | string | null
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    userId?: IntFilter<"Project"> | number
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    members?: UserListRelationFilter
    tasks?: TaskListRelationFilter
    githubRepos?: GitHubRepoListRelationFilter
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    owner?: UserOrderByWithRelationInput
    members?: UserOrderByRelationAggregateInput
    tasks?: TaskOrderByRelationAggregateInput
    githubRepos?: GitHubRepoOrderByRelationAggregateInput
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    name?: StringFilter<"Project"> | string
    description?: StringNullableFilter<"Project"> | string | null
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    userId?: IntFilter<"Project"> | number
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    members?: UserListRelationFilter
    tasks?: TaskListRelationFilter
    githubRepos?: GitHubRepoListRelationFilter
  }, "id">

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _avg?: ProjectAvgOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
    _sum?: ProjectSumOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Project"> | number
    name?: StringWithAggregatesFilter<"Project"> | string
    description?: StringNullableWithAggregatesFilter<"Project"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    userId?: IntWithAggregatesFilter<"Project"> | number
  }

  export type TaskWhereInput = {
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    id?: IntFilter<"Task"> | number
    title?: StringFilter<"Task"> | string
    description?: StringNullableFilter<"Task"> | string | null
    startDate?: DateTimeFilter<"Task"> | Date | string
    dueDate?: DateTimeFilter<"Task"> | Date | string
    status?: EnumTaskStatusFilter<"Task"> | $Enums.TaskStatus
    projectId?: IntFilter<"Task"> | number
    assignedToId?: IntFilter<"Task"> | number
    assignedById?: IntFilter<"Task"> | number
    updatedById?: IntNullableFilter<"Task"> | number | null
    createdAt?: DateTimeFilter<"Task"> | Date | string
    updatedAt?: DateTimeFilter<"Task"> | Date | string
    completedOn?: DateTimeNullableFilter<"Task"> | Date | string | null
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    assignedTo?: XOR<UserScalarRelationFilter, UserWhereInput>
    assignedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    updatedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type TaskOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    startDate?: SortOrder
    dueDate?: SortOrder
    status?: SortOrder
    projectId?: SortOrder
    assignedToId?: SortOrder
    assignedById?: SortOrder
    updatedById?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    completedOn?: SortOrderInput | SortOrder
    project?: ProjectOrderByWithRelationInput
    assignedTo?: UserOrderByWithRelationInput
    assignedBy?: UserOrderByWithRelationInput
    updatedBy?: UserOrderByWithRelationInput
  }

  export type TaskWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    title?: StringFilter<"Task"> | string
    description?: StringNullableFilter<"Task"> | string | null
    startDate?: DateTimeFilter<"Task"> | Date | string
    dueDate?: DateTimeFilter<"Task"> | Date | string
    status?: EnumTaskStatusFilter<"Task"> | $Enums.TaskStatus
    projectId?: IntFilter<"Task"> | number
    assignedToId?: IntFilter<"Task"> | number
    assignedById?: IntFilter<"Task"> | number
    updatedById?: IntNullableFilter<"Task"> | number | null
    createdAt?: DateTimeFilter<"Task"> | Date | string
    updatedAt?: DateTimeFilter<"Task"> | Date | string
    completedOn?: DateTimeNullableFilter<"Task"> | Date | string | null
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    assignedTo?: XOR<UserScalarRelationFilter, UserWhereInput>
    assignedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    updatedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type TaskOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    startDate?: SortOrder
    dueDate?: SortOrder
    status?: SortOrder
    projectId?: SortOrder
    assignedToId?: SortOrder
    assignedById?: SortOrder
    updatedById?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    completedOn?: SortOrderInput | SortOrder
    _count?: TaskCountOrderByAggregateInput
    _avg?: TaskAvgOrderByAggregateInput
    _max?: TaskMaxOrderByAggregateInput
    _min?: TaskMinOrderByAggregateInput
    _sum?: TaskSumOrderByAggregateInput
  }

  export type TaskScalarWhereWithAggregatesInput = {
    AND?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    OR?: TaskScalarWhereWithAggregatesInput[]
    NOT?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Task"> | number
    title?: StringWithAggregatesFilter<"Task"> | string
    description?: StringNullableWithAggregatesFilter<"Task"> | string | null
    startDate?: DateTimeWithAggregatesFilter<"Task"> | Date | string
    dueDate?: DateTimeWithAggregatesFilter<"Task"> | Date | string
    status?: EnumTaskStatusWithAggregatesFilter<"Task"> | $Enums.TaskStatus
    projectId?: IntWithAggregatesFilter<"Task"> | number
    assignedToId?: IntWithAggregatesFilter<"Task"> | number
    assignedById?: IntWithAggregatesFilter<"Task"> | number
    updatedById?: IntNullableWithAggregatesFilter<"Task"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Task"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Task"> | Date | string
    completedOn?: DateTimeNullableWithAggregatesFilter<"Task"> | Date | string | null
  }

  export type GitHubRepoWhereInput = {
    AND?: GitHubRepoWhereInput | GitHubRepoWhereInput[]
    OR?: GitHubRepoWhereInput[]
    NOT?: GitHubRepoWhereInput | GitHubRepoWhereInput[]
    id?: IntFilter<"GitHubRepo"> | number
    name?: StringFilter<"GitHubRepo"> | string
    url?: StringFilter<"GitHubRepo"> | string
    createdAt?: DateTimeFilter<"GitHubRepo"> | Date | string
    updatedAt?: DateTimeFilter<"GitHubRepo"> | Date | string
    projectId?: IntFilter<"GitHubRepo"> | number
    webHookId?: IntNullableFilter<"GitHubRepo"> | number | null
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    GitHubCommit?: GitHubCommitListRelationFilter
    GitHubCommitGroup?: GitHubCommitGroupListRelationFilter
  }

  export type GitHubRepoOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    projectId?: SortOrder
    webHookId?: SortOrderInput | SortOrder
    project?: ProjectOrderByWithRelationInput
    GitHubCommit?: GitHubCommitOrderByRelationAggregateInput
    GitHubCommitGroup?: GitHubCommitGroupOrderByRelationAggregateInput
  }

  export type GitHubRepoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: GitHubRepoWhereInput | GitHubRepoWhereInput[]
    OR?: GitHubRepoWhereInput[]
    NOT?: GitHubRepoWhereInput | GitHubRepoWhereInput[]
    name?: StringFilter<"GitHubRepo"> | string
    url?: StringFilter<"GitHubRepo"> | string
    createdAt?: DateTimeFilter<"GitHubRepo"> | Date | string
    updatedAt?: DateTimeFilter<"GitHubRepo"> | Date | string
    projectId?: IntFilter<"GitHubRepo"> | number
    webHookId?: IntNullableFilter<"GitHubRepo"> | number | null
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    GitHubCommit?: GitHubCommitListRelationFilter
    GitHubCommitGroup?: GitHubCommitGroupListRelationFilter
  }, "id">

  export type GitHubRepoOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    projectId?: SortOrder
    webHookId?: SortOrderInput | SortOrder
    _count?: GitHubRepoCountOrderByAggregateInput
    _avg?: GitHubRepoAvgOrderByAggregateInput
    _max?: GitHubRepoMaxOrderByAggregateInput
    _min?: GitHubRepoMinOrderByAggregateInput
    _sum?: GitHubRepoSumOrderByAggregateInput
  }

  export type GitHubRepoScalarWhereWithAggregatesInput = {
    AND?: GitHubRepoScalarWhereWithAggregatesInput | GitHubRepoScalarWhereWithAggregatesInput[]
    OR?: GitHubRepoScalarWhereWithAggregatesInput[]
    NOT?: GitHubRepoScalarWhereWithAggregatesInput | GitHubRepoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"GitHubRepo"> | number
    name?: StringWithAggregatesFilter<"GitHubRepo"> | string
    url?: StringWithAggregatesFilter<"GitHubRepo"> | string
    createdAt?: DateTimeWithAggregatesFilter<"GitHubRepo"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"GitHubRepo"> | Date | string
    projectId?: IntWithAggregatesFilter<"GitHubRepo"> | number
    webHookId?: IntNullableWithAggregatesFilter<"GitHubRepo"> | number | null
  }

  export type GitHubCommitWhereInput = {
    AND?: GitHubCommitWhereInput | GitHubCommitWhereInput[]
    OR?: GitHubCommitWhereInput[]
    NOT?: GitHubCommitWhereInput | GitHubCommitWhereInput[]
    id?: IntFilter<"GitHubCommit"> | number
    repoId?: IntFilter<"GitHubCommit"> | number
    userId?: IntFilter<"GitHubCommit"> | number
    commitDate?: DateTimeFilter<"GitHubCommit"> | Date | string
    timing?: DateTimeFilter<"GitHubCommit"> | Date | string
    message?: StringFilter<"GitHubCommit"> | string
    gitHubCommitGroupId?: IntNullableFilter<"GitHubCommit"> | number | null
    repo?: XOR<GitHubRepoScalarRelationFilter, GitHubRepoWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    GitHubCommitGroup?: XOR<GitHubCommitGroupNullableScalarRelationFilter, GitHubCommitGroupWhereInput> | null
  }

  export type GitHubCommitOrderByWithRelationInput = {
    id?: SortOrder
    repoId?: SortOrder
    userId?: SortOrder
    commitDate?: SortOrder
    timing?: SortOrder
    message?: SortOrder
    gitHubCommitGroupId?: SortOrderInput | SortOrder
    repo?: GitHubRepoOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    GitHubCommitGroup?: GitHubCommitGroupOrderByWithRelationInput
  }

  export type GitHubCommitWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: GitHubCommitWhereInput | GitHubCommitWhereInput[]
    OR?: GitHubCommitWhereInput[]
    NOT?: GitHubCommitWhereInput | GitHubCommitWhereInput[]
    repoId?: IntFilter<"GitHubCommit"> | number
    userId?: IntFilter<"GitHubCommit"> | number
    commitDate?: DateTimeFilter<"GitHubCommit"> | Date | string
    timing?: DateTimeFilter<"GitHubCommit"> | Date | string
    message?: StringFilter<"GitHubCommit"> | string
    gitHubCommitGroupId?: IntNullableFilter<"GitHubCommit"> | number | null
    repo?: XOR<GitHubRepoScalarRelationFilter, GitHubRepoWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    GitHubCommitGroup?: XOR<GitHubCommitGroupNullableScalarRelationFilter, GitHubCommitGroupWhereInput> | null
  }, "id">

  export type GitHubCommitOrderByWithAggregationInput = {
    id?: SortOrder
    repoId?: SortOrder
    userId?: SortOrder
    commitDate?: SortOrder
    timing?: SortOrder
    message?: SortOrder
    gitHubCommitGroupId?: SortOrderInput | SortOrder
    _count?: GitHubCommitCountOrderByAggregateInput
    _avg?: GitHubCommitAvgOrderByAggregateInput
    _max?: GitHubCommitMaxOrderByAggregateInput
    _min?: GitHubCommitMinOrderByAggregateInput
    _sum?: GitHubCommitSumOrderByAggregateInput
  }

  export type GitHubCommitScalarWhereWithAggregatesInput = {
    AND?: GitHubCommitScalarWhereWithAggregatesInput | GitHubCommitScalarWhereWithAggregatesInput[]
    OR?: GitHubCommitScalarWhereWithAggregatesInput[]
    NOT?: GitHubCommitScalarWhereWithAggregatesInput | GitHubCommitScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"GitHubCommit"> | number
    repoId?: IntWithAggregatesFilter<"GitHubCommit"> | number
    userId?: IntWithAggregatesFilter<"GitHubCommit"> | number
    commitDate?: DateTimeWithAggregatesFilter<"GitHubCommit"> | Date | string
    timing?: DateTimeWithAggregatesFilter<"GitHubCommit"> | Date | string
    message?: StringWithAggregatesFilter<"GitHubCommit"> | string
    gitHubCommitGroupId?: IntNullableWithAggregatesFilter<"GitHubCommit"> | number | null
  }

  export type GitHubCommitGroupWhereInput = {
    AND?: GitHubCommitGroupWhereInput | GitHubCommitGroupWhereInput[]
    OR?: GitHubCommitGroupWhereInput[]
    NOT?: GitHubCommitGroupWhereInput | GitHubCommitGroupWhereInput[]
    id?: IntFilter<"GitHubCommitGroup"> | number
    userId?: IntFilter<"GitHubCommitGroup"> | number
    repoId?: IntFilter<"GitHubCommitGroup"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    repo?: XOR<GitHubRepoScalarRelationFilter, GitHubRepoWhereInput>
    commits?: GitHubCommitListRelationFilter
  }

  export type GitHubCommitGroupOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    repoId?: SortOrder
    user?: UserOrderByWithRelationInput
    repo?: GitHubRepoOrderByWithRelationInput
    commits?: GitHubCommitOrderByRelationAggregateInput
  }

  export type GitHubCommitGroupWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: GitHubCommitGroupWhereInput | GitHubCommitGroupWhereInput[]
    OR?: GitHubCommitGroupWhereInput[]
    NOT?: GitHubCommitGroupWhereInput | GitHubCommitGroupWhereInput[]
    userId?: IntFilter<"GitHubCommitGroup"> | number
    repoId?: IntFilter<"GitHubCommitGroup"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    repo?: XOR<GitHubRepoScalarRelationFilter, GitHubRepoWhereInput>
    commits?: GitHubCommitListRelationFilter
  }, "id">

  export type GitHubCommitGroupOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    repoId?: SortOrder
    _count?: GitHubCommitGroupCountOrderByAggregateInput
    _avg?: GitHubCommitGroupAvgOrderByAggregateInput
    _max?: GitHubCommitGroupMaxOrderByAggregateInput
    _min?: GitHubCommitGroupMinOrderByAggregateInput
    _sum?: GitHubCommitGroupSumOrderByAggregateInput
  }

  export type GitHubCommitGroupScalarWhereWithAggregatesInput = {
    AND?: GitHubCommitGroupScalarWhereWithAggregatesInput | GitHubCommitGroupScalarWhereWithAggregatesInput[]
    OR?: GitHubCommitGroupScalarWhereWithAggregatesInput[]
    NOT?: GitHubCommitGroupScalarWhereWithAggregatesInput | GitHubCommitGroupScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"GitHubCommitGroup"> | number
    userId?: IntWithAggregatesFilter<"GitHubCommitGroup"> | number
    repoId?: IntWithAggregatesFilter<"GitHubCommitGroup"> | number
  }

  export type DailyLogWhereInput = {
    AND?: DailyLogWhereInput | DailyLogWhereInput[]
    OR?: DailyLogWhereInput[]
    NOT?: DailyLogWhereInput | DailyLogWhereInput[]
    id?: IntFilter<"DailyLog"> | number
    userId?: IntFilter<"DailyLog"> | number
    date?: DateTimeFilter<"DailyLog"> | Date | string
    works?: JsonFilter<"DailyLog">
    aiSummary?: StringNullableFilter<"DailyLog"> | string | null
    export?: StringNullableFilter<"DailyLog"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type DailyLogOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    works?: SortOrder
    aiSummary?: SortOrderInput | SortOrder
    export?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type DailyLogWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DailyLogWhereInput | DailyLogWhereInput[]
    OR?: DailyLogWhereInput[]
    NOT?: DailyLogWhereInput | DailyLogWhereInput[]
    userId?: IntFilter<"DailyLog"> | number
    date?: DateTimeFilter<"DailyLog"> | Date | string
    works?: JsonFilter<"DailyLog">
    aiSummary?: StringNullableFilter<"DailyLog"> | string | null
    export?: StringNullableFilter<"DailyLog"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type DailyLogOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    works?: SortOrder
    aiSummary?: SortOrderInput | SortOrder
    export?: SortOrderInput | SortOrder
    _count?: DailyLogCountOrderByAggregateInput
    _avg?: DailyLogAvgOrderByAggregateInput
    _max?: DailyLogMaxOrderByAggregateInput
    _min?: DailyLogMinOrderByAggregateInput
    _sum?: DailyLogSumOrderByAggregateInput
  }

  export type DailyLogScalarWhereWithAggregatesInput = {
    AND?: DailyLogScalarWhereWithAggregatesInput | DailyLogScalarWhereWithAggregatesInput[]
    OR?: DailyLogScalarWhereWithAggregatesInput[]
    NOT?: DailyLogScalarWhereWithAggregatesInput | DailyLogScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DailyLog"> | number
    userId?: IntWithAggregatesFilter<"DailyLog"> | number
    date?: DateTimeWithAggregatesFilter<"DailyLog"> | Date | string
    works?: JsonWithAggregatesFilter<"DailyLog">
    aiSummary?: StringNullableWithAggregatesFilter<"DailyLog"> | string | null
    export?: StringNullableWithAggregatesFilter<"DailyLog"> | string | null
  }

  export type UserCreateInput = {
    email: string
    password?: string | null
    firstName?: string | null
    lastName?: string | null
    username?: string | null
    image?: string | null
    isActive?: boolean
    isAdmin?: boolean
    isVerified?: boolean
    createdAt?: Date | string
    accessToken?: string | null
    githubToken?: string | null
    githubUsername?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    Project?: ProjectCreateNestedManyWithoutOwnerInput
    ProjectMembers?: ProjectCreateNestedManyWithoutMembersInput
    assignedTasks?: TaskCreateNestedManyWithoutAssignedToInput
    createdTasks?: TaskCreateNestedManyWithoutAssignedByInput
    updatedTasks?: TaskCreateNestedManyWithoutUpdatedByInput
    GitHubCommit?: GitHubCommitCreateNestedManyWithoutUserInput
    GitHubCommitGroup?: GitHubCommitGroupCreateNestedManyWithoutUserInput
    DailyLog?: DailyLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    password?: string | null
    firstName?: string | null
    lastName?: string | null
    username?: string | null
    image?: string | null
    isActive?: boolean
    isAdmin?: boolean
    isVerified?: boolean
    createdAt?: Date | string
    accessToken?: string | null
    githubToken?: string | null
    githubUsername?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    Project?: ProjectUncheckedCreateNestedManyWithoutOwnerInput
    ProjectMembers?: ProjectUncheckedCreateNestedManyWithoutMembersInput
    assignedTasks?: TaskUncheckedCreateNestedManyWithoutAssignedToInput
    createdTasks?: TaskUncheckedCreateNestedManyWithoutAssignedByInput
    updatedTasks?: TaskUncheckedCreateNestedManyWithoutUpdatedByInput
    GitHubCommit?: GitHubCommitUncheckedCreateNestedManyWithoutUserInput
    GitHubCommitGroup?: GitHubCommitGroupUncheckedCreateNestedManyWithoutUserInput
    DailyLog?: DailyLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    githubToken?: NullableStringFieldUpdateOperationsInput | string | null
    githubUsername?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    Project?: ProjectUpdateManyWithoutOwnerNestedInput
    ProjectMembers?: ProjectUpdateManyWithoutMembersNestedInput
    assignedTasks?: TaskUpdateManyWithoutAssignedToNestedInput
    createdTasks?: TaskUpdateManyWithoutAssignedByNestedInput
    updatedTasks?: TaskUpdateManyWithoutUpdatedByNestedInput
    GitHubCommit?: GitHubCommitUpdateManyWithoutUserNestedInput
    GitHubCommitGroup?: GitHubCommitGroupUpdateManyWithoutUserNestedInput
    DailyLog?: DailyLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    githubToken?: NullableStringFieldUpdateOperationsInput | string | null
    githubUsername?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    Project?: ProjectUncheckedUpdateManyWithoutOwnerNestedInput
    ProjectMembers?: ProjectUncheckedUpdateManyWithoutMembersNestedInput
    assignedTasks?: TaskUncheckedUpdateManyWithoutAssignedToNestedInput
    createdTasks?: TaskUncheckedUpdateManyWithoutAssignedByNestedInput
    updatedTasks?: TaskUncheckedUpdateManyWithoutUpdatedByNestedInput
    GitHubCommit?: GitHubCommitUncheckedUpdateManyWithoutUserNestedInput
    GitHubCommitGroup?: GitHubCommitGroupUncheckedUpdateManyWithoutUserNestedInput
    DailyLog?: DailyLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    password?: string | null
    firstName?: string | null
    lastName?: string | null
    username?: string | null
    image?: string | null
    isActive?: boolean
    isAdmin?: boolean
    isVerified?: boolean
    createdAt?: Date | string
    accessToken?: string | null
    githubToken?: string | null
    githubUsername?: string | null
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    githubToken?: NullableStringFieldUpdateOperationsInput | string | null
    githubUsername?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    githubToken?: NullableStringFieldUpdateOperationsInput | string | null
    githubUsername?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountCreateInput = {
    provider: string
    providerAccountId: string
    accessToken?: string | null
    refreshToken?: string | null
    expiresAt?: Date | string | null
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id?: number
    provider: string
    providerAccountId: string
    userId: number
    accessToken?: string | null
    refreshToken?: string | null
    expiresAt?: Date | string | null
  }

  export type AccountUpdateInput = {
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AccountCreateManyInput = {
    id?: number
    provider: string
    providerAccountId: string
    userId: number
    accessToken?: string | null
    refreshToken?: string | null
    expiresAt?: Date | string | null
  }

  export type AccountUpdateManyMutationInput = {
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProjectCreateInput = {
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutProjectInput
    members?: UserCreateNestedManyWithoutProjectMembersInput
    tasks?: TaskCreateNestedManyWithoutProjectInput
    githubRepos?: GitHubRepoCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
    members?: UserUncheckedCreateNestedManyWithoutProjectMembersInput
    tasks?: TaskUncheckedCreateNestedManyWithoutProjectInput
    githubRepos?: GitHubRepoUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutProjectNestedInput
    members?: UserUpdateManyWithoutProjectMembersNestedInput
    tasks?: TaskUpdateManyWithoutProjectNestedInput
    githubRepos?: GitHubRepoUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    members?: UserUncheckedUpdateManyWithoutProjectMembersNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutProjectNestedInput
    githubRepos?: GitHubRepoUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
  }

  export type ProjectUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type TaskCreateInput = {
    title: string
    description?: string | null
    startDate: Date | string
    dueDate: Date | string
    status?: $Enums.TaskStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    completedOn?: Date | string | null
    project: ProjectCreateNestedOneWithoutTasksInput
    assignedTo: UserCreateNestedOneWithoutAssignedTasksInput
    assignedBy: UserCreateNestedOneWithoutCreatedTasksInput
    updatedBy?: UserCreateNestedOneWithoutUpdatedTasksInput
  }

  export type TaskUncheckedCreateInput = {
    id?: number
    title: string
    description?: string | null
    startDate: Date | string
    dueDate: Date | string
    status?: $Enums.TaskStatus
    projectId: number
    assignedToId: number
    assignedById: number
    updatedById?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    completedOn?: Date | string | null
  }

  export type TaskUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedOn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    project?: ProjectUpdateOneRequiredWithoutTasksNestedInput
    assignedTo?: UserUpdateOneRequiredWithoutAssignedTasksNestedInput
    assignedBy?: UserUpdateOneRequiredWithoutCreatedTasksNestedInput
    updatedBy?: UserUpdateOneWithoutUpdatedTasksNestedInput
  }

  export type TaskUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    projectId?: IntFieldUpdateOperationsInput | number
    assignedToId?: IntFieldUpdateOperationsInput | number
    assignedById?: IntFieldUpdateOperationsInput | number
    updatedById?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedOn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TaskCreateManyInput = {
    id?: number
    title: string
    description?: string | null
    startDate: Date | string
    dueDate: Date | string
    status?: $Enums.TaskStatus
    projectId: number
    assignedToId: number
    assignedById: number
    updatedById?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    completedOn?: Date | string | null
  }

  export type TaskUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedOn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TaskUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    projectId?: IntFieldUpdateOperationsInput | number
    assignedToId?: IntFieldUpdateOperationsInput | number
    assignedById?: IntFieldUpdateOperationsInput | number
    updatedById?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedOn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type GitHubRepoCreateInput = {
    name: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    webHookId?: number | null
    project: ProjectCreateNestedOneWithoutGithubReposInput
    GitHubCommit?: GitHubCommitCreateNestedManyWithoutRepoInput
    GitHubCommitGroup?: GitHubCommitGroupCreateNestedManyWithoutRepoInput
  }

  export type GitHubRepoUncheckedCreateInput = {
    id?: number
    name: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    projectId: number
    webHookId?: number | null
    GitHubCommit?: GitHubCommitUncheckedCreateNestedManyWithoutRepoInput
    GitHubCommitGroup?: GitHubCommitGroupUncheckedCreateNestedManyWithoutRepoInput
  }

  export type GitHubRepoUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    webHookId?: NullableIntFieldUpdateOperationsInput | number | null
    project?: ProjectUpdateOneRequiredWithoutGithubReposNestedInput
    GitHubCommit?: GitHubCommitUpdateManyWithoutRepoNestedInput
    GitHubCommitGroup?: GitHubCommitGroupUpdateManyWithoutRepoNestedInput
  }

  export type GitHubRepoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectId?: IntFieldUpdateOperationsInput | number
    webHookId?: NullableIntFieldUpdateOperationsInput | number | null
    GitHubCommit?: GitHubCommitUncheckedUpdateManyWithoutRepoNestedInput
    GitHubCommitGroup?: GitHubCommitGroupUncheckedUpdateManyWithoutRepoNestedInput
  }

  export type GitHubRepoCreateManyInput = {
    id?: number
    name: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    projectId: number
    webHookId?: number | null
  }

  export type GitHubRepoUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    webHookId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type GitHubRepoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectId?: IntFieldUpdateOperationsInput | number
    webHookId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type GitHubCommitCreateInput = {
    commitDate: Date | string
    timing: Date | string
    message: string
    repo: GitHubRepoCreateNestedOneWithoutGitHubCommitInput
    user: UserCreateNestedOneWithoutGitHubCommitInput
    GitHubCommitGroup?: GitHubCommitGroupCreateNestedOneWithoutCommitsInput
  }

  export type GitHubCommitUncheckedCreateInput = {
    id?: number
    repoId: number
    userId: number
    commitDate: Date | string
    timing: Date | string
    message: string
    gitHubCommitGroupId?: number | null
  }

  export type GitHubCommitUpdateInput = {
    commitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    timing?: DateTimeFieldUpdateOperationsInput | Date | string
    message?: StringFieldUpdateOperationsInput | string
    repo?: GitHubRepoUpdateOneRequiredWithoutGitHubCommitNestedInput
    user?: UserUpdateOneRequiredWithoutGitHubCommitNestedInput
    GitHubCommitGroup?: GitHubCommitGroupUpdateOneWithoutCommitsNestedInput
  }

  export type GitHubCommitUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    repoId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    commitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    timing?: DateTimeFieldUpdateOperationsInput | Date | string
    message?: StringFieldUpdateOperationsInput | string
    gitHubCommitGroupId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type GitHubCommitCreateManyInput = {
    id?: number
    repoId: number
    userId: number
    commitDate: Date | string
    timing: Date | string
    message: string
    gitHubCommitGroupId?: number | null
  }

  export type GitHubCommitUpdateManyMutationInput = {
    commitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    timing?: DateTimeFieldUpdateOperationsInput | Date | string
    message?: StringFieldUpdateOperationsInput | string
  }

  export type GitHubCommitUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    repoId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    commitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    timing?: DateTimeFieldUpdateOperationsInput | Date | string
    message?: StringFieldUpdateOperationsInput | string
    gitHubCommitGroupId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type GitHubCommitGroupCreateInput = {
    user: UserCreateNestedOneWithoutGitHubCommitGroupInput
    repo: GitHubRepoCreateNestedOneWithoutGitHubCommitGroupInput
    commits?: GitHubCommitCreateNestedManyWithoutGitHubCommitGroupInput
  }

  export type GitHubCommitGroupUncheckedCreateInput = {
    id?: number
    userId: number
    repoId: number
    commits?: GitHubCommitUncheckedCreateNestedManyWithoutGitHubCommitGroupInput
  }

  export type GitHubCommitGroupUpdateInput = {
    user?: UserUpdateOneRequiredWithoutGitHubCommitGroupNestedInput
    repo?: GitHubRepoUpdateOneRequiredWithoutGitHubCommitGroupNestedInput
    commits?: GitHubCommitUpdateManyWithoutGitHubCommitGroupNestedInput
  }

  export type GitHubCommitGroupUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    repoId?: IntFieldUpdateOperationsInput | number
    commits?: GitHubCommitUncheckedUpdateManyWithoutGitHubCommitGroupNestedInput
  }

  export type GitHubCommitGroupCreateManyInput = {
    id?: number
    userId: number
    repoId: number
  }

  export type GitHubCommitGroupUpdateManyMutationInput = {

  }

  export type GitHubCommitGroupUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    repoId?: IntFieldUpdateOperationsInput | number
  }

  export type DailyLogCreateInput = {
    date: Date | string
    works: JsonNullValueInput | InputJsonValue
    aiSummary?: string | null
    export?: string | null
    user: UserCreateNestedOneWithoutDailyLogInput
  }

  export type DailyLogUncheckedCreateInput = {
    id?: number
    userId: number
    date: Date | string
    works: JsonNullValueInput | InputJsonValue
    aiSummary?: string | null
    export?: string | null
  }

  export type DailyLogUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    works?: JsonNullValueInput | InputJsonValue
    aiSummary?: NullableStringFieldUpdateOperationsInput | string | null
    export?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutDailyLogNestedInput
  }

  export type DailyLogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    works?: JsonNullValueInput | InputJsonValue
    aiSummary?: NullableStringFieldUpdateOperationsInput | string | null
    export?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DailyLogCreateManyInput = {
    id?: number
    userId: number
    date: Date | string
    works: JsonNullValueInput | InputJsonValue
    aiSummary?: string | null
    export?: string | null
  }

  export type DailyLogUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    works?: JsonNullValueInput | InputJsonValue
    aiSummary?: NullableStringFieldUpdateOperationsInput | string | null
    export?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DailyLogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    works?: JsonNullValueInput | InputJsonValue
    aiSummary?: NullableStringFieldUpdateOperationsInput | string | null
    export?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type ProjectListRelationFilter = {
    every?: ProjectWhereInput
    some?: ProjectWhereInput
    none?: ProjectWhereInput
  }

  export type TaskListRelationFilter = {
    every?: TaskWhereInput
    some?: TaskWhereInput
    none?: TaskWhereInput
  }

  export type GitHubCommitListRelationFilter = {
    every?: GitHubCommitWhereInput
    some?: GitHubCommitWhereInput
    none?: GitHubCommitWhereInput
  }

  export type GitHubCommitGroupListRelationFilter = {
    every?: GitHubCommitGroupWhereInput
    some?: GitHubCommitGroupWhereInput
    none?: GitHubCommitGroupWhereInput
  }

  export type DailyLogListRelationFilter = {
    every?: DailyLogWhereInput
    some?: DailyLogWhereInput
    none?: DailyLogWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TaskOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GitHubCommitOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GitHubCommitGroupOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DailyLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    username?: SortOrder
    image?: SortOrder
    isActive?: SortOrder
    isAdmin?: SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
    accessToken?: SortOrder
    githubToken?: SortOrder
    githubUsername?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    username?: SortOrder
    image?: SortOrder
    isActive?: SortOrder
    isAdmin?: SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
    accessToken?: SortOrder
    githubToken?: SortOrder
    githubUsername?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    username?: SortOrder
    image?: SortOrder
    isActive?: SortOrder
    isAdmin?: SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
    accessToken?: SortOrder
    githubToken?: SortOrder
    githubUsername?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string
    providerAccountId: string
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    expiresAt?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    expiresAt?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    expiresAt?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type GitHubRepoListRelationFilter = {
    every?: GitHubRepoWhereInput
    some?: GitHubRepoWhereInput
    none?: GitHubRepoWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GitHubRepoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type ProjectAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type ProjectSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type EnumTaskStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskStatusFilter<$PrismaModel> | $Enums.TaskStatus
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ProjectScalarRelationFilter = {
    is?: ProjectWhereInput
    isNot?: ProjectWhereInput
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type TaskCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    dueDate?: SortOrder
    status?: SortOrder
    projectId?: SortOrder
    assignedToId?: SortOrder
    assignedById?: SortOrder
    updatedById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    completedOn?: SortOrder
  }

  export type TaskAvgOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    assignedToId?: SortOrder
    assignedById?: SortOrder
    updatedById?: SortOrder
  }

  export type TaskMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    dueDate?: SortOrder
    status?: SortOrder
    projectId?: SortOrder
    assignedToId?: SortOrder
    assignedById?: SortOrder
    updatedById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    completedOn?: SortOrder
  }

  export type TaskMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    dueDate?: SortOrder
    status?: SortOrder
    projectId?: SortOrder
    assignedToId?: SortOrder
    assignedById?: SortOrder
    updatedById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    completedOn?: SortOrder
  }

  export type TaskSumOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    assignedToId?: SortOrder
    assignedById?: SortOrder
    updatedById?: SortOrder
  }

  export type EnumTaskStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskStatusWithAggregatesFilter<$PrismaModel> | $Enums.TaskStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskStatusFilter<$PrismaModel>
    _max?: NestedEnumTaskStatusFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type GitHubRepoCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    projectId?: SortOrder
    webHookId?: SortOrder
  }

  export type GitHubRepoAvgOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    webHookId?: SortOrder
  }

  export type GitHubRepoMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    projectId?: SortOrder
    webHookId?: SortOrder
  }

  export type GitHubRepoMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    projectId?: SortOrder
    webHookId?: SortOrder
  }

  export type GitHubRepoSumOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    webHookId?: SortOrder
  }

  export type GitHubRepoScalarRelationFilter = {
    is?: GitHubRepoWhereInput
    isNot?: GitHubRepoWhereInput
  }

  export type GitHubCommitGroupNullableScalarRelationFilter = {
    is?: GitHubCommitGroupWhereInput | null
    isNot?: GitHubCommitGroupWhereInput | null
  }

  export type GitHubCommitCountOrderByAggregateInput = {
    id?: SortOrder
    repoId?: SortOrder
    userId?: SortOrder
    commitDate?: SortOrder
    timing?: SortOrder
    message?: SortOrder
    gitHubCommitGroupId?: SortOrder
  }

  export type GitHubCommitAvgOrderByAggregateInput = {
    id?: SortOrder
    repoId?: SortOrder
    userId?: SortOrder
    gitHubCommitGroupId?: SortOrder
  }

  export type GitHubCommitMaxOrderByAggregateInput = {
    id?: SortOrder
    repoId?: SortOrder
    userId?: SortOrder
    commitDate?: SortOrder
    timing?: SortOrder
    message?: SortOrder
    gitHubCommitGroupId?: SortOrder
  }

  export type GitHubCommitMinOrderByAggregateInput = {
    id?: SortOrder
    repoId?: SortOrder
    userId?: SortOrder
    commitDate?: SortOrder
    timing?: SortOrder
    message?: SortOrder
    gitHubCommitGroupId?: SortOrder
  }

  export type GitHubCommitSumOrderByAggregateInput = {
    id?: SortOrder
    repoId?: SortOrder
    userId?: SortOrder
    gitHubCommitGroupId?: SortOrder
  }

  export type GitHubCommitGroupCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    repoId?: SortOrder
  }

  export type GitHubCommitGroupAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    repoId?: SortOrder
  }

  export type GitHubCommitGroupMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    repoId?: SortOrder
  }

  export type GitHubCommitGroupMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    repoId?: SortOrder
  }

  export type GitHubCommitGroupSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    repoId?: SortOrder
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type DailyLogCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    works?: SortOrder
    aiSummary?: SortOrder
    export?: SortOrder
  }

  export type DailyLogAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type DailyLogMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    aiSummary?: SortOrder
    export?: SortOrder
  }

  export type DailyLogMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    aiSummary?: SortOrder
    export?: SortOrder
  }

  export type DailyLogSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type ProjectCreateNestedManyWithoutOwnerInput = {
    create?: XOR<ProjectCreateWithoutOwnerInput, ProjectUncheckedCreateWithoutOwnerInput> | ProjectCreateWithoutOwnerInput[] | ProjectUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutOwnerInput | ProjectCreateOrConnectWithoutOwnerInput[]
    createMany?: ProjectCreateManyOwnerInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type ProjectCreateNestedManyWithoutMembersInput = {
    create?: XOR<ProjectCreateWithoutMembersInput, ProjectUncheckedCreateWithoutMembersInput> | ProjectCreateWithoutMembersInput[] | ProjectUncheckedCreateWithoutMembersInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutMembersInput | ProjectCreateOrConnectWithoutMembersInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type TaskCreateNestedManyWithoutAssignedToInput = {
    create?: XOR<TaskCreateWithoutAssignedToInput, TaskUncheckedCreateWithoutAssignedToInput> | TaskCreateWithoutAssignedToInput[] | TaskUncheckedCreateWithoutAssignedToInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutAssignedToInput | TaskCreateOrConnectWithoutAssignedToInput[]
    createMany?: TaskCreateManyAssignedToInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type TaskCreateNestedManyWithoutAssignedByInput = {
    create?: XOR<TaskCreateWithoutAssignedByInput, TaskUncheckedCreateWithoutAssignedByInput> | TaskCreateWithoutAssignedByInput[] | TaskUncheckedCreateWithoutAssignedByInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutAssignedByInput | TaskCreateOrConnectWithoutAssignedByInput[]
    createMany?: TaskCreateManyAssignedByInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type TaskCreateNestedManyWithoutUpdatedByInput = {
    create?: XOR<TaskCreateWithoutUpdatedByInput, TaskUncheckedCreateWithoutUpdatedByInput> | TaskCreateWithoutUpdatedByInput[] | TaskUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutUpdatedByInput | TaskCreateOrConnectWithoutUpdatedByInput[]
    createMany?: TaskCreateManyUpdatedByInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type GitHubCommitCreateNestedManyWithoutUserInput = {
    create?: XOR<GitHubCommitCreateWithoutUserInput, GitHubCommitUncheckedCreateWithoutUserInput> | GitHubCommitCreateWithoutUserInput[] | GitHubCommitUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GitHubCommitCreateOrConnectWithoutUserInput | GitHubCommitCreateOrConnectWithoutUserInput[]
    createMany?: GitHubCommitCreateManyUserInputEnvelope
    connect?: GitHubCommitWhereUniqueInput | GitHubCommitWhereUniqueInput[]
  }

  export type GitHubCommitGroupCreateNestedManyWithoutUserInput = {
    create?: XOR<GitHubCommitGroupCreateWithoutUserInput, GitHubCommitGroupUncheckedCreateWithoutUserInput> | GitHubCommitGroupCreateWithoutUserInput[] | GitHubCommitGroupUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GitHubCommitGroupCreateOrConnectWithoutUserInput | GitHubCommitGroupCreateOrConnectWithoutUserInput[]
    createMany?: GitHubCommitGroupCreateManyUserInputEnvelope
    connect?: GitHubCommitGroupWhereUniqueInput | GitHubCommitGroupWhereUniqueInput[]
  }

  export type DailyLogCreateNestedManyWithoutUserInput = {
    create?: XOR<DailyLogCreateWithoutUserInput, DailyLogUncheckedCreateWithoutUserInput> | DailyLogCreateWithoutUserInput[] | DailyLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DailyLogCreateOrConnectWithoutUserInput | DailyLogCreateOrConnectWithoutUserInput[]
    createMany?: DailyLogCreateManyUserInputEnvelope
    connect?: DailyLogWhereUniqueInput | DailyLogWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type ProjectUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<ProjectCreateWithoutOwnerInput, ProjectUncheckedCreateWithoutOwnerInput> | ProjectCreateWithoutOwnerInput[] | ProjectUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutOwnerInput | ProjectCreateOrConnectWithoutOwnerInput[]
    createMany?: ProjectCreateManyOwnerInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type ProjectUncheckedCreateNestedManyWithoutMembersInput = {
    create?: XOR<ProjectCreateWithoutMembersInput, ProjectUncheckedCreateWithoutMembersInput> | ProjectCreateWithoutMembersInput[] | ProjectUncheckedCreateWithoutMembersInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutMembersInput | ProjectCreateOrConnectWithoutMembersInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type TaskUncheckedCreateNestedManyWithoutAssignedToInput = {
    create?: XOR<TaskCreateWithoutAssignedToInput, TaskUncheckedCreateWithoutAssignedToInput> | TaskCreateWithoutAssignedToInput[] | TaskUncheckedCreateWithoutAssignedToInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutAssignedToInput | TaskCreateOrConnectWithoutAssignedToInput[]
    createMany?: TaskCreateManyAssignedToInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type TaskUncheckedCreateNestedManyWithoutAssignedByInput = {
    create?: XOR<TaskCreateWithoutAssignedByInput, TaskUncheckedCreateWithoutAssignedByInput> | TaskCreateWithoutAssignedByInput[] | TaskUncheckedCreateWithoutAssignedByInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutAssignedByInput | TaskCreateOrConnectWithoutAssignedByInput[]
    createMany?: TaskCreateManyAssignedByInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type TaskUncheckedCreateNestedManyWithoutUpdatedByInput = {
    create?: XOR<TaskCreateWithoutUpdatedByInput, TaskUncheckedCreateWithoutUpdatedByInput> | TaskCreateWithoutUpdatedByInput[] | TaskUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutUpdatedByInput | TaskCreateOrConnectWithoutUpdatedByInput[]
    createMany?: TaskCreateManyUpdatedByInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type GitHubCommitUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<GitHubCommitCreateWithoutUserInput, GitHubCommitUncheckedCreateWithoutUserInput> | GitHubCommitCreateWithoutUserInput[] | GitHubCommitUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GitHubCommitCreateOrConnectWithoutUserInput | GitHubCommitCreateOrConnectWithoutUserInput[]
    createMany?: GitHubCommitCreateManyUserInputEnvelope
    connect?: GitHubCommitWhereUniqueInput | GitHubCommitWhereUniqueInput[]
  }

  export type GitHubCommitGroupUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<GitHubCommitGroupCreateWithoutUserInput, GitHubCommitGroupUncheckedCreateWithoutUserInput> | GitHubCommitGroupCreateWithoutUserInput[] | GitHubCommitGroupUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GitHubCommitGroupCreateOrConnectWithoutUserInput | GitHubCommitGroupCreateOrConnectWithoutUserInput[]
    createMany?: GitHubCommitGroupCreateManyUserInputEnvelope
    connect?: GitHubCommitGroupWhereUniqueInput | GitHubCommitGroupWhereUniqueInput[]
  }

  export type DailyLogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DailyLogCreateWithoutUserInput, DailyLogUncheckedCreateWithoutUserInput> | DailyLogCreateWithoutUserInput[] | DailyLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DailyLogCreateOrConnectWithoutUserInput | DailyLogCreateOrConnectWithoutUserInput[]
    createMany?: DailyLogCreateManyUserInputEnvelope
    connect?: DailyLogWhereUniqueInput | DailyLogWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type ProjectUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<ProjectCreateWithoutOwnerInput, ProjectUncheckedCreateWithoutOwnerInput> | ProjectCreateWithoutOwnerInput[] | ProjectUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutOwnerInput | ProjectCreateOrConnectWithoutOwnerInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutOwnerInput | ProjectUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: ProjectCreateManyOwnerInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutOwnerInput | ProjectUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutOwnerInput | ProjectUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type ProjectUpdateManyWithoutMembersNestedInput = {
    create?: XOR<ProjectCreateWithoutMembersInput, ProjectUncheckedCreateWithoutMembersInput> | ProjectCreateWithoutMembersInput[] | ProjectUncheckedCreateWithoutMembersInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutMembersInput | ProjectCreateOrConnectWithoutMembersInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutMembersInput | ProjectUpsertWithWhereUniqueWithoutMembersInput[]
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutMembersInput | ProjectUpdateWithWhereUniqueWithoutMembersInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutMembersInput | ProjectUpdateManyWithWhereWithoutMembersInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type TaskUpdateManyWithoutAssignedToNestedInput = {
    create?: XOR<TaskCreateWithoutAssignedToInput, TaskUncheckedCreateWithoutAssignedToInput> | TaskCreateWithoutAssignedToInput[] | TaskUncheckedCreateWithoutAssignedToInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutAssignedToInput | TaskCreateOrConnectWithoutAssignedToInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutAssignedToInput | TaskUpsertWithWhereUniqueWithoutAssignedToInput[]
    createMany?: TaskCreateManyAssignedToInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutAssignedToInput | TaskUpdateWithWhereUniqueWithoutAssignedToInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutAssignedToInput | TaskUpdateManyWithWhereWithoutAssignedToInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type TaskUpdateManyWithoutAssignedByNestedInput = {
    create?: XOR<TaskCreateWithoutAssignedByInput, TaskUncheckedCreateWithoutAssignedByInput> | TaskCreateWithoutAssignedByInput[] | TaskUncheckedCreateWithoutAssignedByInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutAssignedByInput | TaskCreateOrConnectWithoutAssignedByInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutAssignedByInput | TaskUpsertWithWhereUniqueWithoutAssignedByInput[]
    createMany?: TaskCreateManyAssignedByInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutAssignedByInput | TaskUpdateWithWhereUniqueWithoutAssignedByInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutAssignedByInput | TaskUpdateManyWithWhereWithoutAssignedByInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type TaskUpdateManyWithoutUpdatedByNestedInput = {
    create?: XOR<TaskCreateWithoutUpdatedByInput, TaskUncheckedCreateWithoutUpdatedByInput> | TaskCreateWithoutUpdatedByInput[] | TaskUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutUpdatedByInput | TaskCreateOrConnectWithoutUpdatedByInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutUpdatedByInput | TaskUpsertWithWhereUniqueWithoutUpdatedByInput[]
    createMany?: TaskCreateManyUpdatedByInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutUpdatedByInput | TaskUpdateWithWhereUniqueWithoutUpdatedByInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutUpdatedByInput | TaskUpdateManyWithWhereWithoutUpdatedByInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type GitHubCommitUpdateManyWithoutUserNestedInput = {
    create?: XOR<GitHubCommitCreateWithoutUserInput, GitHubCommitUncheckedCreateWithoutUserInput> | GitHubCommitCreateWithoutUserInput[] | GitHubCommitUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GitHubCommitCreateOrConnectWithoutUserInput | GitHubCommitCreateOrConnectWithoutUserInput[]
    upsert?: GitHubCommitUpsertWithWhereUniqueWithoutUserInput | GitHubCommitUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GitHubCommitCreateManyUserInputEnvelope
    set?: GitHubCommitWhereUniqueInput | GitHubCommitWhereUniqueInput[]
    disconnect?: GitHubCommitWhereUniqueInput | GitHubCommitWhereUniqueInput[]
    delete?: GitHubCommitWhereUniqueInput | GitHubCommitWhereUniqueInput[]
    connect?: GitHubCommitWhereUniqueInput | GitHubCommitWhereUniqueInput[]
    update?: GitHubCommitUpdateWithWhereUniqueWithoutUserInput | GitHubCommitUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GitHubCommitUpdateManyWithWhereWithoutUserInput | GitHubCommitUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GitHubCommitScalarWhereInput | GitHubCommitScalarWhereInput[]
  }

  export type GitHubCommitGroupUpdateManyWithoutUserNestedInput = {
    create?: XOR<GitHubCommitGroupCreateWithoutUserInput, GitHubCommitGroupUncheckedCreateWithoutUserInput> | GitHubCommitGroupCreateWithoutUserInput[] | GitHubCommitGroupUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GitHubCommitGroupCreateOrConnectWithoutUserInput | GitHubCommitGroupCreateOrConnectWithoutUserInput[]
    upsert?: GitHubCommitGroupUpsertWithWhereUniqueWithoutUserInput | GitHubCommitGroupUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GitHubCommitGroupCreateManyUserInputEnvelope
    set?: GitHubCommitGroupWhereUniqueInput | GitHubCommitGroupWhereUniqueInput[]
    disconnect?: GitHubCommitGroupWhereUniqueInput | GitHubCommitGroupWhereUniqueInput[]
    delete?: GitHubCommitGroupWhereUniqueInput | GitHubCommitGroupWhereUniqueInput[]
    connect?: GitHubCommitGroupWhereUniqueInput | GitHubCommitGroupWhereUniqueInput[]
    update?: GitHubCommitGroupUpdateWithWhereUniqueWithoutUserInput | GitHubCommitGroupUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GitHubCommitGroupUpdateManyWithWhereWithoutUserInput | GitHubCommitGroupUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GitHubCommitGroupScalarWhereInput | GitHubCommitGroupScalarWhereInput[]
  }

  export type DailyLogUpdateManyWithoutUserNestedInput = {
    create?: XOR<DailyLogCreateWithoutUserInput, DailyLogUncheckedCreateWithoutUserInput> | DailyLogCreateWithoutUserInput[] | DailyLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DailyLogCreateOrConnectWithoutUserInput | DailyLogCreateOrConnectWithoutUserInput[]
    upsert?: DailyLogUpsertWithWhereUniqueWithoutUserInput | DailyLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DailyLogCreateManyUserInputEnvelope
    set?: DailyLogWhereUniqueInput | DailyLogWhereUniqueInput[]
    disconnect?: DailyLogWhereUniqueInput | DailyLogWhereUniqueInput[]
    delete?: DailyLogWhereUniqueInput | DailyLogWhereUniqueInput[]
    connect?: DailyLogWhereUniqueInput | DailyLogWhereUniqueInput[]
    update?: DailyLogUpdateWithWhereUniqueWithoutUserInput | DailyLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DailyLogUpdateManyWithWhereWithoutUserInput | DailyLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DailyLogScalarWhereInput | DailyLogScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type ProjectUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<ProjectCreateWithoutOwnerInput, ProjectUncheckedCreateWithoutOwnerInput> | ProjectCreateWithoutOwnerInput[] | ProjectUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutOwnerInput | ProjectCreateOrConnectWithoutOwnerInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutOwnerInput | ProjectUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: ProjectCreateManyOwnerInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutOwnerInput | ProjectUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutOwnerInput | ProjectUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type ProjectUncheckedUpdateManyWithoutMembersNestedInput = {
    create?: XOR<ProjectCreateWithoutMembersInput, ProjectUncheckedCreateWithoutMembersInput> | ProjectCreateWithoutMembersInput[] | ProjectUncheckedCreateWithoutMembersInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutMembersInput | ProjectCreateOrConnectWithoutMembersInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutMembersInput | ProjectUpsertWithWhereUniqueWithoutMembersInput[]
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutMembersInput | ProjectUpdateWithWhereUniqueWithoutMembersInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutMembersInput | ProjectUpdateManyWithWhereWithoutMembersInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type TaskUncheckedUpdateManyWithoutAssignedToNestedInput = {
    create?: XOR<TaskCreateWithoutAssignedToInput, TaskUncheckedCreateWithoutAssignedToInput> | TaskCreateWithoutAssignedToInput[] | TaskUncheckedCreateWithoutAssignedToInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutAssignedToInput | TaskCreateOrConnectWithoutAssignedToInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutAssignedToInput | TaskUpsertWithWhereUniqueWithoutAssignedToInput[]
    createMany?: TaskCreateManyAssignedToInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutAssignedToInput | TaskUpdateWithWhereUniqueWithoutAssignedToInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutAssignedToInput | TaskUpdateManyWithWhereWithoutAssignedToInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type TaskUncheckedUpdateManyWithoutAssignedByNestedInput = {
    create?: XOR<TaskCreateWithoutAssignedByInput, TaskUncheckedCreateWithoutAssignedByInput> | TaskCreateWithoutAssignedByInput[] | TaskUncheckedCreateWithoutAssignedByInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutAssignedByInput | TaskCreateOrConnectWithoutAssignedByInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutAssignedByInput | TaskUpsertWithWhereUniqueWithoutAssignedByInput[]
    createMany?: TaskCreateManyAssignedByInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutAssignedByInput | TaskUpdateWithWhereUniqueWithoutAssignedByInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutAssignedByInput | TaskUpdateManyWithWhereWithoutAssignedByInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type TaskUncheckedUpdateManyWithoutUpdatedByNestedInput = {
    create?: XOR<TaskCreateWithoutUpdatedByInput, TaskUncheckedCreateWithoutUpdatedByInput> | TaskCreateWithoutUpdatedByInput[] | TaskUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutUpdatedByInput | TaskCreateOrConnectWithoutUpdatedByInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutUpdatedByInput | TaskUpsertWithWhereUniqueWithoutUpdatedByInput[]
    createMany?: TaskCreateManyUpdatedByInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutUpdatedByInput | TaskUpdateWithWhereUniqueWithoutUpdatedByInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutUpdatedByInput | TaskUpdateManyWithWhereWithoutUpdatedByInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type GitHubCommitUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<GitHubCommitCreateWithoutUserInput, GitHubCommitUncheckedCreateWithoutUserInput> | GitHubCommitCreateWithoutUserInput[] | GitHubCommitUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GitHubCommitCreateOrConnectWithoutUserInput | GitHubCommitCreateOrConnectWithoutUserInput[]
    upsert?: GitHubCommitUpsertWithWhereUniqueWithoutUserInput | GitHubCommitUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GitHubCommitCreateManyUserInputEnvelope
    set?: GitHubCommitWhereUniqueInput | GitHubCommitWhereUniqueInput[]
    disconnect?: GitHubCommitWhereUniqueInput | GitHubCommitWhereUniqueInput[]
    delete?: GitHubCommitWhereUniqueInput | GitHubCommitWhereUniqueInput[]
    connect?: GitHubCommitWhereUniqueInput | GitHubCommitWhereUniqueInput[]
    update?: GitHubCommitUpdateWithWhereUniqueWithoutUserInput | GitHubCommitUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GitHubCommitUpdateManyWithWhereWithoutUserInput | GitHubCommitUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GitHubCommitScalarWhereInput | GitHubCommitScalarWhereInput[]
  }

  export type GitHubCommitGroupUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<GitHubCommitGroupCreateWithoutUserInput, GitHubCommitGroupUncheckedCreateWithoutUserInput> | GitHubCommitGroupCreateWithoutUserInput[] | GitHubCommitGroupUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GitHubCommitGroupCreateOrConnectWithoutUserInput | GitHubCommitGroupCreateOrConnectWithoutUserInput[]
    upsert?: GitHubCommitGroupUpsertWithWhereUniqueWithoutUserInput | GitHubCommitGroupUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GitHubCommitGroupCreateManyUserInputEnvelope
    set?: GitHubCommitGroupWhereUniqueInput | GitHubCommitGroupWhereUniqueInput[]
    disconnect?: GitHubCommitGroupWhereUniqueInput | GitHubCommitGroupWhereUniqueInput[]
    delete?: GitHubCommitGroupWhereUniqueInput | GitHubCommitGroupWhereUniqueInput[]
    connect?: GitHubCommitGroupWhereUniqueInput | GitHubCommitGroupWhereUniqueInput[]
    update?: GitHubCommitGroupUpdateWithWhereUniqueWithoutUserInput | GitHubCommitGroupUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GitHubCommitGroupUpdateManyWithWhereWithoutUserInput | GitHubCommitGroupUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GitHubCommitGroupScalarWhereInput | GitHubCommitGroupScalarWhereInput[]
  }

  export type DailyLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<DailyLogCreateWithoutUserInput, DailyLogUncheckedCreateWithoutUserInput> | DailyLogCreateWithoutUserInput[] | DailyLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DailyLogCreateOrConnectWithoutUserInput | DailyLogCreateOrConnectWithoutUserInput[]
    upsert?: DailyLogUpsertWithWhereUniqueWithoutUserInput | DailyLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DailyLogCreateManyUserInputEnvelope
    set?: DailyLogWhereUniqueInput | DailyLogWhereUniqueInput[]
    disconnect?: DailyLogWhereUniqueInput | DailyLogWhereUniqueInput[]
    delete?: DailyLogWhereUniqueInput | DailyLogWhereUniqueInput[]
    connect?: DailyLogWhereUniqueInput | DailyLogWhereUniqueInput[]
    update?: DailyLogUpdateWithWhereUniqueWithoutUserInput | DailyLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DailyLogUpdateManyWithWhereWithoutUserInput | DailyLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DailyLogScalarWhereInput | DailyLogScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserCreateNestedOneWithoutProjectInput = {
    create?: XOR<UserCreateWithoutProjectInput, UserUncheckedCreateWithoutProjectInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutProjectMembersInput = {
    create?: XOR<UserCreateWithoutProjectMembersInput, UserUncheckedCreateWithoutProjectMembersInput> | UserCreateWithoutProjectMembersInput[] | UserUncheckedCreateWithoutProjectMembersInput[]
    connectOrCreate?: UserCreateOrConnectWithoutProjectMembersInput | UserCreateOrConnectWithoutProjectMembersInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type TaskCreateNestedManyWithoutProjectInput = {
    create?: XOR<TaskCreateWithoutProjectInput, TaskUncheckedCreateWithoutProjectInput> | TaskCreateWithoutProjectInput[] | TaskUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutProjectInput | TaskCreateOrConnectWithoutProjectInput[]
    createMany?: TaskCreateManyProjectInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type GitHubRepoCreateNestedManyWithoutProjectInput = {
    create?: XOR<GitHubRepoCreateWithoutProjectInput, GitHubRepoUncheckedCreateWithoutProjectInput> | GitHubRepoCreateWithoutProjectInput[] | GitHubRepoUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: GitHubRepoCreateOrConnectWithoutProjectInput | GitHubRepoCreateOrConnectWithoutProjectInput[]
    createMany?: GitHubRepoCreateManyProjectInputEnvelope
    connect?: GitHubRepoWhereUniqueInput | GitHubRepoWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutProjectMembersInput = {
    create?: XOR<UserCreateWithoutProjectMembersInput, UserUncheckedCreateWithoutProjectMembersInput> | UserCreateWithoutProjectMembersInput[] | UserUncheckedCreateWithoutProjectMembersInput[]
    connectOrCreate?: UserCreateOrConnectWithoutProjectMembersInput | UserCreateOrConnectWithoutProjectMembersInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type TaskUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<TaskCreateWithoutProjectInput, TaskUncheckedCreateWithoutProjectInput> | TaskCreateWithoutProjectInput[] | TaskUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutProjectInput | TaskCreateOrConnectWithoutProjectInput[]
    createMany?: TaskCreateManyProjectInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type GitHubRepoUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<GitHubRepoCreateWithoutProjectInput, GitHubRepoUncheckedCreateWithoutProjectInput> | GitHubRepoCreateWithoutProjectInput[] | GitHubRepoUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: GitHubRepoCreateOrConnectWithoutProjectInput | GitHubRepoCreateOrConnectWithoutProjectInput[]
    createMany?: GitHubRepoCreateManyProjectInputEnvelope
    connect?: GitHubRepoWhereUniqueInput | GitHubRepoWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutProjectNestedInput = {
    create?: XOR<UserCreateWithoutProjectInput, UserUncheckedCreateWithoutProjectInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectInput
    upsert?: UserUpsertWithoutProjectInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProjectInput, UserUpdateWithoutProjectInput>, UserUncheckedUpdateWithoutProjectInput>
  }

  export type UserUpdateManyWithoutProjectMembersNestedInput = {
    create?: XOR<UserCreateWithoutProjectMembersInput, UserUncheckedCreateWithoutProjectMembersInput> | UserCreateWithoutProjectMembersInput[] | UserUncheckedCreateWithoutProjectMembersInput[]
    connectOrCreate?: UserCreateOrConnectWithoutProjectMembersInput | UserCreateOrConnectWithoutProjectMembersInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutProjectMembersInput | UserUpsertWithWhereUniqueWithoutProjectMembersInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutProjectMembersInput | UserUpdateWithWhereUniqueWithoutProjectMembersInput[]
    updateMany?: UserUpdateManyWithWhereWithoutProjectMembersInput | UserUpdateManyWithWhereWithoutProjectMembersInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type TaskUpdateManyWithoutProjectNestedInput = {
    create?: XOR<TaskCreateWithoutProjectInput, TaskUncheckedCreateWithoutProjectInput> | TaskCreateWithoutProjectInput[] | TaskUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutProjectInput | TaskCreateOrConnectWithoutProjectInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutProjectInput | TaskUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: TaskCreateManyProjectInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutProjectInput | TaskUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutProjectInput | TaskUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type GitHubRepoUpdateManyWithoutProjectNestedInput = {
    create?: XOR<GitHubRepoCreateWithoutProjectInput, GitHubRepoUncheckedCreateWithoutProjectInput> | GitHubRepoCreateWithoutProjectInput[] | GitHubRepoUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: GitHubRepoCreateOrConnectWithoutProjectInput | GitHubRepoCreateOrConnectWithoutProjectInput[]
    upsert?: GitHubRepoUpsertWithWhereUniqueWithoutProjectInput | GitHubRepoUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: GitHubRepoCreateManyProjectInputEnvelope
    set?: GitHubRepoWhereUniqueInput | GitHubRepoWhereUniqueInput[]
    disconnect?: GitHubRepoWhereUniqueInput | GitHubRepoWhereUniqueInput[]
    delete?: GitHubRepoWhereUniqueInput | GitHubRepoWhereUniqueInput[]
    connect?: GitHubRepoWhereUniqueInput | GitHubRepoWhereUniqueInput[]
    update?: GitHubRepoUpdateWithWhereUniqueWithoutProjectInput | GitHubRepoUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: GitHubRepoUpdateManyWithWhereWithoutProjectInput | GitHubRepoUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: GitHubRepoScalarWhereInput | GitHubRepoScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutProjectMembersNestedInput = {
    create?: XOR<UserCreateWithoutProjectMembersInput, UserUncheckedCreateWithoutProjectMembersInput> | UserCreateWithoutProjectMembersInput[] | UserUncheckedCreateWithoutProjectMembersInput[]
    connectOrCreate?: UserCreateOrConnectWithoutProjectMembersInput | UserCreateOrConnectWithoutProjectMembersInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutProjectMembersInput | UserUpsertWithWhereUniqueWithoutProjectMembersInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutProjectMembersInput | UserUpdateWithWhereUniqueWithoutProjectMembersInput[]
    updateMany?: UserUpdateManyWithWhereWithoutProjectMembersInput | UserUpdateManyWithWhereWithoutProjectMembersInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type TaskUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<TaskCreateWithoutProjectInput, TaskUncheckedCreateWithoutProjectInput> | TaskCreateWithoutProjectInput[] | TaskUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutProjectInput | TaskCreateOrConnectWithoutProjectInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutProjectInput | TaskUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: TaskCreateManyProjectInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutProjectInput | TaskUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutProjectInput | TaskUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type GitHubRepoUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<GitHubRepoCreateWithoutProjectInput, GitHubRepoUncheckedCreateWithoutProjectInput> | GitHubRepoCreateWithoutProjectInput[] | GitHubRepoUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: GitHubRepoCreateOrConnectWithoutProjectInput | GitHubRepoCreateOrConnectWithoutProjectInput[]
    upsert?: GitHubRepoUpsertWithWhereUniqueWithoutProjectInput | GitHubRepoUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: GitHubRepoCreateManyProjectInputEnvelope
    set?: GitHubRepoWhereUniqueInput | GitHubRepoWhereUniqueInput[]
    disconnect?: GitHubRepoWhereUniqueInput | GitHubRepoWhereUniqueInput[]
    delete?: GitHubRepoWhereUniqueInput | GitHubRepoWhereUniqueInput[]
    connect?: GitHubRepoWhereUniqueInput | GitHubRepoWhereUniqueInput[]
    update?: GitHubRepoUpdateWithWhereUniqueWithoutProjectInput | GitHubRepoUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: GitHubRepoUpdateManyWithWhereWithoutProjectInput | GitHubRepoUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: GitHubRepoScalarWhereInput | GitHubRepoScalarWhereInput[]
  }

  export type ProjectCreateNestedOneWithoutTasksInput = {
    create?: XOR<ProjectCreateWithoutTasksInput, ProjectUncheckedCreateWithoutTasksInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutTasksInput
    connect?: ProjectWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAssignedTasksInput = {
    create?: XOR<UserCreateWithoutAssignedTasksInput, UserUncheckedCreateWithoutAssignedTasksInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssignedTasksInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCreatedTasksInput = {
    create?: XOR<UserCreateWithoutCreatedTasksInput, UserUncheckedCreateWithoutCreatedTasksInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedTasksInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutUpdatedTasksInput = {
    create?: XOR<UserCreateWithoutUpdatedTasksInput, UserUncheckedCreateWithoutUpdatedTasksInput>
    connectOrCreate?: UserCreateOrConnectWithoutUpdatedTasksInput
    connect?: UserWhereUniqueInput
  }

  export type EnumTaskStatusFieldUpdateOperationsInput = {
    set?: $Enums.TaskStatus
  }

  export type ProjectUpdateOneRequiredWithoutTasksNestedInput = {
    create?: XOR<ProjectCreateWithoutTasksInput, ProjectUncheckedCreateWithoutTasksInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutTasksInput
    upsert?: ProjectUpsertWithoutTasksInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutTasksInput, ProjectUpdateWithoutTasksInput>, ProjectUncheckedUpdateWithoutTasksInput>
  }

  export type UserUpdateOneRequiredWithoutAssignedTasksNestedInput = {
    create?: XOR<UserCreateWithoutAssignedTasksInput, UserUncheckedCreateWithoutAssignedTasksInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssignedTasksInput
    upsert?: UserUpsertWithoutAssignedTasksInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAssignedTasksInput, UserUpdateWithoutAssignedTasksInput>, UserUncheckedUpdateWithoutAssignedTasksInput>
  }

  export type UserUpdateOneRequiredWithoutCreatedTasksNestedInput = {
    create?: XOR<UserCreateWithoutCreatedTasksInput, UserUncheckedCreateWithoutCreatedTasksInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedTasksInput
    upsert?: UserUpsertWithoutCreatedTasksInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedTasksInput, UserUpdateWithoutCreatedTasksInput>, UserUncheckedUpdateWithoutCreatedTasksInput>
  }

  export type UserUpdateOneWithoutUpdatedTasksNestedInput = {
    create?: XOR<UserCreateWithoutUpdatedTasksInput, UserUncheckedCreateWithoutUpdatedTasksInput>
    connectOrCreate?: UserCreateOrConnectWithoutUpdatedTasksInput
    upsert?: UserUpsertWithoutUpdatedTasksInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUpdatedTasksInput, UserUpdateWithoutUpdatedTasksInput>, UserUncheckedUpdateWithoutUpdatedTasksInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProjectCreateNestedOneWithoutGithubReposInput = {
    create?: XOR<ProjectCreateWithoutGithubReposInput, ProjectUncheckedCreateWithoutGithubReposInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutGithubReposInput
    connect?: ProjectWhereUniqueInput
  }

  export type GitHubCommitCreateNestedManyWithoutRepoInput = {
    create?: XOR<GitHubCommitCreateWithoutRepoInput, GitHubCommitUncheckedCreateWithoutRepoInput> | GitHubCommitCreateWithoutRepoInput[] | GitHubCommitUncheckedCreateWithoutRepoInput[]
    connectOrCreate?: GitHubCommitCreateOrConnectWithoutRepoInput | GitHubCommitCreateOrConnectWithoutRepoInput[]
    createMany?: GitHubCommitCreateManyRepoInputEnvelope
    connect?: GitHubCommitWhereUniqueInput | GitHubCommitWhereUniqueInput[]
  }

  export type GitHubCommitGroupCreateNestedManyWithoutRepoInput = {
    create?: XOR<GitHubCommitGroupCreateWithoutRepoInput, GitHubCommitGroupUncheckedCreateWithoutRepoInput> | GitHubCommitGroupCreateWithoutRepoInput[] | GitHubCommitGroupUncheckedCreateWithoutRepoInput[]
    connectOrCreate?: GitHubCommitGroupCreateOrConnectWithoutRepoInput | GitHubCommitGroupCreateOrConnectWithoutRepoInput[]
    createMany?: GitHubCommitGroupCreateManyRepoInputEnvelope
    connect?: GitHubCommitGroupWhereUniqueInput | GitHubCommitGroupWhereUniqueInput[]
  }

  export type GitHubCommitUncheckedCreateNestedManyWithoutRepoInput = {
    create?: XOR<GitHubCommitCreateWithoutRepoInput, GitHubCommitUncheckedCreateWithoutRepoInput> | GitHubCommitCreateWithoutRepoInput[] | GitHubCommitUncheckedCreateWithoutRepoInput[]
    connectOrCreate?: GitHubCommitCreateOrConnectWithoutRepoInput | GitHubCommitCreateOrConnectWithoutRepoInput[]
    createMany?: GitHubCommitCreateManyRepoInputEnvelope
    connect?: GitHubCommitWhereUniqueInput | GitHubCommitWhereUniqueInput[]
  }

  export type GitHubCommitGroupUncheckedCreateNestedManyWithoutRepoInput = {
    create?: XOR<GitHubCommitGroupCreateWithoutRepoInput, GitHubCommitGroupUncheckedCreateWithoutRepoInput> | GitHubCommitGroupCreateWithoutRepoInput[] | GitHubCommitGroupUncheckedCreateWithoutRepoInput[]
    connectOrCreate?: GitHubCommitGroupCreateOrConnectWithoutRepoInput | GitHubCommitGroupCreateOrConnectWithoutRepoInput[]
    createMany?: GitHubCommitGroupCreateManyRepoInputEnvelope
    connect?: GitHubCommitGroupWhereUniqueInput | GitHubCommitGroupWhereUniqueInput[]
  }

  export type ProjectUpdateOneRequiredWithoutGithubReposNestedInput = {
    create?: XOR<ProjectCreateWithoutGithubReposInput, ProjectUncheckedCreateWithoutGithubReposInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutGithubReposInput
    upsert?: ProjectUpsertWithoutGithubReposInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutGithubReposInput, ProjectUpdateWithoutGithubReposInput>, ProjectUncheckedUpdateWithoutGithubReposInput>
  }

  export type GitHubCommitUpdateManyWithoutRepoNestedInput = {
    create?: XOR<GitHubCommitCreateWithoutRepoInput, GitHubCommitUncheckedCreateWithoutRepoInput> | GitHubCommitCreateWithoutRepoInput[] | GitHubCommitUncheckedCreateWithoutRepoInput[]
    connectOrCreate?: GitHubCommitCreateOrConnectWithoutRepoInput | GitHubCommitCreateOrConnectWithoutRepoInput[]
    upsert?: GitHubCommitUpsertWithWhereUniqueWithoutRepoInput | GitHubCommitUpsertWithWhereUniqueWithoutRepoInput[]
    createMany?: GitHubCommitCreateManyRepoInputEnvelope
    set?: GitHubCommitWhereUniqueInput | GitHubCommitWhereUniqueInput[]
    disconnect?: GitHubCommitWhereUniqueInput | GitHubCommitWhereUniqueInput[]
    delete?: GitHubCommitWhereUniqueInput | GitHubCommitWhereUniqueInput[]
    connect?: GitHubCommitWhereUniqueInput | GitHubCommitWhereUniqueInput[]
    update?: GitHubCommitUpdateWithWhereUniqueWithoutRepoInput | GitHubCommitUpdateWithWhereUniqueWithoutRepoInput[]
    updateMany?: GitHubCommitUpdateManyWithWhereWithoutRepoInput | GitHubCommitUpdateManyWithWhereWithoutRepoInput[]
    deleteMany?: GitHubCommitScalarWhereInput | GitHubCommitScalarWhereInput[]
  }

  export type GitHubCommitGroupUpdateManyWithoutRepoNestedInput = {
    create?: XOR<GitHubCommitGroupCreateWithoutRepoInput, GitHubCommitGroupUncheckedCreateWithoutRepoInput> | GitHubCommitGroupCreateWithoutRepoInput[] | GitHubCommitGroupUncheckedCreateWithoutRepoInput[]
    connectOrCreate?: GitHubCommitGroupCreateOrConnectWithoutRepoInput | GitHubCommitGroupCreateOrConnectWithoutRepoInput[]
    upsert?: GitHubCommitGroupUpsertWithWhereUniqueWithoutRepoInput | GitHubCommitGroupUpsertWithWhereUniqueWithoutRepoInput[]
    createMany?: GitHubCommitGroupCreateManyRepoInputEnvelope
    set?: GitHubCommitGroupWhereUniqueInput | GitHubCommitGroupWhereUniqueInput[]
    disconnect?: GitHubCommitGroupWhereUniqueInput | GitHubCommitGroupWhereUniqueInput[]
    delete?: GitHubCommitGroupWhereUniqueInput | GitHubCommitGroupWhereUniqueInput[]
    connect?: GitHubCommitGroupWhereUniqueInput | GitHubCommitGroupWhereUniqueInput[]
    update?: GitHubCommitGroupUpdateWithWhereUniqueWithoutRepoInput | GitHubCommitGroupUpdateWithWhereUniqueWithoutRepoInput[]
    updateMany?: GitHubCommitGroupUpdateManyWithWhereWithoutRepoInput | GitHubCommitGroupUpdateManyWithWhereWithoutRepoInput[]
    deleteMany?: GitHubCommitGroupScalarWhereInput | GitHubCommitGroupScalarWhereInput[]
  }

  export type GitHubCommitUncheckedUpdateManyWithoutRepoNestedInput = {
    create?: XOR<GitHubCommitCreateWithoutRepoInput, GitHubCommitUncheckedCreateWithoutRepoInput> | GitHubCommitCreateWithoutRepoInput[] | GitHubCommitUncheckedCreateWithoutRepoInput[]
    connectOrCreate?: GitHubCommitCreateOrConnectWithoutRepoInput | GitHubCommitCreateOrConnectWithoutRepoInput[]
    upsert?: GitHubCommitUpsertWithWhereUniqueWithoutRepoInput | GitHubCommitUpsertWithWhereUniqueWithoutRepoInput[]
    createMany?: GitHubCommitCreateManyRepoInputEnvelope
    set?: GitHubCommitWhereUniqueInput | GitHubCommitWhereUniqueInput[]
    disconnect?: GitHubCommitWhereUniqueInput | GitHubCommitWhereUniqueInput[]
    delete?: GitHubCommitWhereUniqueInput | GitHubCommitWhereUniqueInput[]
    connect?: GitHubCommitWhereUniqueInput | GitHubCommitWhereUniqueInput[]
    update?: GitHubCommitUpdateWithWhereUniqueWithoutRepoInput | GitHubCommitUpdateWithWhereUniqueWithoutRepoInput[]
    updateMany?: GitHubCommitUpdateManyWithWhereWithoutRepoInput | GitHubCommitUpdateManyWithWhereWithoutRepoInput[]
    deleteMany?: GitHubCommitScalarWhereInput | GitHubCommitScalarWhereInput[]
  }

  export type GitHubCommitGroupUncheckedUpdateManyWithoutRepoNestedInput = {
    create?: XOR<GitHubCommitGroupCreateWithoutRepoInput, GitHubCommitGroupUncheckedCreateWithoutRepoInput> | GitHubCommitGroupCreateWithoutRepoInput[] | GitHubCommitGroupUncheckedCreateWithoutRepoInput[]
    connectOrCreate?: GitHubCommitGroupCreateOrConnectWithoutRepoInput | GitHubCommitGroupCreateOrConnectWithoutRepoInput[]
    upsert?: GitHubCommitGroupUpsertWithWhereUniqueWithoutRepoInput | GitHubCommitGroupUpsertWithWhereUniqueWithoutRepoInput[]
    createMany?: GitHubCommitGroupCreateManyRepoInputEnvelope
    set?: GitHubCommitGroupWhereUniqueInput | GitHubCommitGroupWhereUniqueInput[]
    disconnect?: GitHubCommitGroupWhereUniqueInput | GitHubCommitGroupWhereUniqueInput[]
    delete?: GitHubCommitGroupWhereUniqueInput | GitHubCommitGroupWhereUniqueInput[]
    connect?: GitHubCommitGroupWhereUniqueInput | GitHubCommitGroupWhereUniqueInput[]
    update?: GitHubCommitGroupUpdateWithWhereUniqueWithoutRepoInput | GitHubCommitGroupUpdateWithWhereUniqueWithoutRepoInput[]
    updateMany?: GitHubCommitGroupUpdateManyWithWhereWithoutRepoInput | GitHubCommitGroupUpdateManyWithWhereWithoutRepoInput[]
    deleteMany?: GitHubCommitGroupScalarWhereInput | GitHubCommitGroupScalarWhereInput[]
  }

  export type GitHubRepoCreateNestedOneWithoutGitHubCommitInput = {
    create?: XOR<GitHubRepoCreateWithoutGitHubCommitInput, GitHubRepoUncheckedCreateWithoutGitHubCommitInput>
    connectOrCreate?: GitHubRepoCreateOrConnectWithoutGitHubCommitInput
    connect?: GitHubRepoWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutGitHubCommitInput = {
    create?: XOR<UserCreateWithoutGitHubCommitInput, UserUncheckedCreateWithoutGitHubCommitInput>
    connectOrCreate?: UserCreateOrConnectWithoutGitHubCommitInput
    connect?: UserWhereUniqueInput
  }

  export type GitHubCommitGroupCreateNestedOneWithoutCommitsInput = {
    create?: XOR<GitHubCommitGroupCreateWithoutCommitsInput, GitHubCommitGroupUncheckedCreateWithoutCommitsInput>
    connectOrCreate?: GitHubCommitGroupCreateOrConnectWithoutCommitsInput
    connect?: GitHubCommitGroupWhereUniqueInput
  }

  export type GitHubRepoUpdateOneRequiredWithoutGitHubCommitNestedInput = {
    create?: XOR<GitHubRepoCreateWithoutGitHubCommitInput, GitHubRepoUncheckedCreateWithoutGitHubCommitInput>
    connectOrCreate?: GitHubRepoCreateOrConnectWithoutGitHubCommitInput
    upsert?: GitHubRepoUpsertWithoutGitHubCommitInput
    connect?: GitHubRepoWhereUniqueInput
    update?: XOR<XOR<GitHubRepoUpdateToOneWithWhereWithoutGitHubCommitInput, GitHubRepoUpdateWithoutGitHubCommitInput>, GitHubRepoUncheckedUpdateWithoutGitHubCommitInput>
  }

  export type UserUpdateOneRequiredWithoutGitHubCommitNestedInput = {
    create?: XOR<UserCreateWithoutGitHubCommitInput, UserUncheckedCreateWithoutGitHubCommitInput>
    connectOrCreate?: UserCreateOrConnectWithoutGitHubCommitInput
    upsert?: UserUpsertWithoutGitHubCommitInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGitHubCommitInput, UserUpdateWithoutGitHubCommitInput>, UserUncheckedUpdateWithoutGitHubCommitInput>
  }

  export type GitHubCommitGroupUpdateOneWithoutCommitsNestedInput = {
    create?: XOR<GitHubCommitGroupCreateWithoutCommitsInput, GitHubCommitGroupUncheckedCreateWithoutCommitsInput>
    connectOrCreate?: GitHubCommitGroupCreateOrConnectWithoutCommitsInput
    upsert?: GitHubCommitGroupUpsertWithoutCommitsInput
    disconnect?: GitHubCommitGroupWhereInput | boolean
    delete?: GitHubCommitGroupWhereInput | boolean
    connect?: GitHubCommitGroupWhereUniqueInput
    update?: XOR<XOR<GitHubCommitGroupUpdateToOneWithWhereWithoutCommitsInput, GitHubCommitGroupUpdateWithoutCommitsInput>, GitHubCommitGroupUncheckedUpdateWithoutCommitsInput>
  }

  export type UserCreateNestedOneWithoutGitHubCommitGroupInput = {
    create?: XOR<UserCreateWithoutGitHubCommitGroupInput, UserUncheckedCreateWithoutGitHubCommitGroupInput>
    connectOrCreate?: UserCreateOrConnectWithoutGitHubCommitGroupInput
    connect?: UserWhereUniqueInput
  }

  export type GitHubRepoCreateNestedOneWithoutGitHubCommitGroupInput = {
    create?: XOR<GitHubRepoCreateWithoutGitHubCommitGroupInput, GitHubRepoUncheckedCreateWithoutGitHubCommitGroupInput>
    connectOrCreate?: GitHubRepoCreateOrConnectWithoutGitHubCommitGroupInput
    connect?: GitHubRepoWhereUniqueInput
  }

  export type GitHubCommitCreateNestedManyWithoutGitHubCommitGroupInput = {
    create?: XOR<GitHubCommitCreateWithoutGitHubCommitGroupInput, GitHubCommitUncheckedCreateWithoutGitHubCommitGroupInput> | GitHubCommitCreateWithoutGitHubCommitGroupInput[] | GitHubCommitUncheckedCreateWithoutGitHubCommitGroupInput[]
    connectOrCreate?: GitHubCommitCreateOrConnectWithoutGitHubCommitGroupInput | GitHubCommitCreateOrConnectWithoutGitHubCommitGroupInput[]
    createMany?: GitHubCommitCreateManyGitHubCommitGroupInputEnvelope
    connect?: GitHubCommitWhereUniqueInput | GitHubCommitWhereUniqueInput[]
  }

  export type GitHubCommitUncheckedCreateNestedManyWithoutGitHubCommitGroupInput = {
    create?: XOR<GitHubCommitCreateWithoutGitHubCommitGroupInput, GitHubCommitUncheckedCreateWithoutGitHubCommitGroupInput> | GitHubCommitCreateWithoutGitHubCommitGroupInput[] | GitHubCommitUncheckedCreateWithoutGitHubCommitGroupInput[]
    connectOrCreate?: GitHubCommitCreateOrConnectWithoutGitHubCommitGroupInput | GitHubCommitCreateOrConnectWithoutGitHubCommitGroupInput[]
    createMany?: GitHubCommitCreateManyGitHubCommitGroupInputEnvelope
    connect?: GitHubCommitWhereUniqueInput | GitHubCommitWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutGitHubCommitGroupNestedInput = {
    create?: XOR<UserCreateWithoutGitHubCommitGroupInput, UserUncheckedCreateWithoutGitHubCommitGroupInput>
    connectOrCreate?: UserCreateOrConnectWithoutGitHubCommitGroupInput
    upsert?: UserUpsertWithoutGitHubCommitGroupInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGitHubCommitGroupInput, UserUpdateWithoutGitHubCommitGroupInput>, UserUncheckedUpdateWithoutGitHubCommitGroupInput>
  }

  export type GitHubRepoUpdateOneRequiredWithoutGitHubCommitGroupNestedInput = {
    create?: XOR<GitHubRepoCreateWithoutGitHubCommitGroupInput, GitHubRepoUncheckedCreateWithoutGitHubCommitGroupInput>
    connectOrCreate?: GitHubRepoCreateOrConnectWithoutGitHubCommitGroupInput
    upsert?: GitHubRepoUpsertWithoutGitHubCommitGroupInput
    connect?: GitHubRepoWhereUniqueInput
    update?: XOR<XOR<GitHubRepoUpdateToOneWithWhereWithoutGitHubCommitGroupInput, GitHubRepoUpdateWithoutGitHubCommitGroupInput>, GitHubRepoUncheckedUpdateWithoutGitHubCommitGroupInput>
  }

  export type GitHubCommitUpdateManyWithoutGitHubCommitGroupNestedInput = {
    create?: XOR<GitHubCommitCreateWithoutGitHubCommitGroupInput, GitHubCommitUncheckedCreateWithoutGitHubCommitGroupInput> | GitHubCommitCreateWithoutGitHubCommitGroupInput[] | GitHubCommitUncheckedCreateWithoutGitHubCommitGroupInput[]
    connectOrCreate?: GitHubCommitCreateOrConnectWithoutGitHubCommitGroupInput | GitHubCommitCreateOrConnectWithoutGitHubCommitGroupInput[]
    upsert?: GitHubCommitUpsertWithWhereUniqueWithoutGitHubCommitGroupInput | GitHubCommitUpsertWithWhereUniqueWithoutGitHubCommitGroupInput[]
    createMany?: GitHubCommitCreateManyGitHubCommitGroupInputEnvelope
    set?: GitHubCommitWhereUniqueInput | GitHubCommitWhereUniqueInput[]
    disconnect?: GitHubCommitWhereUniqueInput | GitHubCommitWhereUniqueInput[]
    delete?: GitHubCommitWhereUniqueInput | GitHubCommitWhereUniqueInput[]
    connect?: GitHubCommitWhereUniqueInput | GitHubCommitWhereUniqueInput[]
    update?: GitHubCommitUpdateWithWhereUniqueWithoutGitHubCommitGroupInput | GitHubCommitUpdateWithWhereUniqueWithoutGitHubCommitGroupInput[]
    updateMany?: GitHubCommitUpdateManyWithWhereWithoutGitHubCommitGroupInput | GitHubCommitUpdateManyWithWhereWithoutGitHubCommitGroupInput[]
    deleteMany?: GitHubCommitScalarWhereInput | GitHubCommitScalarWhereInput[]
  }

  export type GitHubCommitUncheckedUpdateManyWithoutGitHubCommitGroupNestedInput = {
    create?: XOR<GitHubCommitCreateWithoutGitHubCommitGroupInput, GitHubCommitUncheckedCreateWithoutGitHubCommitGroupInput> | GitHubCommitCreateWithoutGitHubCommitGroupInput[] | GitHubCommitUncheckedCreateWithoutGitHubCommitGroupInput[]
    connectOrCreate?: GitHubCommitCreateOrConnectWithoutGitHubCommitGroupInput | GitHubCommitCreateOrConnectWithoutGitHubCommitGroupInput[]
    upsert?: GitHubCommitUpsertWithWhereUniqueWithoutGitHubCommitGroupInput | GitHubCommitUpsertWithWhereUniqueWithoutGitHubCommitGroupInput[]
    createMany?: GitHubCommitCreateManyGitHubCommitGroupInputEnvelope
    set?: GitHubCommitWhereUniqueInput | GitHubCommitWhereUniqueInput[]
    disconnect?: GitHubCommitWhereUniqueInput | GitHubCommitWhereUniqueInput[]
    delete?: GitHubCommitWhereUniqueInput | GitHubCommitWhereUniqueInput[]
    connect?: GitHubCommitWhereUniqueInput | GitHubCommitWhereUniqueInput[]
    update?: GitHubCommitUpdateWithWhereUniqueWithoutGitHubCommitGroupInput | GitHubCommitUpdateWithWhereUniqueWithoutGitHubCommitGroupInput[]
    updateMany?: GitHubCommitUpdateManyWithWhereWithoutGitHubCommitGroupInput | GitHubCommitUpdateManyWithWhereWithoutGitHubCommitGroupInput[]
    deleteMany?: GitHubCommitScalarWhereInput | GitHubCommitScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutDailyLogInput = {
    create?: XOR<UserCreateWithoutDailyLogInput, UserUncheckedCreateWithoutDailyLogInput>
    connectOrCreate?: UserCreateOrConnectWithoutDailyLogInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutDailyLogNestedInput = {
    create?: XOR<UserCreateWithoutDailyLogInput, UserUncheckedCreateWithoutDailyLogInput>
    connectOrCreate?: UserCreateOrConnectWithoutDailyLogInput
    upsert?: UserUpsertWithoutDailyLogInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDailyLogInput, UserUpdateWithoutDailyLogInput>, UserUncheckedUpdateWithoutDailyLogInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumTaskStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskStatusFilter<$PrismaModel> | $Enums.TaskStatus
  }

  export type NestedEnumTaskStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskStatusWithAggregatesFilter<$PrismaModel> | $Enums.TaskStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskStatusFilter<$PrismaModel>
    _max?: NestedEnumTaskStatusFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type AccountCreateWithoutUserInput = {
    provider: string
    providerAccountId: string
    accessToken?: string | null
    refreshToken?: string | null
    expiresAt?: Date | string | null
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: number
    provider: string
    providerAccountId: string
    accessToken?: string | null
    refreshToken?: string | null
    expiresAt?: Date | string | null
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProjectCreateWithoutOwnerInput = {
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: UserCreateNestedManyWithoutProjectMembersInput
    tasks?: TaskCreateNestedManyWithoutProjectInput
    githubRepos?: GitHubRepoCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutOwnerInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: UserUncheckedCreateNestedManyWithoutProjectMembersInput
    tasks?: TaskUncheckedCreateNestedManyWithoutProjectInput
    githubRepos?: GitHubRepoUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutOwnerInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutOwnerInput, ProjectUncheckedCreateWithoutOwnerInput>
  }

  export type ProjectCreateManyOwnerInputEnvelope = {
    data: ProjectCreateManyOwnerInput | ProjectCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type ProjectCreateWithoutMembersInput = {
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutProjectInput
    tasks?: TaskCreateNestedManyWithoutProjectInput
    githubRepos?: GitHubRepoCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutMembersInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
    tasks?: TaskUncheckedCreateNestedManyWithoutProjectInput
    githubRepos?: GitHubRepoUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutMembersInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutMembersInput, ProjectUncheckedCreateWithoutMembersInput>
  }

  export type TaskCreateWithoutAssignedToInput = {
    title: string
    description?: string | null
    startDate: Date | string
    dueDate: Date | string
    status?: $Enums.TaskStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    completedOn?: Date | string | null
    project: ProjectCreateNestedOneWithoutTasksInput
    assignedBy: UserCreateNestedOneWithoutCreatedTasksInput
    updatedBy?: UserCreateNestedOneWithoutUpdatedTasksInput
  }

  export type TaskUncheckedCreateWithoutAssignedToInput = {
    id?: number
    title: string
    description?: string | null
    startDate: Date | string
    dueDate: Date | string
    status?: $Enums.TaskStatus
    projectId: number
    assignedById: number
    updatedById?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    completedOn?: Date | string | null
  }

  export type TaskCreateOrConnectWithoutAssignedToInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutAssignedToInput, TaskUncheckedCreateWithoutAssignedToInput>
  }

  export type TaskCreateManyAssignedToInputEnvelope = {
    data: TaskCreateManyAssignedToInput | TaskCreateManyAssignedToInput[]
    skipDuplicates?: boolean
  }

  export type TaskCreateWithoutAssignedByInput = {
    title: string
    description?: string | null
    startDate: Date | string
    dueDate: Date | string
    status?: $Enums.TaskStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    completedOn?: Date | string | null
    project: ProjectCreateNestedOneWithoutTasksInput
    assignedTo: UserCreateNestedOneWithoutAssignedTasksInput
    updatedBy?: UserCreateNestedOneWithoutUpdatedTasksInput
  }

  export type TaskUncheckedCreateWithoutAssignedByInput = {
    id?: number
    title: string
    description?: string | null
    startDate: Date | string
    dueDate: Date | string
    status?: $Enums.TaskStatus
    projectId: number
    assignedToId: number
    updatedById?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    completedOn?: Date | string | null
  }

  export type TaskCreateOrConnectWithoutAssignedByInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutAssignedByInput, TaskUncheckedCreateWithoutAssignedByInput>
  }

  export type TaskCreateManyAssignedByInputEnvelope = {
    data: TaskCreateManyAssignedByInput | TaskCreateManyAssignedByInput[]
    skipDuplicates?: boolean
  }

  export type TaskCreateWithoutUpdatedByInput = {
    title: string
    description?: string | null
    startDate: Date | string
    dueDate: Date | string
    status?: $Enums.TaskStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    completedOn?: Date | string | null
    project: ProjectCreateNestedOneWithoutTasksInput
    assignedTo: UserCreateNestedOneWithoutAssignedTasksInput
    assignedBy: UserCreateNestedOneWithoutCreatedTasksInput
  }

  export type TaskUncheckedCreateWithoutUpdatedByInput = {
    id?: number
    title: string
    description?: string | null
    startDate: Date | string
    dueDate: Date | string
    status?: $Enums.TaskStatus
    projectId: number
    assignedToId: number
    assignedById: number
    createdAt?: Date | string
    updatedAt?: Date | string
    completedOn?: Date | string | null
  }

  export type TaskCreateOrConnectWithoutUpdatedByInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutUpdatedByInput, TaskUncheckedCreateWithoutUpdatedByInput>
  }

  export type TaskCreateManyUpdatedByInputEnvelope = {
    data: TaskCreateManyUpdatedByInput | TaskCreateManyUpdatedByInput[]
    skipDuplicates?: boolean
  }

  export type GitHubCommitCreateWithoutUserInput = {
    commitDate: Date | string
    timing: Date | string
    message: string
    repo: GitHubRepoCreateNestedOneWithoutGitHubCommitInput
    GitHubCommitGroup?: GitHubCommitGroupCreateNestedOneWithoutCommitsInput
  }

  export type GitHubCommitUncheckedCreateWithoutUserInput = {
    id?: number
    repoId: number
    commitDate: Date | string
    timing: Date | string
    message: string
    gitHubCommitGroupId?: number | null
  }

  export type GitHubCommitCreateOrConnectWithoutUserInput = {
    where: GitHubCommitWhereUniqueInput
    create: XOR<GitHubCommitCreateWithoutUserInput, GitHubCommitUncheckedCreateWithoutUserInput>
  }

  export type GitHubCommitCreateManyUserInputEnvelope = {
    data: GitHubCommitCreateManyUserInput | GitHubCommitCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type GitHubCommitGroupCreateWithoutUserInput = {
    repo: GitHubRepoCreateNestedOneWithoutGitHubCommitGroupInput
    commits?: GitHubCommitCreateNestedManyWithoutGitHubCommitGroupInput
  }

  export type GitHubCommitGroupUncheckedCreateWithoutUserInput = {
    id?: number
    repoId: number
    commits?: GitHubCommitUncheckedCreateNestedManyWithoutGitHubCommitGroupInput
  }

  export type GitHubCommitGroupCreateOrConnectWithoutUserInput = {
    where: GitHubCommitGroupWhereUniqueInput
    create: XOR<GitHubCommitGroupCreateWithoutUserInput, GitHubCommitGroupUncheckedCreateWithoutUserInput>
  }

  export type GitHubCommitGroupCreateManyUserInputEnvelope = {
    data: GitHubCommitGroupCreateManyUserInput | GitHubCommitGroupCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type DailyLogCreateWithoutUserInput = {
    date: Date | string
    works: JsonNullValueInput | InputJsonValue
    aiSummary?: string | null
    export?: string | null
  }

  export type DailyLogUncheckedCreateWithoutUserInput = {
    id?: number
    date: Date | string
    works: JsonNullValueInput | InputJsonValue
    aiSummary?: string | null
    export?: string | null
  }

  export type DailyLogCreateOrConnectWithoutUserInput = {
    where: DailyLogWhereUniqueInput
    create: XOR<DailyLogCreateWithoutUserInput, DailyLogUncheckedCreateWithoutUserInput>
  }

  export type DailyLogCreateManyUserInputEnvelope = {
    data: DailyLogCreateManyUserInput | DailyLogCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: IntFilter<"Account"> | number
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    userId?: IntFilter<"Account"> | number
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    expiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
  }

  export type ProjectUpsertWithWhereUniqueWithoutOwnerInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutOwnerInput, ProjectUncheckedUpdateWithoutOwnerInput>
    create: XOR<ProjectCreateWithoutOwnerInput, ProjectUncheckedCreateWithoutOwnerInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutOwnerInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutOwnerInput, ProjectUncheckedUpdateWithoutOwnerInput>
  }

  export type ProjectUpdateManyWithWhereWithoutOwnerInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutOwnerInput>
  }

  export type ProjectScalarWhereInput = {
    AND?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    OR?: ProjectScalarWhereInput[]
    NOT?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    id?: IntFilter<"Project"> | number
    name?: StringFilter<"Project"> | string
    description?: StringNullableFilter<"Project"> | string | null
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    userId?: IntFilter<"Project"> | number
  }

  export type ProjectUpsertWithWhereUniqueWithoutMembersInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutMembersInput, ProjectUncheckedUpdateWithoutMembersInput>
    create: XOR<ProjectCreateWithoutMembersInput, ProjectUncheckedCreateWithoutMembersInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutMembersInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutMembersInput, ProjectUncheckedUpdateWithoutMembersInput>
  }

  export type ProjectUpdateManyWithWhereWithoutMembersInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutMembersInput>
  }

  export type TaskUpsertWithWhereUniqueWithoutAssignedToInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutAssignedToInput, TaskUncheckedUpdateWithoutAssignedToInput>
    create: XOR<TaskCreateWithoutAssignedToInput, TaskUncheckedCreateWithoutAssignedToInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutAssignedToInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutAssignedToInput, TaskUncheckedUpdateWithoutAssignedToInput>
  }

  export type TaskUpdateManyWithWhereWithoutAssignedToInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutAssignedToInput>
  }

  export type TaskScalarWhereInput = {
    AND?: TaskScalarWhereInput | TaskScalarWhereInput[]
    OR?: TaskScalarWhereInput[]
    NOT?: TaskScalarWhereInput | TaskScalarWhereInput[]
    id?: IntFilter<"Task"> | number
    title?: StringFilter<"Task"> | string
    description?: StringNullableFilter<"Task"> | string | null
    startDate?: DateTimeFilter<"Task"> | Date | string
    dueDate?: DateTimeFilter<"Task"> | Date | string
    status?: EnumTaskStatusFilter<"Task"> | $Enums.TaskStatus
    projectId?: IntFilter<"Task"> | number
    assignedToId?: IntFilter<"Task"> | number
    assignedById?: IntFilter<"Task"> | number
    updatedById?: IntNullableFilter<"Task"> | number | null
    createdAt?: DateTimeFilter<"Task"> | Date | string
    updatedAt?: DateTimeFilter<"Task"> | Date | string
    completedOn?: DateTimeNullableFilter<"Task"> | Date | string | null
  }

  export type TaskUpsertWithWhereUniqueWithoutAssignedByInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutAssignedByInput, TaskUncheckedUpdateWithoutAssignedByInput>
    create: XOR<TaskCreateWithoutAssignedByInput, TaskUncheckedCreateWithoutAssignedByInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutAssignedByInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutAssignedByInput, TaskUncheckedUpdateWithoutAssignedByInput>
  }

  export type TaskUpdateManyWithWhereWithoutAssignedByInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutAssignedByInput>
  }

  export type TaskUpsertWithWhereUniqueWithoutUpdatedByInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutUpdatedByInput, TaskUncheckedUpdateWithoutUpdatedByInput>
    create: XOR<TaskCreateWithoutUpdatedByInput, TaskUncheckedCreateWithoutUpdatedByInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutUpdatedByInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutUpdatedByInput, TaskUncheckedUpdateWithoutUpdatedByInput>
  }

  export type TaskUpdateManyWithWhereWithoutUpdatedByInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutUpdatedByInput>
  }

  export type GitHubCommitUpsertWithWhereUniqueWithoutUserInput = {
    where: GitHubCommitWhereUniqueInput
    update: XOR<GitHubCommitUpdateWithoutUserInput, GitHubCommitUncheckedUpdateWithoutUserInput>
    create: XOR<GitHubCommitCreateWithoutUserInput, GitHubCommitUncheckedCreateWithoutUserInput>
  }

  export type GitHubCommitUpdateWithWhereUniqueWithoutUserInput = {
    where: GitHubCommitWhereUniqueInput
    data: XOR<GitHubCommitUpdateWithoutUserInput, GitHubCommitUncheckedUpdateWithoutUserInput>
  }

  export type GitHubCommitUpdateManyWithWhereWithoutUserInput = {
    where: GitHubCommitScalarWhereInput
    data: XOR<GitHubCommitUpdateManyMutationInput, GitHubCommitUncheckedUpdateManyWithoutUserInput>
  }

  export type GitHubCommitScalarWhereInput = {
    AND?: GitHubCommitScalarWhereInput | GitHubCommitScalarWhereInput[]
    OR?: GitHubCommitScalarWhereInput[]
    NOT?: GitHubCommitScalarWhereInput | GitHubCommitScalarWhereInput[]
    id?: IntFilter<"GitHubCommit"> | number
    repoId?: IntFilter<"GitHubCommit"> | number
    userId?: IntFilter<"GitHubCommit"> | number
    commitDate?: DateTimeFilter<"GitHubCommit"> | Date | string
    timing?: DateTimeFilter<"GitHubCommit"> | Date | string
    message?: StringFilter<"GitHubCommit"> | string
    gitHubCommitGroupId?: IntNullableFilter<"GitHubCommit"> | number | null
  }

  export type GitHubCommitGroupUpsertWithWhereUniqueWithoutUserInput = {
    where: GitHubCommitGroupWhereUniqueInput
    update: XOR<GitHubCommitGroupUpdateWithoutUserInput, GitHubCommitGroupUncheckedUpdateWithoutUserInput>
    create: XOR<GitHubCommitGroupCreateWithoutUserInput, GitHubCommitGroupUncheckedCreateWithoutUserInput>
  }

  export type GitHubCommitGroupUpdateWithWhereUniqueWithoutUserInput = {
    where: GitHubCommitGroupWhereUniqueInput
    data: XOR<GitHubCommitGroupUpdateWithoutUserInput, GitHubCommitGroupUncheckedUpdateWithoutUserInput>
  }

  export type GitHubCommitGroupUpdateManyWithWhereWithoutUserInput = {
    where: GitHubCommitGroupScalarWhereInput
    data: XOR<GitHubCommitGroupUpdateManyMutationInput, GitHubCommitGroupUncheckedUpdateManyWithoutUserInput>
  }

  export type GitHubCommitGroupScalarWhereInput = {
    AND?: GitHubCommitGroupScalarWhereInput | GitHubCommitGroupScalarWhereInput[]
    OR?: GitHubCommitGroupScalarWhereInput[]
    NOT?: GitHubCommitGroupScalarWhereInput | GitHubCommitGroupScalarWhereInput[]
    id?: IntFilter<"GitHubCommitGroup"> | number
    userId?: IntFilter<"GitHubCommitGroup"> | number
    repoId?: IntFilter<"GitHubCommitGroup"> | number
  }

  export type DailyLogUpsertWithWhereUniqueWithoutUserInput = {
    where: DailyLogWhereUniqueInput
    update: XOR<DailyLogUpdateWithoutUserInput, DailyLogUncheckedUpdateWithoutUserInput>
    create: XOR<DailyLogCreateWithoutUserInput, DailyLogUncheckedCreateWithoutUserInput>
  }

  export type DailyLogUpdateWithWhereUniqueWithoutUserInput = {
    where: DailyLogWhereUniqueInput
    data: XOR<DailyLogUpdateWithoutUserInput, DailyLogUncheckedUpdateWithoutUserInput>
  }

  export type DailyLogUpdateManyWithWhereWithoutUserInput = {
    where: DailyLogScalarWhereInput
    data: XOR<DailyLogUpdateManyMutationInput, DailyLogUncheckedUpdateManyWithoutUserInput>
  }

  export type DailyLogScalarWhereInput = {
    AND?: DailyLogScalarWhereInput | DailyLogScalarWhereInput[]
    OR?: DailyLogScalarWhereInput[]
    NOT?: DailyLogScalarWhereInput | DailyLogScalarWhereInput[]
    id?: IntFilter<"DailyLog"> | number
    userId?: IntFilter<"DailyLog"> | number
    date?: DateTimeFilter<"DailyLog"> | Date | string
    works?: JsonFilter<"DailyLog">
    aiSummary?: StringNullableFilter<"DailyLog"> | string | null
    export?: StringNullableFilter<"DailyLog"> | string | null
  }

  export type UserCreateWithoutAccountsInput = {
    email: string
    password?: string | null
    firstName?: string | null
    lastName?: string | null
    username?: string | null
    image?: string | null
    isActive?: boolean
    isAdmin?: boolean
    isVerified?: boolean
    createdAt?: Date | string
    accessToken?: string | null
    githubToken?: string | null
    githubUsername?: string | null
    Project?: ProjectCreateNestedManyWithoutOwnerInput
    ProjectMembers?: ProjectCreateNestedManyWithoutMembersInput
    assignedTasks?: TaskCreateNestedManyWithoutAssignedToInput
    createdTasks?: TaskCreateNestedManyWithoutAssignedByInput
    updatedTasks?: TaskCreateNestedManyWithoutUpdatedByInput
    GitHubCommit?: GitHubCommitCreateNestedManyWithoutUserInput
    GitHubCommitGroup?: GitHubCommitGroupCreateNestedManyWithoutUserInput
    DailyLog?: DailyLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: number
    email: string
    password?: string | null
    firstName?: string | null
    lastName?: string | null
    username?: string | null
    image?: string | null
    isActive?: boolean
    isAdmin?: boolean
    isVerified?: boolean
    createdAt?: Date | string
    accessToken?: string | null
    githubToken?: string | null
    githubUsername?: string | null
    Project?: ProjectUncheckedCreateNestedManyWithoutOwnerInput
    ProjectMembers?: ProjectUncheckedCreateNestedManyWithoutMembersInput
    assignedTasks?: TaskUncheckedCreateNestedManyWithoutAssignedToInput
    createdTasks?: TaskUncheckedCreateNestedManyWithoutAssignedByInput
    updatedTasks?: TaskUncheckedCreateNestedManyWithoutUpdatedByInput
    GitHubCommit?: GitHubCommitUncheckedCreateNestedManyWithoutUserInput
    GitHubCommitGroup?: GitHubCommitGroupUncheckedCreateNestedManyWithoutUserInput
    DailyLog?: DailyLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    githubToken?: NullableStringFieldUpdateOperationsInput | string | null
    githubUsername?: NullableStringFieldUpdateOperationsInput | string | null
    Project?: ProjectUpdateManyWithoutOwnerNestedInput
    ProjectMembers?: ProjectUpdateManyWithoutMembersNestedInput
    assignedTasks?: TaskUpdateManyWithoutAssignedToNestedInput
    createdTasks?: TaskUpdateManyWithoutAssignedByNestedInput
    updatedTasks?: TaskUpdateManyWithoutUpdatedByNestedInput
    GitHubCommit?: GitHubCommitUpdateManyWithoutUserNestedInput
    GitHubCommitGroup?: GitHubCommitGroupUpdateManyWithoutUserNestedInput
    DailyLog?: DailyLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    githubToken?: NullableStringFieldUpdateOperationsInput | string | null
    githubUsername?: NullableStringFieldUpdateOperationsInput | string | null
    Project?: ProjectUncheckedUpdateManyWithoutOwnerNestedInput
    ProjectMembers?: ProjectUncheckedUpdateManyWithoutMembersNestedInput
    assignedTasks?: TaskUncheckedUpdateManyWithoutAssignedToNestedInput
    createdTasks?: TaskUncheckedUpdateManyWithoutAssignedByNestedInput
    updatedTasks?: TaskUncheckedUpdateManyWithoutUpdatedByNestedInput
    GitHubCommit?: GitHubCommitUncheckedUpdateManyWithoutUserNestedInput
    GitHubCommitGroup?: GitHubCommitGroupUncheckedUpdateManyWithoutUserNestedInput
    DailyLog?: DailyLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutProjectInput = {
    email: string
    password?: string | null
    firstName?: string | null
    lastName?: string | null
    username?: string | null
    image?: string | null
    isActive?: boolean
    isAdmin?: boolean
    isVerified?: boolean
    createdAt?: Date | string
    accessToken?: string | null
    githubToken?: string | null
    githubUsername?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    ProjectMembers?: ProjectCreateNestedManyWithoutMembersInput
    assignedTasks?: TaskCreateNestedManyWithoutAssignedToInput
    createdTasks?: TaskCreateNestedManyWithoutAssignedByInput
    updatedTasks?: TaskCreateNestedManyWithoutUpdatedByInput
    GitHubCommit?: GitHubCommitCreateNestedManyWithoutUserInput
    GitHubCommitGroup?: GitHubCommitGroupCreateNestedManyWithoutUserInput
    DailyLog?: DailyLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProjectInput = {
    id?: number
    email: string
    password?: string | null
    firstName?: string | null
    lastName?: string | null
    username?: string | null
    image?: string | null
    isActive?: boolean
    isAdmin?: boolean
    isVerified?: boolean
    createdAt?: Date | string
    accessToken?: string | null
    githubToken?: string | null
    githubUsername?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    ProjectMembers?: ProjectUncheckedCreateNestedManyWithoutMembersInput
    assignedTasks?: TaskUncheckedCreateNestedManyWithoutAssignedToInput
    createdTasks?: TaskUncheckedCreateNestedManyWithoutAssignedByInput
    updatedTasks?: TaskUncheckedCreateNestedManyWithoutUpdatedByInput
    GitHubCommit?: GitHubCommitUncheckedCreateNestedManyWithoutUserInput
    GitHubCommitGroup?: GitHubCommitGroupUncheckedCreateNestedManyWithoutUserInput
    DailyLog?: DailyLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProjectInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProjectInput, UserUncheckedCreateWithoutProjectInput>
  }

  export type UserCreateWithoutProjectMembersInput = {
    email: string
    password?: string | null
    firstName?: string | null
    lastName?: string | null
    username?: string | null
    image?: string | null
    isActive?: boolean
    isAdmin?: boolean
    isVerified?: boolean
    createdAt?: Date | string
    accessToken?: string | null
    githubToken?: string | null
    githubUsername?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    Project?: ProjectCreateNestedManyWithoutOwnerInput
    assignedTasks?: TaskCreateNestedManyWithoutAssignedToInput
    createdTasks?: TaskCreateNestedManyWithoutAssignedByInput
    updatedTasks?: TaskCreateNestedManyWithoutUpdatedByInput
    GitHubCommit?: GitHubCommitCreateNestedManyWithoutUserInput
    GitHubCommitGroup?: GitHubCommitGroupCreateNestedManyWithoutUserInput
    DailyLog?: DailyLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProjectMembersInput = {
    id?: number
    email: string
    password?: string | null
    firstName?: string | null
    lastName?: string | null
    username?: string | null
    image?: string | null
    isActive?: boolean
    isAdmin?: boolean
    isVerified?: boolean
    createdAt?: Date | string
    accessToken?: string | null
    githubToken?: string | null
    githubUsername?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    Project?: ProjectUncheckedCreateNestedManyWithoutOwnerInput
    assignedTasks?: TaskUncheckedCreateNestedManyWithoutAssignedToInput
    createdTasks?: TaskUncheckedCreateNestedManyWithoutAssignedByInput
    updatedTasks?: TaskUncheckedCreateNestedManyWithoutUpdatedByInput
    GitHubCommit?: GitHubCommitUncheckedCreateNestedManyWithoutUserInput
    GitHubCommitGroup?: GitHubCommitGroupUncheckedCreateNestedManyWithoutUserInput
    DailyLog?: DailyLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProjectMembersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProjectMembersInput, UserUncheckedCreateWithoutProjectMembersInput>
  }

  export type TaskCreateWithoutProjectInput = {
    title: string
    description?: string | null
    startDate: Date | string
    dueDate: Date | string
    status?: $Enums.TaskStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    completedOn?: Date | string | null
    assignedTo: UserCreateNestedOneWithoutAssignedTasksInput
    assignedBy: UserCreateNestedOneWithoutCreatedTasksInput
    updatedBy?: UserCreateNestedOneWithoutUpdatedTasksInput
  }

  export type TaskUncheckedCreateWithoutProjectInput = {
    id?: number
    title: string
    description?: string | null
    startDate: Date | string
    dueDate: Date | string
    status?: $Enums.TaskStatus
    assignedToId: number
    assignedById: number
    updatedById?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    completedOn?: Date | string | null
  }

  export type TaskCreateOrConnectWithoutProjectInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutProjectInput, TaskUncheckedCreateWithoutProjectInput>
  }

  export type TaskCreateManyProjectInputEnvelope = {
    data: TaskCreateManyProjectInput | TaskCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type GitHubRepoCreateWithoutProjectInput = {
    name: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    webHookId?: number | null
    GitHubCommit?: GitHubCommitCreateNestedManyWithoutRepoInput
    GitHubCommitGroup?: GitHubCommitGroupCreateNestedManyWithoutRepoInput
  }

  export type GitHubRepoUncheckedCreateWithoutProjectInput = {
    id?: number
    name: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    webHookId?: number | null
    GitHubCommit?: GitHubCommitUncheckedCreateNestedManyWithoutRepoInput
    GitHubCommitGroup?: GitHubCommitGroupUncheckedCreateNestedManyWithoutRepoInput
  }

  export type GitHubRepoCreateOrConnectWithoutProjectInput = {
    where: GitHubRepoWhereUniqueInput
    create: XOR<GitHubRepoCreateWithoutProjectInput, GitHubRepoUncheckedCreateWithoutProjectInput>
  }

  export type GitHubRepoCreateManyProjectInputEnvelope = {
    data: GitHubRepoCreateManyProjectInput | GitHubRepoCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutProjectInput = {
    update: XOR<UserUpdateWithoutProjectInput, UserUncheckedUpdateWithoutProjectInput>
    create: XOR<UserCreateWithoutProjectInput, UserUncheckedCreateWithoutProjectInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProjectInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProjectInput, UserUncheckedUpdateWithoutProjectInput>
  }

  export type UserUpdateWithoutProjectInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    githubToken?: NullableStringFieldUpdateOperationsInput | string | null
    githubUsername?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    ProjectMembers?: ProjectUpdateManyWithoutMembersNestedInput
    assignedTasks?: TaskUpdateManyWithoutAssignedToNestedInput
    createdTasks?: TaskUpdateManyWithoutAssignedByNestedInput
    updatedTasks?: TaskUpdateManyWithoutUpdatedByNestedInput
    GitHubCommit?: GitHubCommitUpdateManyWithoutUserNestedInput
    GitHubCommitGroup?: GitHubCommitGroupUpdateManyWithoutUserNestedInput
    DailyLog?: DailyLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    githubToken?: NullableStringFieldUpdateOperationsInput | string | null
    githubUsername?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    ProjectMembers?: ProjectUncheckedUpdateManyWithoutMembersNestedInput
    assignedTasks?: TaskUncheckedUpdateManyWithoutAssignedToNestedInput
    createdTasks?: TaskUncheckedUpdateManyWithoutAssignedByNestedInput
    updatedTasks?: TaskUncheckedUpdateManyWithoutUpdatedByNestedInput
    GitHubCommit?: GitHubCommitUncheckedUpdateManyWithoutUserNestedInput
    GitHubCommitGroup?: GitHubCommitGroupUncheckedUpdateManyWithoutUserNestedInput
    DailyLog?: DailyLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithWhereUniqueWithoutProjectMembersInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutProjectMembersInput, UserUncheckedUpdateWithoutProjectMembersInput>
    create: XOR<UserCreateWithoutProjectMembersInput, UserUncheckedCreateWithoutProjectMembersInput>
  }

  export type UserUpdateWithWhereUniqueWithoutProjectMembersInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutProjectMembersInput, UserUncheckedUpdateWithoutProjectMembersInput>
  }

  export type UserUpdateManyWithWhereWithoutProjectMembersInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutProjectMembersInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    password?: StringNullableFilter<"User"> | string | null
    firstName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    username?: StringNullableFilter<"User"> | string | null
    image?: StringNullableFilter<"User"> | string | null
    isActive?: BoolFilter<"User"> | boolean
    isAdmin?: BoolFilter<"User"> | boolean
    isVerified?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    accessToken?: StringNullableFilter<"User"> | string | null
    githubToken?: StringNullableFilter<"User"> | string | null
    githubUsername?: StringNullableFilter<"User"> | string | null
  }

  export type TaskUpsertWithWhereUniqueWithoutProjectInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutProjectInput, TaskUncheckedUpdateWithoutProjectInput>
    create: XOR<TaskCreateWithoutProjectInput, TaskUncheckedCreateWithoutProjectInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutProjectInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutProjectInput, TaskUncheckedUpdateWithoutProjectInput>
  }

  export type TaskUpdateManyWithWhereWithoutProjectInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutProjectInput>
  }

  export type GitHubRepoUpsertWithWhereUniqueWithoutProjectInput = {
    where: GitHubRepoWhereUniqueInput
    update: XOR<GitHubRepoUpdateWithoutProjectInput, GitHubRepoUncheckedUpdateWithoutProjectInput>
    create: XOR<GitHubRepoCreateWithoutProjectInput, GitHubRepoUncheckedCreateWithoutProjectInput>
  }

  export type GitHubRepoUpdateWithWhereUniqueWithoutProjectInput = {
    where: GitHubRepoWhereUniqueInput
    data: XOR<GitHubRepoUpdateWithoutProjectInput, GitHubRepoUncheckedUpdateWithoutProjectInput>
  }

  export type GitHubRepoUpdateManyWithWhereWithoutProjectInput = {
    where: GitHubRepoScalarWhereInput
    data: XOR<GitHubRepoUpdateManyMutationInput, GitHubRepoUncheckedUpdateManyWithoutProjectInput>
  }

  export type GitHubRepoScalarWhereInput = {
    AND?: GitHubRepoScalarWhereInput | GitHubRepoScalarWhereInput[]
    OR?: GitHubRepoScalarWhereInput[]
    NOT?: GitHubRepoScalarWhereInput | GitHubRepoScalarWhereInput[]
    id?: IntFilter<"GitHubRepo"> | number
    name?: StringFilter<"GitHubRepo"> | string
    url?: StringFilter<"GitHubRepo"> | string
    createdAt?: DateTimeFilter<"GitHubRepo"> | Date | string
    updatedAt?: DateTimeFilter<"GitHubRepo"> | Date | string
    projectId?: IntFilter<"GitHubRepo"> | number
    webHookId?: IntNullableFilter<"GitHubRepo"> | number | null
  }

  export type ProjectCreateWithoutTasksInput = {
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutProjectInput
    members?: UserCreateNestedManyWithoutProjectMembersInput
    githubRepos?: GitHubRepoCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutTasksInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
    members?: UserUncheckedCreateNestedManyWithoutProjectMembersInput
    githubRepos?: GitHubRepoUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutTasksInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutTasksInput, ProjectUncheckedCreateWithoutTasksInput>
  }

  export type UserCreateWithoutAssignedTasksInput = {
    email: string
    password?: string | null
    firstName?: string | null
    lastName?: string | null
    username?: string | null
    image?: string | null
    isActive?: boolean
    isAdmin?: boolean
    isVerified?: boolean
    createdAt?: Date | string
    accessToken?: string | null
    githubToken?: string | null
    githubUsername?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    Project?: ProjectCreateNestedManyWithoutOwnerInput
    ProjectMembers?: ProjectCreateNestedManyWithoutMembersInput
    createdTasks?: TaskCreateNestedManyWithoutAssignedByInput
    updatedTasks?: TaskCreateNestedManyWithoutUpdatedByInput
    GitHubCommit?: GitHubCommitCreateNestedManyWithoutUserInput
    GitHubCommitGroup?: GitHubCommitGroupCreateNestedManyWithoutUserInput
    DailyLog?: DailyLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAssignedTasksInput = {
    id?: number
    email: string
    password?: string | null
    firstName?: string | null
    lastName?: string | null
    username?: string | null
    image?: string | null
    isActive?: boolean
    isAdmin?: boolean
    isVerified?: boolean
    createdAt?: Date | string
    accessToken?: string | null
    githubToken?: string | null
    githubUsername?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    Project?: ProjectUncheckedCreateNestedManyWithoutOwnerInput
    ProjectMembers?: ProjectUncheckedCreateNestedManyWithoutMembersInput
    createdTasks?: TaskUncheckedCreateNestedManyWithoutAssignedByInput
    updatedTasks?: TaskUncheckedCreateNestedManyWithoutUpdatedByInput
    GitHubCommit?: GitHubCommitUncheckedCreateNestedManyWithoutUserInput
    GitHubCommitGroup?: GitHubCommitGroupUncheckedCreateNestedManyWithoutUserInput
    DailyLog?: DailyLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAssignedTasksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAssignedTasksInput, UserUncheckedCreateWithoutAssignedTasksInput>
  }

  export type UserCreateWithoutCreatedTasksInput = {
    email: string
    password?: string | null
    firstName?: string | null
    lastName?: string | null
    username?: string | null
    image?: string | null
    isActive?: boolean
    isAdmin?: boolean
    isVerified?: boolean
    createdAt?: Date | string
    accessToken?: string | null
    githubToken?: string | null
    githubUsername?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    Project?: ProjectCreateNestedManyWithoutOwnerInput
    ProjectMembers?: ProjectCreateNestedManyWithoutMembersInput
    assignedTasks?: TaskCreateNestedManyWithoutAssignedToInput
    updatedTasks?: TaskCreateNestedManyWithoutUpdatedByInput
    GitHubCommit?: GitHubCommitCreateNestedManyWithoutUserInput
    GitHubCommitGroup?: GitHubCommitGroupCreateNestedManyWithoutUserInput
    DailyLog?: DailyLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCreatedTasksInput = {
    id?: number
    email: string
    password?: string | null
    firstName?: string | null
    lastName?: string | null
    username?: string | null
    image?: string | null
    isActive?: boolean
    isAdmin?: boolean
    isVerified?: boolean
    createdAt?: Date | string
    accessToken?: string | null
    githubToken?: string | null
    githubUsername?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    Project?: ProjectUncheckedCreateNestedManyWithoutOwnerInput
    ProjectMembers?: ProjectUncheckedCreateNestedManyWithoutMembersInput
    assignedTasks?: TaskUncheckedCreateNestedManyWithoutAssignedToInput
    updatedTasks?: TaskUncheckedCreateNestedManyWithoutUpdatedByInput
    GitHubCommit?: GitHubCommitUncheckedCreateNestedManyWithoutUserInput
    GitHubCommitGroup?: GitHubCommitGroupUncheckedCreateNestedManyWithoutUserInput
    DailyLog?: DailyLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCreatedTasksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedTasksInput, UserUncheckedCreateWithoutCreatedTasksInput>
  }

  export type UserCreateWithoutUpdatedTasksInput = {
    email: string
    password?: string | null
    firstName?: string | null
    lastName?: string | null
    username?: string | null
    image?: string | null
    isActive?: boolean
    isAdmin?: boolean
    isVerified?: boolean
    createdAt?: Date | string
    accessToken?: string | null
    githubToken?: string | null
    githubUsername?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    Project?: ProjectCreateNestedManyWithoutOwnerInput
    ProjectMembers?: ProjectCreateNestedManyWithoutMembersInput
    assignedTasks?: TaskCreateNestedManyWithoutAssignedToInput
    createdTasks?: TaskCreateNestedManyWithoutAssignedByInput
    GitHubCommit?: GitHubCommitCreateNestedManyWithoutUserInput
    GitHubCommitGroup?: GitHubCommitGroupCreateNestedManyWithoutUserInput
    DailyLog?: DailyLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUpdatedTasksInput = {
    id?: number
    email: string
    password?: string | null
    firstName?: string | null
    lastName?: string | null
    username?: string | null
    image?: string | null
    isActive?: boolean
    isAdmin?: boolean
    isVerified?: boolean
    createdAt?: Date | string
    accessToken?: string | null
    githubToken?: string | null
    githubUsername?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    Project?: ProjectUncheckedCreateNestedManyWithoutOwnerInput
    ProjectMembers?: ProjectUncheckedCreateNestedManyWithoutMembersInput
    assignedTasks?: TaskUncheckedCreateNestedManyWithoutAssignedToInput
    createdTasks?: TaskUncheckedCreateNestedManyWithoutAssignedByInput
    GitHubCommit?: GitHubCommitUncheckedCreateNestedManyWithoutUserInput
    GitHubCommitGroup?: GitHubCommitGroupUncheckedCreateNestedManyWithoutUserInput
    DailyLog?: DailyLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUpdatedTasksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUpdatedTasksInput, UserUncheckedCreateWithoutUpdatedTasksInput>
  }

  export type ProjectUpsertWithoutTasksInput = {
    update: XOR<ProjectUpdateWithoutTasksInput, ProjectUncheckedUpdateWithoutTasksInput>
    create: XOR<ProjectCreateWithoutTasksInput, ProjectUncheckedCreateWithoutTasksInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutTasksInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutTasksInput, ProjectUncheckedUpdateWithoutTasksInput>
  }

  export type ProjectUpdateWithoutTasksInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutProjectNestedInput
    members?: UserUpdateManyWithoutProjectMembersNestedInput
    githubRepos?: GitHubRepoUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutTasksInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    members?: UserUncheckedUpdateManyWithoutProjectMembersNestedInput
    githubRepos?: GitHubRepoUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type UserUpsertWithoutAssignedTasksInput = {
    update: XOR<UserUpdateWithoutAssignedTasksInput, UserUncheckedUpdateWithoutAssignedTasksInput>
    create: XOR<UserCreateWithoutAssignedTasksInput, UserUncheckedCreateWithoutAssignedTasksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAssignedTasksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAssignedTasksInput, UserUncheckedUpdateWithoutAssignedTasksInput>
  }

  export type UserUpdateWithoutAssignedTasksInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    githubToken?: NullableStringFieldUpdateOperationsInput | string | null
    githubUsername?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    Project?: ProjectUpdateManyWithoutOwnerNestedInput
    ProjectMembers?: ProjectUpdateManyWithoutMembersNestedInput
    createdTasks?: TaskUpdateManyWithoutAssignedByNestedInput
    updatedTasks?: TaskUpdateManyWithoutUpdatedByNestedInput
    GitHubCommit?: GitHubCommitUpdateManyWithoutUserNestedInput
    GitHubCommitGroup?: GitHubCommitGroupUpdateManyWithoutUserNestedInput
    DailyLog?: DailyLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAssignedTasksInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    githubToken?: NullableStringFieldUpdateOperationsInput | string | null
    githubUsername?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    Project?: ProjectUncheckedUpdateManyWithoutOwnerNestedInput
    ProjectMembers?: ProjectUncheckedUpdateManyWithoutMembersNestedInput
    createdTasks?: TaskUncheckedUpdateManyWithoutAssignedByNestedInput
    updatedTasks?: TaskUncheckedUpdateManyWithoutUpdatedByNestedInput
    GitHubCommit?: GitHubCommitUncheckedUpdateManyWithoutUserNestedInput
    GitHubCommitGroup?: GitHubCommitGroupUncheckedUpdateManyWithoutUserNestedInput
    DailyLog?: DailyLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutCreatedTasksInput = {
    update: XOR<UserUpdateWithoutCreatedTasksInput, UserUncheckedUpdateWithoutCreatedTasksInput>
    create: XOR<UserCreateWithoutCreatedTasksInput, UserUncheckedCreateWithoutCreatedTasksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedTasksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedTasksInput, UserUncheckedUpdateWithoutCreatedTasksInput>
  }

  export type UserUpdateWithoutCreatedTasksInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    githubToken?: NullableStringFieldUpdateOperationsInput | string | null
    githubUsername?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    Project?: ProjectUpdateManyWithoutOwnerNestedInput
    ProjectMembers?: ProjectUpdateManyWithoutMembersNestedInput
    assignedTasks?: TaskUpdateManyWithoutAssignedToNestedInput
    updatedTasks?: TaskUpdateManyWithoutUpdatedByNestedInput
    GitHubCommit?: GitHubCommitUpdateManyWithoutUserNestedInput
    GitHubCommitGroup?: GitHubCommitGroupUpdateManyWithoutUserNestedInput
    DailyLog?: DailyLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedTasksInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    githubToken?: NullableStringFieldUpdateOperationsInput | string | null
    githubUsername?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    Project?: ProjectUncheckedUpdateManyWithoutOwnerNestedInput
    ProjectMembers?: ProjectUncheckedUpdateManyWithoutMembersNestedInput
    assignedTasks?: TaskUncheckedUpdateManyWithoutAssignedToNestedInput
    updatedTasks?: TaskUncheckedUpdateManyWithoutUpdatedByNestedInput
    GitHubCommit?: GitHubCommitUncheckedUpdateManyWithoutUserNestedInput
    GitHubCommitGroup?: GitHubCommitGroupUncheckedUpdateManyWithoutUserNestedInput
    DailyLog?: DailyLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutUpdatedTasksInput = {
    update: XOR<UserUpdateWithoutUpdatedTasksInput, UserUncheckedUpdateWithoutUpdatedTasksInput>
    create: XOR<UserCreateWithoutUpdatedTasksInput, UserUncheckedCreateWithoutUpdatedTasksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUpdatedTasksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUpdatedTasksInput, UserUncheckedUpdateWithoutUpdatedTasksInput>
  }

  export type UserUpdateWithoutUpdatedTasksInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    githubToken?: NullableStringFieldUpdateOperationsInput | string | null
    githubUsername?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    Project?: ProjectUpdateManyWithoutOwnerNestedInput
    ProjectMembers?: ProjectUpdateManyWithoutMembersNestedInput
    assignedTasks?: TaskUpdateManyWithoutAssignedToNestedInput
    createdTasks?: TaskUpdateManyWithoutAssignedByNestedInput
    GitHubCommit?: GitHubCommitUpdateManyWithoutUserNestedInput
    GitHubCommitGroup?: GitHubCommitGroupUpdateManyWithoutUserNestedInput
    DailyLog?: DailyLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUpdatedTasksInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    githubToken?: NullableStringFieldUpdateOperationsInput | string | null
    githubUsername?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    Project?: ProjectUncheckedUpdateManyWithoutOwnerNestedInput
    ProjectMembers?: ProjectUncheckedUpdateManyWithoutMembersNestedInput
    assignedTasks?: TaskUncheckedUpdateManyWithoutAssignedToNestedInput
    createdTasks?: TaskUncheckedUpdateManyWithoutAssignedByNestedInput
    GitHubCommit?: GitHubCommitUncheckedUpdateManyWithoutUserNestedInput
    GitHubCommitGroup?: GitHubCommitGroupUncheckedUpdateManyWithoutUserNestedInput
    DailyLog?: DailyLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProjectCreateWithoutGithubReposInput = {
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutProjectInput
    members?: UserCreateNestedManyWithoutProjectMembersInput
    tasks?: TaskCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutGithubReposInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
    members?: UserUncheckedCreateNestedManyWithoutProjectMembersInput
    tasks?: TaskUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutGithubReposInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutGithubReposInput, ProjectUncheckedCreateWithoutGithubReposInput>
  }

  export type GitHubCommitCreateWithoutRepoInput = {
    commitDate: Date | string
    timing: Date | string
    message: string
    user: UserCreateNestedOneWithoutGitHubCommitInput
    GitHubCommitGroup?: GitHubCommitGroupCreateNestedOneWithoutCommitsInput
  }

  export type GitHubCommitUncheckedCreateWithoutRepoInput = {
    id?: number
    userId: number
    commitDate: Date | string
    timing: Date | string
    message: string
    gitHubCommitGroupId?: number | null
  }

  export type GitHubCommitCreateOrConnectWithoutRepoInput = {
    where: GitHubCommitWhereUniqueInput
    create: XOR<GitHubCommitCreateWithoutRepoInput, GitHubCommitUncheckedCreateWithoutRepoInput>
  }

  export type GitHubCommitCreateManyRepoInputEnvelope = {
    data: GitHubCommitCreateManyRepoInput | GitHubCommitCreateManyRepoInput[]
    skipDuplicates?: boolean
  }

  export type GitHubCommitGroupCreateWithoutRepoInput = {
    user: UserCreateNestedOneWithoutGitHubCommitGroupInput
    commits?: GitHubCommitCreateNestedManyWithoutGitHubCommitGroupInput
  }

  export type GitHubCommitGroupUncheckedCreateWithoutRepoInput = {
    id?: number
    userId: number
    commits?: GitHubCommitUncheckedCreateNestedManyWithoutGitHubCommitGroupInput
  }

  export type GitHubCommitGroupCreateOrConnectWithoutRepoInput = {
    where: GitHubCommitGroupWhereUniqueInput
    create: XOR<GitHubCommitGroupCreateWithoutRepoInput, GitHubCommitGroupUncheckedCreateWithoutRepoInput>
  }

  export type GitHubCommitGroupCreateManyRepoInputEnvelope = {
    data: GitHubCommitGroupCreateManyRepoInput | GitHubCommitGroupCreateManyRepoInput[]
    skipDuplicates?: boolean
  }

  export type ProjectUpsertWithoutGithubReposInput = {
    update: XOR<ProjectUpdateWithoutGithubReposInput, ProjectUncheckedUpdateWithoutGithubReposInput>
    create: XOR<ProjectCreateWithoutGithubReposInput, ProjectUncheckedCreateWithoutGithubReposInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutGithubReposInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutGithubReposInput, ProjectUncheckedUpdateWithoutGithubReposInput>
  }

  export type ProjectUpdateWithoutGithubReposInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutProjectNestedInput
    members?: UserUpdateManyWithoutProjectMembersNestedInput
    tasks?: TaskUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutGithubReposInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    members?: UserUncheckedUpdateManyWithoutProjectMembersNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type GitHubCommitUpsertWithWhereUniqueWithoutRepoInput = {
    where: GitHubCommitWhereUniqueInput
    update: XOR<GitHubCommitUpdateWithoutRepoInput, GitHubCommitUncheckedUpdateWithoutRepoInput>
    create: XOR<GitHubCommitCreateWithoutRepoInput, GitHubCommitUncheckedCreateWithoutRepoInput>
  }

  export type GitHubCommitUpdateWithWhereUniqueWithoutRepoInput = {
    where: GitHubCommitWhereUniqueInput
    data: XOR<GitHubCommitUpdateWithoutRepoInput, GitHubCommitUncheckedUpdateWithoutRepoInput>
  }

  export type GitHubCommitUpdateManyWithWhereWithoutRepoInput = {
    where: GitHubCommitScalarWhereInput
    data: XOR<GitHubCommitUpdateManyMutationInput, GitHubCommitUncheckedUpdateManyWithoutRepoInput>
  }

  export type GitHubCommitGroupUpsertWithWhereUniqueWithoutRepoInput = {
    where: GitHubCommitGroupWhereUniqueInput
    update: XOR<GitHubCommitGroupUpdateWithoutRepoInput, GitHubCommitGroupUncheckedUpdateWithoutRepoInput>
    create: XOR<GitHubCommitGroupCreateWithoutRepoInput, GitHubCommitGroupUncheckedCreateWithoutRepoInput>
  }

  export type GitHubCommitGroupUpdateWithWhereUniqueWithoutRepoInput = {
    where: GitHubCommitGroupWhereUniqueInput
    data: XOR<GitHubCommitGroupUpdateWithoutRepoInput, GitHubCommitGroupUncheckedUpdateWithoutRepoInput>
  }

  export type GitHubCommitGroupUpdateManyWithWhereWithoutRepoInput = {
    where: GitHubCommitGroupScalarWhereInput
    data: XOR<GitHubCommitGroupUpdateManyMutationInput, GitHubCommitGroupUncheckedUpdateManyWithoutRepoInput>
  }

  export type GitHubRepoCreateWithoutGitHubCommitInput = {
    name: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    webHookId?: number | null
    project: ProjectCreateNestedOneWithoutGithubReposInput
    GitHubCommitGroup?: GitHubCommitGroupCreateNestedManyWithoutRepoInput
  }

  export type GitHubRepoUncheckedCreateWithoutGitHubCommitInput = {
    id?: number
    name: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    projectId: number
    webHookId?: number | null
    GitHubCommitGroup?: GitHubCommitGroupUncheckedCreateNestedManyWithoutRepoInput
  }

  export type GitHubRepoCreateOrConnectWithoutGitHubCommitInput = {
    where: GitHubRepoWhereUniqueInput
    create: XOR<GitHubRepoCreateWithoutGitHubCommitInput, GitHubRepoUncheckedCreateWithoutGitHubCommitInput>
  }

  export type UserCreateWithoutGitHubCommitInput = {
    email: string
    password?: string | null
    firstName?: string | null
    lastName?: string | null
    username?: string | null
    image?: string | null
    isActive?: boolean
    isAdmin?: boolean
    isVerified?: boolean
    createdAt?: Date | string
    accessToken?: string | null
    githubToken?: string | null
    githubUsername?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    Project?: ProjectCreateNestedManyWithoutOwnerInput
    ProjectMembers?: ProjectCreateNestedManyWithoutMembersInput
    assignedTasks?: TaskCreateNestedManyWithoutAssignedToInput
    createdTasks?: TaskCreateNestedManyWithoutAssignedByInput
    updatedTasks?: TaskCreateNestedManyWithoutUpdatedByInput
    GitHubCommitGroup?: GitHubCommitGroupCreateNestedManyWithoutUserInput
    DailyLog?: DailyLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutGitHubCommitInput = {
    id?: number
    email: string
    password?: string | null
    firstName?: string | null
    lastName?: string | null
    username?: string | null
    image?: string | null
    isActive?: boolean
    isAdmin?: boolean
    isVerified?: boolean
    createdAt?: Date | string
    accessToken?: string | null
    githubToken?: string | null
    githubUsername?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    Project?: ProjectUncheckedCreateNestedManyWithoutOwnerInput
    ProjectMembers?: ProjectUncheckedCreateNestedManyWithoutMembersInput
    assignedTasks?: TaskUncheckedCreateNestedManyWithoutAssignedToInput
    createdTasks?: TaskUncheckedCreateNestedManyWithoutAssignedByInput
    updatedTasks?: TaskUncheckedCreateNestedManyWithoutUpdatedByInput
    GitHubCommitGroup?: GitHubCommitGroupUncheckedCreateNestedManyWithoutUserInput
    DailyLog?: DailyLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutGitHubCommitInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGitHubCommitInput, UserUncheckedCreateWithoutGitHubCommitInput>
  }

  export type GitHubCommitGroupCreateWithoutCommitsInput = {
    user: UserCreateNestedOneWithoutGitHubCommitGroupInput
    repo: GitHubRepoCreateNestedOneWithoutGitHubCommitGroupInput
  }

  export type GitHubCommitGroupUncheckedCreateWithoutCommitsInput = {
    id?: number
    userId: number
    repoId: number
  }

  export type GitHubCommitGroupCreateOrConnectWithoutCommitsInput = {
    where: GitHubCommitGroupWhereUniqueInput
    create: XOR<GitHubCommitGroupCreateWithoutCommitsInput, GitHubCommitGroupUncheckedCreateWithoutCommitsInput>
  }

  export type GitHubRepoUpsertWithoutGitHubCommitInput = {
    update: XOR<GitHubRepoUpdateWithoutGitHubCommitInput, GitHubRepoUncheckedUpdateWithoutGitHubCommitInput>
    create: XOR<GitHubRepoCreateWithoutGitHubCommitInput, GitHubRepoUncheckedCreateWithoutGitHubCommitInput>
    where?: GitHubRepoWhereInput
  }

  export type GitHubRepoUpdateToOneWithWhereWithoutGitHubCommitInput = {
    where?: GitHubRepoWhereInput
    data: XOR<GitHubRepoUpdateWithoutGitHubCommitInput, GitHubRepoUncheckedUpdateWithoutGitHubCommitInput>
  }

  export type GitHubRepoUpdateWithoutGitHubCommitInput = {
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    webHookId?: NullableIntFieldUpdateOperationsInput | number | null
    project?: ProjectUpdateOneRequiredWithoutGithubReposNestedInput
    GitHubCommitGroup?: GitHubCommitGroupUpdateManyWithoutRepoNestedInput
  }

  export type GitHubRepoUncheckedUpdateWithoutGitHubCommitInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectId?: IntFieldUpdateOperationsInput | number
    webHookId?: NullableIntFieldUpdateOperationsInput | number | null
    GitHubCommitGroup?: GitHubCommitGroupUncheckedUpdateManyWithoutRepoNestedInput
  }

  export type UserUpsertWithoutGitHubCommitInput = {
    update: XOR<UserUpdateWithoutGitHubCommitInput, UserUncheckedUpdateWithoutGitHubCommitInput>
    create: XOR<UserCreateWithoutGitHubCommitInput, UserUncheckedCreateWithoutGitHubCommitInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGitHubCommitInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGitHubCommitInput, UserUncheckedUpdateWithoutGitHubCommitInput>
  }

  export type UserUpdateWithoutGitHubCommitInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    githubToken?: NullableStringFieldUpdateOperationsInput | string | null
    githubUsername?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    Project?: ProjectUpdateManyWithoutOwnerNestedInput
    ProjectMembers?: ProjectUpdateManyWithoutMembersNestedInput
    assignedTasks?: TaskUpdateManyWithoutAssignedToNestedInput
    createdTasks?: TaskUpdateManyWithoutAssignedByNestedInput
    updatedTasks?: TaskUpdateManyWithoutUpdatedByNestedInput
    GitHubCommitGroup?: GitHubCommitGroupUpdateManyWithoutUserNestedInput
    DailyLog?: DailyLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutGitHubCommitInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    githubToken?: NullableStringFieldUpdateOperationsInput | string | null
    githubUsername?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    Project?: ProjectUncheckedUpdateManyWithoutOwnerNestedInput
    ProjectMembers?: ProjectUncheckedUpdateManyWithoutMembersNestedInput
    assignedTasks?: TaskUncheckedUpdateManyWithoutAssignedToNestedInput
    createdTasks?: TaskUncheckedUpdateManyWithoutAssignedByNestedInput
    updatedTasks?: TaskUncheckedUpdateManyWithoutUpdatedByNestedInput
    GitHubCommitGroup?: GitHubCommitGroupUncheckedUpdateManyWithoutUserNestedInput
    DailyLog?: DailyLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type GitHubCommitGroupUpsertWithoutCommitsInput = {
    update: XOR<GitHubCommitGroupUpdateWithoutCommitsInput, GitHubCommitGroupUncheckedUpdateWithoutCommitsInput>
    create: XOR<GitHubCommitGroupCreateWithoutCommitsInput, GitHubCommitGroupUncheckedCreateWithoutCommitsInput>
    where?: GitHubCommitGroupWhereInput
  }

  export type GitHubCommitGroupUpdateToOneWithWhereWithoutCommitsInput = {
    where?: GitHubCommitGroupWhereInput
    data: XOR<GitHubCommitGroupUpdateWithoutCommitsInput, GitHubCommitGroupUncheckedUpdateWithoutCommitsInput>
  }

  export type GitHubCommitGroupUpdateWithoutCommitsInput = {
    user?: UserUpdateOneRequiredWithoutGitHubCommitGroupNestedInput
    repo?: GitHubRepoUpdateOneRequiredWithoutGitHubCommitGroupNestedInput
  }

  export type GitHubCommitGroupUncheckedUpdateWithoutCommitsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    repoId?: IntFieldUpdateOperationsInput | number
  }

  export type UserCreateWithoutGitHubCommitGroupInput = {
    email: string
    password?: string | null
    firstName?: string | null
    lastName?: string | null
    username?: string | null
    image?: string | null
    isActive?: boolean
    isAdmin?: boolean
    isVerified?: boolean
    createdAt?: Date | string
    accessToken?: string | null
    githubToken?: string | null
    githubUsername?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    Project?: ProjectCreateNestedManyWithoutOwnerInput
    ProjectMembers?: ProjectCreateNestedManyWithoutMembersInput
    assignedTasks?: TaskCreateNestedManyWithoutAssignedToInput
    createdTasks?: TaskCreateNestedManyWithoutAssignedByInput
    updatedTasks?: TaskCreateNestedManyWithoutUpdatedByInput
    GitHubCommit?: GitHubCommitCreateNestedManyWithoutUserInput
    DailyLog?: DailyLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutGitHubCommitGroupInput = {
    id?: number
    email: string
    password?: string | null
    firstName?: string | null
    lastName?: string | null
    username?: string | null
    image?: string | null
    isActive?: boolean
    isAdmin?: boolean
    isVerified?: boolean
    createdAt?: Date | string
    accessToken?: string | null
    githubToken?: string | null
    githubUsername?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    Project?: ProjectUncheckedCreateNestedManyWithoutOwnerInput
    ProjectMembers?: ProjectUncheckedCreateNestedManyWithoutMembersInput
    assignedTasks?: TaskUncheckedCreateNestedManyWithoutAssignedToInput
    createdTasks?: TaskUncheckedCreateNestedManyWithoutAssignedByInput
    updatedTasks?: TaskUncheckedCreateNestedManyWithoutUpdatedByInput
    GitHubCommit?: GitHubCommitUncheckedCreateNestedManyWithoutUserInput
    DailyLog?: DailyLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutGitHubCommitGroupInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGitHubCommitGroupInput, UserUncheckedCreateWithoutGitHubCommitGroupInput>
  }

  export type GitHubRepoCreateWithoutGitHubCommitGroupInput = {
    name: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    webHookId?: number | null
    project: ProjectCreateNestedOneWithoutGithubReposInput
    GitHubCommit?: GitHubCommitCreateNestedManyWithoutRepoInput
  }

  export type GitHubRepoUncheckedCreateWithoutGitHubCommitGroupInput = {
    id?: number
    name: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    projectId: number
    webHookId?: number | null
    GitHubCommit?: GitHubCommitUncheckedCreateNestedManyWithoutRepoInput
  }

  export type GitHubRepoCreateOrConnectWithoutGitHubCommitGroupInput = {
    where: GitHubRepoWhereUniqueInput
    create: XOR<GitHubRepoCreateWithoutGitHubCommitGroupInput, GitHubRepoUncheckedCreateWithoutGitHubCommitGroupInput>
  }

  export type GitHubCommitCreateWithoutGitHubCommitGroupInput = {
    commitDate: Date | string
    timing: Date | string
    message: string
    repo: GitHubRepoCreateNestedOneWithoutGitHubCommitInput
    user: UserCreateNestedOneWithoutGitHubCommitInput
  }

  export type GitHubCommitUncheckedCreateWithoutGitHubCommitGroupInput = {
    id?: number
    repoId: number
    userId: number
    commitDate: Date | string
    timing: Date | string
    message: string
  }

  export type GitHubCommitCreateOrConnectWithoutGitHubCommitGroupInput = {
    where: GitHubCommitWhereUniqueInput
    create: XOR<GitHubCommitCreateWithoutGitHubCommitGroupInput, GitHubCommitUncheckedCreateWithoutGitHubCommitGroupInput>
  }

  export type GitHubCommitCreateManyGitHubCommitGroupInputEnvelope = {
    data: GitHubCommitCreateManyGitHubCommitGroupInput | GitHubCommitCreateManyGitHubCommitGroupInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutGitHubCommitGroupInput = {
    update: XOR<UserUpdateWithoutGitHubCommitGroupInput, UserUncheckedUpdateWithoutGitHubCommitGroupInput>
    create: XOR<UserCreateWithoutGitHubCommitGroupInput, UserUncheckedCreateWithoutGitHubCommitGroupInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGitHubCommitGroupInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGitHubCommitGroupInput, UserUncheckedUpdateWithoutGitHubCommitGroupInput>
  }

  export type UserUpdateWithoutGitHubCommitGroupInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    githubToken?: NullableStringFieldUpdateOperationsInput | string | null
    githubUsername?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    Project?: ProjectUpdateManyWithoutOwnerNestedInput
    ProjectMembers?: ProjectUpdateManyWithoutMembersNestedInput
    assignedTasks?: TaskUpdateManyWithoutAssignedToNestedInput
    createdTasks?: TaskUpdateManyWithoutAssignedByNestedInput
    updatedTasks?: TaskUpdateManyWithoutUpdatedByNestedInput
    GitHubCommit?: GitHubCommitUpdateManyWithoutUserNestedInput
    DailyLog?: DailyLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutGitHubCommitGroupInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    githubToken?: NullableStringFieldUpdateOperationsInput | string | null
    githubUsername?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    Project?: ProjectUncheckedUpdateManyWithoutOwnerNestedInput
    ProjectMembers?: ProjectUncheckedUpdateManyWithoutMembersNestedInput
    assignedTasks?: TaskUncheckedUpdateManyWithoutAssignedToNestedInput
    createdTasks?: TaskUncheckedUpdateManyWithoutAssignedByNestedInput
    updatedTasks?: TaskUncheckedUpdateManyWithoutUpdatedByNestedInput
    GitHubCommit?: GitHubCommitUncheckedUpdateManyWithoutUserNestedInput
    DailyLog?: DailyLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type GitHubRepoUpsertWithoutGitHubCommitGroupInput = {
    update: XOR<GitHubRepoUpdateWithoutGitHubCommitGroupInput, GitHubRepoUncheckedUpdateWithoutGitHubCommitGroupInput>
    create: XOR<GitHubRepoCreateWithoutGitHubCommitGroupInput, GitHubRepoUncheckedCreateWithoutGitHubCommitGroupInput>
    where?: GitHubRepoWhereInput
  }

  export type GitHubRepoUpdateToOneWithWhereWithoutGitHubCommitGroupInput = {
    where?: GitHubRepoWhereInput
    data: XOR<GitHubRepoUpdateWithoutGitHubCommitGroupInput, GitHubRepoUncheckedUpdateWithoutGitHubCommitGroupInput>
  }

  export type GitHubRepoUpdateWithoutGitHubCommitGroupInput = {
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    webHookId?: NullableIntFieldUpdateOperationsInput | number | null
    project?: ProjectUpdateOneRequiredWithoutGithubReposNestedInput
    GitHubCommit?: GitHubCommitUpdateManyWithoutRepoNestedInput
  }

  export type GitHubRepoUncheckedUpdateWithoutGitHubCommitGroupInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectId?: IntFieldUpdateOperationsInput | number
    webHookId?: NullableIntFieldUpdateOperationsInput | number | null
    GitHubCommit?: GitHubCommitUncheckedUpdateManyWithoutRepoNestedInput
  }

  export type GitHubCommitUpsertWithWhereUniqueWithoutGitHubCommitGroupInput = {
    where: GitHubCommitWhereUniqueInput
    update: XOR<GitHubCommitUpdateWithoutGitHubCommitGroupInput, GitHubCommitUncheckedUpdateWithoutGitHubCommitGroupInput>
    create: XOR<GitHubCommitCreateWithoutGitHubCommitGroupInput, GitHubCommitUncheckedCreateWithoutGitHubCommitGroupInput>
  }

  export type GitHubCommitUpdateWithWhereUniqueWithoutGitHubCommitGroupInput = {
    where: GitHubCommitWhereUniqueInput
    data: XOR<GitHubCommitUpdateWithoutGitHubCommitGroupInput, GitHubCommitUncheckedUpdateWithoutGitHubCommitGroupInput>
  }

  export type GitHubCommitUpdateManyWithWhereWithoutGitHubCommitGroupInput = {
    where: GitHubCommitScalarWhereInput
    data: XOR<GitHubCommitUpdateManyMutationInput, GitHubCommitUncheckedUpdateManyWithoutGitHubCommitGroupInput>
  }

  export type UserCreateWithoutDailyLogInput = {
    email: string
    password?: string | null
    firstName?: string | null
    lastName?: string | null
    username?: string | null
    image?: string | null
    isActive?: boolean
    isAdmin?: boolean
    isVerified?: boolean
    createdAt?: Date | string
    accessToken?: string | null
    githubToken?: string | null
    githubUsername?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    Project?: ProjectCreateNestedManyWithoutOwnerInput
    ProjectMembers?: ProjectCreateNestedManyWithoutMembersInput
    assignedTasks?: TaskCreateNestedManyWithoutAssignedToInput
    createdTasks?: TaskCreateNestedManyWithoutAssignedByInput
    updatedTasks?: TaskCreateNestedManyWithoutUpdatedByInput
    GitHubCommit?: GitHubCommitCreateNestedManyWithoutUserInput
    GitHubCommitGroup?: GitHubCommitGroupCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDailyLogInput = {
    id?: number
    email: string
    password?: string | null
    firstName?: string | null
    lastName?: string | null
    username?: string | null
    image?: string | null
    isActive?: boolean
    isAdmin?: boolean
    isVerified?: boolean
    createdAt?: Date | string
    accessToken?: string | null
    githubToken?: string | null
    githubUsername?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    Project?: ProjectUncheckedCreateNestedManyWithoutOwnerInput
    ProjectMembers?: ProjectUncheckedCreateNestedManyWithoutMembersInput
    assignedTasks?: TaskUncheckedCreateNestedManyWithoutAssignedToInput
    createdTasks?: TaskUncheckedCreateNestedManyWithoutAssignedByInput
    updatedTasks?: TaskUncheckedCreateNestedManyWithoutUpdatedByInput
    GitHubCommit?: GitHubCommitUncheckedCreateNestedManyWithoutUserInput
    GitHubCommitGroup?: GitHubCommitGroupUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDailyLogInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDailyLogInput, UserUncheckedCreateWithoutDailyLogInput>
  }

  export type UserUpsertWithoutDailyLogInput = {
    update: XOR<UserUpdateWithoutDailyLogInput, UserUncheckedUpdateWithoutDailyLogInput>
    create: XOR<UserCreateWithoutDailyLogInput, UserUncheckedCreateWithoutDailyLogInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDailyLogInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDailyLogInput, UserUncheckedUpdateWithoutDailyLogInput>
  }

  export type UserUpdateWithoutDailyLogInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    githubToken?: NullableStringFieldUpdateOperationsInput | string | null
    githubUsername?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    Project?: ProjectUpdateManyWithoutOwnerNestedInput
    ProjectMembers?: ProjectUpdateManyWithoutMembersNestedInput
    assignedTasks?: TaskUpdateManyWithoutAssignedToNestedInput
    createdTasks?: TaskUpdateManyWithoutAssignedByNestedInput
    updatedTasks?: TaskUpdateManyWithoutUpdatedByNestedInput
    GitHubCommit?: GitHubCommitUpdateManyWithoutUserNestedInput
    GitHubCommitGroup?: GitHubCommitGroupUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDailyLogInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    githubToken?: NullableStringFieldUpdateOperationsInput | string | null
    githubUsername?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    Project?: ProjectUncheckedUpdateManyWithoutOwnerNestedInput
    ProjectMembers?: ProjectUncheckedUpdateManyWithoutMembersNestedInput
    assignedTasks?: TaskUncheckedUpdateManyWithoutAssignedToNestedInput
    createdTasks?: TaskUncheckedUpdateManyWithoutAssignedByNestedInput
    updatedTasks?: TaskUncheckedUpdateManyWithoutUpdatedByNestedInput
    GitHubCommit?: GitHubCommitUncheckedUpdateManyWithoutUserNestedInput
    GitHubCommitGroup?: GitHubCommitGroupUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AccountCreateManyUserInput = {
    id?: number
    provider: string
    providerAccountId: string
    accessToken?: string | null
    refreshToken?: string | null
    expiresAt?: Date | string | null
  }

  export type ProjectCreateManyOwnerInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaskCreateManyAssignedToInput = {
    id?: number
    title: string
    description?: string | null
    startDate: Date | string
    dueDate: Date | string
    status?: $Enums.TaskStatus
    projectId: number
    assignedById: number
    updatedById?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    completedOn?: Date | string | null
  }

  export type TaskCreateManyAssignedByInput = {
    id?: number
    title: string
    description?: string | null
    startDate: Date | string
    dueDate: Date | string
    status?: $Enums.TaskStatus
    projectId: number
    assignedToId: number
    updatedById?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    completedOn?: Date | string | null
  }

  export type TaskCreateManyUpdatedByInput = {
    id?: number
    title: string
    description?: string | null
    startDate: Date | string
    dueDate: Date | string
    status?: $Enums.TaskStatus
    projectId: number
    assignedToId: number
    assignedById: number
    createdAt?: Date | string
    updatedAt?: Date | string
    completedOn?: Date | string | null
  }

  export type GitHubCommitCreateManyUserInput = {
    id?: number
    repoId: number
    commitDate: Date | string
    timing: Date | string
    message: string
    gitHubCommitGroupId?: number | null
  }

  export type GitHubCommitGroupCreateManyUserInput = {
    id?: number
    repoId: number
  }

  export type DailyLogCreateManyUserInput = {
    id?: number
    date: Date | string
    works: JsonNullValueInput | InputJsonValue
    aiSummary?: string | null
    export?: string | null
  }

  export type AccountUpdateWithoutUserInput = {
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProjectUpdateWithoutOwnerInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: UserUpdateManyWithoutProjectMembersNestedInput
    tasks?: TaskUpdateManyWithoutProjectNestedInput
    githubRepos?: GitHubRepoUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: UserUncheckedUpdateManyWithoutProjectMembersNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutProjectNestedInput
    githubRepos?: GitHubRepoUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateManyWithoutOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUpdateWithoutMembersInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutProjectNestedInput
    tasks?: TaskUpdateManyWithoutProjectNestedInput
    githubRepos?: GitHubRepoUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutMembersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    tasks?: TaskUncheckedUpdateManyWithoutProjectNestedInput
    githubRepos?: GitHubRepoUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateManyWithoutMembersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type TaskUpdateWithoutAssignedToInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedOn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    project?: ProjectUpdateOneRequiredWithoutTasksNestedInput
    assignedBy?: UserUpdateOneRequiredWithoutCreatedTasksNestedInput
    updatedBy?: UserUpdateOneWithoutUpdatedTasksNestedInput
  }

  export type TaskUncheckedUpdateWithoutAssignedToInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    projectId?: IntFieldUpdateOperationsInput | number
    assignedById?: IntFieldUpdateOperationsInput | number
    updatedById?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedOn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TaskUncheckedUpdateManyWithoutAssignedToInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    projectId?: IntFieldUpdateOperationsInput | number
    assignedById?: IntFieldUpdateOperationsInput | number
    updatedById?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedOn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TaskUpdateWithoutAssignedByInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedOn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    project?: ProjectUpdateOneRequiredWithoutTasksNestedInput
    assignedTo?: UserUpdateOneRequiredWithoutAssignedTasksNestedInput
    updatedBy?: UserUpdateOneWithoutUpdatedTasksNestedInput
  }

  export type TaskUncheckedUpdateWithoutAssignedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    projectId?: IntFieldUpdateOperationsInput | number
    assignedToId?: IntFieldUpdateOperationsInput | number
    updatedById?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedOn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TaskUncheckedUpdateManyWithoutAssignedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    projectId?: IntFieldUpdateOperationsInput | number
    assignedToId?: IntFieldUpdateOperationsInput | number
    updatedById?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedOn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TaskUpdateWithoutUpdatedByInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedOn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    project?: ProjectUpdateOneRequiredWithoutTasksNestedInput
    assignedTo?: UserUpdateOneRequiredWithoutAssignedTasksNestedInput
    assignedBy?: UserUpdateOneRequiredWithoutCreatedTasksNestedInput
  }

  export type TaskUncheckedUpdateWithoutUpdatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    projectId?: IntFieldUpdateOperationsInput | number
    assignedToId?: IntFieldUpdateOperationsInput | number
    assignedById?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedOn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TaskUncheckedUpdateManyWithoutUpdatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    projectId?: IntFieldUpdateOperationsInput | number
    assignedToId?: IntFieldUpdateOperationsInput | number
    assignedById?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedOn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type GitHubCommitUpdateWithoutUserInput = {
    commitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    timing?: DateTimeFieldUpdateOperationsInput | Date | string
    message?: StringFieldUpdateOperationsInput | string
    repo?: GitHubRepoUpdateOneRequiredWithoutGitHubCommitNestedInput
    GitHubCommitGroup?: GitHubCommitGroupUpdateOneWithoutCommitsNestedInput
  }

  export type GitHubCommitUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    repoId?: IntFieldUpdateOperationsInput | number
    commitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    timing?: DateTimeFieldUpdateOperationsInput | Date | string
    message?: StringFieldUpdateOperationsInput | string
    gitHubCommitGroupId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type GitHubCommitUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    repoId?: IntFieldUpdateOperationsInput | number
    commitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    timing?: DateTimeFieldUpdateOperationsInput | Date | string
    message?: StringFieldUpdateOperationsInput | string
    gitHubCommitGroupId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type GitHubCommitGroupUpdateWithoutUserInput = {
    repo?: GitHubRepoUpdateOneRequiredWithoutGitHubCommitGroupNestedInput
    commits?: GitHubCommitUpdateManyWithoutGitHubCommitGroupNestedInput
  }

  export type GitHubCommitGroupUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    repoId?: IntFieldUpdateOperationsInput | number
    commits?: GitHubCommitUncheckedUpdateManyWithoutGitHubCommitGroupNestedInput
  }

  export type GitHubCommitGroupUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    repoId?: IntFieldUpdateOperationsInput | number
  }

  export type DailyLogUpdateWithoutUserInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    works?: JsonNullValueInput | InputJsonValue
    aiSummary?: NullableStringFieldUpdateOperationsInput | string | null
    export?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DailyLogUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    works?: JsonNullValueInput | InputJsonValue
    aiSummary?: NullableStringFieldUpdateOperationsInput | string | null
    export?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DailyLogUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    works?: JsonNullValueInput | InputJsonValue
    aiSummary?: NullableStringFieldUpdateOperationsInput | string | null
    export?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TaskCreateManyProjectInput = {
    id?: number
    title: string
    description?: string | null
    startDate: Date | string
    dueDate: Date | string
    status?: $Enums.TaskStatus
    assignedToId: number
    assignedById: number
    updatedById?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    completedOn?: Date | string | null
  }

  export type GitHubRepoCreateManyProjectInput = {
    id?: number
    name: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    webHookId?: number | null
  }

  export type UserUpdateWithoutProjectMembersInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    githubToken?: NullableStringFieldUpdateOperationsInput | string | null
    githubUsername?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    Project?: ProjectUpdateManyWithoutOwnerNestedInput
    assignedTasks?: TaskUpdateManyWithoutAssignedToNestedInput
    createdTasks?: TaskUpdateManyWithoutAssignedByNestedInput
    updatedTasks?: TaskUpdateManyWithoutUpdatedByNestedInput
    GitHubCommit?: GitHubCommitUpdateManyWithoutUserNestedInput
    GitHubCommitGroup?: GitHubCommitGroupUpdateManyWithoutUserNestedInput
    DailyLog?: DailyLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProjectMembersInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    githubToken?: NullableStringFieldUpdateOperationsInput | string | null
    githubUsername?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    Project?: ProjectUncheckedUpdateManyWithoutOwnerNestedInput
    assignedTasks?: TaskUncheckedUpdateManyWithoutAssignedToNestedInput
    createdTasks?: TaskUncheckedUpdateManyWithoutAssignedByNestedInput
    updatedTasks?: TaskUncheckedUpdateManyWithoutUpdatedByNestedInput
    GitHubCommit?: GitHubCommitUncheckedUpdateManyWithoutUserNestedInput
    GitHubCommitGroup?: GitHubCommitGroupUncheckedUpdateManyWithoutUserNestedInput
    DailyLog?: DailyLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutProjectMembersInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    githubToken?: NullableStringFieldUpdateOperationsInput | string | null
    githubUsername?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TaskUpdateWithoutProjectInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedOn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignedTo?: UserUpdateOneRequiredWithoutAssignedTasksNestedInput
    assignedBy?: UserUpdateOneRequiredWithoutCreatedTasksNestedInput
    updatedBy?: UserUpdateOneWithoutUpdatedTasksNestedInput
  }

  export type TaskUncheckedUpdateWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    assignedToId?: IntFieldUpdateOperationsInput | number
    assignedById?: IntFieldUpdateOperationsInput | number
    updatedById?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedOn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TaskUncheckedUpdateManyWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    assignedToId?: IntFieldUpdateOperationsInput | number
    assignedById?: IntFieldUpdateOperationsInput | number
    updatedById?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedOn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type GitHubRepoUpdateWithoutProjectInput = {
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    webHookId?: NullableIntFieldUpdateOperationsInput | number | null
    GitHubCommit?: GitHubCommitUpdateManyWithoutRepoNestedInput
    GitHubCommitGroup?: GitHubCommitGroupUpdateManyWithoutRepoNestedInput
  }

  export type GitHubRepoUncheckedUpdateWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    webHookId?: NullableIntFieldUpdateOperationsInput | number | null
    GitHubCommit?: GitHubCommitUncheckedUpdateManyWithoutRepoNestedInput
    GitHubCommitGroup?: GitHubCommitGroupUncheckedUpdateManyWithoutRepoNestedInput
  }

  export type GitHubRepoUncheckedUpdateManyWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    webHookId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type GitHubCommitCreateManyRepoInput = {
    id?: number
    userId: number
    commitDate: Date | string
    timing: Date | string
    message: string
    gitHubCommitGroupId?: number | null
  }

  export type GitHubCommitGroupCreateManyRepoInput = {
    id?: number
    userId: number
  }

  export type GitHubCommitUpdateWithoutRepoInput = {
    commitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    timing?: DateTimeFieldUpdateOperationsInput | Date | string
    message?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutGitHubCommitNestedInput
    GitHubCommitGroup?: GitHubCommitGroupUpdateOneWithoutCommitsNestedInput
  }

  export type GitHubCommitUncheckedUpdateWithoutRepoInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    commitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    timing?: DateTimeFieldUpdateOperationsInput | Date | string
    message?: StringFieldUpdateOperationsInput | string
    gitHubCommitGroupId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type GitHubCommitUncheckedUpdateManyWithoutRepoInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    commitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    timing?: DateTimeFieldUpdateOperationsInput | Date | string
    message?: StringFieldUpdateOperationsInput | string
    gitHubCommitGroupId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type GitHubCommitGroupUpdateWithoutRepoInput = {
    user?: UserUpdateOneRequiredWithoutGitHubCommitGroupNestedInput
    commits?: GitHubCommitUpdateManyWithoutGitHubCommitGroupNestedInput
  }

  export type GitHubCommitGroupUncheckedUpdateWithoutRepoInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    commits?: GitHubCommitUncheckedUpdateManyWithoutGitHubCommitGroupNestedInput
  }

  export type GitHubCommitGroupUncheckedUpdateManyWithoutRepoInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type GitHubCommitCreateManyGitHubCommitGroupInput = {
    id?: number
    repoId: number
    userId: number
    commitDate: Date | string
    timing: Date | string
    message: string
  }

  export type GitHubCommitUpdateWithoutGitHubCommitGroupInput = {
    commitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    timing?: DateTimeFieldUpdateOperationsInput | Date | string
    message?: StringFieldUpdateOperationsInput | string
    repo?: GitHubRepoUpdateOneRequiredWithoutGitHubCommitNestedInput
    user?: UserUpdateOneRequiredWithoutGitHubCommitNestedInput
  }

  export type GitHubCommitUncheckedUpdateWithoutGitHubCommitGroupInput = {
    id?: IntFieldUpdateOperationsInput | number
    repoId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    commitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    timing?: DateTimeFieldUpdateOperationsInput | Date | string
    message?: StringFieldUpdateOperationsInput | string
  }

  export type GitHubCommitUncheckedUpdateManyWithoutGitHubCommitGroupInput = {
    id?: IntFieldUpdateOperationsInput | number
    repoId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    commitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    timing?: DateTimeFieldUpdateOperationsInput | Date | string
    message?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}