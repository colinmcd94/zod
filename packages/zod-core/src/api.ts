import * as base from "./base.js";
import * as checks from "./checks.js";
import type * as errors from "./errors.js";
import * as registries from "./registries.js";
import * as schemas from "./schemas.js";
import * as util from "./util.js";

export * as iso from "./iso.js";
export * as coerce from "./coerce.js";

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

//////   API   //////
// $ZodString
interface $ZodStringParams
  extends util.TypeParams<schemas.$ZodString<string>> {}
const _string = util.factory(schemas.$ZodString, {
  type: "string",
});
export function string(
  checks?: base.$ZodCheck<string>[]
): schemas.$ZodString<string>;
export function string(
  params?: string | $ZodStringParams,
  checks?: base.$ZodCheck<string>[]
): schemas.$ZodString<string>;
export function string(...args: any): schemas.$ZodString<string> {
  return _string(...args) as any;
}

// $ZodGUID
export type $ZodGUIDParams = util.StringFormatParams<schemas.$ZodGUID>;
export type $ZodCheckGUIDParams =
  util.CheckStringFormatParams<schemas.$ZodGUID>;
const _guid = util.factory(schemas.$ZodGUID, {
  type: "string",
  format: "guid",
  check: "string_format",
});
export function guid(checks?: base.$ZodCheck<string>[]): schemas.$ZodGUID;
export function guid(
  params?: string | $ZodGUIDParams,
  checks?: base.$ZodCheck<string>[]
): schemas.$ZodGUID;
export function guid(...args: any[]): schemas.$ZodGUID {
  return _guid(...args);
}

// $ZodUUID
export type $ZodUUIDParams = util.StringFormatParams<
  schemas.$ZodUUID,
  "pattern"
>;
export type $ZodCheckUUIDParams = util.CheckStringFormatParams<
  schemas.$ZodUUID,
  "pattern"
>;
const _uuid = util.factory(schemas.$ZodUUID, {
  type: "string",
  format: "uuid",
  check: "string_format",
});
export function uuid(checks?: base.$ZodCheck<string>[]): schemas.$ZodUUID;
export function uuid(
  params?: string | $ZodUUIDParams,
  checks?: base.$ZodCheck<string>[]
): schemas.$ZodUUID;
export function uuid(...args: any[]): schemas.$ZodUUID {
  return _uuid(...args);
}

// $ZodUUIDv4
export type $ZodUUIDv4Params = util.StringFormatParams<
  schemas.$ZodUUID,
  "pattern"
>;
export type $ZodCheckUUIDv4Params = util.CheckStringFormatParams<
  schemas.$ZodUUID,
  "pattern"
>;
const _uuidv4 = util.factory(schemas.$ZodUUID, {
  type: "string",
  format: "uuid",
  check: "string_format",
  version: 4,
});
export function uuidv4(checks?: base.$ZodCheck<string>[]): schemas.$ZodUUID;
export function uuidv4(
  params?: string | $ZodUUIDv4Params,
  checks?: base.$ZodCheck<string>[]
): schemas.$ZodUUID;
export function uuidv4(...args: any): schemas.$ZodUUID {
  return _uuidv4(...args);
}

// $ZodUUIDv6
export type $ZodUUIDv6Params = util.StringFormatParams<
  schemas.$ZodUUID,
  "pattern"
>;
export type $ZodCheckUUIDv6Params = util.CheckStringFormatParams<
  schemas.$ZodUUID,
  "pattern"
>;
const _uuidv6 = util.factory(schemas.$ZodUUID, {
  type: "string",
  format: "uuid",
  check: "string_format",
  version: 6,
});
export function uuidv6(checks?: base.$ZodCheck<string>[]): schemas.$ZodUUID;
export function uuidv6(
  params?: string | $ZodUUIDv6Params,
  checks?: base.$ZodCheck<string>[]
): schemas.$ZodUUID;
export function uuidv6(...args: any): schemas.$ZodUUID {
  return _uuidv6(...args);
}

// $ZodUUIDv7
export type $ZodUUIDv7Params = util.StringFormatParams<
  schemas.$ZodUUID,
  "pattern"
>;
export type $ZodCheckUUIDv7Params = util.CheckStringFormatParams<
  schemas.$ZodUUID,
  "pattern"
>;
const _uuidv7 = util.factory(schemas.$ZodUUID, {
  type: "string",
  format: "uuid",
  check: "string_format",
  version: 7,
});
export function uuidv7(checks?: base.$ZodCheck<string>[]): schemas.$ZodUUID;
export function uuidv7(
  params?: string | $ZodUUIDv7Params,
  checks?: base.$ZodCheck<string>[]
): schemas.$ZodUUID;
export function uuidv7(...args: any): schemas.$ZodUUID {
  return _uuidv7(...args);
}

// $ZodEmail
export type $ZodEmailParams = util.StringFormatParams<schemas.$ZodEmail>;
export type $ZodCheckEmailParams =
  util.CheckStringFormatParams<schemas.$ZodEmail>;
const _email = util.factory(schemas.$ZodEmail, {
  type: "string",
  format: "email",
  check: "string_format",
});
export function email(checks?: base.$ZodCheck<string>[]): schemas.$ZodEmail;
export function email(
  params?: string | $ZodEmailParams,
  checks?: base.$ZodCheck<string>[]
): schemas.$ZodEmail;
export function email(...args: any): schemas.$ZodEmail {
  return _email(...args);
}

// $ZodURL
export type $ZodURLParams = util.StringFormatParams<schemas.$ZodURL>;
export type $ZodCheckURLParams = util.CheckStringFormatParams<schemas.$ZodURL>;
const _url = util.factory(schemas.$ZodURL, {
  type: "string",
  format: "url",
  check: "string_format",
});
export function url(checks?: base.$ZodCheck<string>[]): schemas.$ZodURL;
export function url(
  params?: string | $ZodURLParams,
  checks?: base.$ZodCheck<string>[]
): schemas.$ZodURL;
export function url(...args: any): schemas.$ZodURL {
  return _url(...args);
}

// $ZodEmoji
export type $ZodEmojiParams = util.StringFormatParams<schemas.$ZodEmoji>;
export type $ZodCheckEmojiParams =
  util.CheckStringFormatParams<schemas.$ZodEmoji>;
const _emoji = util.factory(schemas.$ZodEmoji, {
  type: "string",
  format: "emoji",
  check: "string_format",
});
export function emoji(checks?: base.$ZodCheck<string>[]): schemas.$ZodEmoji;
export function emoji(
  params?: string | $ZodEmojiParams,
  checks?: base.$ZodCheck<string>[]
): schemas.$ZodEmoji;
export function emoji(...args: any): schemas.$ZodEmoji {
  return _emoji(...args);
}

// $ZodNanoID
export type $ZodNanoIDParams = util.StringFormatParams<schemas.$ZodNanoID>;
export type $ZodCheckNanoIDParams =
  util.CheckStringFormatParams<schemas.$ZodNanoID>;
const _nanoid = util.factory(schemas.$ZodNanoID, {
  type: "string",
  format: "nanoid",
  check: "string_format",
});
export function nanoid(checks?: base.$ZodCheck<string>[]): schemas.$ZodNanoID;
export function nanoid(
  params?: string | $ZodNanoIDParams,
  checks?: base.$ZodCheck<string>[]
): schemas.$ZodNanoID;
export function nanoid(...args: any): schemas.$ZodNanoID {
  return _nanoid(...args);
}

// $ZodCUID
export type $ZodCUIDParams = util.StringFormatParams<schemas.$ZodCUID>;
export type $ZodCheckCUIDParams =
  util.CheckStringFormatParams<schemas.$ZodCUID>;
const _cuid = util.factory(schemas.$ZodCUID, {
  type: "string",
  format: "cuid",
  check: "string_format",
});
export function cuid(checks?: base.$ZodCheck<string>[]): schemas.$ZodCUID;
export function cuid(
  params?: string | $ZodCUIDParams,
  checks?: base.$ZodCheck<string>[]
): schemas.$ZodCUID;
export function cuid(...args: any): schemas.$ZodCUID {
  return _cuid(...args);
}

