$(function() {

    $('#addInterlocutorButton').click(function(){
	                                                                
        $$.dialog.openFormDialog({
            'url': this.getAttribute('ajaxlink')
        });
       	
    });    

    $('a.edit').click(function(event){
	                
        event.preventDefault();
                                                
        $$.dialog.openFormDialog({
            'url': this.getAttribute('href')
        });
       	
    });    
    
});