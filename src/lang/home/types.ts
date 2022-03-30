export interface HeaderList {
	title: string
	url?: string
}

export interface FooterList {
	title: string
	url?: string
}

export interface FooterTerms {
	title: string
	url?: string
}

export interface HomeData {
	title: string
	headerList: Array<HeaderList>
	footerList: Array<FooterList>
	footerTerms: Array<FooterTerms>
}
