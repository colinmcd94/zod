import * as core from "zod-core";
import * as util from "zod-core/util";
import * as factories from "./factories.js";
import * as schemas from "./schemas.js";

/**
 * Dropped:
 * - effect
 * - function
 * - preprocess
 * - promise
 * - strictObject
 * - transformer
 * - oboolean
 * - onumber
 * - ostring
 */

export * as coerce from "./coerce.js";
export * as iso from "./iso.js";
export * from "./checks.js";

type ZodStringParams = util.TypeParams<schemas.ZodString>;
export function string(checks?: core.$ZodCheck<string>[]): schemas.ZodString;
export function string(
  params?: string | ZodStringParams,
  checks?: core.$ZodCheck<string>[]
): schemas.ZodString;
export function string(...args: any): schemas.ZodString {
  return factories._string(...args);
}

// guid
export type ZodGUIDParams = util.StringFormatParams<schemas.ZodGUID>;
export function guid(checks?: core.$ZodCheck<string>[]): schemas.ZodGUID;
export function guid(
  params?: string | ZodGUIDParams,
  checks?: core.$ZodCheck<string>[]
): schemas.ZodGUID;
export function guid(...args: any): schemas.ZodGUID {
  return factories._guid(...args);
}

// uuid
export type ZodUUIDParams = util.StringFormatParams<schemas.ZodUUID>;
export function uuid(checks?: core.$ZodCheck<string>[]): schemas.ZodUUID;
export function uuid(
  params?: string | ZodUUIDParams,
  checks?: core.$ZodCheck<string>[]
): schemas.ZodUUID;
export function uuid(...args: any): schemas.ZodUUID {
  return factories._uuid(...args);
}

// uuidv4
export type ZodUUIDv4Params = util.StringFormatParams<schemas.ZodUUID>;
export function uuidv4(checks?: core.$ZodCheck<string>[]): schemas.ZodUUID;
export function uuidv4(
  params?: string | ZodUUIDv4Params,
  checks?: core.$ZodCheck<string>[]
): schemas.ZodUUID;
export function uuidv4(...args: any): schemas.ZodUUID {
  return factories._uuidv4(...args);
}

// uuidv6
export type ZodUUIDv6Params = util.StringFormatParams<schemas.ZodUUID>;
export function uuidv6(checks?: core.$ZodCheck<string>[]): schemas.ZodUUID;
export function uuidv6(
  params?: string | ZodUUIDv6Params,
  checks?: core.$ZodCheck<string>[]
): schemas.ZodUUID;
export function uuidv6(...args: any): schemas.ZodUUID {
  return factories._uuidv6(...args);
}

// uuidv7
export type ZodUUIDv7Params = util.StringFormatParams<schemas.ZodUUID>;
export function uuidv7(checks?: core.$ZodCheck<string>[]): schemas.ZodUUID;
export function uuidv7(
  params?: string | ZodUUIDv7Params,
  checks?: core.$ZodCheck<string>[]
): schemas.ZodUUID;
export function uuidv7(...args: any): schemas.ZodUUID {
  return factories._uuidv7(...args);
}

// email
export type ZodEmailParams = util.StringFormatParams<schemas.ZodEmail>;
export function email(checks?: core.$ZodCheck<string>[]): schemas.ZodEmail;
export function email(
  params?: string | ZodEmailParams,
  checks?: core.$ZodCheck<string>[]
): schemas.ZodEmail;
export function email(...args: any): schemas.ZodEmail {
  return factories._email(...args);
}

// url
export type ZodURLParams = util.StringFormatParams<schemas.ZodURL>;
export function url(checks?: core.$ZodCheck<string>[]): schemas.ZodURL;
export function url(
  params?: string | ZodURLParams,
  checks?: core.$ZodCheck<string>[]
): schemas.ZodURL;
export function url(...args: any): schemas.ZodURL {
  return factories._url(...args);
}

// emoji
export type ZodEmojiParams = util.StringFormatParams<schemas.ZodEmoji>;
export function emoji(checks?: core.$ZodCheck<string>[]): schemas.ZodEmoji;
export function emoji(
  params?: string | ZodEmojiParams,
  checks?: core.$ZodCheck<string>[]
): schemas.ZodEmoji;
export function emoji(...args: any): schemas.ZodEmoji {
  return factories._emoji(...args);
}

// nanoid
export type ZodNanoIDParams = util.StringFormatParams<schemas.ZodNanoID>;
export function nanoid(checks?: core.$ZodCheck<string>[]): schemas.ZodNanoID;
export function nanoid(
  params?: string | ZodNanoIDParams,
  checks?: core.$ZodCheck<string>[]
): schemas.ZodNanoID;
export function nanoid(...args: any): schemas.ZodNanoID {
  return factories._nanoid(...args);
}

