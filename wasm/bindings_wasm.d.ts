/* tslint:disable */
/* eslint-disable */
/**
* @param {string} code
* @param {boolean} allow_return_outside_function
* @param {boolean} typescript
* @returns {Uint8Array}
*/
export function parse(code: string, allow_return_outside_function: boolean, typescript: boolean): Uint8Array;
/**
* @param {Uint8Array} input
* @returns {string}
*/
export function xxhashBase64Url(input: Uint8Array): string;
/**
* @param {Uint8Array} input
* @returns {string}
*/
export function xxhashBase36(input: Uint8Array): string;
/**
* @param {Uint8Array} input
* @returns {string}
*/
export function xxhashBase16(input: Uint8Array): string;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly parse: (a: number, b: number, c: number, d: number, e: number) => void;
  readonly xxhashBase64Url: (a: number, b: number) => void;
  readonly xxhashBase36: (a: number, b: number) => void;
  readonly xxhashBase16: (a: number, b: number) => void;
  readonly __wbindgen_add_to_stack_pointer: (a: number) => number;
  readonly __wbindgen_export_0: (a: number, b: number) => number;
  readonly __wbindgen_export_1: (a: number, b: number, c: number, d: number) => number;
  readonly __wbindgen_export_2: (a: number, b: number, c: number) => void;
  readonly __wbindgen_export_3: (a: number) => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {SyncInitInput} module
*
* @returns {InitOutput}
*/
export function initSync(module: SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
export default function __wbg_init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
