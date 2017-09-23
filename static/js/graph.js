queue()
   .defer(d3.json, "/datab/intrusions")
   .await(makeGraphs);

function makeGraphs(error, projectsJson) {

    databreaches = projectsJson;

    var orgArray = [];

    var dateFormat = d3.time.format("%Y");
    databreaches.forEach(function (d) {
        d["Year"] = dateFormat.parse(String(d["Year"])).getFullYear();
       // d["Year"].setDate(1);

        str = String(d["Records Leaked"]);
        d["Records Leaked"] = parseInt(str.replace(",", ""));

        /*if (orgArray.indexOf(d["Organisation"].toLowerCase()) === -1) {
        orgArray.push(d["Organisation"]);
        console.log(d["Organisation"]);
    } */


    });



    //Create a Crossfilter instance
    var ndx = crossfilter(databreaches);

    // Define org - data we want to return sorts data in memory
    var OrgDim = ndx.dimension(function (d) {
        return d["Organisation"];
    });

    //Define Dimensions
    var yearDim = ndx.dimension(function (d) {
        return d["Year"];
    });

    //Define Dimensions
    var RecordsDim = ndx.dimension(function (d) {

        return d["Data Sensitivity"];
    });



    //Calculate metrics
    var recordsByYear = yearDim.group().reduceSum(dc.pluck('Records Leaked'));

    var recordsByOrg = OrgDim.group().reduceSum(dc.pluck('Records Leaked'));

    // // JUST ADDED TJHIS FOR SENSITIVITY
    var SensitivityByYear = RecordsDim.group();

    var minDate = yearDim.bottom(1)[0]["Year"];
    var maxDate = yearDim.top(1)[0]["Year"];


    //Define charts
    var yearChart = dc.barChart("#Year-chart");

    /* var recordsChart = dc.lineChart("#Records-chart");*/


    // FOR DATA SENSITIVITY - REFERENCED THE ID OF PIE CHART IN INDEX.HTML
    var pieChart = dc.pieChart("#pie-chart");




    yearChart
        .width(800)
        .height(200)
        //.margins({top: 10, right: 40, bottom: 100, left: 40})
        .dimension(yearDim)
        .group(recordsByYear)
        .x(d3.time.scale().domain([minDate,maxDate]))
        .elasticY(true)
        .xAxisLabel("Year")
        .yAxis().ticks(4);


    // FOR DATA SENSITIVITY  PIE CHART
    pieChart
        var width = 360;
        var height = 360;
        var radius = Math.min(width, height) / 2;

        pieChart.dimension(RecordsDim)
        .group(SensitivityByYear)
        .width(width)
        .height(height)
        .radius(radius)


   /* recordsChart
        .width(800)
        .height(200)
        //.margins({top: 10, right: 40, bottom: 100, left: 40})
        .dimension(OrgDim)
        .group(recordsByOrg)
        .x(d3.scale.ordinal().domain(orgArray))
        .xUnits(dc.units.ordinal)
        .elasticY(true)
        .xAxisLabel("Organisation Display - Of Records Leaked")
        .yAxis().ticks(4);
 */

   dc.renderAll();

   }