// cuid
export type ZodCUIDParams = util.StringFormatParams<schemas.ZodCUID>;
export function cuid(checks?: core.$ZodCheck<string>[]): schemas.ZodCUID;
export function cuid(
  params?: string | ZodCUIDParams,
  checks?: core.$ZodCheck<string>[]
): schemas.ZodCUID;
export function cuid(...args: any): schemas.ZodCUID {
  return factories._cuid(...args);
}

// cuid2
export type ZodCUID2Params = util.StringFormatParams<schemas.ZodCUID2>;
export function cuid2(checks?: core.$ZodCheck<string>[]): schemas.ZodCUID2;
export function cuid2(
  params?: string | ZodCUID2Params,
  checks?: core.$ZodCheck<string>[]
): schemas.ZodCUID2;
export function cuid2(...args: any): schemas.ZodCUID2 {
  return factories._cuid2(...args);
}

// ulid
export type ZodULIDParams = util.StringFormatParams<schemas.ZodULID>;
export function ulid(checks?: core.$ZodCheck<string>[]): schemas.ZodULID;
export function ulid(
  params?: string | ZodULIDParams,
  checks?: core.$ZodCheck<string>[]
): schemas.ZodULID;
export function ulid(...args: any): schemas.ZodULID {
  return factories._ulid(...args);
}

// xid
export type ZodXIDParams = util.StringFormatParams<schemas.ZodXID>;
export function xid(checks?: core.$ZodCheck<string>[]): schemas.ZodXID;
export function xid(
  params?: string | ZodXIDParams,
  checks?: core.$ZodCheck<string>[]
): schemas.ZodXID;
export function xid(...args: any): schemas.ZodXID {
  return factories._xid(...args);
}

// ksuid
export type ZodKSUIDParams = util.StringFormatParams<schemas.ZodKSUID>;
export function ksuid(checks?: core.$ZodCheck<string>[]): schemas.ZodKSUID;
export function ksuid(
  params?: string | ZodKSUIDParams,
  checks?: core.$ZodCheck<string>[]
): schemas.ZodKSUID;
export function ksuid(...args: any): schemas.ZodKSUID {
  return factories._ksuid(...args);
}

// ip
export type ZodIPParams = util.StringFormatParams<schemas.ZodIP>;
export function ip(checks?: core.$ZodCheck<string>[]): schemas.ZodIP;
export function ip(
  params?: string | ZodIPParams,
  checks?: core.$ZodCheck<string>[]
): schemas.ZodIP;
export function ip(...args: any): schemas.ZodIP {
  return factories._ip(...args);
}

// ipv4
export type ZodIPv4Params = util.StringFormatParams<schemas.ZodIP>;
export function ipv4(checks?: core.$ZodCheck<string>[]): schemas.ZodIP;
export function ipv4(
  params?: string | ZodIPv4Params,
  checks?: core.$ZodCheck<string>[]
): schemas.ZodIP;
export function ipv4(...args: any): schemas.ZodIP {
  return factories._ipv4(...args);
}

// ipv6
export type ZodIPv6Params = util.StringFormatParams<schemas.ZodIP>;
export function ipv6(checks?: core.$ZodCheck<string>[]): schemas.ZodIP;
export function ipv6(
  params?: string | ZodIPv6Params,
  checks?: core.$ZodCheck<string>[]
): schemas.ZodIP;
export function ipv6(...args: any): schemas.ZodIP {
  return factories._ipv6(...args);
}

// base64
export type ZodBase64Params = util.StringFormatParams<schemas.ZodBase64>;
export function base64(checks?: core.$ZodCheck<string>[]): schemas.ZodBase64;
export function base64(
  params?: string | ZodBase64Params,
  checks?: core.$ZodCheck<string>[]
): schemas.ZodBase64;
export function base64(...args: any): schemas.ZodBase64 {
  return factories._base64(...args);
}

// jsonString
type ZodJSONStringParams = util.StringFormatParams<schemas.ZodJSONString>;
export function jsonString(
  checks?: core.$ZodCheck<string>[]
): schemas.ZodJSONString;
export function jsonString(
  params?: string | ZodJSONStringParams,
  checks?: core.$ZodCheck<string>[]
): schemas.ZodJSONString;
export function jsonString(...args: any): schemas.ZodJSONString {
  return factories._jsonString(...args);
}

// e164
export type ZodE164Params = util.StringFormatParams<schemas.ZodE164>;
export function e164(checks?: core.$ZodCheck<string>[]): schemas.ZodE164;
export function e164(
  params?: string | ZodE164Params,
  checks?: core.$ZodCheck<string>[]
): schemas.ZodE164;
export function e164(...args: any): schemas.ZodE164 {
  return factories._e164(...args);
}

// jwt
export type ZodJWTParams = util.StringFormatParams<schemas.ZodJWT>;
export function jwt(checks?: core.$ZodCheck<string>[]): schemas.ZodJWT;
export function jwt(
  params?: string | ZodJWTParams,
  checks?: core.$ZodCheck<string>[]
): schemas.ZodJWT;
export function jwt(...args: any): schemas.ZodJWT {
  return factories._jwt(...args);
}

