function head(value: string): string;
function head(value: number[]): number;
function head(value: boolean[]): boolean;
function head(value: any): any {
  return value[0];
}

const tests = [head('string'), head([222, 11, 0]), head([false, true])];
console.log(tests);