import type { Config } from '@jest/types';

export default {
  preset: 'ts-jest',
  testEnvironment: 'node',
  detectLeaks: true,
  logHeapUsage: true,
  verbose: true,
} as Config.InitialOptions;