// number
type ZodNumberParams = util.TypeParams<schemas.ZodNumber>;
export function number(checks?: core.$ZodCheck<number>[]): schemas.ZodNumber;
export function number(
  params?: string | ZodNumberParams,
  checks?: core.$ZodCheck<number>[]
): schemas.ZodNumber;
export function number(...args: any[]): schemas.ZodNumber {
  return factories._number(...args);
}

// number formats

// int
type ZodNumberFormatParams = util.CheckTypeParams<schemas.ZodNumberFormat>;
export function int(checks?: core.$ZodCheck<number>[]): schemas.ZodNumber;
export function int(
  params?: string | ZodNumberFormatParams,
  checks?: core.$ZodCheck<number>[]
): schemas.ZodNumber;
export function int(...args: any[]): schemas.ZodNumber {
  return factories._int(...args);
}

// float32
export function float32(checks?: core.$ZodCheck<number>[]): schemas.ZodNumber;
export function float32(
  params?: string | ZodNumberFormatParams,
  checks?: core.$ZodCheck<number>[]
): schemas.ZodNumber;
export function float32(...args: any[]): schemas.ZodNumber {
  return factories._float32(...args);
}

// float64
export function float64(checks?: core.$ZodCheck<number>[]): schemas.ZodNumber;
export function float64(
  params?: string | ZodNumberFormatParams,
  checks?: core.$ZodCheck<number>[]
): schemas.ZodNumber;
export function float64(...args: any[]): schemas.ZodNumber {
  return factories._float64(...args);
}

// int32
export function int32(checks?: core.$ZodCheck<number>[]): schemas.ZodNumber;
export function int32(
  params?: string | ZodNumberFormatParams,
  checks?: core.$ZodCheck<number>[]
): schemas.ZodNumber;
export function int32(...args: any[]): schemas.ZodNumber {
  return factories._int32(...args);
}

// uint32
export function uint32(checks?: core.$ZodCheck<number>[]): schemas.ZodNumber;
export function uint32(
  params?: string | ZodNumberFormatParams,
  checks?: core.$ZodCheck<number>[]
): schemas.ZodNumber;
export function uint32(...args: any[]): schemas.ZodNumber {
  return factories._uint32(...args);
}

// bigint formats
// int64
export function int64(checks?: core.$ZodCheck<bigint>[]): schemas.ZodBigInt;
export function int64(
  params?: string | core.$ZodBigIntFormatParams,
  checks?: core.$ZodCheck<bigint>[]
): schemas.ZodBigInt;
export function int64(...args: any[]): schemas.ZodBigInt {
  return factories._int64(...args);
}

// uint64
export function uint64(checks?: core.$ZodCheck<bigint>[]): schemas.ZodBigInt;
export function uint64(
  params?: string | core.$ZodBigIntFormatParams,
  checks?: core.$ZodCheck<bigint>[]
): schemas.ZodBigInt;
export function uint64(...args: any[]): schemas.ZodBigInt {
  return factories._uint64(...args);
}

// boolean
interface ZodBooleanParams extends util.TypeParams<schemas.ZodBoolean> {}
export function boolean(checks?: core.$ZodCheck<boolean>[]): schemas.ZodBoolean;
export function boolean(
  params?: string | ZodBooleanParams,
  checks?: core.$ZodCheck<boolean>[]
): schemas.ZodBoolean;
export function boolean(...args: any[]): schemas.ZodBoolean {
  return factories._boolean(...args);
}

// bigint
interface ZodBigIntParams extends util.TypeParams<schemas.ZodBigInt> {}
export function bigint(checks?: core.$ZodCheck<bigint>[]): schemas.ZodBigInt;
export function bigint(
  params?: string | ZodBigIntParams,
  checks?: core.$ZodCheck<bigint>[]
): schemas.ZodBigInt;
export function bigint(...args: any[]): schemas.ZodBigInt {
  return factories._bigint(...args);
}

// symbol
interface ZodSymbolParams extends util.TypeParams<schemas.ZodSymbol> {}
export function symbol(checks?: core.$ZodCheck<symbol>[]): schemas.ZodSymbol;
export function symbol(
  params?: string | ZodSymbolParams,
  checks?: core.$ZodCheck<symbol>[]
): schemas.ZodSymbol;
export function symbol(...args: any[]): schemas.ZodSymbol {
  return factories._symbol(...args);
}

// date
interface ZodDateParams extends util.TypeParams<schemas.ZodDate> {}
export function date(checks?: core.$ZodCheck<Date>[]): schemas.ZodDate;
export function date(
  params?: string | ZodDateParams,
  checks?: core.$ZodCheck<Date>[]
): schemas.ZodDate;
export function date(...args: any[]): schemas.ZodDate {
  return factories._date(...args);
}

