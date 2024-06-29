export default async function sleep(time: number = 0) {
	return new Promise<void>((r) => setTimeout(r, time));
}
