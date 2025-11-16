/**
 * 主题初始化脚本
 * 在 HTML 加载时立即执行，恢复用户保存的所有设置
 * 避免 hydration 闪烁
 */
(function () {
	function hexToHue(hex) {
		const h = hex.replace('#', '')
		const r = Number.parseInt(h.substring(0, 2), 16) / 255
		const g = Number.parseInt(h.substring(2, 4), 16) / 255
		const b = Number.parseInt(h.substring(4, 6), 16) / 255

		const max = Math.max(r, g, b)
		const min = Math.min(r, g, b)
		let h_val = 0

		if (max !== min) {
			const d = max - min
			switch (max) {
				case r:
					h_val = ((g - b) / d + (g < b ? 6 : 0)) / 6
					break
				case g:
					h_val = ((b - r) / d + 2) / 6
					break
				case b:
					h_val = ((r - g) / d + 4) / 6
					break
			}
		}

		return Math.round(h_val * 360)
	}

	const THEME_COLORS = {
		zhilu: '#1a1aff',
		pink: '#ff1a8c',
		green: '#3d6421',
		orange: '#ff8400',
		red: '#ff1a1a',
		violet: '#b31aff',
		yellow: '#e0ca02',
		brown: '#a0522d',
	}

	try {
		// 1. 恢复主题色
		const savedColor = localStorage.getItem('themeColor')
		if (savedColor) {
			let hex
			if (savedColor.startsWith('custom:')) {
				hex = savedColor.slice(7)
			}
			else if (savedColor in THEME_COLORS) {
				hex = THEME_COLORS[savedColor]
			}

			if (hex) {
				const hue = hexToHue(hex)
				document.documentElement.style.setProperty('--hue-theme', `${hue}deg`)
			}
		}

		// 2. 存储其他设置到 window，供 Vue 组件快速访问
		window.__THEME_SETTINGS__ = {
			showAIExcerpt: localStorage.getItem('showAIExcerpt') !== 'false',
			showFeaturedArticles: localStorage.getItem('showFeaturedArticles') !== 'false',
			showComments: localStorage.getItem('showComments') !== 'false',
			showMusicLyrics: localStorage.getItem('showMusicLyrics') !== 'false',
			showMusicTranslation: localStorage.getItem('showMusicTranslation') !== 'false',
			language: localStorage.getItem('language') || 'simplified',
		}

		// 3. 恢复字体设置
		const fontPreference = localStorage.getItem('fontPreference') || 'wenkai'
		const FONT_VALUES = {
			wenkai: '"LXGW WenKai Screen", "Inter", "Noto Sans SC-Local", "Noto Sans SC", system-ui, sans-serif',
			system: 'system-ui, -apple-system, "Segoe UI", Roboto, "Noto Sans SC", sans-serif',
		}
		if (fontPreference in FONT_VALUES) {
			document.documentElement.style.setProperty('--font-basic', FONT_VALUES[fontPreference])
		}
	}
	catch {
		// 忽略错误
	}
})()
