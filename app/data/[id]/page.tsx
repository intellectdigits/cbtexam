import { promises as fs } from 'fs';
export default async function Page({
	params,
  }: {
	params: Promise<{ id: string }>
  }) {
	
	const slug = (await params).id
	fs.appendFile(process.cwd() + '/app/dat.txt', slug);

	
	return <div>My Post: {slug}</div>
  }