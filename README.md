iphone-style-radio-button
=========================

iPhone style radio button widget

dependencies : jQuery js
 
@usage :
 <div class="btn-group" data-toggle="buttons-radio">
  <input type="radio" name="moode" value="1" data-button-class="smiley-too-happy smiley"  data-button-title="Too Happy" data-button-caption="Too Happy">
  <input type="radio" name="moode" value="2" data-button-class="smiley-happy smiley"      data-button-title="Happy"     data-button-caption="Happy" checked >
  <input type="radio" name="moode" value="3" data-button-class="smiley-ok smiley"         data-button-title="Ok"        data-button-caption="Ok" >
  <input type="radio" name="moode" value="4" data-button-class="smiley-sad smiley"        data-button-title="Sad"       data-button-caption="Sad" >
  <input type="radio" name="moode" value="5" data-button-class="smiley-angry smiley"      data-button-title="Angry"     data-button-caption="Angry" >
 </div>
 
    $( document ).ready( function ( ) {
      $( '.btn-group' ).RadioButton();

      $( '.btn-group' ).RadioButton( { onSelect : function ( e, rbObj ) { 
        //Get selected radio button value
        //alert( rbObj.getValue() );

        //Get selected radio button
        alert( $( rbObj.getSelected() ).data( 'button-caption' ) );
      } } );
      
      //Get selected radio button widget
      //var aa = $('.btn-group').getRadioButton();
    });

 Note : Add 'data-toggle="buttons-radio"' to container element.
