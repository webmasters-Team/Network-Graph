var celticColor = "#7becb2",
  italicColor = "#ecb27b",
  indoIranianColor = "#ec7bb6";

Highcharts.chart('container', {

  chart: {
    type: 'networkgraph',
    marginTop: 80
  },

  title: {
    text: 'The Indo-European Language Tree'
  },

  subtitle: {
    text: 'A Force-Directed Network Graph in Highcharts'
  },

  plotOptions: {
    networkgraph: {
      keys: ['from', 'to'],
      layoutAlgorithm: {
        enableSimulation: true,
        integration: 'verlet',
        linkLength: 100
      }
    }
  },

  series: [{
    marker: {
      radius: 13,
    },
    dataLabels: {
      enabled: true,
      linkFormat: '',
      allowOverlap: true
    },
    data: [
      ['Proto Indo-European', 'Balto-Slavic'],
      ['Proto Indo-European', 'Germanic'],
      ['Proto Indo-European', 'Celtic'],
      ['Proto Indo-European', 'Italic'],
      ['Proto Indo-European', 'Hellenic'],
      ['Proto Indo-European', 'Anatolian'],
      ['Proto Indo-European', 'Indo-Iranian'],
      ['Proto Indo-European', 'Tocharian'],
      ['Indo-Iranian', 'Dardic'],
      ['Indo-Iranian', 'Indic'],
      ['Indo-Iranian', 'Iranian'],
      ['Iranian', 'Old Persian'],
      ['Old Persian', 'Middle Persian'],
      ['Indic', 'Sanskrit'],
      ['Italic', 'Osco-Umbrian'],
      ['Italic', 'Latino-Faliscan'],
      ['Latino-Faliscan', 'Latin'],
      ['Celtic', 'Brythonic'],
      ['Celtic', 'Goidelic']
    ],
    nodes: [{
      id: 'Indo-Iranian',
      color: indoIranianColor
    }, {
      id: 'Dardic',
      color: indoIranianColor
    }, {
      id: 'Indic',
      color: indoIranianColor
    }, {
      id: 'Iranian',
      color: indoIranianColor
    }, {
      id: 'Old Persian',
      color: indoIranianColor
    }, {
      id: 'Middle Persian',
      color: indoIranianColor
    }, {
      id: 'Sanskrit',
      color: indoIranianColor
    }, {
      id: 'Celtic',
      color: celticColor
    }, {
      id: 'Brythonic',
      color: celticColor
    }, {
      id: 'Goidelic',
      color: celticColor
    }, {
      id: 'Italic',
      color: italicColor
    }, {
      id: 'Osco-Umbrian',
      color: italicColor
    }, {
      id: 'Latino-Faliscan',
      color: italicColor
    }, {
      id: 'Latin',
      color: italicColor
    }]
  }]
});
