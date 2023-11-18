import Image from 'next/image'
import Link from "next/link"
import { prisma } from "../db"

export default async function Home() {
  const toblog = await prisma.toblog.findMany()

  return (
    <>
      <header className="flex justify-between items-center mb-4">
         <h1 className="text-3xl">Blogs</h1>
         <Link className="border border-slate-300 text-slate-300 x-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slte-700 outline-none text-2xl" href="/new">Add New Blog
         </Link>
      </header>

      <ul className='p1-4'>
      {toblog.map(toblog => (
        <li key={toblog.id}>{toblog.title}</li>))}
      </ul>
    </>
    )
  
  }
