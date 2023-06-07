<script setup>
import { songPlaylist } from '@/api/api'
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
	const { data } = await songPlaylist({ limit: 30, offset: (state.currentPage - 1) * 30 })
	state.list = data
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
				<div class="apps-item" v-for="(item, idx) in list.playlists" :key="idx"
					@click="router.push({ path: '/playList', query: { id: item.id } })">
					<div class="app-card">
						<img :src="item.coverImgUrl + '?param=200y200'" alt="">
					</div>
					<a href="javascript:;">{{ item.name }}</a>
				</div>
			</div>
			<div class="pagination">
				<el-pagination @current-change="handleCurrentChange" v-model:currentPage="currentPage" :page-size="30"
					layout="prev, pager, next, jumper" :total="state.list.total">
				</el-pagination>
			</div>
		</div>
	</div>
</template>
<style lang='scss' scoped></style>
