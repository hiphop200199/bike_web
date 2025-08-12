import { onMounted, ref } from 'vue'
import { useLoadingStore } from '@/stores/loading'
import { useRoute } from 'vue-router'
import { useApi } from '@/apis'

export default {
  setup() {
    const loadingStore = useLoadingStore()
    const route = useRoute()
    const sessionId = ref('')
    const getSessionId = async () => {
      sessionId.value = route.query.session_id ? route.query.session_id : ''
    }
    const callSuccess = async () => {
      const params = {
        session_id: sessionId.value,
      }
      loadingStore.open()
      await useApi.cart.success(params)
      loadingStore.close()
    }
    onMounted(async () => {
      await getSessionId()
      await callSuccess()
    })

    return {}
  },
}
