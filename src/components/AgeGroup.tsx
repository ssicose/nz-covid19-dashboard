import * as React from 'react';
import { TotalData } from './Sex';
import { Doughnut } from 'react-chartjs-2';
import { TitledSection } from '../common/TiledSection';

const AgeGroup: React.FunctionComponent<TotalData> = ({ totalData }) => {
  const oneToFour = totalData.filter(a => a.ageGroup === ' 1 to 4  ').length;
  const fiveToNine = totalData.filter(a => a.ageGroup === ' 5 to 9  ').length;
  const lowTeens = totalData.filter(a => a.ageGroup === '10 to 14').length;
  const highTeens = totalData.filter(a => a.ageGroup === '15 to 19').length;
  const twenties = totalData.filter(a => a.ageGroup === '20 to 29').length;
  const thirtys = totalData.filter(a => a.ageGroup === '30 to 39').length;
  const fortys = totalData.filter(a => a.ageGroup === '40 to 49').length;
  const fiftys = totalData.filter(a => a.ageGroup === '50 to 59').length;
  const sixtys = totalData.filter(a => a.ageGroup === '60 to 69').length;
  const overSeventys = totalData.filter(a => a.ageGroup === '70+     ').length;

  // For a pie chart
  const data = {
    datasets: [
      {
        data: [
          oneToFour,
          fiveToNine,
          lowTeens,
          highTeens,
          twenties,
          thirtys,
          fortys,
          fiftys,
          sixtys,
          overSeventys,
        ],
        backgroundColor: [
          '#ED6A5A',
          '#F4F1BB',
          '#9BC1BC',
          '#5CA4A9',
          '#00A8E8',
          '#007EA7',
          '#EF476F',
          '#FFD166',
          '#06D6A0',
          '#118AB2',
        ],
      },
    ],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
      '1 to 4',
      '5 to 9',
      '10 to 14',
      '15 to 19',
      '20 to 29',
      '30 to 39',
      '40 to 49',
      '50 to 59',
      '60 to 69',
      '70+',
    ],
  };

  return (
    <TitledSection title="Age group">
      <Doughnut
        data={data}
        width={500}
        height={400}
        options={{
          responsive: false,
          maintainAspectRatio: true,
          legend: {
            display: true,
            labels: {
              fontColor: '#FFFFFF',
              fontSize: 10,
            },
          },
        }}
      ></Doughnut>
    </TitledSection>
  );
};

export default AgeGroup;
