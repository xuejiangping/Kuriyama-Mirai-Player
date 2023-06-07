<script setup>
import { playListDetail, commentDetail } from '@/api/api'
import musicTable from "@/components/musicTable.vue";
import commentsCard from "@/components/comments-card.vue";
const route = useRoute()
const state = reactive({
	list: [],
	playlists: {
		creator: {
			nickname: "",
			avatarUrl: ""
		},
		trackIds: []
	},
	tableData: [],
	activeName: "first",
	commList: {
		comments: [{
			user: {
				avatarUrl: "",
				nickname: ""
			},
			ipLocation: {
				location: ""
			}
		}]
	},
	loading: true
})
const {
	list,
	playlists,
	tableData,
	activeName,
	commList,
	loading
} = toRefs(state)

onMounted(() => {
	playList()
})
watch(() => route.query.id, () => {
	if (!route.query.id) return
	playList()
})
const playList = () => {
	state.loading = true
	nextTick(async () => {
		// 1.加载歌单数据
		const { data } = await playListDetail(route.query.id)
		state.playlists = data.playlist
		// 2.加载歌单的歌曲
		state.tableData = data.playlist.tracks.map(item => {
			const names = item.ar.map(subItem => subItem.name).join(',');
			return {
				cover: item.al.picUrl,
				title: item.name,
				singer: names,
				album: item.al.name,
				time: item.dt,
				id: item.id,
				mv: item.mv
			}
		})
		state.loading = false
		// 3.加载评论
		const result = await commentDetail({ id: route.query.id, limit: 20, offset: 0 })
		state.commList = result.data
	})
}

const handleClick = (idx) => {
	// console.log("🚀 => file: index.vue:45 => idx:", idx)
}
</script>
<template>
	<div>
		<div>
			<div class="content-section menuBar-mv">
				<el-skeleton :rows="5" animated :loading="loading">
					<template #default>
						<div class="m-artist">
							<div class="artist-avatar">
								<el-image :src="playlists.coverImgUrl + '?param=250y250'"></el-image>
							</div>
							<div class="artist-name">
								<h2 class="artist-h2">{{ playlists.name }}</h2>
								<div class="listcover">
									<el-avatar :size="30" :src="playlists.creator.avatarUrl + '?param=60y60'"></el-avatar>
									<a href="javascript:;">{{ playlists.creator.nickname }}</a>
								</div>
								<div class="tags">
									<el-tag class="tags-item" v-for="(item1, index) in playlists.tags" :key="index">{{ item1
									}}</el-tag>
								</div>
								<p> {{ playlists.description }}</p>
							</div>
						</div>
						<el-tabs v-model="activeName" @tab-click="handleClick">
							<el-tab-pane name="first">
								<template #label>
									<span><i class="el-icon-date"></i> 歌单({{ playlists.trackIds.length }})</span>
								</template>
								<musicTable :data="tableData"></musicTable>
							</el-tab-pane>
							<el-tab-pane name="second">
								<template #label>
									<span><i class="el-icon-date"></i> 评论({{ commList.total }})</span>
								</template>
								<div class="content-section " style="margin-top: 0;">
									<div class="apps-card">
										<div class="app-card usercom" v-for="(item, index) in commList.comments"
											:key="index">
											<span>
												<el-image class="useravatar" :src="item.user.avatarUrl + '?param=32y32'"
													alt=""></el-image>
												{{ item.user.nickname }}
											</span>
											<div class="app-card__subtext">{{ item.content }}</div>
											<div class="app-card__footer" v-if="item.ipLocation.location">
												<span>IP:{{ item.ipLocation.location }}</span>
												<span>{{ item.timeStr }}</span>
											</div>
										</div>
									</div>
								</div>
							</el-tab-pane>
						</el-tabs>
					</template>
				</el-skeleton>
			</div>
		</div>
	</div>
</template>
<style lang='scss' scoped></style>
