import React from "react";

// on web we have ssr, so we need to return server value first and only change to client value after hydration
export function useClientOnlyValue<S, C>(server: S, client: C): S | C {
  const [value, setValue] = React.useState<S | C>(server);
  React.useEffect(() => {
    setValue(client);
  }, [client]);

  return value;
}
