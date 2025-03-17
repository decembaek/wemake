export namespace Route {
  export interface LayoutProps {
    children: React.ReactNode;
  }

  export interface LoaderArgs {
    request: Request;
    params: Record<string, string>;
  }

  export interface ActionArgs extends LoaderArgs {
    formData: FormData;
  }

  export interface ComponentProps<T = unknown, U = unknown> {
    loaderData: T;
    actionData?: U;
  }

  export type MetaFunction = () => Array<Record<string, string>>;
}
