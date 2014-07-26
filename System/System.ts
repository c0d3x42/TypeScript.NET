﻿/*
 * @author electricessence / https://github.com/electricessence/
 * Liscensing: MIT https://github.com/electricessence/TypeScript.NET/blob/master/LICENSE
 */

module System {

	export var Functions = {
		Identity: function <T>(x: T): T { return x; },
		True: function (): boolean { return true; },
		Blank: function (): void { }
	};

	// const Type
	export var Types = {
		Boolean: typeof true,
		Number: typeof 0,
		String: typeof "",
		Object: typeof {},
		Null:typeof null,
		Undefined: typeof undefined,
		Function: typeof function () { }
	};

	export function isEqualToNaN(n: any): boolean {
		return typeof n == Types.Number && isNaN(n);
	}

	// Used for special equals cases like NaN.
	export function areEqual(a: any, b: any, strict?: boolean): boolean {
		return a === b || !strict && a == b || isEqualToNaN(a) && isEqualToNaN(b);
	}

	export function clone(source: any, depth: number = 0): any {
		if (depth < 0)
			return source;

		switch (typeof source) {
			case Types.Undefined:
			case Types.Null:
			case Types.String:
			case Types.Boolean:
			case Types.Number:
			case Types.Function:
				return source;// return primitives as is.
		}

		var result: any;
		if (source instanceof Array) {
			result = (<any>source).slice();
			if (depth > 0) {
				for (var i = 0; i < result.length; i++)
					if (i in result)
						result[i] = clone(result[i], depth - 1);
			}
		} else {
			result = {};
			if (depth > 0) for (var k in source) { //noinspection JSUnfilteredForInLoop
				result[k] = clone(source[k], depth - 1);
			}
		}

		return result;

	}

	export function copyTo(source: any, target: any): void {
		for (var k in source) { //noinspection JSUnfilteredForInLoop
			target[k] = source[k];
		}
	}

	export function applyMixins(derivedCtor: any, baseCtors: any[]):void {
		baseCtors.forEach(
			baseCtor => {
				Object.getOwnPropertyNames(baseCtor.prototype).forEach(
					name => {
						derivedCtor.prototype[name] = baseCtor.prototype[name];
					}
				)
			}
		);
	}
} 