// $ZodCUID2
export type $ZodCUID2Params = util.StringFormatParams<schemas.$ZodCUID2>;
export type $ZodCheckCUID2Params =
  util.CheckStringFormatParams<schemas.$ZodCUID2>;
const _cuid2 = util.factory(schemas.$ZodCUID2, {
  type: "string",
  format: "cuid2",
  check: "string_format",
});
export function cuid2(checks?: base.$ZodCheck<string>[]): schemas.$ZodCUID2;
export function cuid2(
  params?: string | $ZodCUID2Params,
  checks?: base.$ZodCheck<string>[]
): schemas.$ZodCUID2;
export function cuid2(...args: any): schemas.$ZodCUID2 {
  return _cuid2(...args);
}

// $ZodULID
export type $ZodULIDParams = util.StringFormatParams<schemas.$ZodULID>;
export type $ZodCheckULIDParams =
  util.CheckStringFormatParams<schemas.$ZodULID>;
const _ulid = util.factory(schemas.$ZodULID, {
  type: "string",
  format: "ulid",
  check: "string_format",
});
export function ulid(checks?: base.$ZodCheck<string>[]): schemas.$ZodULID;
export function ulid(
  params?: string | $ZodULIDParams,
  checks?: base.$ZodCheck<string>[]
): schemas.$ZodULID;
export function ulid(...args: any): schemas.$ZodULID {
  return _ulid(...args);
}

// $ZodXID
export type $ZodXIDParams = util.StringFormatParams<schemas.$ZodXID>;
export type $ZodCheckXIDParams = util.CheckStringFormatParams<schemas.$ZodXID>;
const _xid = util.factory(schemas.$ZodXID, {
  type: "string",
  format: "xid",
  check: "string_format",
});
export function xid(checks?: base.$ZodCheck<string>[]): schemas.$ZodXID;
export function xid(
  params?: string | $ZodXIDParams,
  checks?: base.$ZodCheck<string>[]
): schemas.$ZodXID;
export function xid(...args: any): schemas.$ZodXID {
  return _xid(...args);
}

// $ZodKSUID
export type $ZodKSUIDParams = util.StringFormatParams<schemas.$ZodKSUID>;
export type $ZodCheckKSUIDParams =
  util.CheckStringFormatParams<schemas.$ZodKSUID>;
const _ksuid = util.factory(schemas.$ZodKSUID, {
  type: "string",
  format: "ksuid",
  check: "string_format",
});
export function ksuid(checks?: base.$ZodCheck<string>[]): schemas.$ZodKSUID;
export function ksuid(
  params?: string | $ZodKSUIDParams,
  checks?: base.$ZodCheck<string>[]
): schemas.$ZodKSUID;
export function ksuid(...args: any): schemas.$ZodKSUID {
  return _ksuid(...args);
}

// $ZodIP
export type $ZodIPParams = util.StringFormatParams<schemas.$ZodIP>;
export type $ZodCheckIPParams = util.CheckStringFormatParams<schemas.$ZodIP>;
const _ip = util.factory(schemas.$ZodIP, {
  type: "string",
  format: "ip",
  check: "string_format",
});
export function ip(checks?: base.$ZodCheck<string>[]): schemas.$ZodIP;
export function ip(
  params?: string | $ZodIPParams,
  checks?: base.$ZodCheck<string>[]
): schemas.$ZodIP;
export function ip(...args: any): schemas.$ZodIP {
  return _ip(...args);
}

// $ZodIPv4
export type $ZodIPv4Params = util.StringFormatParams<schemas.$ZodIP>;
export type $ZodCheckIPv4Params = util.CheckStringFormatParams<schemas.$ZodIP>;
const _ipv4 = util.factory(schemas.$ZodIP, {
  type: "string",
  format: "ip",
  check: "string_format",
  version: 4,
});
export function ipv4(checks?: base.$ZodCheck<string>[]): schemas.$ZodIP;
export function ipv4(
  params?: string | $ZodIPv4Params,
  checks?: base.$ZodCheck<string>[]
): schemas.$ZodIP;
export function ipv4(...args: any): schemas.$ZodIP {
  return _ipv4(...args);
}

// $ZodIPv6
export type $ZodIPv6Params = util.StringFormatParams<schemas.$ZodIP>;
export type $ZodCheckIPv6Params = util.CheckStringFormatParams<schemas.$ZodIP>;
const _ipv6 = util.factory(schemas.$ZodIP, {
  type: "string",
  format: "ip",
  check: "string_format",
  version: 6,
});
export function ipv6(checks?: base.$ZodCheck<string>[]): schemas.$ZodIP;
export function ipv6(
  params?: string | $ZodIPv6Params,
  checks?: base.$ZodCheck<string>[]
): schemas.$ZodIP;
export function ipv6(...args: any): schemas.$ZodIP {
  return _ipv6(...args);
}

// $ZodBase64
export type $ZodBase64Params = util.StringFormatParams<schemas.$ZodBase64>;
export type $ZodCheckBase64Params =
  util.CheckStringFormatParams<schemas.$ZodBase64>;
const _base64 = util.factory(schemas.$ZodBase64, {
  type: "string",
  format: "base64",
  check: "string_format",
});
export function base64(checks?: base.$ZodCheck<string>[]): schemas.$ZodBase64;
export function base64(
  params?: string | $ZodBase64Params,
  checks?: base.$ZodCheck<string>[]
): schemas.$ZodBase64;
export function base64(...args: any): schemas.$ZodBase64 {
  return _base64(...args);
}

// $ZodJSONString
export type $ZodJSONStringParams =
  util.StringFormatParams<schemas.$ZodJSONString>;
export type $ZodCheckJSONStringParams =
  util.CheckStringFormatParams<schemas.$ZodJSONString>;
const _jsonString = util.factory(schemas.$ZodJSONString, {
  type: "string",
  format: "json_string",
  check: "string_format",
});
export function jsonString(
  checks?: base.$ZodCheck<string>[]
): schemas.$ZodJSONString;
export function jsonString(
  params?: string | $ZodJSONStringParams,
  checks?: base.$ZodCheck<string>[]
): schemas.$ZodJSONString;
export function jsonString(...args: any): schemas.$ZodJSONString {
  return _jsonString(...args);
}

// $ZodE164
export type $ZodE164Params = util.StringFormatParams<schemas.$ZodE164>;
export type $ZodCheckE164Params =
  util.CheckStringFormatParams<schemas.$ZodE164>;
const _e164 = util.factory(schemas.$ZodE164, {
  type: "string",
  format: "e164",
  check: "string_format",
});
export function e164(checks?: base.$ZodCheck<string>[]): schemas.$ZodE164;
export function e164(
  params?: string | $ZodE164Params,
  checks?: base.$ZodCheck<string>[]
): schemas.$ZodE164;
export function e164(...args: any): schemas.$ZodE164 {
  return _e164(...args);
}

// $ZodJWT
export type $ZodJWTParams = util.StringFormatParams<schemas.$ZodJWT, "pattern">;
export type $ZodCheckJWTParams = util.CheckStringFormatParams<
  schemas.$ZodJWT,
  "pattern"
>;
const _jwt = util.factory(schemas.$ZodJWT, {
  type: "string",
  format: "jwt",
  check: "string_format",
});
export function jwt(checks?: base.$ZodCheck<string>[]): schemas.$ZodJWT;
export function jwt(
  params?: string | $ZodJWTParams,
  checks?: base.$ZodCheck<string>[]
): schemas.$ZodJWT;
export function jwt(...args: any): schemas.$ZodJWT {
  return _jwt(...args);
}

// number
const _number = util.factory(schemas.$ZodNumber, { type: "number" });
interface $ZodNumberParams
  extends util.TypeParams<schemas.$ZodNumber<number>> {}
