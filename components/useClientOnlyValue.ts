// always return client value since react native has no ssr
export function useClientOnlyValue<S, C>(server: S, client: C): S | C {
  return client;
}
