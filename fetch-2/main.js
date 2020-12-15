function myFunction(){
    fetch("https://jsonplaceholder.typicode.com/albums/1/photos").then(
    res=>{
        res.json().then(
            data=>{
                console.log(data);
                if(data.length > 0){
                    var temp = "";

                    data.forEach((u)=>{
                        temp +="<tr>";
                        temp +="<td>"+u.id+"</td>";
                        temp +="<td>"+u.title+"</td>";
                        temp +="<td><img src="+u.thumbnailUrl+"></td></tr>";
                        
                    })

                    document.getElementById("data").innerHTML = temp;
                }
            }
        )
    }
)
}
$(document).ready(function() {  
    $('#MyTable').DataTable( {  
        initComplete: function () {  
            this.api().columns().every( function () {  
                var column = this;  
                var select = $('<select><option value=""></option></select>')  
                    .appendTo( $(column.footer()).empty() )  
                    .on( 'change', function () {  
                        var val = $.fn.dataTable.util.escapeRegex(  
                            $(this).val()  
                        );  
                //to select and search from grid  
                        column  
                            .search( val ? '^'+val+'$' : '', true, false )  
                            .draw();  
                    } );  
   
                column.data().unique().sort().each( function ( d, j ) {  
                    select.append( '<option value="'+d+'">'+d+'</option>' )  
                } );  
            } );  
        }  
    } );  
} );  