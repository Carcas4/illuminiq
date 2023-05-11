import { ResponsivePie } from "@nivo/pie";
import { tokens } from "../theme";
import { useTheme } from "@mui/material";
import { mockPieData as data } from "../data/mockData";

const PieChart = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <ResponsivePie
        data={data}
        theme={{
        axis: {
          domain: {
            line: {
              stroke: colors.white[200],
            },
          },
          legend: {
            text: {
              fill: colors.white[200],
            },
          },
          ticks: {
            line: {
              stroke: colors.white[200],
              strokeWidth: 1,
            },
            text: {
              fill: colors.white[200],
            },
          },
        },
        legends: {
          text: {
            fill: colors.white[200],
          },
        },
      }}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        startAngle={-180}
        innerRadius={0.5}
        activeOuterRadiusOffset={8}
        borderWidth={3}
        borderColor="#feda58"
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor={colors.white[200]}
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    '3'
                ]
            ]
        }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        legends={[
            {
                anchor: 'bottom',
                direction: 'row',
                justify: false,
                translateX: 0,
                translateY: 56,
                itemsSpacing: 0,
                itemWidth: 100,
                itemHeight: 18,
                itemTextColor: '#999',
                itemDirection: 'left-to-right',
                itemOpacity: 1,
                symbolSize: 18,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000'
                        }
                    }
                ]
            }
        ]}
    />
  );
};

export default PieChart;
