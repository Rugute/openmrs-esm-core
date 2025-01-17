declare module "@carbon/react";

declare namespace JSX {
  interface IntrinsicElements {
    "import-map-overrides-list": any;
  }
}

declare module "*.css" {
  const styles: any;
  export default styles;
}

declare module "*.scss" {
  const styles: any;
  export default styles;
}

declare type SideNavProps = {};
