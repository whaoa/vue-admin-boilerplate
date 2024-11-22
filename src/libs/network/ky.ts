import ky from 'ky';

import type { Input, Options } from 'ky';

const base = ky.create({
  throwHttpErrors: true,
  retry: 1,
});

export const service = base.extend({});

export function $service<T = unknown>(input: Input, options?: Options) {
  return service(input, options).json<T>();
}