export function number(
  checks?: base.$ZodCheck<number>[]
): schemas.$ZodNumber<number>;
export function number(
  params?: string | $ZodNumberParams,
  checks?: base.$ZodCheck<number>[]
): schemas.$ZodNumber<number>;
export function number(...args: any): schemas.$ZodNumber<number> {
  return _number(...args) as any;
}

export type $ZodNumberFormatParams = util.CheckTypeParams<
  schemas.$ZodNumberFormat,
  "format" | "coerce"
>;

export type $ZodCheckNumberFormatParams = util.CheckParams<
  checks.$ZodCheckNumberFormat,
  "format"
>;

// int
const _int = util.factory(schemas.$ZodNumberFormat, {
  type: "number",
  check: "number_format",
  format: "safeint",
});
export function int(
  checks?: base.$ZodCheck<number>[]
): schemas.$ZodNumberFormat;
export function int(
  params?: string | $ZodCheckNumberFormatParams,
  checks?: base.$ZodCheck<number>[]
): schemas.$ZodNumberFormat;
export function int(...args: any): schemas.$ZodNumberFormat {
  return _int(...args);
}

// float32
const _float32 = util.factory(schemas.$ZodNumberFormat, {
  type: "number",
  check: "number_format",
  format: "float32",
});
export function float32(
  checks?: base.$ZodCheck<number>[]
): schemas.$ZodNumberFormat;
export function float32(
  params?: string | $ZodCheckNumberFormatParams,
  checks?: base.$ZodCheck<number>[]
): schemas.$ZodNumberFormat;
export function float32(...args: any): schemas.$ZodNumberFormat {
  return _float32(...args);
}

// float64
const _float64 = util.factory(schemas.$ZodNumberFormat, {
  type: "number",
  check: "number_format",
  format: "float64",
});
export function float64(
  checks?: base.$ZodCheck<number>[]
): schemas.$ZodNumberFormat;
export function float64(
  params?: string | $ZodCheckNumberFormatParams,
  checks?: base.$ZodCheck<number>[]
): schemas.$ZodNumberFormat;
export function float64(...args: any): schemas.$ZodNumberFormat {
  return _float64(...args);
}

// int32
const _int32 = util.factory(schemas.$ZodNumberFormat, {
  type: "number",
  check: "number_format",
  format: "int32",
});
export function int32(
  checks?: base.$ZodCheck<number>[]
): schemas.$ZodNumberFormat;
export function int32(
  params?: string | $ZodCheckNumberFormatParams,
  checks?: base.$ZodCheck<number>[]
): schemas.$ZodNumberFormat;
export function int32(...args: any): schemas.$ZodNumberFormat {
  return _int32(...args);
}

// uint32
const _uint32 = util.factory(schemas.$ZodNumberFormat, {
  type: "number",
  check: "number_format",
  format: "uint32",
});
export function uint32(
  checks?: base.$ZodCheck<number>[]
): schemas.$ZodNumberFormat;
export function uint32(
  params?: string | $ZodCheckNumberFormatParams,
  checks?: base.$ZodCheck<number>[]
): schemas.$ZodNumberFormat;
export function uint32(...args: any): schemas.$ZodNumberFormat {
  return _uint32(...args);
}

// bigint
interface $ZodBigIntParams
  extends util.TypeParams<schemas.$ZodBigInt<bigint>> {}
const _bigint = util.factory(schemas.$ZodBigInt, { type: "bigint" }) as any;
export function bigint(
  checks?: base.$ZodCheck<bigint>[]
): schemas.$ZodBigInt<bigint>;
export function bigint(
  params?: string | $ZodBigIntParams,
  checks?: base.$ZodCheck<bigint>[]
): schemas.$ZodBigInt<bigint>;
export function bigint(...args: any): schemas.$ZodBigInt<bigint> {
  return _bigint(...args) as any;
}

// bigint formats
export type $ZodBigIntFormatParams = util.CheckTypeParams<
  schemas.$ZodBigIntFormat,
  "format" | "coerce"
>;
export type $ZodCheckBigIntFormatParams = util.CheckParams<
  checks.$ZodCheckBigIntFormat,
  "format"
>;
// int64
const _int64 = util.factory(schemas.$ZodBigIntFormat, {
  type: "bigint",
  check: "bigint_format",
  format: "int64",
});
export function int64(
  checks?: base.$ZodCheck<number>[]
): schemas.$ZodBigIntFormat;
export function int64(
  params?: string | $ZodBigIntFormatParams,
  checks?: base.$ZodCheck<number>[]
): schemas.$ZodBigIntFormat;
export function int64(...args: any): schemas.$ZodBigIntFormat {
  return _int64(...args);
}

// uint64
const _uint64 = util.factory(schemas.$ZodBigIntFormat, {
  type: "bigint",
  check: "bigint_format",
  format: "uint64",
});
export function uint64(
  checks?: base.$ZodCheck<number>[]
): schemas.$ZodBigIntFormat;
export function uint64(
  params?: string | $ZodBigIntFormatParams,
  checks?: base.$ZodCheck<number>[]
): schemas.$ZodBigIntFormat;
export function uint64(...args: any): schemas.$ZodBigIntFormat {
  return _uint64(...args);
}

// boolean
interface $ZodBooleanParams
  extends util.TypeParams<schemas.$ZodBoolean<boolean>> {}
const _boolean = util.factory(schemas.$ZodBoolean, { type: "boolean" }) as any;
export function boolean(
  checks?: base.$ZodCheck<boolean>[]
): schemas.$ZodBoolean<boolean>;
export function boolean(
  params?: string | $ZodBooleanParams,
  checks?: base.$ZodCheck<boolean>[]
): schemas.$ZodBoolean<boolean>;
export function boolean(...args: any): schemas.$ZodBoolean<boolean> {
  return _boolean(...args) as any;
}

// symbol
type $ZodSymbolParams = util.TypeParams<schemas.$ZodSymbol>;
const _symbol = util.factory(schemas.$ZodSymbol, { type: "symbol" }) as any;
export function symbol(checks?: base.$ZodCheck<symbol>[]): schemas.$ZodSymbol;
export function symbol(
  params?: string | $ZodSymbolParams,
  checks?: base.$ZodCheck<symbol>[]
): schemas.$ZodSymbol;
export function symbol(...args: any): schemas.$ZodSymbol {
  return _symbol(...args) as any;
}

// date
type $ZodDateParams = util.TypeParams<schemas.$ZodDate>;
const _date = util.factory(schemas.$ZodDate, { type: "date" });
export function date(checks?: base.$ZodCheck<Date>[]): schemas.$ZodDate;
export function date(
  params?: string | $ZodDateParams,
  checks?: base.$ZodCheck<Date>[]
): schemas.$ZodDate;
export function date(...args: any): schemas.$ZodDate {
  return _date(...args) as any;
}

// undefined
type $ZodUndefinedParams = util.TypeParams<schemas.$ZodUndefined>;
const _undefinedFactory = util.factory(schemas.$ZodUndefined, {
  type: "undefined",
});
export function _undefined(
  checks?: base.$ZodCheck<undefined>[]
): schemas.$ZodUndefined;
export function _undefined(
  params?: string | $ZodUndefinedParams,
  checks?: base.$ZodCheck<undefined>[]
): schemas.$ZodUndefined;
export function _undefined(...args: any): schemas.$ZodUndefined {
  return _undefinedFactory(...args) as any;
}
export { _undefined as undefined };

// null
type $ZodNullParams = util.TypeParams<schemas.$ZodNull>;
const _nullFactory = util.factory(schemas.$ZodNull, { type: "null" });
export function _null(checks?: base.$ZodCheck<null>[]): schemas.$ZodNull;
export function _null(
  params?: string | $ZodNullParams,
  checks?: base.$ZodCheck<null>[]
): schemas.$ZodNull;
export function _null(...args: any): schemas.$ZodNull {
  return _nullFactory(...args) as any;
}
export { _null as null };

