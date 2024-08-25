
const Counter = ({data, add, deduct}) => {
	return(
		<div className="flex items-center space-x-4">
			<button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" onClick={deduct}>-</button>
			<p className="">The count is now {data}</p>
			<button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" onClick={add}>+</button>
		</div>
	);
};

export default Counter;
