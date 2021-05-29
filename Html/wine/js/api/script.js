$.ajax({
    method : 'get',
    url: 'https://localhost:44352/api/categories/get-item',
    success: function(results){
        console.log(results)
        var  htmlTag = "";
        results.forEach(element => {
            htmlTag+='<li><a href="#">'+element.name+'</a></li>'
            $('#ul_categories').html(htmlTag);
            
        });
    },
    error: function(results){
        console.log(results)
    }
})