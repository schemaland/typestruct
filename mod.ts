// Copyright 2022-latest Tomoki Miyauchi. All rights reserved. MIT license.
// This module is browser compatible.

export { StructError } from "./error.ts";
export {
  type CheckOptions,
  type Infer,
  type Showable,
  type Struct,
} from "./types.ts";
export {
  array,
  bigint,
  boolean,
  func,
  instance,
  number,
  object,
  string,
  symbol,
  value,
} from "./structs/cores.ts";
export { omit, partial, pick, record } from "./structs/utils.ts";
export {
  empty,
  int,
  list,
  maximum,
  maxSize,
  minimum,
  minSize,
  nonempty,
  pattern,
  size,
  tuple,
  validDate,
} from "./structs/subsets.ts";
export { assert, is, validate, type ValidateResult } from "./checks.ts";
export {
  and,
  type Intersection,
  not,
  or,
  type Union,
} from "./structs/operators.ts";