// any
type $ZodAnyParams = util.TypeParams<schemas.$ZodAny>;
const _any = util.factory(schemas.$ZodAny, { type: "any" });
export function any(checks?: base.$ZodCheck<any>[]): schemas.$ZodAny;
export function any(
  params?: string | $ZodAnyParams,
  checks?: base.$ZodCheck<any>[]
): schemas.$ZodAny;
export function any(...args: any): schemas.$ZodAny {
  return _any(...args) as any;
}

// unknown
type $ZodUnknownParams = util.TypeParams<schemas.$ZodUnknown>;
const _unknown = util.factory(schemas.$ZodUnknown, { type: "unknown" });
export function unknown(
  checks?: base.$ZodCheck<unknown>[]
): schemas.$ZodUnknown;
export function unknown(
  params?: string | $ZodUnknownParams,
  checks?: base.$ZodCheck<unknown>[]
): schemas.$ZodUnknown;
export function unknown(...args: any): schemas.$ZodUnknown {
  return _unknown(...args) as any;
}

// never
type $ZodNeverParams = util.TypeParams<schemas.$ZodNever>;
const _never = util.factory(schemas.$ZodNever, { type: "never" });
export function never(checks?: base.$ZodCheck<never>[]): schemas.$ZodNever;
export function never(
  params?: string | $ZodNeverParams,
  checks?: base.$ZodCheck<never>[]
): schemas.$ZodNever;
export function never(...args: any): schemas.$ZodNever {
  return _never(...args) as any;
}

// void
type $ZodVoidParams = util.TypeParams<schemas.$ZodVoid>;
const _voidFactory = util.factory(schemas.$ZodVoid, { type: "void" });
export function _void(checks?: base.$ZodCheck<void>[]): schemas.$ZodVoid;
export function _void(
  params?: string | $ZodVoidParams,
  checks?: base.$ZodCheck<void>[]
): schemas.$ZodVoid;
export function _void(...args: any): schemas.$ZodVoid {
  return _voidFactory(...args) as any;
}
export { _void as void };

// array
interface $ZodArrayParams
  extends util.TypeParams<schemas.$ZodArray, "element"> {}
export function array<T extends base.$ZodType>(
  element: T,
  params?: $ZodArrayParams
): schemas.$ZodArray<T>;
export function array<T extends base.$ZodType>(
  element: T | (() => T),
  params?: $ZodArrayParams
): schemas.$ZodArray<T> {
  return new schemas.$ZodArray({
    type: "array",
    get element() {
      return typeof element === "function" ? element() : element;
    },
    ...util.normalizeTypeParams(params),
  }) as schemas.$ZodArray<T>;
}

interface $ZodObjectParams
  extends util.TypeParams<schemas.$ZodObject, "shape"> {}

// object
export function object<T extends schemas.$ZodShape>(
  shape: T,
  params?: $ZodObjectParams
): schemas.$ZodObjectClassic<T>;
export function object<T extends schemas.$ZodShape>(
  shape: T,
  params?: $ZodObjectParams
) {
  // const qout = new Set(
  //   Reflect.ownKeys(shape).filter((k) => {
  //     return shape[k]["~qout"] === "true";
  //   })
  // );
  // const _qin = new Set(
  //   Reflect.ownKeys(shape).filter((k) => {
  //     return shape[k]["~qin"] === "true";
  //   })
  // );
  const def: schemas.$ZodObjectDef = {
    type: "object",
    shape,
    qout: util.optionalObjectKeys(shape),
    ...util.normalizeTypeParams(params),
  };
  return new schemas.$ZodObject(def) as any;
}

// strictObject
interface $ZodStrictObjectParams
  extends util.TypeParams<schemas.$ZodObject, "shape" | "catchall"> {}
export function strictObject<T extends schemas.$ZodShape>(
  shape: T,
  params?: $ZodStrictObjectParams
): schemas.$ZodObjectClassic<T> {
  const def: schemas.$ZodObjectDef = {
    type: "object",
    shape: shape as schemas.$ZodShape,
    qout: util.optionalObjectKeys(shape),
    catchall: never(),
    ...util.normalizeTypeParams(params),
  };
  return new schemas.$ZodObject(def) as schemas.$ZodObjectClassic<T>;
}

// looseObject
interface $ZodLooseObjectParams
  extends util.TypeParams<schemas.$ZodObject, "shape" | "catchall"> {}
export function looseObject<T extends schemas.$ZodShape>(
  shape: T,
  params?: $ZodLooseObjectParams
): schemas.$ZodObjectClassic<T> {
  const def: schemas.$ZodObjectDef = {
    type: "object",
    shape: shape as schemas.$ZodShape,
    qout: util.optionalObjectKeys(shape),
    catchall: unknown(),
    ...util.normalizeTypeParams(params),
  };
  return new schemas.$ZodObject(def) as schemas.$ZodObjectClassic<T>;
}

// interface

export function _interface<T extends schemas.$ZodRawShape>(
  shape: T,
  params?: $ZodObjectParams
): schemas.$ZodInterface<
  schemas.$InferInterfaceOutput<T>,
  schemas.$InferInterfaceInput<T>
> {
  const def: schemas.$ZodObjectDef = {
    type: "object",
    get shape() {
      return util.cleanInterfaceShape(shape);
    },
    get qout() {
      return util.optionalInterfaceKeys(shape);
    },
    ...util.normalizeTypeParams(params),
  };
  return new schemas.$ZodObject(def) as any;
}
export { _interface as interface };

// strictInterface
interface $ZodStrictInterfaceParams
  extends util.TypeParams<schemas.$ZodObject, "shape" | "catchall"> {}
export function strictInterface<T extends schemas.$ZodRawShape>(
  shape: T,
  params?: $ZodStrictInterfaceParams
): schemas.$ZodInterface<
  schemas.$InferInterfaceOutput<T>,
  schemas.$InferInterfaceInput<T>
> {
  const def: schemas.$ZodObjectDef = {
    type: "object",
    get shape() {
      return util.cleanInterfaceShape(shape);
    },
    get qout() {
      return util.optionalInterfaceKeys(shape);
    },
    catchall: never(),
    ...util.normalizeTypeParams(params),
  };
  return new schemas.$ZodObject(def) as any;
}

// looseInterface
interface $ZodLooseInterfaceParams
  extends util.TypeParams<schemas.$ZodObject, "shape" | "catchall"> {}
export function looseInterface<T extends schemas.$ZodRawShape>(
  shape: T,
  params?: $ZodLooseInterfaceParams
): schemas.$ZodInterface<
  schemas.$InferInterfaceOutput<T>,
  schemas.$InferInterfaceInput<T>
> {
  const def: schemas.$ZodObjectDef = {
    type: "object",
    get shape() {
      return util.cleanInterfaceShape(shape);
    },
    get qout() {
      return util.optionalInterfaceKeys(shape);
    },
    catchall: unknown(),
    ...util.normalizeTypeParams(params),
  };
  return new schemas.$ZodObject(def) as any;
}

// .keyof
export function keyof<T extends schemas.$ZodObject>(
  schema: T
): schemas.$ZodEnum<util.KeyOf<T["~def"]["shape"]>> {
  return _enum(Object.keys(schema["~def"].shape)) as any;
}

// .extend
export function extend<
  T extends schemas.$ZodObjectClassic,
  U extends schemas.$ZodShape,
>(schema: T, shape: U): schemas.$ZodObjectClassic<T["~def"]["shape"] & U>;
export function extend<
  T extends schemas.$ZodInterface,
  U extends schemas.$ZodShape,
>(
  schema: T,
  shape: U
): schemas.$ZodInterface<
  Omit<T["~output"], keyof U> & schemas.$InferInterfaceOutput<U>,
  Omit<T["~input"], keyof U> & schemas.$InferInterfaceInput<U>
>;
export function extend(
  schema: schemas.$ZodObject,
  shape: schemas.$ZodShape
): schemas.$ZodObject {
  return schema.clone({
    ...schema["~def"],
    shape: { ...schema["~def"].shape, ...shape },
    checks: [],
  }) as any;
}