// undefined
interface ZodUndefinedParams extends util.TypeParams<schemas.ZodUndefined> {}
export function _undefined(
  checks?: core.$ZodCheck<undefined>[]
): schemas.ZodUndefined;
export function _undefined(
  params?: string | ZodUndefinedParams,
  checks?: core.$ZodCheck<undefined>[]
): schemas.ZodUndefined;
export function _undefined(...args: any[]): schemas.ZodUndefined {
  return factories._undefinedFactory(...args);
}
export { _undefined as undefined };

// null
interface ZodNullParams extends util.TypeParams<schemas.ZodNull> {}
export function _null(checks?: core.$ZodCheck<null>[]): schemas.ZodNull;
export function _null(
  params?: string | ZodNullParams,
  checks?: core.$ZodCheck<null>[]
): schemas.ZodNull;
export function _null(...args: any[]): schemas.ZodNull {
  return factories._nullFactory(...args);
}
export { _null as null };

// any
interface ZodAnyParams extends util.TypeParams<schemas.ZodAny> {}
export function any(checks?: core.$ZodCheck<any>[]): schemas.ZodAny;
export function any(
  params?: string | ZodAnyParams,
  checks?: core.$ZodCheck<any>[]
): schemas.ZodAny;
export function any(...args: any[]): schemas.ZodAny {
  return factories._any(...args);
}

// unknown
interface ZodUnknownParams extends util.TypeParams<schemas.ZodUnknown> {}
export function unknown(checks?: core.$ZodCheck<unknown>[]): schemas.ZodUnknown;
export function unknown(
  params?: string | ZodUnknownParams,
  checks?: core.$ZodCheck<unknown>[]
): schemas.ZodUnknown;
export function unknown(...args: any[]): schemas.ZodUnknown {
  return factories._unknown(...args);
}

// never
interface ZodNeverParams extends util.TypeParams<schemas.ZodNever> {}
export function never(checks?: core.$ZodCheck<never>[]): schemas.ZodNever;
export function never(
  params?: string | ZodNeverParams,
  checks?: core.$ZodCheck<never>[]
): schemas.ZodNever;
export function never(...args: any[]): schemas.ZodNever {
  return factories._never(...args);
}

// void
interface ZodVoidParams extends util.TypeParams<schemas.ZodVoid> {}
export function _void(checks?: core.$ZodCheck<void>[]): schemas.ZodVoid;
export function _void(
  params?: string | ZodVoidParams,
  checks?: core.$ZodCheck<void>[]
): schemas.ZodVoid;
export function _void(...args: any[]): schemas.ZodVoid {
  return factories._voidFactory(...args);
}
export { _void as void };

// array
interface ZodArrayParams extends util.TypeParams<schemas.ZodArray, "element"> {}
export function array<T extends schemas.ZodType>(
  element: T,
  params?: ZodArrayParams
): schemas.ZodArray<T> {
  return new schemas.ZodArray({
    type: "array",
    element,
    ...util.normalizeTypeParams(params),
  }) as schemas.ZodArray<T>;
}

// object
type ZodObjectParams = util.TypeParams<schemas.ZodObject, "shape" | "qout">;

export function object<T extends object>(
  shape: T,
  params?: ZodObjectParams
  // @ts-ignore
): schemas.ZodObject<T>;
export function object<T extends schemas.ZodRawShape>(
  shape: T,
  params?: ZodObjectParams
): schemas.ZodObject<T> {
  const def: schemas.ZodObjectDef = {
    type: "object",
    shape,
    qout: util.optionalObjectKeys(shape),
    ...util.normalizeTypeParams(params),
  };
  return new schemas.ZodObject(def) as schemas.ZodObject<T>;
}

// strictObject
type ZodStrictObjectParams = util.TypeParams<
  schemas.ZodObject,
  "shape" | "catchall" | "qout"
>;
export function strictObject<T extends schemas.ZodRawShape>(
  shape: T,
  params?: ZodStrictObjectParams
): schemas.ZodObject<T> {
  const def: schemas.ZodObjectDef = {
    type: "object",
    shape,
    qout: util.optionalObjectKeys(shape),
    catchall: never(),
    ...util.normalizeTypeParams(params),
  };
  return new schemas.ZodObject(def) as schemas.ZodObject<T>;
}

// looseObject
type ZodLooseObjectParams = util.TypeParams<
  schemas.ZodObject,
  "shape" | "catchall" | "qout"
>;
export function looseObject<T extends schemas.ZodRawShape>(
  shape: T,
  params?: ZodLooseObjectParams
): schemas.ZodObject<T> {
  const def: schemas.ZodObjectDef = {
    type: "object",
    shape,
    qout: util.optionalObjectKeys(shape),
    catchall: unknown(),
    ...util.normalizeTypeParams(params),
  };
  return new schemas.ZodObject(def) as schemas.ZodObject<T>;
}

// interface
type ZodInterfaceParams = util.TypeParams<
  schemas.ZodInterface,
  "shape" | "qout"
>;
export function _interface<T extends schemas.ZodRawShape>(
  shape: T,
  params?: ZodInterfaceParams
): schemas.ZodInterface<T> {
  const def: schemas.ZodObjectDef = {
    type: "object",
    shape,
    qout: util.optionalObjectKeys(shape),
    ...util.normalizeTypeParams(params),
  };
  return new schemas.ZodInterface(def) as schemas.ZodInterface<T>;
}
export { _interface as interface };

