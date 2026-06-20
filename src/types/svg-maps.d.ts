declare module "@svg-maps/nigeria" {
  export interface SVGMapLocation {
    name: string;
    id: string;
    path: string;
  }

  export interface SVGMap {
    label: string;
    viewBox: string;
    locations: SVGMapLocation[];
  }

  const map: SVGMap;
  export default map;
}
