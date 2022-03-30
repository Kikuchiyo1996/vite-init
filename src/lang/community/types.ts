export interface CommunityTabs {
	ProductUseTutorial: string
	communityActivity: string
	course: string
	TheUserWorks: string
	ForGoods: string
}
export interface CommunityUserList {
	name: string
	url: string
	clickColor: boolean
}

export interface ImgList {
	text: string
	imgUrl: string
	mp4Url: string
	IfPlay: boolean
	IfShadow: boolean
}
export interface CommunityActivityImg {
	imgUrl: string
	url: string
}

export interface Community {
	communityTabs: CommunityTabs
	communityUserList: Array<CommunityUserList>
	imgList: Array<ImgList>
	communityActivityImg: Array<CommunityActivityImg>
}
