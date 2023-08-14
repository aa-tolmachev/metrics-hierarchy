import { ElementType, Suspense } from "react";

export const Loadable = (Component: ElementType) => (props: object) => {
  return (
    <Suspense>
      <Component {...props} />
    </Suspense>
  );
};
