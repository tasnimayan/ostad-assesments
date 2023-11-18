import StatCard from './StatCard';
import './statList.style.css'

import counter from '../../public/database/counter.json';

const StatList = () => {
  return (
    <section className="stat-section" style={{marginRight:0}}>
      <div className="row g-4 d-flex justify-content-center">
        {
          counter.map((el, idx) => <StatCard key={idx} data={el} />)
        }
      </div>
    </section>
  );
};

export default StatList;