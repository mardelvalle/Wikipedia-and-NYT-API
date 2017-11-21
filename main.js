
$("#search").on("click",function(r){

  console.log("lit")
  var enter=$("#searchText").val()
  var urlfull = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ enter +"&format=json&callback=?";

  $.ajax({
    type: "GET",
    url: urlfull,
    contentType: "application/json; charset=utf-8",
    async: false,
    dataType: "json",
  success:function(res){
    console.log("h")
    $('#data').append('<li>'+ res[1]+ res[2] + res[3]+'</li>');
    console.log(res)
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

    var text = $("#searchText").val()
    url += '?' + $.param({
      'api-key': "",
      'q': text
    });
      $.ajax({
        url: url,
        method: 'GET'
         }).done(function(r) {
        console.log(r);
        console.log(r.response.docs.web_url)
        console.log(r.response.docs)
        console.log(r.response.docs.headline)
        r.response.docs.forEach(function(el){
            $('#results').append('<li> <a href= el.web_url>'+ el.headline.main +'</a></li>');
            console.log(el.headline)
        })
        console.log("pizza");
      }).fail(function(err) {
        throw err
      })
  },
  error:function(e){
    console.log("e")
  }
})
})
