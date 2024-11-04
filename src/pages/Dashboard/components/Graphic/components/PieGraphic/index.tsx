import { Chart } from 'react-google-charts'
import { GraphicContainer } from './styles'

interface PieGraphicProps {
    skinsOwned: number
    skinsMissing: number
    title?: string
}

export function PieGraphic({ skinsOwned, skinsMissing, title = "Gráfico" }: PieGraphicProps) {
    const data: (string  | number)[][] = [
        ['Skins', 'Quantidade'],
        ['Possuídas', skinsOwned],
        ['Faltando', skinsMissing]
    ]

    const options = {
        title: title,
        titleTextStyle: {
            color: 'white',
            fontSize: 20,
            bold: true,
            alignment: 'center'
        },
        pieHole: 0,
        colors: ['#00AB00', '#C53030'],
        pieSliceText: 'value',
        pieSliceTextStyle: {
            color: 'black',
            bold: true,
            fontSize: 12,
        },
        legend: { 
            position: 'bottom',
            alignment: 'center',
            textStyle: {
                color: 'white'
            }

        },
        backgroundColor: 'transparent',
    }

    return (
        <GraphicContainer>
            <Chart 
                chartType='PieChart'
                width="100%"
                height="100%"
                data={data}
                options={options}
            />
        </GraphicContainer>
    )
}