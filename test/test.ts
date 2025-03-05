import * as codegen from '../src/index'

const input = `
export interface A {
  x: number
  y: string
  z: boolean
}

export interface B extends Omit<A,"x" | "y"> {
  a: number
}
`
const generatedTs = codegen.TypeScriptToTypeBox.Generate(input, { useIdentifiers: true })

console.log(generatedTs)
