$(function(){

    // Handle TopBar
    var megaConfig = {
        interval: 200,
	sensitivity: 4,
	over: function(){$(this).find("ul.module").slideDown('fast').show();},
            timeout: 400,
	out: function(){$(this).find("ul.module").slideUp('fast');}
    };
			
    $("#topbar ul.category > li").hoverIntent(megaConfig);

    var megaConfig = {
        interval: 200,
	sensitivity: 4,
	over: function(){$(this).find("ul.submodule").show();},
            timeout: 400,
	out: function(){$(this).find("ul.submodule").hide();}
    };
			
    $("#topbar ul.module > li").hoverIntent(megaConfig);		

    // Handle SubMenu
    var megaConfig = {
        interval: 200,
	sensitivity: 4,
	over: function(){$(this).find("ul").slideDown('slow').show();},
	timeout: 400,
	out: function(){$(this).find("ul").slideUp('fast');}
    };

    $(".submenu").hoverIntent(megaConfig);
	
        
    // Handle Delete Buttons
    $('button.delete').click(function(){
                
        $$.dialog.openConfirmationDialog({
            'url': this.getAttribute('ajaxlink')
        });
        
    });
    
    // Handle Delete Links
    $('a.delete').click(function(event){
                
        event.preventDefault();        
                
        $$.dialog.openConfirmationDialog({
            'url': this.getAttribute('href')
        });
        
    });    
    
    // Remove the errors of the default form theme
    $("input").focus(function(){
		
        $(this).removeClass('error').parent().find('span.error').remove();
    }); 

});
