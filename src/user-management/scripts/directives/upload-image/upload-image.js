(function(){
    'use strict';



    function uploadImage( $parse ) {



        return {
            restrict: 'EA',
            replace: true,
            templateUrl: './user-management/scripts/directives/upload-image/upload-image.tpl.html',
            link:function ( $scope, iElement, iAttrs ){
                var inputFile = $(iElement).find('input');


                function setup(){
                    setupVars();
                    setListeningEvent();
                }




                function setListeningEvent () {
                    inputFile.on( 'change', function (e){

                        var image = setImageAtModel( inputFile[0].files[0] );

                        $parse(iAttrs.uploadImage).assign( $scope, image );
                        previewImage(image);

                    });
                }




                function previewImage(file) {
                    if( !file ){
                        $(iElement).find("#image .thumb").remove();
                        return;
                    }

                    var reader = new FileReader();
                    reader.onload = (function(image) {
                        return function(e) {
                            $(iElement).find("#image")[0]
                                .innerHTML = ['<img class="thumb" width="151" height="151" src="', e.target.result,'" title="', escape(image.name), '"/>'].join('');
                        };
                    })(file);
                    reader.readAsDataURL(file);
                }



                function setupVars () {
                    $scope.label = iAttrs.label;
                }



                function setImageAtModel ( _image ){
                    if( !_image ){
                        return null;
                    }

                    if( validateIfAcceptedImage(_image) ){
                        return _image;
                    }

                    return null;
                }



                function validateIfAcceptedImage( _file ) {
                    if( _file.type !== "image/jpeg" ){
                        console.log("No es una imagen");
                        return false;
                    }
                    return true;
                }


                setup();
            }



        };



    }



    angular.module( 'userManagement.directives' )
    .directive( 'uploadImage', uploadImage );



}());