// strictInterface
type ZodStrictInterfaceParams = util.TypeParams<
  schemas.ZodInterface,
  "shape" | "qout"
>;
export function strictInterface<T extends schemas.ZodRawShape>(
  shape: T,
  params?: ZodStrictInterfaceParams
): schemas.ZodInterface<T> {
  const def: schemas.ZodObjectDef = {
    type: "object",
    shape,
    qout: util.optionalObjectKeys(shape),
    catchall: never(),
    ...util.normalizeTypeParams(params),
  };
  return new schemas.ZodInterface(def) as schemas.ZodInterface<T>;
}

// looseInterface
type ZodLooseInterfaceParams = util.TypeParams<
  schemas.ZodInterface,
  "shape" | "qout"
>;
export function looseInterface<T extends schemas.ZodRawShape>(
  shape: T,
  params?: ZodLooseInterfaceParams
): schemas.ZodInterface<T> {
  const def: schemas.ZodObjectDef = {
    type: "object",
    shape,
    qout: util.optionalObjectKeys(shape),
    catchall: unknown(),
    ...util.normalizeTypeParams(params),
  };
  return new schemas.ZodInterface(def) as schemas.ZodInterface<T>;
}

// .keyof
export function keyof<T extends schemas.ZodObject>(
  schema: T
): schemas.ZodEnum<util.KeyOf<T["~def"]["shape"]>> {
  return _enum(Object.keys(schema["~def"].shape)) as any;
}

// .extend
export function extend<
  T extends schemas.ZodObject,
  U extends schemas.ZodRawShape,
>(schema: T, shape: U): schemas.ZodObject<T["~def"]["shape"] & U> {
  return schema.clone({
    ...schema["~def"],
    shape: { ...schema["~def"].shape, ...shape },
    checks: [],
  }) as any;
}

// .merge
export function merge<T extends schemas.ZodObject, U extends schemas.ZodObject>(
  base: T,
  incoming: U
): schemas.ZodObject<T["~def"]["shape"] & U["~def"]["shape"]> {
  return incoming.clone({
    ...incoming["~def"], // incoming overrides properties on base
    shape: { ...base["~def"].shape, ...incoming["~def"].shape },
    checks: [],
  });
}

// .pick
type Mask<Keys extends PropertyKey> = { [K in Keys]?: true };
export function pick<
  T extends schemas.ZodObject,
  M extends util.Exactly<Mask<keyof T["shape"]>, M>,
>(
  schema: T,
  mask: M
): schemas.ZodObject<Pick<T["shape"], Extract<keyof T["shape"], keyof M>>> {
  const shape: any = {};
  for (const key in mask) {
    shape[key] = schema["~def"].shape[key];
  }
  return schema.clone({
    ...schema["~def"],
    shape,
    checks: [],
  }) as any;
}

// .omit
export function omit<
  T extends schemas.ZodObject,
  M extends util.Exactly<Mask<keyof T["shape"]>, M>,
>(
  schema: T,
  mask: M
): schemas.ZodObject<Omit<T["shape"], Extract<keyof T["shape"], keyof M>>> {
  const shape: schemas.ZodRawShape = { ...schema.shape };
  for (const key in mask) delete shape[key];
  return schema.clone({
    ...schema["~def"],
    shape,
    checks: [],
  }) as any;
}

// .partial
export function partial<T extends schemas.ZodObject>(
  schema: T
): schemas.ZodObject<{
  [k in keyof T["shape"]]: schemas.ZodOptional<T["shape"][k]>;
}> {
  const shape: schemas.ZodRawShape = {};
  for (const key in schema["~def"].shape) {
    shape[key] = optional(schema["~def"].shape[key]);
  }
  return schema.clone({
    ...schema["~def"],
    shape,
    checks: [],
  }) as any;
}

// union
interface ZodUnionParams extends util.TypeParams<schemas.ZodUnion, "options"> {}
export function union<T extends schemas.ZodType[]>(
  options: T,
  params?: ZodUnionParams
): schemas.ZodUnion<T> {
  return new schemas.ZodUnion({
    type: "union",
    options,
    ...util.normalizeTypeParams(params),
  }) as schemas.ZodUnion<T>;
}

// discriminatedUnion
type ZodDiscriminatedUnionParams = util.TypeParams<
  schemas.ZodDiscriminatedUnion,
  "options"
>;
export function discriminatedUnion<Types extends schemas.ZodHasDiscriminator[]>(
  options: Types,
  params?: ZodDiscriminatedUnionParams
): schemas.ZodDiscriminatedUnion<Types> {
  return new schemas.ZodDiscriminatedUnion({
    type: "union",
    options,
    ...util.normalizeTypeParams(params),
  }) as schemas.ZodDiscriminatedUnion<Types>;
}

