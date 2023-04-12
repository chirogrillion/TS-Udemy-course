// run: node dist/*.js

//
// define argument type:

type Arg1<FunctionType> = FunctionType extends (first: infer A, ...others: any[]) => any ? A : never;

type Arg2<ConstructorType> = ConstructorType extends { new(first: infer B, ...others: any[]): any } ? B : never;

//
// derive union type from array values:

const sizes = ['small', 'medium', 'large'] as const;
type S = typeof sizes[number];

//