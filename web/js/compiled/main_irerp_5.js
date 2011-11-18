(function(){
    
    var IR = {
        
        dialog:{
            
            createDialog:function(optionsParameters) {
                
                var defautsParameters = {
                    width: 530,
                    minHeight: 100,
                    modal: true,
                    draggable: false,
                    resizable: false,
                    show: 'slide',
                    autoOpen: false,
                    allowMultiple: false,
                    close: function(event, ui) {
                       $(this).dialog('destroy');
                    }                    
                };
                
                var parameters = $.extend(defautsParameters, optionsParameters);
                
                var dialog = null;
                
                if (parameters.allowMultiple || !$.find('div.ui-dialog').length) {
                    dialog = $('<div />').html('').dialog(parameters);  
                }  
                
                return dialog;                
            },
            
            openConfirmationDialog:function(optionsParameters){
                
                var defautsParameters = {
                    width: 450,
                    url: null
                }; 

                var parameters = $.extend(defautsParameters, optionsParameters);
                var dialog = $$.dialog.createDialog(parameters);
                
                if(!dialog || !parameters.url) return;

                $.ajax({
                    url: parameters.url,
                    dataType: 'json',
                    success: function(data){
                                                        
                        if(data.title) {
                            dialog.dialog({title: data.title});
                        }
                            
                        if(data.content) {
                            dialog.html(data.content).dialog({position: 'center'});
                        }
                     
                        dialog.dialog('open');
                    }
                });
            },
            
            openFormDialog:function(optionsParameters){
			        
                var defautsParameters = {
                    url: null
                }; 
                
                var parameters = $.extend(defautsParameters, optionsParameters);
                var dialog = $$.dialog.createDialog(parameters);
                
                if(!dialog || !parameters.url) return;

                $.ajax({
                    url: parameters.url,
                    dataType: 'json',
                    success: function(data){
                                                        
                        if(data.title) {
                            dialog.dialog({title: data.title});
                        }
                            
                        if(data.content) {
                            dialog.html(data.content).dialog({position: 'center'});
                        }
                     
                        $$.dialog.handleFormSubmission(dialog);
                            
                        dialog.dialog('open');
                    }
                });
            },

            handleFormSubmission:function(dialog){
                
                dialog.find('form').submit(function(event){
                    event.preventDefault();

                    $(this).find("button[type='submit']").attr('disabled', 'disabled');

                    $.ajax({
                        url: this.getAttribute('action'),
                        type: "POST",
                        dataType: 'json',
                        data: $(this).serialize(),
                        success: function(data){  

                            if (data.redirect) {
                                $(location).attr('href', data.redirect);
                            }

                            if(data.content) {
                                dialog.html(data.content);
                            }
                            
                            dialog.find('input').focus(function(){
                                $(this).removeClass('error').parent().find('span.error').remove();
                            });                             
                            
                            $$.dialog.handleFormSubmission(dialog);
                        }   
                    });
                });                
            }
        }
    }
        
    if(!window.$$){window.$$=IR;} 
    
})() ;