<script setup>
import { GlobalStore } from "@/stores/index";
import { useTheme } from "@/hooks/useTheme";
import { DEFAULT_PRIMARY } from "@/config/config";
import darkSwitch from "@/components/darkSwitch.vue";

const { changePrimary } = useTheme();
const globalstore = GlobalStore()
const themeConfig = computed(() => globalstore.themeConfig);
const state = reactive({
	list: [],
})
const {
	list,
} = toRefs(state)
const getAssetImgs = (imgname) => {
	return new URL(`../../static/img/thme/${imgname}`, import.meta.url).href
}
const preset = reactive([
	{
		colorName: '默认',
		colorUrl: '默认.png',
		gbrUrl: DEFAULT_PRIMARY
	},
	{
		colorName: '牡丹粉红',
		colorUrl: '牡丹粉红.png',
		gbrUrl: '#eea2a4'
	},
	{
		colorName: '栗紫',
		colorUrl: '栗紫.png',
		gbrUrl: '#5a191b'
	},
	{
		colorName: '香叶红',
		colorUrl: '香叶红.png',
		gbrUrl: '#f07c82'
	},
	{
		colorName: '艳红',
		colorUrl: '艳红.png',
		gbrUrl: '#ed5a65'
	},
	{
		colorName: '茶花红',
		colorUrl: '茶花红.png',
		gbrUrl: '#ee3f4d'
	},

])

const predefineColors = [
	DEFAULT_PRIMARY,
	'#ff4500',
	'#ff8c00',
	'#ffd700',
	'#90ee90',
	'#00ced1',
	'#1e90ff',
	'#c71585',
]

// 主题模板
const showTheme = (preset) => {
	globalstore.setThemeConfig({ ...themeConfig.value, primary: preset })
	changePrimary(themeConfig.value.primary)
}
// 更改主题
const changePrimarys = (e) => {
	const resultHex = rgbaToHex(e)
	changePrimary(resultHex)
}
/**
 * Rgba转换hex
 * @param rgba 颜色的字符串
 * @returns 返回处理后的颜色值
 */
function rgbaToHex(rgba) {
	const regex = /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)$/;
	const match = rgba.match(regex);
	if (!match) {
		throw new Error('Invalid RGBA string');
	}
	const r = parseInt(match[1], 10);
	const g = parseInt(match[2], 10);
	const b = parseInt(match[3], 10);
	const a = match[4] ? parseFloat(match[4]) : 1;
	const hex = ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
	return `#${hex}`;
}
</script>
<template>
	<div>
		<div class="content-section menuBar-mv">
			<div class="content-section-title">
				<h2 class="theme-h2">深色模式</h2>
				<div class="theme-preset">
					<div class="content-section">
						<darkSwitch />
					</div>
				</div>
			</div>
			<div class="content-section-title">
				<h2 class="theme-h2">主题</h2>
			</div>
			<div class="theme-preset">
				<div class="content-section">
					<div class="apps-card ">
						<div class="apps-item mv-text" v-for="(item, index) in preset" :key="index"
							@click="showTheme(item.gbrUrl)">
							<div class="app-card m-theme">
								<img :src="getAssetImgs(item.colorUrl)" alt="">
							</div>
							<a href="javascript:;">{{ item.colorName }}</a>
						</div>
					</div>
				</div>
			</div>
			<div class="content-section-title">
				<h2 class="theme-h2">自定义</h2>
			</div>
			<el-color-picker v-model="themeConfig.primary" show-alpha :predefine="predefineColors"
				@change="changePrimarys" />
			<div class="footer">
				Copyright © 2013 by Perchouli Shanzhai to Nipponcolors<br />
				参看: 色谱 中科院科技情报编委会名词室.科学出版社,1957. Adobe RGB / CMYK FOGRA39, Dot Gain 15% Screenshot沪ICP备17025116号-2
			</div>

		</div>
	</div>
</template>
<style lang='scss' scoped>
.theme-h2 {
	color: var(--theme-color);
}
</style>
