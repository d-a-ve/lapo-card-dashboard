export type DistributiveOmit<T, TOmitted extends keyof T> = T extends unknown
  ? Omit<T, TOmitted>
  : never;
