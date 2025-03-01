import { promises as fs } from 'fs';
export default async function Page({
	params,
  }: {
	params: Promise<{ id: string }>
  }) {
	const data = await fs.readFile(process.cwd() + '/app/dat.txt', 'utf8');
	

	
	return <div>My Post: {data}</div>
  }