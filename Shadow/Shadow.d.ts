type props = {
    active: boolean,
    children: never[] | JSX.Element[] | JSX.Element,
    design?: 'default' | 'dark'
};

declare const Preloader: (props: props) => JSX.Element;

export default Preloader;