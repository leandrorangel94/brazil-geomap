import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';
import { EChartsOption } from 'echarts';
import * as brasilMap from '../../assets/json/south-america.json';

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
            { name: 'br-sp', value: 10 },
            { name: 'br-ma', value: 11 },
            { name: 'br-pa', value: 12 },
            { name: 'br-sc', value: 13 },
            { name: 'br-ba', value: 14 },
            { name: 'br-ap', value: 15 },
            { name: 'br-ms', value: 16 },
            { name: 'br-mg', value: 17 },
            { name: 'br-go', value: 18 },
            { name: 'br-rs', value: 19 },
            { name: 'br-to', value: 20 },
            { name: 'br-pi', value: 21 },
            { name: 'br-al', value: 22 },
            { name: 'br-pb', value: 23 },
            { name: 'br-ce', value: 24 },
            { name: 'br-se', value: 25 },
            { name: 'br-rr', value: 26 },
            { name: 'br-pe', value: 27 },
            { name: 'br-pr', value: 28 },
            { name: 'br-es', value: 29 },
            { name: 'br-rj', value: 30 },
            { name: 'br-rn', value: 31 },
            { name: 'br-am', value: 32 },
            { name: 'br-mt', value: 33 },
            { name: 'br-df', value: 34 },
            { name: 'br-ac', value: 35 },
            { name: 'br-ro', value: 36 },
          ],
        },
      ],
    };
  }
}
