export interface MetaDataLanguage {
  button: PageButton & { labelEs: string; labelEn: string }
  imgBg: string
}

export interface MetaDataHome {
  button: PageButton
  imgUp: string
  imgDown: string
  imgBg: string
  imgHelp: string
  imgLang: string
}

export interface TextPage {
  title?: string
  description?: string
  phoneText?: string
  phone?: string
}
export interface MetaDataHelp {
  textDown: TextPage
  imgBg: string
  textCenter: TextPage
}

export interface MetaDataExample {
  button: PageButton
  imgBg: string
  imgCenter: string
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
  imgBg: string
  description: string
}

export interface MetaDatRewardCategories {
  name: string
  order: string
}

export interface MetaDataInsert {
  title: string
  imgBg: string
  imgCenter: string
  description: string
}

export interface MetaDataScanning {
  title: string
  imgBg: string
  imgCenter: string
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
  imgBg: string
  buttonDown: PageButton
  imgCenter: string
}

export interface MetaDataRejected {
  title: string
  imgBg: string
  buttonUp: PageButton
  buttonCenter: PageButton
  buttonDown: PageButton & { title: string }
  imgCenter: string
}

export interface MetaDataUnidentified {
  title: string
  imgBg: string
  buttonUp: PageButton
  buttonDown: PageButton
}

export interface MetaDataAddBarcode {
  textDown: TextPage
  imgBg: string
  textCenter: TextPage
}