// intersection
type ZodIntersectionParams = util.TypeParams<
  schemas.ZodIntersection,
  "left" | "right"
>;
export function intersection<
  T extends schemas.ZodType,
  U extends schemas.ZodType,
>(
  left: T,
  right: U,
  params?: ZodIntersectionParams
): schemas.ZodIntersection<T, U> {
  return new schemas.ZodIntersection({
    type: "intersection",
    left,
    right,
    ...util.normalizeTypeParams(params),
  }) as schemas.ZodIntersection<T, U>;
}

// and
const _and: typeof intersection = intersection;

// tuple
interface ZodTupleParams extends util.TypeParams<schemas.ZodTuple, "items"> {
  // rest?: schemas.ZodTuple["~def"]["rest"];
}

export function tuple<T extends [schemas.ZodType, ...schemas.ZodType[]]>(
  items: T,
  params?: ZodTupleParams
): schemas.ZodTuple<T, null>;
export function tuple<
  T extends [schemas.ZodType, ...schemas.ZodType[]],
  Rest extends schemas.ZodType,
>(items: T, rest: Rest, params?: ZodTupleParams): schemas.ZodTuple<T, Rest>;
export function tuple(
  items: schemas.ZodType[],
  _paramsOrRest?: ZodTupleParams | schemas.ZodType,
  _params?: ZodTupleParams
) {
  const hasRest = _paramsOrRest instanceof schemas.ZodType;
  const params = hasRest ? _params : _paramsOrRest;
  const rest = hasRest ? _paramsOrRest : null;
  return new schemas.ZodTuple({
    type: "tuple",
    items,
    rest,
    ...util.normalizeTypeParams(params),
  });
}

// record
type ZodRecordParams = util.TypeParams<
  schemas.ZodRecord,
  "keySchema" | "valueSchema"
>;
export function record<
  Key extends schemas.ZodPropertyKey,
  Value extends schemas.ZodType,
>(
  keySchema: Key,
  valueSchema: Value,
  params?: ZodRecordParams
): schemas.ZodRecord<Key, Value> {
  return new schemas.ZodRecord({
    type: "record",
    keySchema,
    valueSchema,
    ...util.normalizeTypeParams(params),
  }) as schemas.ZodRecord<Key, Value>;
}

// map
type ZodMapParams = util.TypeParams<schemas.ZodMap, "keyType" | "valueType">;
export function map<Key extends schemas.ZodType, Value extends schemas.ZodType>(
  keyType: Key,
  valueType: Value,
  params?: ZodMapParams
): schemas.ZodMap<Key, Value> {
  return new schemas.ZodMap({
    type: "map",
    keyType,
    valueType,
    ...util.normalizeTypeParams(params),
  }) as schemas.ZodMap<Key, Value>;
}

// set
interface ZodSetParams extends util.TypeParams<schemas.ZodSet, "valueType"> {}
export function set<Value extends schemas.ZodType>(
  valueType: Value,
  params?: ZodSetParams
): schemas.ZodSet<Value> {
  return new schemas.ZodSet({
    type: "set",
    valueType,
    ...util.normalizeTypeParams(params),
  }) as schemas.ZodSet<Value>;
}

// enum
interface ZodEnumParams extends util.TypeParams<schemas.ZodEnum, "entries"> {}
function _enum<const T extends string[]>(
  values: T,
  params?: ZodEnumParams
): schemas.ZodEnum<util.ToEnum<T[number]>> {
  const entries: util.EnumLike = {};
  for (const value of values) {
    entries[value] = value;
  }
  return new schemas.ZodEnum({
    type: "enum",
    entries,
    ...util.normalizeTypeParams(params),
  }) as any;
}
export { _enum as enum };

// nativeEnum
type ZodNativeEnumParams = util.TypeParams<schemas.ZodNativeEnum, "entries">;
export function nativeEnum<T extends util.EnumLike>(
  entries: T,
  params?: ZodNativeEnumParams
): schemas.ZodNativeEnum<T> {
  return new schemas.ZodNativeEnum({
    type: "enum",
    entries,
    ...util.normalizeTypeParams(params),
  }) as any as schemas.ZodNativeEnum<T>;
}

// literal
type ZodLiteralParams = util.TypeParams<schemas.ZodLiteral, "literals">;
export function literal<const T extends util.EnumValue | util.EnumValue[]>(
  literals: T,
  params?: ZodLiteralParams
): schemas.ZodLiteral<T extends util.EnumValue[] ? T : [T]> {
  return new schemas.ZodLiteral({
    type: "enum",
    literals: Array.isArray(literals) ? literals : [literals],
    ...util.normalizeTypeParams(params),
  }) as any as schemas.ZodLiteral<T extends util.EnumValue[] ? T : [T]>;
}

