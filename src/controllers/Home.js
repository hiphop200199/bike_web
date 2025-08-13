import { useProductStore } from '@/stores/product'
import { computed, onMounted } from 'vue'
import { useLoadingStore } from '@/stores/loading'
import { useBannerStore } from '@/stores/banner'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const bannerStore = useBannerStore()
    const productStore = useProductStore()
    const loadingStore = useLoadingStore()

    const newestList = computed(() => productStore.list)
    const bannerList = computed(() => bannerStore.list)

    const getBannerList = async function () {
      loadingStore.open()
      await bannerStore.getAllList()
      loadingStore.close()
    }

    const getList = async function () {
      loadingStore.open()
      await productStore.getNewestList()
      loadingStore.close()
    }

    onMounted(async () => {
      await getList()
      await getBannerList()
    })

    return {
      modules: [Navigation, Pagination],
      newestList,
      bannerList,
    }
  },
}
