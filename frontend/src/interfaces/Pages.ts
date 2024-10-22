export interface MetaDataLanguage {
  button: PageButton & { labelEs: string; labelEn: string }
  background: string
}

export interface LogoPage {
  alt: string
  path: string
}

export interface MetaDataHome {
  button: PageButton
  logoUp: LogoPage
  logoDown: LogoPage
  background: string
  logoHelp: LogoPage
  logoLang: LogoPage
}

export interface TextPage {
  title?: string
  description?: string
  phoneText?: string
  phone?: string
}
export interface MetaDataHelp {
  textDown: TextPage
  background: string
  textCenter: TextPage
}

export interface MetaDataExample {
  button: PageButton
  background: string
  centerImage: string
  description: string
}

export interface ItemList {
  title: string
  icon: string
  items: string[]
}

export interface PageButton {
  url: string
  label: string
  bgColor?: string
  fontSize: string
  borderRadious: string
  textColor: string
  borderColor?: string
}
export interface MetaDataConditions {
  lists: ItemList[]
  title: string
  button: PageButton
  background: string
  description: string
}

export interface MetaDatRewardCategories {
  name: string
  order: string
}

export interface MetaDataInsert {
  title: string
  background: string
  centerImage: string
  description: string
}

export interface MetaDataScanning {
  title: string
  background: string
  centerImage: string
  description: string
}

export interface RewardCategory {
  id: number
  name: string
  order: number
}

export interface MetaDataAccepted {
  title: string
  buttonUp: PageButton
  background: string
  buttonDown: PageButton
  centerImage: string
}

export interface MetaDataRejected {
  title: string
  background: string
  buttonUp: PageButton
  buttonCenter: PageButton
  buttonDown: PageButton & { title: string }
  centerImage: string
}

export interface MetaDataUnidentified {
  title: string
  background: string
  buttonUp: PageButton
  buttonDown: PageButton
}

export interface MetaDataAddBarcode {
  textDown: TextPage
  background: string
  textCenter: TextPage
}
