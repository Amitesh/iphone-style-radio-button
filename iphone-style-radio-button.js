/** This is simple widget to cnvert the radio buttons in iPhone style radio tap buttons
 * @author : Amitesh Kumar
 * @date : 5th May 2012
 *
 * dependencies : jQuery js
 * 
 * @usage :
 * <div class="btn-group" data-toggle="buttons-radio">
 *  <input type="radio" name="moode" value="1" data-button-class="smiley-too-happy smiley"  data-button-title="Too Happy" data-button-caption="Too Happy">
 *  <input type="radio" name="moode" value="2" data-button-class="smiley-happy smiley"      data-button-title="Happy"     data-button-caption="Happy" checked >
 *  <input type="radio" name="moode" value="3" data-button-class="smiley-ok smiley"         data-button-title="Ok"        data-button-caption="Ok" >
 *  <input type="radio" name="moode" value="4" data-button-class="smiley-sad smiley"        data-button-title="Sad"       data-button-caption="Sad" >
 *  <input type="radio" name="moode" value="5" data-button-class="smiley-angry smiley"      data-button-title="Angry"     data-button-caption="Angry" >
 * </div>
 * 
 * 
 *
 * $( document ).ready( function ( ) {
 *  $( '.btn-group' ).RadioButton();
 *
 *  $( '.btn-group' ).RadioButton( { onSelect : function ( e, rbObj ) { 
 *   //Get selected radio button value
 *   //alert( rbObj.getValue() );
 *
 *   //Get selected radio button
 *   alert( $( rbObj.getSelected() ).data( 'button-caption' ) );
 *
 * } } );
 *
 * //Get selected radio button widget
 * //var aa = $('.btn-group').getRadioButton();
 * });
 *
 * Note : Add 'data-toggle="buttons-radio"' to container element.
 *
 */

( function ( $, window, document ) {

  var RadioButton = function ( element, options ) {

    this.options  = $.extend( {}, $.fn.RadioButton.defaults, options )

    var _self            = this,
        radioButtons     = $( 'input:radio', element );

        _self.widgetElem = element;

        _self.selected  = undefined;
    
    $( element ).addClass( 'clearfix' );

    radioButtons.each( function ( ) { 
      var className = $( this ).data( 'button-class'   ) || "",
          title     = $( this ).data( 'button-title'   ) || "",
          caption   = $( this ).data( 'button-caption' ) || "",
          button;


      _self.selected = $( this ).is(':checked') ? this : _self.selected;

      $( this ).wrap( $( '<div>', { 'class' : 'btn ' + className, title : title } ) );

      button = $( this ).parent();

      if( caption ){
        $( button ).append( '<span class="caption">' + caption + '</span>' );
      }

      button.bind( 'click', { _self : _self }, _self.toggle );

    } );

    $( _self.selected ).trigger( 'click' );
  }

  RadioButton.prototype.toggle = function ( e ) {
    var _self   = e.data._self,
        button  = $( this ),
        radio   = button.find('input:radio'),
        parent  = button.parent( '[data-toggle="buttons-radio"]' );

    parent && parent.find( '.active' ).removeClass( 'active' );

    button.toggleClass( 'active' ).find( 'input:radio' ).attr( 'checked', 'checked' );
    
    _self.selected = radio.is(':checked') ? radio : _self.selected;

    _self.options.onSelect( e, _self );
  }
  
  RadioButton.prototype.getSelected = function () {
    return this.selected;
  }

  RadioButton.prototype.getValue = function () {
    return $( this.selected ).val();
  }

 /* PLUGIN DEFINITION */
  $.fn.RadioButton = function ( option ) {
    return this.each( function ( ) {
        $( this ).data( "radio-button-obj", new RadioButton( this, option ) );
    } );
  }

  $.fn.RadioButton.defaults    = { };
  $.fn.RadioButton.Constructor = RadioButton;
  
  $.fn.getRadioButton = function ( ) {
    return $( this ).data( 'radio-button-obj' );
  }

} ) ( window.jQuery, window, document );
