'use client';
console.log("call Post")

import data from '../../data/coffee-stores.json'
import PostList from './components/PostList.js'

console.log(data)

export default function Posts() {
  return (
    <div>
      <PostList data={data} />
    </div>
  );
}