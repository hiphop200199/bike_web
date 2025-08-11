import router from '@/router'
import { computed, onMounted } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { useMemberStore } from '@/stores/member'
import { useLoadingStore } from '@/stores/loading'

export default {
  setup() {
    const memberStore = useMemberStore()
    const authStore = useAuthStore()
    const loadingStore = useLoadingStore()
    const info = computed(() => memberStore.info)

    const getInfo = async () => {
      loadingStore.open()
      await memberStore.get(authStore.userInfo.id)
      loadingStore.close()
    }

    const checkOrder = () => {
      router.push('/order')
    }
    onMounted(async () => {
      await getInfo()
    })

    return { info, checkOrder }
  },
}
