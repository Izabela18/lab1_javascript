addEventListener('load', function() {

  fetch('fixamingata-goteborgs-kommun-2017.json')
    .then(function(response) {
      return response.json();
    })
    .then(function(result) {
      console.log(result);

      var reports = result.requests[0].request;
      var reportsPerMonth = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];


      console.log(reports);

      for (var i = 0; i < reports.length; i++) {

        var reqDatatime = reports[i].agency_sent_datetime;
        console.log(reqDatatime);

        var date = new Date(reports[i].agency_sent_datetime.split(',')[0]);
        console.log(date);
        var month = date.getMonth();
        console.log(month);
        reportsPerMonth[month]++;
      }

      var table = document.createElement('table');
      var tr = document.createElement('tr');
      var th1 = document.createElement('th');
      var th2 = document.createElement('th');

      th1.appendChild(document.createTextNode('Month'));
      th2.appendChild(document.createTextNode('Number'));

      tr.appendChild(th1);
      tr.appendChild(th2);


      table.appendChild(tr);

      document.body.appendChild(table);
      table.style.border = 'solid 2px green';
      tr.style.backgroundColor = 'lightgreen';


      var monthVal = Object.values(reportsPerMonth);
      var monthKey = Object.keys(reportsPerMonth);

      console.log(monthVal);
      console.log(monthVal[0]);
      console.log(reportsPerMonth.length);

      for (var i = 0; i < monthVal.length; i++) {

        console.log(monthVal[i]);
        console.log(monthKey[i]);

        var tr = document.createElement('tr');
        var td1 = document.createElement('td');
        var td2 = document.createElement('td');

        //td1.appendChild(document.createTextNode(monthKey[i]));
        if (monthKey[i] == 0) {
          td1.appendChild(document.createTextNode('january'));
        } else if (monthKey[i] == 1) {
          td1.appendChild(document.createTextNode('february'));
        } else if (monthKey[i] == 2) {
          td1.appendChild(document.createTextNode('march'));
        } else if (monthKey[i] == 3) {
          td1.appendChild(document.createTextNode('april'));
        } else if (monthKey[i] == 4) {
          td1.appendChild(document.createTextNode('may'));
        } else if (monthKey[i] == 5) {
          td1.appendChild(document.createTextNode('june'));
        } else if (monthKey[i] == 6) {
          td1.appendChild(document.createTextNode('july'));
        } else if (monthKey[i] == 7) {
          td1.appendChild(document.createTextNode('august'));
        } else if (monthKey[i] == 8) {
          td1.appendChild(document.createTextNode('september'));
        } else if (monthKey[i] == 9) {
          td1.appendChild(document.createTextNode('october'));
        } else if (monthKey[i] == 10) {
          td1.appendChild(document.createTextNode('november'));
        } else if (monthKey[i] == 11) {
          td1.appendChild(document.createTextNode('december'));
        }

        td2.appendChild(document.createTextNode(monthVal[i]));
        tr.appendChild(td1);
        tr.appendChild(td2);
        table.appendChild(tr);
        tr.addEventListener("mouseover", function(event) {

          event.target.style.backgroundColor = "lightblue";

          setTimeout(function() {
            event.target.style.backgroundColor = "";
          }, 300);
        }, false);

      }

      var reportsPerMonth = [{
        x: 'january',
        y: monthVal[0]
      }, {
        x: 'february',
        y: monthVal[1]
      }, {
        x: 'march',
        y: monthVal[2]
      }, {
        x: 'april',
        y: monthVal[3]
      }, {
        x: 'may',
        y: monthVal[4]
      }, {
        x: 'june',
        y: monthVal[5]
      }, {
        x: 'july',
        y: monthVal[6]
      }, {
        x: 'august',
        y: monthVal[7]
      }, {
        x: 'september',
        y: monthVal[8]
      }, {
        x: 'october',
        y: monthVal[9]
      }, {
        x: 'november',
        y: monthVal[10]
      }, {
        x: 'december',
        y: monthVal[11]
      }];
      d3.select('body')
        .append('svg')
        .attr('height', '200')
        .attr('width', '750')
        .selectAll('g')
        .data(reportsPerMonth)
        .enter()
        .append('g')
        .call(function(g) {
          g.append('rect')
            .attr('x', function(value, index) {
              return index * 60;
            })
            .attr('y', function(value) {
              return 180 - value.y / 0.4722;
            })
            .attr('width', 55)
            .attr('stroke-width', 2)
            .attr('stroke', 'black')
            .attr('height', function(value) {
              return value.y / 0.4722;
            })
          g.append('text')
            .attr('x', function(value, index) {
              return index * 60 + 22.5;
            })
            .attr('y', 190)
            .attr('font-family', 'sans-serif')
            .attr('font-size', '10')
            .attr('text-anchor', 'middle')
            .attr('fill', 'black')
            .text(function(value) {
              return value.x;
            });

          return g;

        });

      var reportsPerCategory = {};

      for (var i = 0; i < reports.length; i++) {
        var reqCategory = reports[i].service_code;

        if (reportsPerCategory[reqCategory] === undefined) {
          reportsPerCategory[reqCategory] = 1;
        } else {
          reportsPerCategory[reqCategory]++;
        }

      };
      console.log(reportsPerCategory);


      var table = document.createElement('table');
      var tr = document.createElement('tr');
      var th1 = document.createElement('th');
      var th2 = document.createElement('th');

      th1.appendChild(document.createTextNode('Kategori'));
      th2.appendChild(document.createTextNode('Number'));

      tr.appendChild(th1);
      tr.appendChild(th2);

      table.appendChild(tr);
      tr.style.backgroundColor = 'lightgreen';

      document.body.appendChild(table);

      var catVal = Object.values(reportsPerCategory);
      var catKey = Object.keys(reportsPerCategory);

      console.log(catVal);
      console.log(catVal[0]);
      console.log(reportsPerCategory.length);

      for (var i = 0; i < catVal.length; i++) {

        console.log(catVal[i]);
        console.log(catKey[i]);

        var tr = document.createElement('tr');
        var td1 = document.createElement('td');
        var td2 = document.createElement('td');
        td1.appendChild(document.createTextNode(catKey[i]));
        td2.appendChild(document.createTextNode(catVal[i]));
        tr.appendChild(td1);
        tr.appendChild(td2);
        table.appendChild(tr);
        table.style.border = 'solid 2px green';
        tr.addEventListener("mouseover", function(event) {

          event.target.style.backgroundColor = "lightblue";


          setTimeout(function() {
            event.target.style.backgroundColor = "";
          }, 300);
        }, false);

      }

      var reportsPerCategory = [{
        x: catKey[0],
        y: catVal[0]
      }, {
        x: catKey[1],
        y: catVal[1]
      }, {
        x: catKey[2],
        y: catVal[2]
      }, {
        x: catKey[3],
        y: catVal[3]
      }, {
        x: catKey[4],
        y: catVal[4]
      }, {
        x: catKey[5],
        y: catVal[5]
      }, {
        x: catKey[6],
        y: catVal[6]
      }, {
        x: catKey[7],
        y: catVal[7]
      }, {
        x: catKey[8],
        y: catVal[8]
      }, {
        x: catKey[9],
        y: catVal[9]
      }, {
        x: catKey[10],
        y: catVal[10]
      }, {
        x: catKey[11],
        y: catVal[11]
      }, {
        x: catKey[12],
        y: catVal[12]
      }, {
        x: catKey[13],
        y: catVal[13]
      }, {
        x: catKey[14],
        y: catVal[14]
      }, {
        x: catKey[15],
        y: catVal[15]
      }];

      d3.select('body')
        .append('svg')
        .attr('height', '200')
        .attr('width', '1600')
        .selectAll('g')
        .data(reportsPerCategory)
        .enter()
        .append('g')
        .call(function(g) {
          g.append('rect')
            .attr('x', function(value, index) {
              return index * 100;
            })
            .attr('y', function(value) {
              return 180 - value.y / 0.4277;
            })
            .attr('width', 85)
            .attr('height', function(value) {
              return value.y / 0.4277;
            })
            .attr('stroke-width', 0.5)
            .attr('stroke', 'black')
          g.append('text')
            .attr('x', function(value, index) {
              return index * 100 + 50;
            })
            .attr('y', 190)
            .attr('font-family', 'sans-serif')
            .attr('fill', 'black')
            .attr('font-size', '9')
            .attr('text-anchor', 'middle')
            .text(function(value) {
              return value.x;
            });

          return g;

        });


    });

});