// file
interface ZodFileParams extends util.TypeParams<schemas.ZodFile> {}
const _file = util.factory(schemas.ZodFile, { type: "file" });
export function file(checks?: core.$ZodCheck<File>[]): schemas.ZodFile;
export function file(
  params?: string | ZodFileParams,
  checks?: core.$ZodCheck<File>[]
): schemas.ZodFile;
export function file(...args: any[]): schemas.ZodFile {
  return _file(...args);
}

// effect
type ZodEffectParams = util.TypeParams<schemas.ZodEffect, "effect">;
export function effect<O = unknown, I = unknown>(
  effect: (input: I, ctx?: core.$ParseContext) => O,
  params?: ZodEffectParams
): schemas.ZodEffect<O, I> {
  return new schemas.ZodEffect({
    type: "effect",
    effect: effect as any,
    ...util.normalizeTypeParams(params),
  }) as schemas.ZodEffect<O, I>;
}

// preprocess
interface ZodPreprocessParams extends ZodEffectParams, ZodPipelineParams {}
export function preprocess<T, U extends schemas.ZodType<unknown, T>>(
  _effect: (arg: unknown) => T,
  schema: U,
  params?: ZodPreprocessParams
): schemas.ZodPipeline<schemas.ZodEffect<T, unknown>, U> {
  return pipeline(effect(_effect, params), schema, params);
}
// interface ZodPreprocessParams
//   extends util.TypeParams<schemas.ZodPreprocess, "effect"> {}
// export function preprocess<T extends schemas.ZodType>(
//   schema: T,
//   effect: (arg: unknown) => core.input<T>,
//   params?: ZodPreprocessParams
// ): schemas.ZodPreprocess<T> {
//   return new schemas.ZodPreprocess({
//     type: "preprocess",
//     schema,
//     effect,
//     ...util.normalizeTypeParams(params),
//   }) as schemas.ZodPreprocess<T>;
// }

// transform
// rewrite to use pipeline and effect
interface ZodTransformParams extends ZodEffectParams, ZodPipelineParams {}
export function transform<T extends schemas.ZodType, NewOut>(
  schema: T,
  fn: (arg: core.output<T>) => NewOut,
  params?: ZodTransformParams
): schemas.ZodPipeline<T, schemas.ZodEffect<Awaited<NewOut>, core.output<T>>> {
  return pipeline(schema, effect(fn, params), params) as any;
}
// interface ZodTransformParams
//   extends util.TypeParams<schemas.ZodTransform, "schema" | "effect"> {}
// export function transform<T extends schemas.ZodType, NewOut>(
//   schema: T,
//   effect: (arg: core.output<T>) => NewOut,
//   params?: ZodTransformParams
// ): schemas.ZodTransform<T> {
//   return new schemas.ZodTransform({
//     type: "transform",
//     schema,
//     effect,
//     ...util.normalizeTypeParams(params),
//   }) as schemas.ZodTransform<T>;
// }

// optional
type ZodOptionalParams = util.TypeParams<schemas.ZodOptional, "innerType">;
export function optional<T extends schemas.ZodType>(
  innerType: T,
  params?: ZodOptionalParams
): schemas.ZodOptional<T> {
  return new schemas.ZodOptional({
    type: "optional",
    innerType,
    ...util.normalizeTypeParams(params),
  }) as schemas.ZodOptional<T>;
}

// nullable
type ZodNullableParams = util.TypeParams<schemas.ZodNullable, "innerType">;
export function nullable<T extends schemas.ZodType>(
  innerType: T,
  params?: ZodNullableParams
): schemas.ZodNullable<T> {
  return new schemas.ZodNullable({
    type: "nullable",
    innerType,
    ...util.normalizeTypeParams(params),
  }) as schemas.ZodNullable<T>;
}

// success
type ZodSuccessParams = util.TypeParams<schemas.ZodSuccess, "innerType">;
export function success<T extends schemas.ZodType>(
  innerType: T,
  params?: ZodSuccessParams
): schemas.ZodSuccess<T> {
  return new schemas.ZodSuccess({
    type: "success",
    innerType,
    ...util.normalizeTypeParams(params),
  }) as schemas.ZodSuccess<T>;
}

// default
type ZodDefaultParams = util.TypeParams<schemas.ZodDefault, "innerType">;
function _default<T extends schemas.ZodType>(
  innerType: T,
  defaultValue: core.output<T> | (() => core.output<T>),
  params?: ZodDefaultParams
): schemas.ZodDefault<T> {
  return new schemas.ZodDefault({
    type: "default",
    innerType,
    defaultValue:
      defaultValue instanceof Function ? defaultValue : () => defaultValue,
    ...util.normalizeTypeParams(params),
  }) as schemas.ZodDefault<T>;
}
export { _default };

// catch
type ZodCatchParams = util.TypeParams<schemas.ZodCatch, "innerType">;
function _catch<T extends schemas.ZodType>(
  innerType: T,
  catchValue: core.output<T> | (() => core.output<T>),
  params?: ZodCatchParams
): schemas.ZodCatch<T> {
  return new schemas.ZodCatch({
    type: "catch",
    innerType,
    catchValue: catchValue instanceof Function ? catchValue : () => catchValue,
    ...util.normalizeTypeParams(params),
  }) as schemas.ZodCatch<T>;
}
export { _catch as catch };

