export type DomainJson =
  | string
  | number
  | boolean
  | null
  | { [key: string]: DomainJson }
  | DomainJson[];
