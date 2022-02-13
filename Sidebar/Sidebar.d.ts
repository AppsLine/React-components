export type props = {
  nav: {
    options: NavOptionProps[]
  }
};

export type NavOptionProps = {
  icon: string,
  title: string,
  path?: string,
  onClick?: () => boolean,
  options?: NavOptionOptionsProps[],
  activePath?: string[]
}

export type NavOptionOptionsProps = {
  icon: string,
  title: string,
  path?: string,
  onClick?: () => boolean,
}

declare const Sidebar: (props: props) => JSX.Element;

export default Sidebar;