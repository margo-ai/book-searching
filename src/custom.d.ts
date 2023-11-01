// declare module '*.svg' {
//     const content: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
//     export default content;
// }

declare module '*.svg' {
    const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
    const content: string;

    export { ReactComponent };
    export default content;
}
