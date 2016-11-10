
var posts = [{text: ' ', id: 0}];


	var pushPostsToDiv = function()  {
	for (i = 0; i < posts.length; i++) { 
    $(".posts").find("span").append("<br><p class='post rainbow' data-id=" + i + ">" + posts[i].text + "</p>");}
		};
	// $(".posts").text("<br><p class='post' data-id=" + i + ">" + posts[i].text + "</p>");


$('.submitButton').click(function(event) {
	event.preventDefault();
	console.log('hey');
	var relevantInput = $(this).closest("div").find("input").val();
	console.log(relevantInput);
	var postArrayLength = posts.length;
	console.log(postArrayLength);
	var object = {text:relevantInput, id: (postArrayLength + 1)};
	console.log(object);
	posts.push(object);
});


$(".revealPosts").click(function(event) {
	event.preventDefault();
	console.log('hey');
	
	pushPostsToDiv();

});
