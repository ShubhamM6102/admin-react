import React from "react";
import Chart from 'react-apexcharts';

function Stackedbarchart()
{
    return(
        <React.Fragment>
            <div className="container-fluid mb-3 bg-white p-3">
                <Chart
                type="bar"
                // width={800}
                height={450}
                series={[
                    {
                        name:"Hydro-Electric",
                        data:[345,578,898,532,465,300,500,400,500,600,300,400],
                        //color: '#f90000'
                    },
                    // {
                    //     name:"Oil",
                    //     data:[125,178,338,587,276,200,400,300,200],
                    //    // color: '#000000'
                    // },
                    // {
                    //     name:"Gas",
                    //     data:[355,458,218,587,229,150,100,200,400],
                    //    // color: '#000000'
                    // },
                    {
                        name:"Coal",
                        data:[190,321,112,537,333,600,400,300,400,300,200,500],
                       // color: '#000000'
                    },
                    {
                        name:"Nuclear",
                        data:[560,121,675,907,233,400,300,500,600,400,500,100],
                       // color: '#000000'
                    }



                ]}

                options={{
                    title:{
                        text:"Enegry Consumption in Years"
                    },
                    chart:{
                        stacked:true,
                    },
                    plotOptions:{
                        bar:{
                            vertical:true,
                            columnWidth:'20%',
                            borderRadius:4
                          }
                    },
                    stroke: {
                        width: 1,
                    },
                    xaxis:{
                        title:{
                            text:"Energy Consumption in Year's"
                        },
                        categories:['2010','2011','2012','2013','2015','2016','2017','2018','2019','2020','2021','2022']
                    },
                    yaxis:{
                        title:{
                            text:"Data in (K)"
                        },
                    },
                    legend:{
                        position: 'bottom'
                    },
                    dataLabels:{
                        enabled:false,
                    },
                    grid: {
                        show:true,
                        xaxis:{
                            lines:{
                                show:false
                            }
                        },
                        yaxis:{
                            lines:{
                                show:false
                            }
                        }

                    },

                    responsive: [{
                        breakpoint: 1400,
                        options: {
                          bar: {
                            width: 800
                          }
                        }
                      },
                      {
                      breakpoint: 768,
                      options: {
                        bar: {
                          width: 700
                        }
                      }
                    },
                      {
                        breakpoint: 480,
                        options: {
                          bar: {
                            width: 300
                          }
                        }
                      }]

                }}

                />
            </div>
        </React.Fragment>
    );
}
export default Stackedbarchart;

