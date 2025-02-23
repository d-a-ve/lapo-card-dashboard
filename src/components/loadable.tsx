import { FunctionComponent, Suspense } from "react";

export const Loadable =
  <P extends object>(Component: FunctionComponent<P>) =>
  (props: P) => (
    <Suspense
      fallback={
        <div className="fixed top-0 left-0 z-10 h-1 w-3/5 animate-loader rounded-e-lg bg-primary"></div>
      }
    >
      <Component {...props} />
    </Suspense>
  );