// .merge
export function merge<
  T extends schemas.$ZodObject,
  U extends schemas.$ZodObject,
>(
  base: T,
  incoming: U
): schemas.$ZodObject<T["~def"]["shape"] & U["~def"]["shape"]> {
  return incoming.clone({
    ...incoming["~def"], // incoming overrides properties on base
    shape: { ...base["~def"].shape, ...incoming["~def"].shape },
    checks: [],
  }) as any;
}

// .pick
type Mask<Keys extends PropertyKey> = { [K in Keys]?: true };
export function pick<
  T extends schemas.$ZodObject,
  M extends util.Exactly<Mask<keyof T["~def"]["shape"]>, M>,
>(
  schema: T,
  mask: M
): schemas.$ZodObject<
  Pick<T["~def"]["shape"], Extract<keyof T["~def"]["shape"], keyof M>>
> {
  const shape: schemas.$ZodShape = {};
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
  T extends schemas.$ZodObject,
  M extends util.Exactly<Mask<keyof T["~def"]["shape"]>, M>,
>(
  schema: T,
  mask: M
): schemas.$ZodObject<
  Omit<T["~def"]["shape"], Extract<keyof T["~def"]["shape"], keyof M>>
> {
  const shape: schemas.$ZodShape = { ...schema["~def"].shape };
  for (const key in mask) delete (shape as any)[key];
  return schema.clone({
    ...schema["~def"],
    shape,
    checks: [],
  }) as any;
}

// .partial
export function partial<T extends schemas.$ZodObject>(
  schema: T
): schemas.$ZodObject<{
  [k in keyof T["~def"]["shape"]]: schemas.$ZodOptional<T["~def"]["shape"][k]>;
}> {
  const shape: schemas.$ZodShape = {};
  for (const key in schema["~def"].shape) {
    shape[key] = optional(schema["~def"].shape[key]);
  }
  return schema.clone({
    ...schema["~def"],
    shape,
    checks: [],
  }) as any;
}

// lazy
export function lazy<T extends object>(getter: () => T): T {
  return util.createTransparentProxy<T>(getter);
}

// union
interface $ZodUnionParams
  extends util.TypeParams<schemas.$ZodUnion, "options"> {}
export function union<const T extends base.$ZodType[]>(
  options: T,
  params?: $ZodUnionParams
): schemas.$ZodUnion<T> {
  return new schemas.$ZodUnion({
    type: "union",
    options,
    ...util.normalizeTypeParams(params),
  }) as schemas.$ZodUnion<T>;
}

// discriminatedUnion
export interface $ZodHasDiscriminator extends base.$ZodType {
  "~disc": base.$DiscriminatorMap;
}
interface $ZodDiscriminatedUnionParams
  extends util.TypeParams<schemas.$ZodDiscriminatedUnion, "options"> {}
export function discriminatedUnion<
  Types extends [$ZodHasDiscriminator, ...$ZodHasDiscriminator[]],
>(
  options: Types,
  params?: $ZodDiscriminatedUnionParams
): schemas.$ZodDiscriminatedUnion<Types> {
  return new schemas.$ZodDiscriminatedUnion({
    type: "union",
    options,
    ...util.normalizeTypeParams(params),
  }) as schemas.$ZodDiscriminatedUnion<Types>;
}

// intersection
interface $ZodIntersectionParams
  extends util.TypeParams<schemas.$ZodIntersection, "left" | "right"> {}
export function intersection<T extends base.$ZodType, U extends base.$ZodType>(
  left: T,
  right: U,
  params?: $ZodIntersectionParams
): schemas.$ZodIntersection<T, U> {
  return new schemas.$ZodIntersection({
    type: "intersection",
    left,
    right,
    ...util.normalizeTypeParams(params),
  }) as schemas.$ZodIntersection<T, U>;
}

// tuple
type $ZodTupleParams = util.TypeParams<schemas.$ZodTuple, "items">;

export function tuple<T extends [base.$ZodType, ...base.$ZodType[]]>(
  items: T,
  params?: $ZodTupleParams
): schemas.$ZodTuple<T, null>;
export function tuple<
  T extends [base.$ZodType, ...base.$ZodType[]],
  Rest extends base.$ZodType,
>(items: T, rest: Rest, params?: $ZodTupleParams): schemas.$ZodTuple<T, Rest>;
export function tuple(
  items: base.$ZodType[],
  _paramsOrRest?: $ZodTupleParams | base.$ZodType,
  _params?: $ZodTupleParams
) {
  const hasRest = _paramsOrRest instanceof base.$ZodType;
  const params = hasRest ? _params : _paramsOrRest;
  const rest = hasRest ? _paramsOrRest : null;
  return new schemas.$ZodTuple({
    type: "tuple",
    items,
    rest,
    ...util.normalizeTypeParams(params),
  });
}

// record
interface $ZodRecordParams
  extends util.TypeParams<schemas.$ZodRecord, "keySchema" | "valueSchema"> {}
export function record<
  Key extends schemas.$ZodPropertyKey,
  Value extends base.$ZodType,
>(
  keySchema: Key,
  valueSchema: Value,
  params?: $ZodRecordParams
): schemas.$ZodRecord<Key, Value> {
  return new schemas.$ZodRecord({
    type: "record",
    keySchema,
    valueSchema,
    ...util.normalizeTypeParams(params),
  }) as schemas.$ZodRecord<Key, Value>;
}

// map
interface $ZodMapParams
  extends util.TypeParams<schemas.$ZodMap, "keyType" | "valueType"> {}
export function map<Key extends base.$ZodType, Value extends base.$ZodType>(
  keyType: Key,
  valueType: Value,
  params?: $ZodMapParams
): schemas.$ZodMap<Key, Value> {
  return new schemas.$ZodMap({
    type: "map",
    keyType,
    valueType,
    ...util.normalizeTypeParams(params),
  }) as schemas.$ZodMap<Key, Value>;
}

// set
type $ZodSetParams = util.TypeParams<schemas.$ZodSet, "valueType">;
export function set<Value extends base.$ZodType>(
  valueType: Value,
  params?: $ZodSetParams
): schemas.$ZodSet<Value> {
  return new schemas.$ZodSet({
    type: "set",
    valueType,
    ...util.normalizeTypeParams(params),
  }) as schemas.$ZodSet<Value>;
}

// enum
type $ZodEnumParams = util.TypeParams<schemas.$ZodEnum, "entries">;
export function _enum<const T extends string[]>(
  values: T,
  params?: $ZodEnumParams
): schemas.$ZodEnum<util.ToEnum<T[number]>> {
  const entries: util.EnumLike = {};
  for (const val of values) {
    entries[val] = val;
  }

  return new schemas.$ZodEnum({
    type: "enum",
    entries,
    ...util.normalizeTypeParams(params),
  }) as any as schemas.$ZodEnum<util.ToEnum<T[number]>>;
}
export { _enum as enum };

// nativeEnum
// interface $ZodNativeEnumParams
//   extends util.TypeParams<schemas.$ZodNativeEnum, "entries"> {}
export function nativeEnum<T extends util.EnumLike>(
  entries: T,
  params?: $ZodEnumParams
): schemas.$ZodEnum<T> {
  return new schemas.$ZodEnum({
    type: "enum",
    entries,
    ...util.normalizeTypeParams(params),
  }) as any as schemas.$ZodEnum<T>;
}

// literal
interface $ZodLiteralParams
  extends util.TypeParams<schemas.$ZodLiteral, "literals"> {}
export function literal<const T extends util.Literal | util.Literal[]>(
  value: T,
  params?: $ZodLiteralParams
): schemas.$ZodLiteral<T extends util.Literal ? [T] : T> {
  return new schemas.$ZodLiteral({
    type: "enum",
    literals: Array.isArray(value) ? value : [value],
    ...util.normalizeTypeParams(params),
  }) as schemas.$ZodLiteral<T extends util.Literal ? [T] : T>;
}

// envbool
interface $ZodEnvBoolParams extends util.TypeParams {
  true?: string[];
  false?: string[];
  insensitive?: boolean;
  error?: string | errors.$ZodErrorMap<errors.$ZodIssueInvalidUnion>; // | errors.$ZodIssueInvalidType
}

export function envbool(params?: $ZodEnvBoolParams) {
  // : schemas.$ZodCatch<
  //   schemas.$ZodUnion<
  //     [
  //       schemas.$ZodSuccess<schemas.$ZodLiteral<string[]>>,
  //       schemas.$ZodSuccess<schemas.$ZodLiteral<string[]>>,
  //       schemas.$ZodNull,
  //     ]
  //   >
  // >
  const trueValues = new Set(params?.true ?? ["true", "1", "yes", "on"]);
  const falseValues = new Set(params?.false ?? ["false", "0", "no", "off"]);
  return custom((_input) => {
    if (typeof _input === "string") {
      const data: string = params?.insensitive ? _input.toLowerCase() : _input;
      if (trueValues.has(data)) return true;
      if (falseValues.has(data)) return false;
    }
    return null;
  });
  // return _catch(
  //   union(
  //     [
  //       success(preprocess(String,literal(trueValues))),
  //       success(literal(falseValues)).check(overwrite((val) => !val)),
  //       _null(),
  //     ],
  //     params
  //   ),
  //   null
  // );
}

// json
export type JSONType =
  | string
  | number
  | boolean
  | null
  | JSONType[]
  | { [key: string]: JSONType };

export interface $ZodJSONSchema
  extends schemas.$ZodUnion<
    [
      schemas.$ZodString<string>,
      schemas.$ZodNumber<number>,
      schemas.$ZodBoolean<boolean>,
      schemas.$ZodNull,
      schemas.$ZodArray<$ZodJSONSchema>,
      schemas.$ZodRecord<schemas.$ZodString<string>, $ZodJSONSchema>,
    ]
  > {
  "~input": JSONType;
  "~output": JSONType;
}

export function json(): $ZodJSONSchema {
  const jsonSchema = lazy(() => {
    return union([
      string(),
      number(),
      boolean(),
      _null(),
      array(jsonSchema),
      record(string(), jsonSchema),
    ]);
  }) as $ZodJSONSchema;

  return jsonSchema;
}

// truthy
type $ZodTruthyParams = util.TypeParams<schemas.$ZodBoolean>;
export function truthy(
  params?: $ZodTruthyParams
): schemas.$ZodPipeline<
  schemas.$ZodEffect<boolean, unknown>,
  schemas.$ZodBoolean
> {
  return preprocess((val) => Boolean(val), boolean(params));
}

// file
type $ZodFileParams = util.TypeParams<schemas.$ZodFile>;
const _file = util.factory(schemas.$ZodFile, { type: "file" });
export function file(checks?: base.$ZodCheck<File>[]): schemas.$ZodFile;

export function file(
  params?: string | $ZodFileParams,
  checks?: base.$ZodCheck<File>[]
): schemas.$ZodFile;
export function file(...args: any): schemas.$ZodFile {
  return _file(...args) as any;
}

// effect
interface $ZodEffectParams
  extends util.TypeParams<schemas.$ZodEffect, "effect"> {}
export function effect<O = unknown, I = unknown>(
  effect: (input: I, ctx?: base.$ParseContext) => O,
  params?: $ZodEffectParams
): schemas.$ZodEffect<O, I> {
  return new schemas.$ZodEffect({
    type: "effect",
    effect: effect as any,
    ...util.normalizeTypeParams(params),
  }) as schemas.$ZodEffect<O, I>;
}

// preprocess
type $ZodPreprocessParams = util.Flatten<$ZodEffectParams & $ZodPipelineParams>;
export function preprocess<T, U extends base.$ZodType<unknown, T>>(
  fn: (arg: unknown) => T,
  schema: U,
  params?: $ZodPreprocessParams
): schemas.$ZodPipeline<schemas.$ZodEffect<T, unknown>, U> {
  return pipeline(effect(fn, params), schema, params);
}

// transform
// rewrite to use pipeline and effect
interface $ZodTransformParams extends $ZodEffectParams, $ZodPipelineParams {}
export function transform<T extends base.$ZodType, NewOut>(
  schema: T,
  fn: (arg: base.output<T>) => NewOut,
  params?: $ZodTransformParams
): schemas.$ZodPipeline<
  T,
  schemas.$ZodEffect<Awaited<NewOut>, base.output<T>>
> {
  return pipeline(schema, effect(fn, params), params) as any;
}

// optional
interface $ZodOptionalParams
  extends util.TypeParams<schemas.$ZodOptional, "innerType"> {}
export function optional<T extends base.$ZodType>(
  innerType: T,
  params?: $ZodOptionalParams
): schemas.$ZodOptional<T>;
export function optional<T>(
  innerType: T,
  params?: $ZodOptionalParams
  // @ts-ignore
): schemas.$ZodOptional<T>;
export function optional<T extends base.$ZodType>(
  innerType: T,
  params?: $ZodOptionalParams
): schemas.$ZodOptional<T> {
  return new schemas.$ZodOptional({
    type: "optional",
    innerType,
    ...util.normalizeTypeParams(params),
  }) as schemas.$ZodOptional<T>;
}

// nullable
interface $ZodNullableParams
  extends util.TypeParams<schemas.$ZodNullable, "innerType"> {}
export function nullable<T extends base.$ZodType>(
  innerType: T,
  params?: $ZodNullableParams
): schemas.$ZodNullable<T> {
  return new schemas.$ZodNullable({
    type: "nullable",
    innerType,
    ...util.normalizeTypeParams(params),
  }) as schemas.$ZodNullable<T>;
}

// success
interface $ZodSuccessParams
  extends util.TypeParams<schemas.$ZodSuccess, "innerType"> {}
export function success<T extends base.$ZodType>(
  innerType: T,
  params?: $ZodSuccessParams
): schemas.$ZodSuccess<T> {
  return new schemas.$ZodSuccess({
    type: "success",
    innerType,
    ...util.normalizeTypeParams(params),
  }) as schemas.$ZodSuccess<T>;
}

// default
interface $ZodDefaultParams
  extends util.TypeParams<schemas.$ZodDefault, "innerType"> {}
export function _default<T extends base.$ZodType>(
  innerType: T,
  defaultValue: base.output<T> | (() => base.output<T>),
  params?: $ZodDefaultParams
): schemas.$ZodDefault<T> {
  return new schemas.$ZodDefault({
    type: "default",
    innerType,
    defaultValue:
      defaultValue instanceof Function ? defaultValue : () => defaultValue,
    ...util.normalizeTypeParams(params),
  }) as schemas.$ZodDefault<T>;
}

// catch
interface $ZodCatchParams
  extends util.TypeParams<schemas.$ZodCatch, "innerType"> {}
export function _catch<T extends base.$ZodType>(
  innerType: T,
  catchValue: base.output<T> | (() => base.output<T>),
  params?: $ZodCatchParams
): schemas.$ZodCatch<T> {
  return new schemas.$ZodCatch({
    type: "catch",
    innerType,
    catchValue: catchValue instanceof Function ? catchValue : () => catchValue,
    ...util.normalizeTypeParams(params),
  }) as schemas.$ZodCatch<T>;
}
export { _catch as catch };

// nan
type $ZodNaNParams = util.TypeParams<schemas.$ZodNaN>;
const _nan = util.factory(schemas.$ZodNaN, { type: "nan" });
export function nan(checks?: base.$ZodCheck<number>[]): schemas.$ZodNaN;
export function nan(
  params?: string | $ZodNaNParams,
  checks?: base.$ZodCheck<number>[]
): schemas.$ZodNaN;
export function nan(...args: any): schemas.$ZodNaN {
  return _nan(...args) as any;
}

// pipeline
type $ZodPipelineParams = util.TypeParams<schemas.$ZodPipeline, "in" | "out">;
export function pipeline<
  T extends base.$ZodType,
  U extends base.$ZodType<any, T["~output"]>,
>(
  in_: T,
  // fn: (arg: base.output<T>) => base.input<U>,
  out: U,
  params?: $ZodPipelineParams
): schemas.$ZodPipeline<T, U> {
  return new schemas.$ZodPipeline({
    type: "pipeline",
    in: in_,
    out,
    ...util.normalizeTypeParams(params),
  }) as schemas.$ZodPipeline<T, U>;
}

// readonly
interface $ZodReadonlyParams
  extends util.TypeParams<schemas.$ZodReadonly, "innerType"> {}
export function readonly<T extends base.$ZodType>(
  innerType: T,
  params?: $ZodReadonlyParams
): schemas.$ZodReadonly<T> {
  return new schemas.$ZodReadonly({
    type: "readonly",
    innerType,
    ...util.normalizeTypeParams(params),
  }) as schemas.$ZodReadonly<T>;
}

// templateLiteral
interface $ZodTemplateLiteralParams
  extends util.TypeParams<schemas.$ZodTemplateLiteral, "parts"> {}
export function templateLiteral<
  const Parts extends schemas.$TemplateLiteralPart[],
>(
  parts: Parts,
  params?: $ZodTemplateLiteralParams
): schemas.$ZodTemplateLiteral<schemas.$PartsToTemplateLiteral<Parts>> {
  return new schemas.$ZodTemplateLiteral({
    type: "template_literal",
    parts,
    ...util.normalizeTypeParams(params),
  }) as any;
}

//////////    CUSTOM     //////////
interface CustomParams extends util.CheckTypeParams<schemas.$ZodCustom, "fn"> {
  path?: PropertyKey[];
}
// {
//   error?: string | errors.$ZodErrorMap<errors.$ZodIssueCustom>;
//   path?: PropertyKey[];
// }

export function custom<T = unknown>(
  fn?: (data: T) => unknown,
  _params?: string | CustomParams
): schemas.$ZodCustom<T> {
  const params = util.normalizeCheckParams(_params);

  const c = new schemas.$ZodCustom({
    type: "custom",
    check: "custom",
    fn: fn ? (fn as any) : () => true,
    ...params,
  }) as schemas.$ZodCustom<T>;
  return c;
}

//////////    INSTANCEOF     //////////

abstract class Class {
  constructor(..._args: any[]) {}
}
function _instanceof<T extends typeof Class>(
  cls: T,
  params: CustomParams = {
    error: `Input not instance of ${cls.name}`,
  }
): schemas.$ZodCustom<InstanceType<T>> {
  return custom((data) => data instanceof cls, params);
}
export { _instanceof as instanceof };

//////////    REFINES     //////////

function customIssue(
  err: Pick<
    errors.$ZodIssueData<errors.$ZodIssueCustom>,
    "input" | "path" | "def" | "message"
  >
): errors.$ZodIssueData {
  return {
    code: "custom",
    origin: "custom",
    ...err,
  };
}

function handleRefineResult(
  result: unknown,
  final: base.$ZodResultWithIssues,
  input: unknown,
  def: util.Normalize<RefineParams>,
  path: PropertyKey[] = []
): void | Promise<void> {
  if (!result) {
    final.issues.push(customIssue({ input, def, path }));
    if (def.abort) final.aborted = true;
  }
}

interface RefineParams extends CustomParams {
  abort?: boolean;
}
export function refine<T>(
  fn: (arg: T) => unknown | Promise<unknown>,
  _params: string | RefineParams = {}
): base.$ZodCheck<T> {
  const params = util.normalizeCheckParams(_params);

  return {
    "~def": { check: "custom", error: params.error },
    run2(ctx) {
      const result = fn(ctx.value);
      if (result instanceof Promise)
        return result.then((result) => {
          handleRefineResult(result, ctx, ctx.value, params);
        });

      return handleRefineResult(result, ctx, ctx.value, params);
    },
  };
}

export function superRefine<T>(
  fn: (arg: T, ctx: util.RefinementCtx) => void | Promise<void>
): base.$ZodCheck<T> {
  return {
    "~def": { check: "custom" },
    run2(ctx) {
      const result = fn(ctx.value, {
        addIssue(issue) {
          if (typeof issue === "string") {
            ctx.issues.push(
              customIssue({
                input: ctx.value,
                message: issue,
                def: undefined,
              })
            );
          } else ctx.issues.push(issue);
        },
        abort() {
          ctx.aborted = true;
        },
      });
      return result;
    },
  };
}

///////////        METHODS       ///////////

export function parse<T extends base.$ZodType>(
  schema: T,
  data: unknown,
  ctx?: base.$ParseContext
): base.output<T> {
  const result = schema["~parse"](data, ctx);
  if (result instanceof Promise) {
    throw new Error(
      "Encountered Promise during synchronous .parse(). Use .parseAsync() instead."
    );
  }

  if (result.issues?.length) {
    throw base.$finalize(result.issues!, ctx);
  }
  return result.value as base.output<T>;
}

export function safeParse<T extends base.$ZodType>(
  schema: T,
  data: unknown,
  ctx?: base.$ParseContext
): util.SafeParseResult<base.output<T>> {
  const result = schema["~parse"](data, ctx);

  if (result instanceof Promise)
    throw new Error(
      "Encountered Promise during synchronous .parse(). Use .parseAsync() instead."
    );
  return (
    base.$failed(result)
      ? { success: false, error: base.$finalize(result.issues, ctx) }
      : { success: true, data: result.value }
  ) as util.SafeParseResult<base.output<T>>;
}

export async function parseAsync<T extends base.$ZodType>(
  schema: T,
  data: unknown,
  ctx?: base.$ParseContext
): Promise<base.output<T>> {
  let result = schema["~parse"](data, ctx);
  if (result instanceof Promise) result = await result;
  if (base.$failed(result)) throw base.$finalize(result.issues);
  return result.value as base.output<T>;
}

export async function safeParseAsync<T extends base.$ZodType>(
  schema: T,
  data: unknown,
  ctx?: base.$ParseContext
): Promise<util.SafeParseResult<base.output<T>>> {
  let result = schema["~parse"](data, ctx);
  if (result instanceof Promise) result = await result;
  return (
    base.$failed(result)
      ? { success: false, error: base.$finalize(result.issues, ctx) }
      : { success: true, data: result.value }
  ) as util.SafeParseResult<base.output<T>>;
}

////////    CHECKS   ////////
export type $ZodCheckLessThanParams = util.CheckParams<
  checks.$ZodCheckLessThan,
  "inclusive" | "value"
>;

// type $ZodCheckLessThanParams = util.CheckParams<checks.$ZodCheckLessThan>;
export function lt(
  value: util.Numeric,
  params?: string | $ZodCheckLessThanParams
): checks.$ZodCheckLessThan<util.Numeric> {
  return new checks.$ZodCheckLessThan({
    check: "less_than",
    ...util.normalizeCheckParams(params),
    value,
    inclusive: false,
  });
}

export function lte(
  value: util.Numeric,
  params?: string | $ZodCheckLessThanParams
): checks.$ZodCheckLessThan<util.Numeric> {
  return new checks.$ZodCheckLessThan({
    check: "less_than",
    ...util.normalizeCheckParams(params),
    value,
    inclusive: true,
  });
}

export type $ZodCheckGreaterThanParams = util.CheckParams<
  checks.$ZodCheckGreaterThan,
  "inclusive" | "value"
>;

export function gt(
  value: util.Numeric,
  params?: string | $ZodCheckGreaterThanParams
): checks.$ZodCheckGreaterThan {
  return new checks.$ZodCheckGreaterThan({
    check: "greater_than",
    ...util.normalizeCheckParams(params),
    value,
    inclusive: false,
  });
}

export function gte(
  value: util.Numeric,
  params?: string | $ZodCheckGreaterThanParams
): checks.$ZodCheckGreaterThan {
  return new checks.$ZodCheckGreaterThan({
    check: "greater_than",
    ...util.normalizeCheckParams(params),
    value,
    inclusive: true,
  });
}

// multipleOf
export type $ZodCheckMultipleOfParams = util.CheckParams<
  checks.$ZodCheckMultipleOf,
  "value"
>;
export function multipleOf(
  value: number | bigint,
  params?: string | $ZodCheckMultipleOfParams
): checks.$ZodCheckMultipleOf {
  return new checks.$ZodCheckMultipleOf({
    check: "multiple_of",
    ...util.normalizeCheckParams(params),
    value,
  });
}

// positive

export function positive(
  params?: string | $ZodCheckGreaterThanParams
): checks.$ZodCheckGreaterThan {
  return gt(0, params);
}

// negative
export function negative(
  params?: string | $ZodCheckLessThanParams
): checks.$ZodCheckLessThan {
  return lt(0, params);
}

// nonpositive
export function nonpositive(
  params?: string | $ZodCheckLessThanParams
): checks.$ZodCheckLessThan {
  return lte(0, params);
}

// nonnegative
export function nonnegative(
  params?: string | $ZodCheckGreaterThanParams
): checks.$ZodCheckGreaterThan {
  return gte(0, params);
}

// finite
export type $ZodCheckFiniteParams = util.CheckParams<checks.$ZodCheckFinite>;
export function finite(
  params?: string | $ZodCheckFiniteParams
): checks.$ZodCheckFinite {
  return new checks.$ZodCheckFinite({
    check: "finite",
    ...util.normalizeCheckParams(params),
  });
}

export type $ZodCheckMaxSizeParams = util.CheckParams<
  checks.$ZodCheckMaxSize,
  "maximum"
>;
export function maxSize(
  maximum: number,
  params?: string | $ZodCheckMaxSizeParams
): checks.$ZodCheckMaxSize<util.Sizeable> {
  return new checks.$ZodCheckMaxSize({
    check: "max_size",
    ...util.normalizeCheckParams(params),
    maximum,
  });
}

export type $ZodCheckMinSizeParams = util.CheckParams<
  checks.$ZodCheckMinSize,
  "minimum"
>;
export function minSize(
  minimum: number,
  params?: string | $ZodCheckMinSizeParams
): checks.$ZodCheckMinSize<util.Sizeable> {
  return new checks.$ZodCheckMinSize({
    check: "min_size",
    ...util.normalizeCheckParams(params),
    minimum,
  });
}

export type $ZodCheckSizeEqualsParams = util.CheckParams<
  checks.$ZodCheckSizeEquals,
  "size"
>;
export function size(
  size: number,
  params?: string | $ZodCheckSizeEqualsParams
): checks.$ZodCheckSizeEquals<util.Sizeable> {
  return new checks.$ZodCheckSizeEquals({
    check: "size_equals",
    ...util.normalizeCheckParams(params),
    size,
  });
}

export type $ZodCheckRegexParams = util.CheckParams<
  checks.$ZodCheckRegex,
  "format" | "pattern"
>;
export function regex(
  pattern: RegExp,
  params?: string | $ZodCheckRegexParams
): checks.$ZodCheckRegex {
  return new checks.$ZodCheckRegex({
    check: "string_format",
    format: "regex",
    ...util.normalizeCheckParams(params),
    pattern,
  });
}

export type $ZodCheckIncludesParams = util.CheckParams<
  checks.$ZodCheckIncludes,
  "includes" | "format" | "pattern"
>;
export function includes(
  includes: string,
  params?: string | $ZodCheckIncludesParams
): checks.$ZodCheckIncludes {
  return new checks.$ZodCheckIncludes({
    check: "string_format",
    format: "includes",
    ...util.normalizeCheckParams(params),
    includes,
  });
}

export type $ZodCheckStartsWithParams = util.CheckParams<
  checks.$ZodCheckStartsWith,
  "prefix" | "format" | "pattern"
>;
export function startsWith(
  prefix: string,
  params?: string | $ZodCheckStartsWithParams
): checks.$ZodCheckStartsWith {
  return new checks.$ZodCheckStartsWith({
    check: "string_format",
    format: "starts_with",
    ...util.normalizeCheckParams(params),
    prefix,
  });
}

export type $ZodCheckEndsWithParams = util.CheckParams<
  checks.$ZodCheckEndsWith,
  "suffix" | "format" | "pattern"
>;

export function endsWith(
  suffix: string,
  params?: string | $ZodCheckEndsWithParams
): checks.$ZodCheckEndsWith {
  return new checks.$ZodCheckEndsWith({
    check: "string_format",
    format: "ends_with",
    ...util.normalizeCheckParams(params),
    suffix,
  });
}

interface $ZodCheckLowerCaseParams
  extends util.CheckParams<checks.$ZodCheckLowerCase, "format"> {}

export function lowercase(
  params?: string | $ZodCheckLowerCaseParams
): checks.$ZodCheckLowerCase {
  return new checks.$ZodCheckLowerCase({
    check: "string_format",
    format: "lowercase",
    ...util.normalizeCheckParams(params),
  });
}

interface $ZodCheckUpperCaseParams
  extends util.CheckParams<checks.$ZodCheckUpperCase, "format"> {}

export function uppercase(
  params?: string | $ZodCheckUpperCaseParams
): checks.$ZodCheckUpperCase {
  return new checks.$ZodCheckUpperCase({
    check: "string_format",
    format: "uppercase",
    ...util.normalizeCheckParams(params),
  });
}

// $ZodCheckFileName
// export function filename(
//   fileName: string,
//   params?: string | $ZodLiteralParams
// ): checks.$ZodCheckProperty {
//   return new checks.$ZodCheckProperty({
//     check: "property",
//     property: "name",
//     schema: literal(fileName, util.normalizeTypeParams(params)),
//   });
// }

// $ZodCheckFileType
// export function fileType(
//   fileTypes: util.MimeTypes | util.MimeTypes[],
//   params?: string | util.CheckParams
// ): checks.$ZodCheckFileType {
//   return new checks.$ZodCheckFileType({
//     check: "file_type",
//     fileTypes: typeof fileTypes === "string" ? [fileTypes] : fileTypes,
//     ...util.normalizeCheckParams(params),
//   });
// }
// export function fileType(
//   fileTypes: util.MimeTypes | util.MimeTypes[],
//   params?: string | util.CheckParams
// ): checks.$ZodCheckProperty {
//   return new checks.$ZodCheckProperty({
//     check: "property",
//     property: "type",
//     schema: literal(fileTypes, util.normalizeTypeParams(params)),
//   });
// }

////////    TRANSFORMS   ////////

export function overwrite<T>(
  tx: (input: T) => T
): checks.$ZodCheckOverwrite<T> {
  return new checks.$ZodCheckOverwrite({
    check: "overwrite",
    tx,
  }) as checks.$ZodCheckOverwrite<T>;
}

// normalize
export function normalize(
  form?: "NFC" | "NFD" | "NFKC" | "NFKD" | (string & {})
): checks.$ZodCheckOverwrite<string> {
  return overwrite((input) => input.normalize(form));
}

// trim
export function trim(): checks.$ZodCheckOverwrite<string> {
  return overwrite((input) => input.trim());
}
// toLowerCase
export function toLowerCase(): checks.$ZodCheckOverwrite<string> {
  return overwrite((input) => input.toLowerCase());
}
// toUpperCase
export function toUpperCase(): checks.$ZodCheckOverwrite<string> {
  return overwrite((input) => input.toUpperCase());
}

//////////     REGISTRIES     //////////
export function registry<
  T = undefined,
  S extends base.$ZodType = base.$ZodType,
>(): registries.$ZodRegistry<T, S> {
  return new registries.$ZodRegistry();
}

export function namedRegistry<
  T extends { name: string } = { name: string },
  S extends base.$ZodType = base.$ZodType,
>(): registries.$ZodNamedRegistry<T, S, {}> {
  return new registries.$ZodNamedRegistry();
}

export const globalRegistry: registries.$ZodRegistry<unknown> =
  /*@__PURE__*/ new registries.$ZodRegistry<unknown>();