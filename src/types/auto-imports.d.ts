declare global {
	const acceptHMRUpdate: typeof import('pinia')['acceptHMRUpdate']
	const createPinia: typeof import('pinia')['createPinia']
	const defineStore: typeof import('pinia')['defineStore']
	const getActivePinia: typeof import('pinia')['getActivePinia']
	const mapActions: typeof import('pinia')['mapActions']
	const mapGetters: typeof import('pinia')['mapGetters']
	const mapState: typeof import('pinia')['mapState']
	const mapStores: typeof import('pinia')['mapStores']
	const mapWritableState: typeof import('pinia')['mapWritableState']
	const setActivePinia: typeof import('pinia')['setActivePinia']
	const setMapStoreSuffix: typeof import('pinia')['setMapStoreSuffix']
	const storeToRefs: typeof import('pinia')['storeToRefs']
	const useRoute: typeof import('vue-router')['useRoute']
	const useRouter: typeof import('vue-router')['useRouter']
}
export {}
