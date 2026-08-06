
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Tipo
 * 
 */
export type Tipo = $Result.DefaultSelection<Prisma.$TipoPayload>
/**
 * Model Equipamento
 * 
 */
export type Equipamento = $Result.DefaultSelection<Prisma.$EquipamentoPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Tipos
 * const tipos = await prisma.tipo.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Tipos
   * const tipos = await prisma.tipo.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.tipo`: Exposes CRUD operations for the **Tipo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tipos
    * const tipos = await prisma.tipo.findMany()
    * ```
    */
  get tipo(): Prisma.TipoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.equipamento`: Exposes CRUD operations for the **Equipamento** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Equipamentos
    * const equipamentos = await prisma.equipamento.findMany()
    * ```
    */
  get equipamento(): Prisma.EquipamentoDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.9.1
   * Query Engine version: e922089b7d7502aff4249d5da3420f6fa55fc6ad
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

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
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
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
    Tipo: 'Tipo',
    Equipamento: 'Equipamento'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "tipo" | "equipamento"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Tipo: {
        payload: Prisma.$TipoPayload<ExtArgs>
        fields: Prisma.TipoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TipoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TipoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoPayload>
          }
          findFirst: {
            args: Prisma.TipoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TipoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoPayload>
          }
          findMany: {
            args: Prisma.TipoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoPayload>[]
          }
          create: {
            args: Prisma.TipoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoPayload>
          }
          createMany: {
            args: Prisma.TipoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TipoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoPayload>[]
          }
          delete: {
            args: Prisma.TipoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoPayload>
          }
          update: {
            args: Prisma.TipoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoPayload>
          }
          deleteMany: {
            args: Prisma.TipoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TipoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TipoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoPayload>[]
          }
          upsert: {
            args: Prisma.TipoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoPayload>
          }
          aggregate: {
            args: Prisma.TipoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTipo>
          }
          groupBy: {
            args: Prisma.TipoGroupByArgs<ExtArgs>
            result: $Utils.Optional<TipoGroupByOutputType>[]
          }
          count: {
            args: Prisma.TipoCountArgs<ExtArgs>
            result: $Utils.Optional<TipoCountAggregateOutputType> | number
          }
        }
      }
      Equipamento: {
        payload: Prisma.$EquipamentoPayload<ExtArgs>
        fields: Prisma.EquipamentoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EquipamentoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipamentoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EquipamentoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipamentoPayload>
          }
          findFirst: {
            args: Prisma.EquipamentoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipamentoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EquipamentoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipamentoPayload>
          }
          findMany: {
            args: Prisma.EquipamentoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipamentoPayload>[]
          }
          create: {
            args: Prisma.EquipamentoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipamentoPayload>
          }
          createMany: {
            args: Prisma.EquipamentoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EquipamentoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipamentoPayload>[]
          }
          delete: {
            args: Prisma.EquipamentoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipamentoPayload>
          }
          update: {
            args: Prisma.EquipamentoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipamentoPayload>
          }
          deleteMany: {
            args: Prisma.EquipamentoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EquipamentoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EquipamentoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipamentoPayload>[]
          }
          upsert: {
            args: Prisma.EquipamentoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipamentoPayload>
          }
          aggregate: {
            args: Prisma.EquipamentoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEquipamento>
          }
          groupBy: {
            args: Prisma.EquipamentoGroupByArgs<ExtArgs>
            result: $Utils.Optional<EquipamentoGroupByOutputType>[]
          }
          count: {
            args: Prisma.EquipamentoCountArgs<ExtArgs>
            result: $Utils.Optional<EquipamentoCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    tipo?: TipoOmit
    equipamento?: EquipamentoOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type TipoCountOutputType
   */

  export type TipoCountOutputType = {
    equipamentos: number
  }

  export type TipoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    equipamentos?: boolean | TipoCountOutputTypeCountEquipamentosArgs
  }

  // Custom InputTypes
  /**
   * TipoCountOutputType without action
   */
  export type TipoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoCountOutputType
     */
    select?: TipoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TipoCountOutputType without action
   */
  export type TipoCountOutputTypeCountEquipamentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EquipamentoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Tipo
   */

  export type AggregateTipo = {
    _count: TipoCountAggregateOutputType | null
    _avg: TipoAvgAggregateOutputType | null
    _sum: TipoSumAggregateOutputType | null
    _min: TipoMinAggregateOutputType | null
    _max: TipoMaxAggregateOutputType | null
  }

  export type TipoAvgAggregateOutputType = {
    id: number | null
  }

  export type TipoSumAggregateOutputType = {
    id: number | null
  }

  export type TipoMinAggregateOutputType = {
    id: number | null
    nome: string | null
  }

  export type TipoMaxAggregateOutputType = {
    id: number | null
    nome: string | null
  }

  export type TipoCountAggregateOutputType = {
    id: number
    nome: number
    _all: number
  }


  export type TipoAvgAggregateInputType = {
    id?: true
  }

  export type TipoSumAggregateInputType = {
    id?: true
  }

  export type TipoMinAggregateInputType = {
    id?: true
    nome?: true
  }

  export type TipoMaxAggregateInputType = {
    id?: true
    nome?: true
  }

  export type TipoCountAggregateInputType = {
    id?: true
    nome?: true
    _all?: true
  }

  export type TipoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tipo to aggregate.
     */
    where?: TipoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tipos to fetch.
     */
    orderBy?: TipoOrderByWithRelationInput | TipoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TipoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tipos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tipos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tipos
    **/
    _count?: true | TipoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TipoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TipoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TipoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TipoMaxAggregateInputType
  }

  export type GetTipoAggregateType<T extends TipoAggregateArgs> = {
        [P in keyof T & keyof AggregateTipo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTipo[P]>
      : GetScalarType<T[P], AggregateTipo[P]>
  }




  export type TipoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TipoWhereInput
    orderBy?: TipoOrderByWithAggregationInput | TipoOrderByWithAggregationInput[]
    by: TipoScalarFieldEnum[] | TipoScalarFieldEnum
    having?: TipoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TipoCountAggregateInputType | true
    _avg?: TipoAvgAggregateInputType
    _sum?: TipoSumAggregateInputType
    _min?: TipoMinAggregateInputType
    _max?: TipoMaxAggregateInputType
  }

  export type TipoGroupByOutputType = {
    id: number
    nome: string
    _count: TipoCountAggregateOutputType | null
    _avg: TipoAvgAggregateOutputType | null
    _sum: TipoSumAggregateOutputType | null
    _min: TipoMinAggregateOutputType | null
    _max: TipoMaxAggregateOutputType | null
  }

  type GetTipoGroupByPayload<T extends TipoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TipoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TipoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TipoGroupByOutputType[P]>
            : GetScalarType<T[P], TipoGroupByOutputType[P]>
        }
      >
    >


  export type TipoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    equipamentos?: boolean | Tipo$equipamentosArgs<ExtArgs>
    _count?: boolean | TipoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tipo"]>

  export type TipoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
  }, ExtArgs["result"]["tipo"]>

  export type TipoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
  }, ExtArgs["result"]["tipo"]>

  export type TipoSelectScalar = {
    id?: boolean
    nome?: boolean
  }

  export type TipoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome", ExtArgs["result"]["tipo"]>
  export type TipoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    equipamentos?: boolean | Tipo$equipamentosArgs<ExtArgs>
    _count?: boolean | TipoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TipoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TipoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TipoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tipo"
    objects: {
      equipamentos: Prisma.$EquipamentoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
    }, ExtArgs["result"]["tipo"]>
    composites: {}
  }

  type TipoGetPayload<S extends boolean | null | undefined | TipoDefaultArgs> = $Result.GetResult<Prisma.$TipoPayload, S>

  type TipoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TipoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TipoCountAggregateInputType | true
    }

  export interface TipoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tipo'], meta: { name: 'Tipo' } }
    /**
     * Find zero or one Tipo that matches the filter.
     * @param {TipoFindUniqueArgs} args - Arguments to find a Tipo
     * @example
     * // Get one Tipo
     * const tipo = await prisma.tipo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TipoFindUniqueArgs>(args: SelectSubset<T, TipoFindUniqueArgs<ExtArgs>>): Prisma__TipoClient<$Result.GetResult<Prisma.$TipoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tipo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TipoFindUniqueOrThrowArgs} args - Arguments to find a Tipo
     * @example
     * // Get one Tipo
     * const tipo = await prisma.tipo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TipoFindUniqueOrThrowArgs>(args: SelectSubset<T, TipoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TipoClient<$Result.GetResult<Prisma.$TipoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tipo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoFindFirstArgs} args - Arguments to find a Tipo
     * @example
     * // Get one Tipo
     * const tipo = await prisma.tipo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TipoFindFirstArgs>(args?: SelectSubset<T, TipoFindFirstArgs<ExtArgs>>): Prisma__TipoClient<$Result.GetResult<Prisma.$TipoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tipo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoFindFirstOrThrowArgs} args - Arguments to find a Tipo
     * @example
     * // Get one Tipo
     * const tipo = await prisma.tipo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TipoFindFirstOrThrowArgs>(args?: SelectSubset<T, TipoFindFirstOrThrowArgs<ExtArgs>>): Prisma__TipoClient<$Result.GetResult<Prisma.$TipoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tipos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tipos
     * const tipos = await prisma.tipo.findMany()
     * 
     * // Get first 10 Tipos
     * const tipos = await prisma.tipo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tipoWithIdOnly = await prisma.tipo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TipoFindManyArgs>(args?: SelectSubset<T, TipoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TipoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tipo.
     * @param {TipoCreateArgs} args - Arguments to create a Tipo.
     * @example
     * // Create one Tipo
     * const Tipo = await prisma.tipo.create({
     *   data: {
     *     // ... data to create a Tipo
     *   }
     * })
     * 
     */
    create<T extends TipoCreateArgs>(args: SelectSubset<T, TipoCreateArgs<ExtArgs>>): Prisma__TipoClient<$Result.GetResult<Prisma.$TipoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tipos.
     * @param {TipoCreateManyArgs} args - Arguments to create many Tipos.
     * @example
     * // Create many Tipos
     * const tipo = await prisma.tipo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TipoCreateManyArgs>(args?: SelectSubset<T, TipoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tipos and returns the data saved in the database.
     * @param {TipoCreateManyAndReturnArgs} args - Arguments to create many Tipos.
     * @example
     * // Create many Tipos
     * const tipo = await prisma.tipo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tipos and only return the `id`
     * const tipoWithIdOnly = await prisma.tipo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TipoCreateManyAndReturnArgs>(args?: SelectSubset<T, TipoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TipoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tipo.
     * @param {TipoDeleteArgs} args - Arguments to delete one Tipo.
     * @example
     * // Delete one Tipo
     * const Tipo = await prisma.tipo.delete({
     *   where: {
     *     // ... filter to delete one Tipo
     *   }
     * })
     * 
     */
    delete<T extends TipoDeleteArgs>(args: SelectSubset<T, TipoDeleteArgs<ExtArgs>>): Prisma__TipoClient<$Result.GetResult<Prisma.$TipoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tipo.
     * @param {TipoUpdateArgs} args - Arguments to update one Tipo.
     * @example
     * // Update one Tipo
     * const tipo = await prisma.tipo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TipoUpdateArgs>(args: SelectSubset<T, TipoUpdateArgs<ExtArgs>>): Prisma__TipoClient<$Result.GetResult<Prisma.$TipoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tipos.
     * @param {TipoDeleteManyArgs} args - Arguments to filter Tipos to delete.
     * @example
     * // Delete a few Tipos
     * const { count } = await prisma.tipo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TipoDeleteManyArgs>(args?: SelectSubset<T, TipoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tipos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tipos
     * const tipo = await prisma.tipo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TipoUpdateManyArgs>(args: SelectSubset<T, TipoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tipos and returns the data updated in the database.
     * @param {TipoUpdateManyAndReturnArgs} args - Arguments to update many Tipos.
     * @example
     * // Update many Tipos
     * const tipo = await prisma.tipo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tipos and only return the `id`
     * const tipoWithIdOnly = await prisma.tipo.updateManyAndReturn({
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
    updateManyAndReturn<T extends TipoUpdateManyAndReturnArgs>(args: SelectSubset<T, TipoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TipoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tipo.
     * @param {TipoUpsertArgs} args - Arguments to update or create a Tipo.
     * @example
     * // Update or create a Tipo
     * const tipo = await prisma.tipo.upsert({
     *   create: {
     *     // ... data to create a Tipo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tipo we want to update
     *   }
     * })
     */
    upsert<T extends TipoUpsertArgs>(args: SelectSubset<T, TipoUpsertArgs<ExtArgs>>): Prisma__TipoClient<$Result.GetResult<Prisma.$TipoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tipos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoCountArgs} args - Arguments to filter Tipos to count.
     * @example
     * // Count the number of Tipos
     * const count = await prisma.tipo.count({
     *   where: {
     *     // ... the filter for the Tipos we want to count
     *   }
     * })
    **/
    count<T extends TipoCountArgs>(
      args?: Subset<T, TipoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TipoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tipo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TipoAggregateArgs>(args: Subset<T, TipoAggregateArgs>): Prisma.PrismaPromise<GetTipoAggregateType<T>>

    /**
     * Group by Tipo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoGroupByArgs} args - Group by arguments.
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
      T extends TipoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TipoGroupByArgs['orderBy'] }
        : { orderBy?: TipoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TipoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTipoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tipo model
   */
  readonly fields: TipoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tipo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TipoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    equipamentos<T extends Tipo$equipamentosArgs<ExtArgs> = {}>(args?: Subset<T, Tipo$equipamentosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipamentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Tipo model
   */
  interface TipoFieldRefs {
    readonly id: FieldRef<"Tipo", 'Int'>
    readonly nome: FieldRef<"Tipo", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Tipo findUnique
   */
  export type TipoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tipo
     */
    select?: TipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tipo
     */
    omit?: TipoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoInclude<ExtArgs> | null
    /**
     * Filter, which Tipo to fetch.
     */
    where: TipoWhereUniqueInput
  }

  /**
   * Tipo findUniqueOrThrow
   */
  export type TipoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tipo
     */
    select?: TipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tipo
     */
    omit?: TipoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoInclude<ExtArgs> | null
    /**
     * Filter, which Tipo to fetch.
     */
    where: TipoWhereUniqueInput
  }

  /**
   * Tipo findFirst
   */
  export type TipoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tipo
     */
    select?: TipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tipo
     */
    omit?: TipoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoInclude<ExtArgs> | null
    /**
     * Filter, which Tipo to fetch.
     */
    where?: TipoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tipos to fetch.
     */
    orderBy?: TipoOrderByWithRelationInput | TipoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tipos.
     */
    cursor?: TipoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tipos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tipos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tipos.
     */
    distinct?: TipoScalarFieldEnum | TipoScalarFieldEnum[]
  }

  /**
   * Tipo findFirstOrThrow
   */
  export type TipoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tipo
     */
    select?: TipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tipo
     */
    omit?: TipoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoInclude<ExtArgs> | null
    /**
     * Filter, which Tipo to fetch.
     */
    where?: TipoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tipos to fetch.
     */
    orderBy?: TipoOrderByWithRelationInput | TipoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tipos.
     */
    cursor?: TipoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tipos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tipos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tipos.
     */
    distinct?: TipoScalarFieldEnum | TipoScalarFieldEnum[]
  }

  /**
   * Tipo findMany
   */
  export type TipoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tipo
     */
    select?: TipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tipo
     */
    omit?: TipoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoInclude<ExtArgs> | null
    /**
     * Filter, which Tipos to fetch.
     */
    where?: TipoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tipos to fetch.
     */
    orderBy?: TipoOrderByWithRelationInput | TipoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tipos.
     */
    cursor?: TipoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tipos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tipos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tipos.
     */
    distinct?: TipoScalarFieldEnum | TipoScalarFieldEnum[]
  }

  /**
   * Tipo create
   */
  export type TipoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tipo
     */
    select?: TipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tipo
     */
    omit?: TipoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoInclude<ExtArgs> | null
    /**
     * The data needed to create a Tipo.
     */
    data: XOR<TipoCreateInput, TipoUncheckedCreateInput>
  }

  /**
   * Tipo createMany
   */
  export type TipoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tipos.
     */
    data: TipoCreateManyInput | TipoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tipo createManyAndReturn
   */
  export type TipoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tipo
     */
    select?: TipoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tipo
     */
    omit?: TipoOmit<ExtArgs> | null
    /**
     * The data used to create many Tipos.
     */
    data: TipoCreateManyInput | TipoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tipo update
   */
  export type TipoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tipo
     */
    select?: TipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tipo
     */
    omit?: TipoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoInclude<ExtArgs> | null
    /**
     * The data needed to update a Tipo.
     */
    data: XOR<TipoUpdateInput, TipoUncheckedUpdateInput>
    /**
     * Choose, which Tipo to update.
     */
    where: TipoWhereUniqueInput
  }

  /**
   * Tipo updateMany
   */
  export type TipoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tipos.
     */
    data: XOR<TipoUpdateManyMutationInput, TipoUncheckedUpdateManyInput>
    /**
     * Filter which Tipos to update
     */
    where?: TipoWhereInput
    /**
     * Limit how many Tipos to update.
     */
    limit?: number
  }

  /**
   * Tipo updateManyAndReturn
   */
  export type TipoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tipo
     */
    select?: TipoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tipo
     */
    omit?: TipoOmit<ExtArgs> | null
    /**
     * The data used to update Tipos.
     */
    data: XOR<TipoUpdateManyMutationInput, TipoUncheckedUpdateManyInput>
    /**
     * Filter which Tipos to update
     */
    where?: TipoWhereInput
    /**
     * Limit how many Tipos to update.
     */
    limit?: number
  }

  /**
   * Tipo upsert
   */
  export type TipoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tipo
     */
    select?: TipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tipo
     */
    omit?: TipoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoInclude<ExtArgs> | null
    /**
     * The filter to search for the Tipo to update in case it exists.
     */
    where: TipoWhereUniqueInput
    /**
     * In case the Tipo found by the `where` argument doesn't exist, create a new Tipo with this data.
     */
    create: XOR<TipoCreateInput, TipoUncheckedCreateInput>
    /**
     * In case the Tipo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TipoUpdateInput, TipoUncheckedUpdateInput>
  }

  /**
   * Tipo delete
   */
  export type TipoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tipo
     */
    select?: TipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tipo
     */
    omit?: TipoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoInclude<ExtArgs> | null
    /**
     * Filter which Tipo to delete.
     */
    where: TipoWhereUniqueInput
  }

  /**
   * Tipo deleteMany
   */
  export type TipoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tipos to delete
     */
    where?: TipoWhereInput
    /**
     * Limit how many Tipos to delete.
     */
    limit?: number
  }

  /**
   * Tipo.equipamentos
   */
  export type Tipo$equipamentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipamento
     */
    select?: EquipamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipamento
     */
    omit?: EquipamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipamentoInclude<ExtArgs> | null
    where?: EquipamentoWhereInput
    orderBy?: EquipamentoOrderByWithRelationInput | EquipamentoOrderByWithRelationInput[]
    cursor?: EquipamentoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EquipamentoScalarFieldEnum | EquipamentoScalarFieldEnum[]
  }

  /**
   * Tipo without action
   */
  export type TipoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tipo
     */
    select?: TipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tipo
     */
    omit?: TipoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoInclude<ExtArgs> | null
  }


  /**
   * Model Equipamento
   */

  export type AggregateEquipamento = {
    _count: EquipamentoCountAggregateOutputType | null
    _avg: EquipamentoAvgAggregateOutputType | null
    _sum: EquipamentoSumAggregateOutputType | null
    _min: EquipamentoMinAggregateOutputType | null
    _max: EquipamentoMaxAggregateOutputType | null
  }

  export type EquipamentoAvgAggregateOutputType = {
    id: number | null
    tipoId: number | null
  }

  export type EquipamentoSumAggregateOutputType = {
    id: number | null
    tipoId: number | null
  }

  export type EquipamentoMinAggregateOutputType = {
    id: number | null
    nome: string | null
    tipoId: number | null
  }

  export type EquipamentoMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    tipoId: number | null
  }

  export type EquipamentoCountAggregateOutputType = {
    id: number
    nome: number
    tipoId: number
    _all: number
  }


  export type EquipamentoAvgAggregateInputType = {
    id?: true
    tipoId?: true
  }

  export type EquipamentoSumAggregateInputType = {
    id?: true
    tipoId?: true
  }

  export type EquipamentoMinAggregateInputType = {
    id?: true
    nome?: true
    tipoId?: true
  }

  export type EquipamentoMaxAggregateInputType = {
    id?: true
    nome?: true
    tipoId?: true
  }

  export type EquipamentoCountAggregateInputType = {
    id?: true
    nome?: true
    tipoId?: true
    _all?: true
  }

  export type EquipamentoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Equipamento to aggregate.
     */
    where?: EquipamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Equipamentos to fetch.
     */
    orderBy?: EquipamentoOrderByWithRelationInput | EquipamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EquipamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Equipamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Equipamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Equipamentos
    **/
    _count?: true | EquipamentoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EquipamentoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EquipamentoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EquipamentoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EquipamentoMaxAggregateInputType
  }

  export type GetEquipamentoAggregateType<T extends EquipamentoAggregateArgs> = {
        [P in keyof T & keyof AggregateEquipamento]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEquipamento[P]>
      : GetScalarType<T[P], AggregateEquipamento[P]>
  }




  export type EquipamentoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EquipamentoWhereInput
    orderBy?: EquipamentoOrderByWithAggregationInput | EquipamentoOrderByWithAggregationInput[]
    by: EquipamentoScalarFieldEnum[] | EquipamentoScalarFieldEnum
    having?: EquipamentoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EquipamentoCountAggregateInputType | true
    _avg?: EquipamentoAvgAggregateInputType
    _sum?: EquipamentoSumAggregateInputType
    _min?: EquipamentoMinAggregateInputType
    _max?: EquipamentoMaxAggregateInputType
  }

  export type EquipamentoGroupByOutputType = {
    id: number
    nome: string
    tipoId: number
    _count: EquipamentoCountAggregateOutputType | null
    _avg: EquipamentoAvgAggregateOutputType | null
    _sum: EquipamentoSumAggregateOutputType | null
    _min: EquipamentoMinAggregateOutputType | null
    _max: EquipamentoMaxAggregateOutputType | null
  }

  type GetEquipamentoGroupByPayload<T extends EquipamentoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EquipamentoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EquipamentoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EquipamentoGroupByOutputType[P]>
            : GetScalarType<T[P], EquipamentoGroupByOutputType[P]>
        }
      >
    >


  export type EquipamentoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    tipoId?: boolean
    tipo?: boolean | TipoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["equipamento"]>

  export type EquipamentoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    tipoId?: boolean
    tipo?: boolean | TipoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["equipamento"]>

  export type EquipamentoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    tipoId?: boolean
    tipo?: boolean | TipoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["equipamento"]>

  export type EquipamentoSelectScalar = {
    id?: boolean
    nome?: boolean
    tipoId?: boolean
  }

  export type EquipamentoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "tipoId", ExtArgs["result"]["equipamento"]>
  export type EquipamentoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tipo?: boolean | TipoDefaultArgs<ExtArgs>
  }
  export type EquipamentoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tipo?: boolean | TipoDefaultArgs<ExtArgs>
  }
  export type EquipamentoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tipo?: boolean | TipoDefaultArgs<ExtArgs>
  }

  export type $EquipamentoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Equipamento"
    objects: {
      tipo: Prisma.$TipoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      tipoId: number
    }, ExtArgs["result"]["equipamento"]>
    composites: {}
  }

  type EquipamentoGetPayload<S extends boolean | null | undefined | EquipamentoDefaultArgs> = $Result.GetResult<Prisma.$EquipamentoPayload, S>

  type EquipamentoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EquipamentoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EquipamentoCountAggregateInputType | true
    }

  export interface EquipamentoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Equipamento'], meta: { name: 'Equipamento' } }
    /**
     * Find zero or one Equipamento that matches the filter.
     * @param {EquipamentoFindUniqueArgs} args - Arguments to find a Equipamento
     * @example
     * // Get one Equipamento
     * const equipamento = await prisma.equipamento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EquipamentoFindUniqueArgs>(args: SelectSubset<T, EquipamentoFindUniqueArgs<ExtArgs>>): Prisma__EquipamentoClient<$Result.GetResult<Prisma.$EquipamentoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Equipamento that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EquipamentoFindUniqueOrThrowArgs} args - Arguments to find a Equipamento
     * @example
     * // Get one Equipamento
     * const equipamento = await prisma.equipamento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EquipamentoFindUniqueOrThrowArgs>(args: SelectSubset<T, EquipamentoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EquipamentoClient<$Result.GetResult<Prisma.$EquipamentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Equipamento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipamentoFindFirstArgs} args - Arguments to find a Equipamento
     * @example
     * // Get one Equipamento
     * const equipamento = await prisma.equipamento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EquipamentoFindFirstArgs>(args?: SelectSubset<T, EquipamentoFindFirstArgs<ExtArgs>>): Prisma__EquipamentoClient<$Result.GetResult<Prisma.$EquipamentoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Equipamento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipamentoFindFirstOrThrowArgs} args - Arguments to find a Equipamento
     * @example
     * // Get one Equipamento
     * const equipamento = await prisma.equipamento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EquipamentoFindFirstOrThrowArgs>(args?: SelectSubset<T, EquipamentoFindFirstOrThrowArgs<ExtArgs>>): Prisma__EquipamentoClient<$Result.GetResult<Prisma.$EquipamentoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Equipamentos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipamentoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Equipamentos
     * const equipamentos = await prisma.equipamento.findMany()
     * 
     * // Get first 10 Equipamentos
     * const equipamentos = await prisma.equipamento.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const equipamentoWithIdOnly = await prisma.equipamento.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EquipamentoFindManyArgs>(args?: SelectSubset<T, EquipamentoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipamentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Equipamento.
     * @param {EquipamentoCreateArgs} args - Arguments to create a Equipamento.
     * @example
     * // Create one Equipamento
     * const Equipamento = await prisma.equipamento.create({
     *   data: {
     *     // ... data to create a Equipamento
     *   }
     * })
     * 
     */
    create<T extends EquipamentoCreateArgs>(args: SelectSubset<T, EquipamentoCreateArgs<ExtArgs>>): Prisma__EquipamentoClient<$Result.GetResult<Prisma.$EquipamentoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Equipamentos.
     * @param {EquipamentoCreateManyArgs} args - Arguments to create many Equipamentos.
     * @example
     * // Create many Equipamentos
     * const equipamento = await prisma.equipamento.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EquipamentoCreateManyArgs>(args?: SelectSubset<T, EquipamentoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Equipamentos and returns the data saved in the database.
     * @param {EquipamentoCreateManyAndReturnArgs} args - Arguments to create many Equipamentos.
     * @example
     * // Create many Equipamentos
     * const equipamento = await prisma.equipamento.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Equipamentos and only return the `id`
     * const equipamentoWithIdOnly = await prisma.equipamento.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EquipamentoCreateManyAndReturnArgs>(args?: SelectSubset<T, EquipamentoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipamentoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Equipamento.
     * @param {EquipamentoDeleteArgs} args - Arguments to delete one Equipamento.
     * @example
     * // Delete one Equipamento
     * const Equipamento = await prisma.equipamento.delete({
     *   where: {
     *     // ... filter to delete one Equipamento
     *   }
     * })
     * 
     */
    delete<T extends EquipamentoDeleteArgs>(args: SelectSubset<T, EquipamentoDeleteArgs<ExtArgs>>): Prisma__EquipamentoClient<$Result.GetResult<Prisma.$EquipamentoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Equipamento.
     * @param {EquipamentoUpdateArgs} args - Arguments to update one Equipamento.
     * @example
     * // Update one Equipamento
     * const equipamento = await prisma.equipamento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EquipamentoUpdateArgs>(args: SelectSubset<T, EquipamentoUpdateArgs<ExtArgs>>): Prisma__EquipamentoClient<$Result.GetResult<Prisma.$EquipamentoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Equipamentos.
     * @param {EquipamentoDeleteManyArgs} args - Arguments to filter Equipamentos to delete.
     * @example
     * // Delete a few Equipamentos
     * const { count } = await prisma.equipamento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EquipamentoDeleteManyArgs>(args?: SelectSubset<T, EquipamentoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Equipamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipamentoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Equipamentos
     * const equipamento = await prisma.equipamento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EquipamentoUpdateManyArgs>(args: SelectSubset<T, EquipamentoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Equipamentos and returns the data updated in the database.
     * @param {EquipamentoUpdateManyAndReturnArgs} args - Arguments to update many Equipamentos.
     * @example
     * // Update many Equipamentos
     * const equipamento = await prisma.equipamento.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Equipamentos and only return the `id`
     * const equipamentoWithIdOnly = await prisma.equipamento.updateManyAndReturn({
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
    updateManyAndReturn<T extends EquipamentoUpdateManyAndReturnArgs>(args: SelectSubset<T, EquipamentoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipamentoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Equipamento.
     * @param {EquipamentoUpsertArgs} args - Arguments to update or create a Equipamento.
     * @example
     * // Update or create a Equipamento
     * const equipamento = await prisma.equipamento.upsert({
     *   create: {
     *     // ... data to create a Equipamento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Equipamento we want to update
     *   }
     * })
     */
    upsert<T extends EquipamentoUpsertArgs>(args: SelectSubset<T, EquipamentoUpsertArgs<ExtArgs>>): Prisma__EquipamentoClient<$Result.GetResult<Prisma.$EquipamentoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Equipamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipamentoCountArgs} args - Arguments to filter Equipamentos to count.
     * @example
     * // Count the number of Equipamentos
     * const count = await prisma.equipamento.count({
     *   where: {
     *     // ... the filter for the Equipamentos we want to count
     *   }
     * })
    **/
    count<T extends EquipamentoCountArgs>(
      args?: Subset<T, EquipamentoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EquipamentoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Equipamento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipamentoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EquipamentoAggregateArgs>(args: Subset<T, EquipamentoAggregateArgs>): Prisma.PrismaPromise<GetEquipamentoAggregateType<T>>

    /**
     * Group by Equipamento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipamentoGroupByArgs} args - Group by arguments.
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
      T extends EquipamentoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EquipamentoGroupByArgs['orderBy'] }
        : { orderBy?: EquipamentoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EquipamentoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEquipamentoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Equipamento model
   */
  readonly fields: EquipamentoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Equipamento.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EquipamentoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tipo<T extends TipoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TipoDefaultArgs<ExtArgs>>): Prisma__TipoClient<$Result.GetResult<Prisma.$TipoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Equipamento model
   */
  interface EquipamentoFieldRefs {
    readonly id: FieldRef<"Equipamento", 'Int'>
    readonly nome: FieldRef<"Equipamento", 'String'>
    readonly tipoId: FieldRef<"Equipamento", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Equipamento findUnique
   */
  export type EquipamentoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipamento
     */
    select?: EquipamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipamento
     */
    omit?: EquipamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipamentoInclude<ExtArgs> | null
    /**
     * Filter, which Equipamento to fetch.
     */
    where: EquipamentoWhereUniqueInput
  }

  /**
   * Equipamento findUniqueOrThrow
   */
  export type EquipamentoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipamento
     */
    select?: EquipamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipamento
     */
    omit?: EquipamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipamentoInclude<ExtArgs> | null
    /**
     * Filter, which Equipamento to fetch.
     */
    where: EquipamentoWhereUniqueInput
  }

  /**
   * Equipamento findFirst
   */
  export type EquipamentoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipamento
     */
    select?: EquipamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipamento
     */
    omit?: EquipamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipamentoInclude<ExtArgs> | null
    /**
     * Filter, which Equipamento to fetch.
     */
    where?: EquipamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Equipamentos to fetch.
     */
    orderBy?: EquipamentoOrderByWithRelationInput | EquipamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Equipamentos.
     */
    cursor?: EquipamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Equipamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Equipamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Equipamentos.
     */
    distinct?: EquipamentoScalarFieldEnum | EquipamentoScalarFieldEnum[]
  }

  /**
   * Equipamento findFirstOrThrow
   */
  export type EquipamentoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipamento
     */
    select?: EquipamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipamento
     */
    omit?: EquipamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipamentoInclude<ExtArgs> | null
    /**
     * Filter, which Equipamento to fetch.
     */
    where?: EquipamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Equipamentos to fetch.
     */
    orderBy?: EquipamentoOrderByWithRelationInput | EquipamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Equipamentos.
     */
    cursor?: EquipamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Equipamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Equipamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Equipamentos.
     */
    distinct?: EquipamentoScalarFieldEnum | EquipamentoScalarFieldEnum[]
  }

  /**
   * Equipamento findMany
   */
  export type EquipamentoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipamento
     */
    select?: EquipamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipamento
     */
    omit?: EquipamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipamentoInclude<ExtArgs> | null
    /**
     * Filter, which Equipamentos to fetch.
     */
    where?: EquipamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Equipamentos to fetch.
     */
    orderBy?: EquipamentoOrderByWithRelationInput | EquipamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Equipamentos.
     */
    cursor?: EquipamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Equipamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Equipamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Equipamentos.
     */
    distinct?: EquipamentoScalarFieldEnum | EquipamentoScalarFieldEnum[]
  }

  /**
   * Equipamento create
   */
  export type EquipamentoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipamento
     */
    select?: EquipamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipamento
     */
    omit?: EquipamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipamentoInclude<ExtArgs> | null
    /**
     * The data needed to create a Equipamento.
     */
    data: XOR<EquipamentoCreateInput, EquipamentoUncheckedCreateInput>
  }

  /**
   * Equipamento createMany
   */
  export type EquipamentoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Equipamentos.
     */
    data: EquipamentoCreateManyInput | EquipamentoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Equipamento createManyAndReturn
   */
  export type EquipamentoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipamento
     */
    select?: EquipamentoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Equipamento
     */
    omit?: EquipamentoOmit<ExtArgs> | null
    /**
     * The data used to create many Equipamentos.
     */
    data: EquipamentoCreateManyInput | EquipamentoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipamentoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Equipamento update
   */
  export type EquipamentoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipamento
     */
    select?: EquipamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipamento
     */
    omit?: EquipamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipamentoInclude<ExtArgs> | null
    /**
     * The data needed to update a Equipamento.
     */
    data: XOR<EquipamentoUpdateInput, EquipamentoUncheckedUpdateInput>
    /**
     * Choose, which Equipamento to update.
     */
    where: EquipamentoWhereUniqueInput
  }

  /**
   * Equipamento updateMany
   */
  export type EquipamentoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Equipamentos.
     */
    data: XOR<EquipamentoUpdateManyMutationInput, EquipamentoUncheckedUpdateManyInput>
    /**
     * Filter which Equipamentos to update
     */
    where?: EquipamentoWhereInput
    /**
     * Limit how many Equipamentos to update.
     */
    limit?: number
  }

  /**
   * Equipamento updateManyAndReturn
   */
  export type EquipamentoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipamento
     */
    select?: EquipamentoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Equipamento
     */
    omit?: EquipamentoOmit<ExtArgs> | null
    /**
     * The data used to update Equipamentos.
     */
    data: XOR<EquipamentoUpdateManyMutationInput, EquipamentoUncheckedUpdateManyInput>
    /**
     * Filter which Equipamentos to update
     */
    where?: EquipamentoWhereInput
    /**
     * Limit how many Equipamentos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipamentoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Equipamento upsert
   */
  export type EquipamentoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipamento
     */
    select?: EquipamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipamento
     */
    omit?: EquipamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipamentoInclude<ExtArgs> | null
    /**
     * The filter to search for the Equipamento to update in case it exists.
     */
    where: EquipamentoWhereUniqueInput
    /**
     * In case the Equipamento found by the `where` argument doesn't exist, create a new Equipamento with this data.
     */
    create: XOR<EquipamentoCreateInput, EquipamentoUncheckedCreateInput>
    /**
     * In case the Equipamento was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EquipamentoUpdateInput, EquipamentoUncheckedUpdateInput>
  }

  /**
   * Equipamento delete
   */
  export type EquipamentoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipamento
     */
    select?: EquipamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipamento
     */
    omit?: EquipamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipamentoInclude<ExtArgs> | null
    /**
     * Filter which Equipamento to delete.
     */
    where: EquipamentoWhereUniqueInput
  }

  /**
   * Equipamento deleteMany
   */
  export type EquipamentoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Equipamentos to delete
     */
    where?: EquipamentoWhereInput
    /**
     * Limit how many Equipamentos to delete.
     */
    limit?: number
  }

  /**
   * Equipamento without action
   */
  export type EquipamentoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipamento
     */
    select?: EquipamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipamento
     */
    omit?: EquipamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipamentoInclude<ExtArgs> | null
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


  export const TipoScalarFieldEnum: {
    id: 'id',
    nome: 'nome'
  };

  export type TipoScalarFieldEnum = (typeof TipoScalarFieldEnum)[keyof typeof TipoScalarFieldEnum]


  export const EquipamentoScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    tipoId: 'tipoId'
  };

  export type EquipamentoScalarFieldEnum = (typeof EquipamentoScalarFieldEnum)[keyof typeof EquipamentoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


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


  export type TipoWhereInput = {
    AND?: TipoWhereInput | TipoWhereInput[]
    OR?: TipoWhereInput[]
    NOT?: TipoWhereInput | TipoWhereInput[]
    id?: IntFilter<"Tipo"> | number
    nome?: StringFilter<"Tipo"> | string
    equipamentos?: EquipamentoListRelationFilter
  }

  export type TipoOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    equipamentos?: EquipamentoOrderByRelationAggregateInput
  }

  export type TipoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TipoWhereInput | TipoWhereInput[]
    OR?: TipoWhereInput[]
    NOT?: TipoWhereInput | TipoWhereInput[]
    nome?: StringFilter<"Tipo"> | string
    equipamentos?: EquipamentoListRelationFilter
  }, "id">

  export type TipoOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    _count?: TipoCountOrderByAggregateInput
    _avg?: TipoAvgOrderByAggregateInput
    _max?: TipoMaxOrderByAggregateInput
    _min?: TipoMinOrderByAggregateInput
    _sum?: TipoSumOrderByAggregateInput
  }

  export type TipoScalarWhereWithAggregatesInput = {
    AND?: TipoScalarWhereWithAggregatesInput | TipoScalarWhereWithAggregatesInput[]
    OR?: TipoScalarWhereWithAggregatesInput[]
    NOT?: TipoScalarWhereWithAggregatesInput | TipoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Tipo"> | number
    nome?: StringWithAggregatesFilter<"Tipo"> | string
  }

  export type EquipamentoWhereInput = {
    AND?: EquipamentoWhereInput | EquipamentoWhereInput[]
    OR?: EquipamentoWhereInput[]
    NOT?: EquipamentoWhereInput | EquipamentoWhereInput[]
    id?: IntFilter<"Equipamento"> | number
    nome?: StringFilter<"Equipamento"> | string
    tipoId?: IntFilter<"Equipamento"> | number
    tipo?: XOR<TipoScalarRelationFilter, TipoWhereInput>
  }

  export type EquipamentoOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    tipoId?: SortOrder
    tipo?: TipoOrderByWithRelationInput
  }

  export type EquipamentoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EquipamentoWhereInput | EquipamentoWhereInput[]
    OR?: EquipamentoWhereInput[]
    NOT?: EquipamentoWhereInput | EquipamentoWhereInput[]
    nome?: StringFilter<"Equipamento"> | string
    tipoId?: IntFilter<"Equipamento"> | number
    tipo?: XOR<TipoScalarRelationFilter, TipoWhereInput>
  }, "id">

  export type EquipamentoOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    tipoId?: SortOrder
    _count?: EquipamentoCountOrderByAggregateInput
    _avg?: EquipamentoAvgOrderByAggregateInput
    _max?: EquipamentoMaxOrderByAggregateInput
    _min?: EquipamentoMinOrderByAggregateInput
    _sum?: EquipamentoSumOrderByAggregateInput
  }

  export type EquipamentoScalarWhereWithAggregatesInput = {
    AND?: EquipamentoScalarWhereWithAggregatesInput | EquipamentoScalarWhereWithAggregatesInput[]
    OR?: EquipamentoScalarWhereWithAggregatesInput[]
    NOT?: EquipamentoScalarWhereWithAggregatesInput | EquipamentoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Equipamento"> | number
    nome?: StringWithAggregatesFilter<"Equipamento"> | string
    tipoId?: IntWithAggregatesFilter<"Equipamento"> | number
  }

  export type TipoCreateInput = {
    nome: string
    equipamentos?: EquipamentoCreateNestedManyWithoutTipoInput
  }

  export type TipoUncheckedCreateInput = {
    id?: number
    nome: string
    equipamentos?: EquipamentoUncheckedCreateNestedManyWithoutTipoInput
  }

  export type TipoUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    equipamentos?: EquipamentoUpdateManyWithoutTipoNestedInput
  }

  export type TipoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    equipamentos?: EquipamentoUncheckedUpdateManyWithoutTipoNestedInput
  }

  export type TipoCreateManyInput = {
    id?: number
    nome: string
  }

  export type TipoUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type TipoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type EquipamentoCreateInput = {
    nome: string
    tipo: TipoCreateNestedOneWithoutEquipamentosInput
  }

  export type EquipamentoUncheckedCreateInput = {
    id?: number
    nome: string
    tipoId: number
  }

  export type EquipamentoUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: TipoUpdateOneRequiredWithoutEquipamentosNestedInput
  }

  export type EquipamentoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    tipoId?: IntFieldUpdateOperationsInput | number
  }

  export type EquipamentoCreateManyInput = {
    id?: number
    nome: string
    tipoId: number
  }

  export type EquipamentoUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type EquipamentoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    tipoId?: IntFieldUpdateOperationsInput | number
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

  export type EquipamentoListRelationFilter = {
    every?: EquipamentoWhereInput
    some?: EquipamentoWhereInput
    none?: EquipamentoWhereInput
  }

  export type EquipamentoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TipoCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type TipoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TipoMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type TipoMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type TipoSumOrderByAggregateInput = {
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

  export type TipoScalarRelationFilter = {
    is?: TipoWhereInput
    isNot?: TipoWhereInput
  }

  export type EquipamentoCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    tipoId?: SortOrder
  }

  export type EquipamentoAvgOrderByAggregateInput = {
    id?: SortOrder
    tipoId?: SortOrder
  }

  export type EquipamentoMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    tipoId?: SortOrder
  }

  export type EquipamentoMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    tipoId?: SortOrder
  }

  export type EquipamentoSumOrderByAggregateInput = {
    id?: SortOrder
    tipoId?: SortOrder
  }

  export type EquipamentoCreateNestedManyWithoutTipoInput = {
    create?: XOR<EquipamentoCreateWithoutTipoInput, EquipamentoUncheckedCreateWithoutTipoInput> | EquipamentoCreateWithoutTipoInput[] | EquipamentoUncheckedCreateWithoutTipoInput[]
    connectOrCreate?: EquipamentoCreateOrConnectWithoutTipoInput | EquipamentoCreateOrConnectWithoutTipoInput[]
    createMany?: EquipamentoCreateManyTipoInputEnvelope
    connect?: EquipamentoWhereUniqueInput | EquipamentoWhereUniqueInput[]
  }

  export type EquipamentoUncheckedCreateNestedManyWithoutTipoInput = {
    create?: XOR<EquipamentoCreateWithoutTipoInput, EquipamentoUncheckedCreateWithoutTipoInput> | EquipamentoCreateWithoutTipoInput[] | EquipamentoUncheckedCreateWithoutTipoInput[]
    connectOrCreate?: EquipamentoCreateOrConnectWithoutTipoInput | EquipamentoCreateOrConnectWithoutTipoInput[]
    createMany?: EquipamentoCreateManyTipoInputEnvelope
    connect?: EquipamentoWhereUniqueInput | EquipamentoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EquipamentoUpdateManyWithoutTipoNestedInput = {
    create?: XOR<EquipamentoCreateWithoutTipoInput, EquipamentoUncheckedCreateWithoutTipoInput> | EquipamentoCreateWithoutTipoInput[] | EquipamentoUncheckedCreateWithoutTipoInput[]
    connectOrCreate?: EquipamentoCreateOrConnectWithoutTipoInput | EquipamentoCreateOrConnectWithoutTipoInput[]
    upsert?: EquipamentoUpsertWithWhereUniqueWithoutTipoInput | EquipamentoUpsertWithWhereUniqueWithoutTipoInput[]
    createMany?: EquipamentoCreateManyTipoInputEnvelope
    set?: EquipamentoWhereUniqueInput | EquipamentoWhereUniqueInput[]
    disconnect?: EquipamentoWhereUniqueInput | EquipamentoWhereUniqueInput[]
    delete?: EquipamentoWhereUniqueInput | EquipamentoWhereUniqueInput[]
    connect?: EquipamentoWhereUniqueInput | EquipamentoWhereUniqueInput[]
    update?: EquipamentoUpdateWithWhereUniqueWithoutTipoInput | EquipamentoUpdateWithWhereUniqueWithoutTipoInput[]
    updateMany?: EquipamentoUpdateManyWithWhereWithoutTipoInput | EquipamentoUpdateManyWithWhereWithoutTipoInput[]
    deleteMany?: EquipamentoScalarWhereInput | EquipamentoScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EquipamentoUncheckedUpdateManyWithoutTipoNestedInput = {
    create?: XOR<EquipamentoCreateWithoutTipoInput, EquipamentoUncheckedCreateWithoutTipoInput> | EquipamentoCreateWithoutTipoInput[] | EquipamentoUncheckedCreateWithoutTipoInput[]
    connectOrCreate?: EquipamentoCreateOrConnectWithoutTipoInput | EquipamentoCreateOrConnectWithoutTipoInput[]
    upsert?: EquipamentoUpsertWithWhereUniqueWithoutTipoInput | EquipamentoUpsertWithWhereUniqueWithoutTipoInput[]
    createMany?: EquipamentoCreateManyTipoInputEnvelope
    set?: EquipamentoWhereUniqueInput | EquipamentoWhereUniqueInput[]
    disconnect?: EquipamentoWhereUniqueInput | EquipamentoWhereUniqueInput[]
    delete?: EquipamentoWhereUniqueInput | EquipamentoWhereUniqueInput[]
    connect?: EquipamentoWhereUniqueInput | EquipamentoWhereUniqueInput[]
    update?: EquipamentoUpdateWithWhereUniqueWithoutTipoInput | EquipamentoUpdateWithWhereUniqueWithoutTipoInput[]
    updateMany?: EquipamentoUpdateManyWithWhereWithoutTipoInput | EquipamentoUpdateManyWithWhereWithoutTipoInput[]
    deleteMany?: EquipamentoScalarWhereInput | EquipamentoScalarWhereInput[]
  }

  export type TipoCreateNestedOneWithoutEquipamentosInput = {
    create?: XOR<TipoCreateWithoutEquipamentosInput, TipoUncheckedCreateWithoutEquipamentosInput>
    connectOrCreate?: TipoCreateOrConnectWithoutEquipamentosInput
    connect?: TipoWhereUniqueInput
  }

  export type TipoUpdateOneRequiredWithoutEquipamentosNestedInput = {
    create?: XOR<TipoCreateWithoutEquipamentosInput, TipoUncheckedCreateWithoutEquipamentosInput>
    connectOrCreate?: TipoCreateOrConnectWithoutEquipamentosInput
    upsert?: TipoUpsertWithoutEquipamentosInput
    connect?: TipoWhereUniqueInput
    update?: XOR<XOR<TipoUpdateToOneWithWhereWithoutEquipamentosInput, TipoUpdateWithoutEquipamentosInput>, TipoUncheckedUpdateWithoutEquipamentosInput>
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

  export type EquipamentoCreateWithoutTipoInput = {
    nome: string
  }

  export type EquipamentoUncheckedCreateWithoutTipoInput = {
    id?: number
    nome: string
  }

  export type EquipamentoCreateOrConnectWithoutTipoInput = {
    where: EquipamentoWhereUniqueInput
    create: XOR<EquipamentoCreateWithoutTipoInput, EquipamentoUncheckedCreateWithoutTipoInput>
  }

  export type EquipamentoCreateManyTipoInputEnvelope = {
    data: EquipamentoCreateManyTipoInput | EquipamentoCreateManyTipoInput[]
    skipDuplicates?: boolean
  }

  export type EquipamentoUpsertWithWhereUniqueWithoutTipoInput = {
    where: EquipamentoWhereUniqueInput
    update: XOR<EquipamentoUpdateWithoutTipoInput, EquipamentoUncheckedUpdateWithoutTipoInput>
    create: XOR<EquipamentoCreateWithoutTipoInput, EquipamentoUncheckedCreateWithoutTipoInput>
  }

  export type EquipamentoUpdateWithWhereUniqueWithoutTipoInput = {
    where: EquipamentoWhereUniqueInput
    data: XOR<EquipamentoUpdateWithoutTipoInput, EquipamentoUncheckedUpdateWithoutTipoInput>
  }

  export type EquipamentoUpdateManyWithWhereWithoutTipoInput = {
    where: EquipamentoScalarWhereInput
    data: XOR<EquipamentoUpdateManyMutationInput, EquipamentoUncheckedUpdateManyWithoutTipoInput>
  }

  export type EquipamentoScalarWhereInput = {
    AND?: EquipamentoScalarWhereInput | EquipamentoScalarWhereInput[]
    OR?: EquipamentoScalarWhereInput[]
    NOT?: EquipamentoScalarWhereInput | EquipamentoScalarWhereInput[]
    id?: IntFilter<"Equipamento"> | number
    nome?: StringFilter<"Equipamento"> | string
    tipoId?: IntFilter<"Equipamento"> | number
  }

  export type TipoCreateWithoutEquipamentosInput = {
    nome: string
  }

  export type TipoUncheckedCreateWithoutEquipamentosInput = {
    id?: number
    nome: string
  }

  export type TipoCreateOrConnectWithoutEquipamentosInput = {
    where: TipoWhereUniqueInput
    create: XOR<TipoCreateWithoutEquipamentosInput, TipoUncheckedCreateWithoutEquipamentosInput>
  }

  export type TipoUpsertWithoutEquipamentosInput = {
    update: XOR<TipoUpdateWithoutEquipamentosInput, TipoUncheckedUpdateWithoutEquipamentosInput>
    create: XOR<TipoCreateWithoutEquipamentosInput, TipoUncheckedCreateWithoutEquipamentosInput>
    where?: TipoWhereInput
  }

  export type TipoUpdateToOneWithWhereWithoutEquipamentosInput = {
    where?: TipoWhereInput
    data: XOR<TipoUpdateWithoutEquipamentosInput, TipoUncheckedUpdateWithoutEquipamentosInput>
  }

  export type TipoUpdateWithoutEquipamentosInput = {
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type TipoUncheckedUpdateWithoutEquipamentosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type EquipamentoCreateManyTipoInput = {
    id?: number
    nome: string
  }

  export type EquipamentoUpdateWithoutTipoInput = {
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type EquipamentoUncheckedUpdateWithoutTipoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type EquipamentoUncheckedUpdateManyWithoutTipoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
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