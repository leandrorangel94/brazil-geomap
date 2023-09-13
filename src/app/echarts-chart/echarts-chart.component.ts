import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';
import { EChartsOption } from 'echarts';
import * as brasilMap from '../../assets/json/bra.json';

@Component({
  selector: 'app-echarts-chart',
  templateUrl: './echarts-chart.component.html',
  styleUrls: ['./echarts-chart.component.scss'],
})
export class EchartsChartComponent implements OnInit {
  mapOption: EChartsOption = {};
  brasil = JSON.stringify(brasilMap);

  ngOnInit(): void {
    this.mapFunction();
  }

  mapFunction(): void {
    console.log(JSON.parse(this.brasil));
    echarts.registerMap('Brasil', JSON.parse(this.brasil));
    this.mapOption = {
      title: {
        text: 'População Estimada do Brasil',
        subtext: 'Dados da minha cabeça',
        left: 'right',
      },
      tooltip: {
        trigger: 'item',
        showDelay: 0,
        transitionDuration: 0.2,
      },
      visualMap: {
        left: 'right',
        min: 500000,
        max: 38000000,
        inRange: {
          color: [
            '#313695',
            '#4575b4',
            '#74add1',
            '#abd9e9',
            '#e0f3f8',
            '#ffffbf',
            '#fee090',
            '#fdae61',
            '#f46d43',
            '#d73027',
            '#a50026',
          ],
        },
        text: ['High', 'Low'],
        calculable: true,
      },
      toolbox: {
        show: true,
        //orient: 'vertical',
        left: 'left',
        top: 'top',
        feature: {
          dataView: { readOnly: false },
          restore: {},
          saveAsImage: {},
        },
      },
      series: [
        {
          name: 'Brazil PopEstimates',
          type: 'map',
          map: 'Brasil',
          // projection: {
          //   project: function (point) {
          //     return projection(point);
          //   },
          //   unproject: function (point) {
          //     return projection.invert(point);
          //   },
          // },
          emphasis: {
            label: {
              show: true,
            },
          },
          data: [
            { name: 'Acre', value: 1000000 },
            { name: 'Alagoas', value: 2000000 },
            { name: 'Amapá', value: 1500000 },
            { name: 'Amazonas', value: 3000000 },
            { name: 'Bahia', value: 8000000 },
            { name: 'Ceará', value: 6000000 },
            { name: 'Distrito Federal', value: 3000000 },
            { name: 'Espírito Santo', value: 3500000 },
            { name: 'Goiás', value: 4000000 },
            { name: 'Maranhão', value: 7000000 },
            { name: 'Mato Grosso', value: 4500000 },
            { name: 'Mato Grosso do Sul', value: 2500000 },
            { name: 'Minas Gerais', value: 10000000 },
            { name: 'Pará', value: 8000000 },
            { name: 'Paraíba', value: 2500000 },
            { name: 'Paraná', value: 7000000 },
            { name: 'Pernambuco', value: 4500000 },
            { name: 'Piauí', value: 1500000 },
            { name: 'Rio de Janeiro', value: 9000000 },
            { name: 'Rio Grande do Norte', value: 2500000 },
            { name: 'Rio Grande do Sul', value: 7000000 },
            { name: 'Rondônia', value: 2000000 },
            { name: 'Roraima', value: 1000000 },
            { name: 'Santa Catarina', value: 3500000 },
            { name: 'São Paulo', value: 12000000 },
            { name: 'Sergipe', value: 1500000 },
            { name: 'Tocantins', value: 2000000 },
          ],
        },
      ],
    };
  }
}
