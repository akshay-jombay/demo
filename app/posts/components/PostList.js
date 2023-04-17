function PostList({data}) {
	const renderData = data.map(x => <h3>{x.name}</h3>)
	return (
		<>
			{renderData}
		</>
	)
}

export default PostList