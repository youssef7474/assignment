import React,{Component} from "react";
import Chart from "react-apexcharts"


class PopChart extends Component{


    constructor(props){
        super(props);
        this.state={
            options:{
                chart: {
                  type: 'donut'
                }
                ,
                plotOptions: {
                    pie: {
                      donut: {
                        size: '50%'
                      }
                    }
                  }
                  ,
                  labels: ['Solved', 'Pending', 'In progress', 'Canceled']
                  ,
                  legend: {
                    show: false // Set this to false to hide the legend labels
                  }
                
              }
            ,
            series: [10,20,10,20],
          
        }
    }

    render(){
        return (
            <Chart
            options={this.state.options}
            series={this.state.series}
            type="donut"
            height="100%"
            width="200"
            ></Chart>
        )
    }
}

export default PopChart;