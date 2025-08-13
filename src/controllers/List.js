import { useConstant } from '@/constants'
import { useProductStore } from '@/stores/product'
import { computed, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Pagination from '@/components/Pagination.vue'
import { useLoadingStore } from '@/stores/loading'

export default {
  components: {
    Pagination,
  },
  setup() {
    const productStore = useProductStore()
    const route = useRoute()
    const router = useRouter()
    const loadingStore = useLoadingStore()
    const vendor = ref('')
    const vendorName = ref('')
    const list = computed(() => productStore.list)
    const pagination = computed(() => productStore.pagination)

    const defaultSearchQuery = {
      page: '1',
      perpage: '10',
      vendor: '',
    }

    const searchQuery = JSON.parse(JSON.stringify(defaultSearchQuery))

    const getQuery = async () => {
      searchQuery.page = route.query.page ? route.query.page : defaultSearchQuery.page
      searchQuery.vendor = route.params.vendor ? route.params.vendor : defaultSearchQuery.vendor
      router.push({ query: searchQuery })
    }
    const setPage = async (page) => {
      searchQuery.page = page
      router.push({ query: searchQuery })
    }
    const getList = async () => {
      loadingStore.open()
      await productStore.getList(searchQuery)
      loadingStore.close()
    }

    watch(
      () => route,
      async (val) => {
        if (val !== undefined) {
          await getQuery()
          await getList(searchQuery)
          vendor.value = route.params.vendor
          switch (route.params.vendor) {
            case '1':
              vendorName.value = 'GIANT'
              break
            case '2':
              vendorName.value = 'Merida'
              break
            case '3':
              vendorName.value = 'BESV'
              break
            case '4':
              vendorName.value = 'Tern'
              break
            default:
              break
          }
        }
      },
      { deep: true, immediate: true },
    )

    return {
      list,
      pagination,
      setPage,
      vendor,
      vendorName,
      useConstant,
    }
  },
}
