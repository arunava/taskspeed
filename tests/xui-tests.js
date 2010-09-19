window.tests = {
	
	"make": function(){
		//	in a 250 iteration loop:
		//		create an unordered lists with the class "fromcode"
		//		add the id "setid" + i
		//		append it to the body 
		//		add three li's with the words "one", "two", "three", respectively.
		//
		//	return the result of the selector ul.fromcode
		
		//SPEED UP IF POSSIBLE
		for(var i = 0; i<250; i++){
			x$('body').html('bottom',('<ul class="fromcode" id="setid'+i+'"><li>one</li><li>two</li><li>three</li></ul>'));
		}
		return x$("ul.fromcode").length;
	},
	
	"indexof" : function(){
		// in a 20-iteration for loop:
		//		find the node with id="setid150"
		//		find all the ul's in the DOM
		//		locate the index of the found node in the list of nodes
		//	return that index
		
		//SPEED UP IF POSSIBLE
		var target, item, index;
		for(var i = 0; i < 20; i++){
			item=0;
			index=0;
			target = x$("#setid150").attr('id');
			x$("ul").each(function(n){
				if ( x$(n).attr('id')+"" == target+"" ) {
					index = item;
				}
				item ++;
			});
		}
		return index;
	},
	
	"bind" : function(){
		//	connect onclick to every first child li of ever ul (suggested: "ul > li")
		//	return the length of the connected nodes
		
		return x$("ul > li").on("click", function(){ }).length;
	},
	
	"attr" : function(){
		// find all ul elements in the page. 
		// generate an array of their id's
		// return the length of that array
		
		//Returns the wrong value? No idea why
		return x$('ul').attr('id').length;
	},
	
	"bindattr" : function(){
		//	connect a mouseover event to every first child li of every 
		//	ul (suggested: "ul > li")
		//	set the rel="" attribute of those nodes to 'touched'
		//	disconnect the mouseover event
		//	return the length of the connected nodes
		//	note: either create an anonymous function to reference once,
		//	or use the library public "no-op" function to avoid creating
		//	a function object for each iteration.
		
		return x$("ul > li").on("mouseover", function(){}).attr("rel", "touched").un("mouseover").length
	},

	"table": function(){
		// in a 40-iteration for loop:
		//		create a table with the class "madetable", and append it to the DOM
		//		add a row with one cell to the table. the cell content should be "first"
		//		add a new cell before the first cell in the row.
		//
		//	return the length of the query "tr td"
		
		//SPEED UP IF POSSIBLE
		for(var i = 0; i < 40; i++){
			x$('body').html('bottom',x$("<table class='madetable'><tr><td>first</td></tr></table>").find('tr').top('<td>before</td>')[0]);
			//should be x$('body').html('bottom',x$("<table class='madetable'><tr><td>first</td></tr></table>").find('tr').top('<td>before</td>')[0].parent.parent);
		}
		return x$("tr td").length;
	},
	
	"addanchor" : function(){
		//	find all the first children li's of all nodes with class="fromcode" (created
		//	by previous test)
		//	append an anchor node with the text 'link' pointing to example.com
		//
		//	return length of found nodes (that which had anchors appended)
		
		//SPEED UP IF POSSIBLE
		return x$(".fromcode > li").html("bottom","<a href='http://example.com'>link</a>").length;
	},
	
	"append": function(){
		//	in a 500 iteration loop:
		//		create a new <div> with the same critera as 'create'
		//			- NOTE: rel needs to be == "foo2"
		//		then append to body element (no caching)
		//		
		//	return then length of the matches from the selector "div[rel^='foo2']"
		
		//SPEED UP IF POSSIBLE
		for(var i = 0; i<500; i++){
			x$("body").html("bottom","<div rel='foo'>test</div>");
		}
		return x$("[rel^='foo']").length;
	},
		
	"addclass-odd" : function(){
		// locate all div elements on the page
		//	add the class "added" to those divs
		//	add the class "odd" to the odd divs in the selection
		//
		// return the lenght of the odd found divs
		
		
		//Returns 276 instead of 275. Need to investigate why.
		x$("div").addClass("added");
		return x$("div:nth-child(odd)").addClass("odd").length;
	},
	
	"style" : function(){
		//	find all nodes with the class "added"
		//	set those nodes' style properties:
		//		background-color: #ededed
		//		color: #fff
		//	
		//	return the length of the modified nodes.
		
		return x$(".added").css({ backgroundColor:"#ededed", color:"#fff" }).length;
	},

	"removeclass" : function(){
		// find all nodes with the class "added"
		// remove the class "added"
		//
		// return the length of modified nodes
		
		return x$(".added").removeClass("added").length;
	},
	
	"sethtml": function(){
		// replace the content of all div elements with "<p>new content</p>"
		//
		// return the length of number of divs in the page POST setting operation (eg: re-requery "div")
		
		x$("div").html("<p>new content</p>");
		return x$("div").length;
	},
	
	"insertbefore" : function(){
		//	find all anchors in the class "fromcode" (.fromcode a)
		//		add a <p> element in the dom before the matched anchors
		//			- the content should equal "A Link"
		//		
		//	return the length of the found anchors.
		
		return x$(".fromcode a").before("<p>A Link</p>").length;
	},
	
	"insertafter" : function(){
		//	find all anchors in the class "fromcode" (.fromcode a)
		//		add a <p> element in the dom after the matched anchors
		//			- the content should equial "After Link"
		//			
		//	return the length of the found anchors.
		
		return x$(".fromcode a").after("<p>After Link</p>").length;
	},
	
	"destroy": function(){
		// destroy all the nodes with the class "fromcode"
		// return the length of the destroyed nodes
		
		return x$(".fromcode").remove('div').length;
	},
	
	"finale": function(){
		// empty the body element of all elements
		//
		// return the length of the query "body *"
		
		x$("body").inner("");
		return x$("body *").length;
	}
	
};
