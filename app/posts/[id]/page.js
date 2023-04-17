// 'use client'
import data from '../../../data/coffee-stores.json'

async function getById(id) {
  const res = data.find(x=>x.id == id)
  return {
    props: {
      res: res
    }
  }
}

export function generateStaticParams() {
  console.log("generateStaticParams")
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
  ];
}

console.log(process.env.NEXT_PUBLIC_Test_Name)

export default async function PostById({params, props}) {
  console.log(props)
  console.log(params)
  console.log(await getById(params.id))
  return (
    <div>
      Hello World
    </div>
  );
}