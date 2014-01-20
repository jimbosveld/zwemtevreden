function getCorposDekey() {
          $.getJSON('http://onderzoek.thebrighthouse.nl/woontevreden/api/corporatie/woonstichting_de_key/data.json/recent?callback=?', function(data) {
            var tbl_body = '';
            $.each(data, function() {
              var tbl_row = '';
              if ( this.review !== null) {
              tbl_row += '<tr><td rowspan="5">'+ this.timestamp.replace(/..:..:../,"") + '<br>' + this.review +'</td>';
              }
              else {
              tbl_row += '<tr><td rowspan="5">'+ this.timestamp.replace(/..:..:../,"") + '<br>'  + '<i>geen review gegeven</i></td>';
              }
              tbl_row += '<td class="woonSituatie"valign="middle" style="text-align:center;" rowspan = "5">'+ this.cijfer_woonsituatie +'</td></tr>';
              tbl_row += '<tr><td>'+ this.cijfer_woningcorporatie +'</td><td>Corporatie</td></tr>';
              tbl_row += '<tr><td>'+ this.cijfer_woning +'</td><td>Woning</td></tr>';
              tbl_row += '<tr><td>'+ this.cijfer_woonomgeving +'</td><td>Woonomgeving</td></tr>';
              // tbl_row += '<tr><td style="width:10em">'+ this.timestamp.replace(/..:..:../,"") +'</td><td>Ingevuld</td></tr>';
              // tbl_row += '<td><a target="_blank" href="'+this.url+'"">'+ this.name +'</a></td>';
              tbl_body += '<tr>'+tbl_row+'</tr>';
            });
            $('#corporatieTableBody').html(tbl_body);
  });
}
getCorposDekey();


