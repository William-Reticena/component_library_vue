export interface UIComponentInfosType {
  infos: UILayoutInfosType
  component: 'drawer' | 'footer' | 'header'
}

export interface UILayoutInfosType {
  drawer?: DrawerInfosType
  footer?: FooterInfosType
  header?: HeaderInfosType
}

export interface DrawerInfosType {
  side: 'left' | 'right'
  width: string
}

export interface HeaderInfosType {
  height: string
  position: 'back' | 'front'
}

export interface FooterInfosType {
  height: string
}
