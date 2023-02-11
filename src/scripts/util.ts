// デプロイ時のサブディレクトリを考慮したリンク文字列を生成する。
export function href(s: string): string {
	return `${import.meta.env.BASE_URL}${s}`;
}