// nan
interface ZodNaNParams extends util.TypeParams<schemas.ZodNaN> {}
const _nan = util.factory(schemas.ZodNaN, { type: "nan" });
export function nan(checks?: core.$ZodCheck<number>[]): schemas.ZodNaN;
export function nan(
  params?: string | ZodNaNParams,
  checks?: core.$ZodCheck<number>[]
): schemas.ZodNaN;
export function nan(...args: any[]): schemas.ZodNaN {
  return _nan(...args);
}

// pipeline
type ZodPipelineParams = util.TypeParams<schemas.ZodPipeline, "in" | "out">;
export function pipeline<
  T extends schemas.ZodType,
  U extends schemas.ZodType<any, T["~output"]>,
>(
  in_: T,
  // fn: (arg: core.output<T>) => core.input<U>,
  out: U,
  params?: ZodPipelineParams
): schemas.ZodPipeline<T, U> {
  return new schemas.ZodPipeline({
    type: "pipeline",
    in: in_,
    out,
    ...util.normalizeTypeParams(params),
  }) as schemas.ZodPipeline<T, U>;
}

// readonly
type ZodReadonlyParams = util.TypeParams<schemas.ZodReadonly, "innerType">;
export function readonly<T extends schemas.ZodType>(
  innerType: T,
  params?: ZodReadonlyParams
): schemas.ZodReadonly<T> {
  return new schemas.ZodReadonly({
    type: "readonly",
    innerType,
    ...util.normalizeTypeParams(params),
  }) as schemas.ZodReadonly<T>;
}

// templateLiteral
type ZodTemplateLiteralParams = util.TypeParams<
  schemas.ZodTemplateLiteral,
  "parts"
>;
export function templateLiteral<
  const Parts extends core.$TemplateLiteralPart[],
>(
  parts: Parts,
  params?: ZodTemplateLiteralParams
): schemas.ZodTemplateLiteral<core.$PartsToTemplateLiteral<Parts>> {
  return new schemas.ZodTemplateLiteral({
    type: "template_literal",
    parts,
    ...util.normalizeTypeParams(params),
  }) as any;
}

type CustomParams = util.CheckTypeParams<schemas.ZodCustom, "fn">;
//  {
//   error?: string | core.$ZodErrorMap<core.$ZodIssueCustom>;
//   path?: PropertyKey[];
// }

export function custom<T>(
  fn?: (data: unknown) => unknown,
  _params: string | CustomParams = {}
): schemas.ZodCustom<T> {
  return new schemas.ZodCustom({
    type: "custom",
    check: "custom",
    fn: fn ? (fn as any) : () => true,
    ...util.normalizeCheckParams(_params),
  }) as schemas.ZodCustom<T>;
}

// instanceof
abstract class Class {
  constructor(..._: any[]) {}
}
function _instanceof<T extends typeof Class>(
  cls: T,
  params: CustomParams = {
    error: `Input not instance of ${cls.name}`,
  }
): schemas.ZodCustom<InstanceType<T>> {
  return custom((data) => data instanceof cls, params);
}
export { _instanceof as instanceof };

// refine
export function refine<T>(
  fn: (arg: T) => unknown | Promise<unknown>,
  _params: string | CustomParams = {}
): core.$ZodCheck<T> {
  return core.refine<T>(fn, _params);
}

///////////        METHODS       ///////////

/**
 * parse(data: unknown, params?: core.$ParseContext): Output;
 */
export function parse<T extends schemas.ZodType>(
  schema: T,
  data: unknown,
  ctx?: core.$ParseContext
): core.output<T> {
  return core.parse(schema, data, ctx);
}

/**
 * safeParse(
  data: unknown,
  params?: core.$ParseContext
): SafeParseResult<Output>;
 */
type SafeParseResult<T> =
  | { success: true; data: T; error?: never }
  | { success: false; data?: never; error: core.$ZodError };
export function safeParse<T extends schemas.ZodType>(
  schema: T,
  data: unknown,
  ctx?: core.$ParseContext
): SafeParseResult<core.output<T>> {
  return core.safeParse(schema, data, ctx);
}

/**
 * parseAsync(
  data: unknown,
  params?: core.$ParseContext
): Promise<Output>;
 */
export async function parseAsync<T extends schemas.ZodType>(
  schema: T,
  data: unknown,
  ctx?: core.$ParseContext
): Promise<core.output<T>> {
  return core.parseAsync(schema, data, ctx);
}

/**
 * safeParseAsync(
  data: unknown,
  params?: core.$ParseContext
): Promise<SafeParseResult<Output>>;
 */
export async function safeParseAsync<T extends schemas.ZodType>(
  schema: T,
  data: unknown,
  ctx?: core.$ParseContext
): Promise<SafeParseResult<core.output<T>>> {
  return core.safeParseAsync(schema, data, ctx);
}