import { useState } from 'react';
import Counter from './Counter';

const Executions = () => {

	let [data, setData] = useState(0);

	const add = () => {
		setData(data + 1);
	}

	const deduct = () => {
		setData(data - 1);
	}

  return (
    <div className='p-6 bg-white rounded shadow-lg'>
      <Counter data={data} add={add} deduct={deduct} />
    </div>
  );
};

export default Executions;
