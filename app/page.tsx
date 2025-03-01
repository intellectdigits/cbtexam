import { promises as fs } from 'fs';
export default async function Page() {
	const data = await fs.readFile(process.cwd() + '/app/dat.txt', 'utf8');
	

	
	return <div>My Post: {data}</div>
  }