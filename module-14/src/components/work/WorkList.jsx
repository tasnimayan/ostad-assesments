
import './workList.style.css'
import workData from '../../../public/database/workList.json'
import WorkCard from './WorkCard';
import { useState } from 'react';

const WorkList = () => {
  
  const [ data] = useState(workData);

  return (
    <section>
      <div>
        <p className="section-title">WORK LIST</p>
        <p className="section-slogan">We provide the Perfect Solution to your business growth</p>
      </div>

      <div className='row py-4'>
        {data.map((el)=> <WorkCard key={el.id} data={el} /> )}
      </div>

    </section>
  );
};

export default WorkList;