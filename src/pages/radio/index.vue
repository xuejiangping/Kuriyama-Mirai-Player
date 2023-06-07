<script setup>
import { getRadio } from '@/api/api'
const router = useRouter()
const state = reactive({
	list: [],
	currentPage: 1
})
const {
	list,
	currentPage
} = toRefs(state)

onMounted(() => {
	getSongList()
})

const getSongList = async () => {
	const { data } = await getRadio({ limit: 30, offset: (state.currentPage - 1) * 30 })
	console.log("🚀 => file: index.vue:19 => data:", data)
	state.list = data.djRadios
}

// 改变页数触发
const handleCurrentChange = (e) => {
	getSongList()
}

</script>
<template>
	<div>
		<div class="content-section menuBar-mv">
			<div class="apps-card">
				<div class="apps-item" v-for="(item, idx) in list" :key="idx"
					@click="router.push({ path: '/playList', query: { id: item.id } })">
					<div class="app-card">
						<img :src="item.picUrl + '?param=200y200'" alt="">
					</div>
					<a href="javascript:;">{{ item.name }}</a>
				</div>
			</div>
		</div>
	</div>
</template>
<style lang='scss' scoped></style>
